#!/usr/bin/env node
'use strict';

/**
 * export-cards.js — Alterrell Interactive card export tool
 * Uses Puppeteer to screenshot cards from ai-card-studio.html at true 300×280px.
 *
 * Usage:
 *   node export-cards.js <piece-name> [cards.json]
 *
 * Arguments:
 *   piece-name   Required. Filters cards where card.piece === piece-name.
 *   cards.json   Optional. Path to JSON file. If omitted, looks for
 *                <piece-name>.json or <piece-name>-cards.json in cwd.
 *
 * Output:
 *   <piece-name>-cards/<piece>-shell-<a|b|c|d>-<01|02|03>.png
 *
 * Note: Run from a local HTTP server for best font rendering:
 *   npx serve . -p 3333
 *   node export-cards.js copaganda --serve http://localhost:3333
 *
 * Dependencies (install once):
 *   npm install puppeteer
 */

const puppeteer = require('puppeteer');
const path      = require('path');
const fs        = require('fs');

// ── CLI ARGS ──────────────────────────────────────────────────────────
const args      = process.argv.slice(2);
const pieceName = args[0];
const serveFlag = args.indexOf('--serve');
const serveBase = serveFlag !== -1 ? args[serveFlag + 1] : null;
const jsonArg   = args.find(a => a.endsWith('.json') || (a !== args[0] && !a.startsWith('--')));

if (!pieceName) {
  console.error('\n  Usage: node export-cards.js <piece-name> [cards.json]\n');
  console.error('  Example: node export-cards.js copaganda copaganda-cards.json\n');
  process.exit(1);
}

// ── LOAD JSON ─────────────────────────────────────────────────────────
function loadCardsJSON() {
  const candidates = jsonArg
    ? [path.resolve(jsonArg)]
    : [
        path.join(process.cwd(), `${pieceName}.json`),
        path.join(process.cwd(), `${pieceName}-cards.json`),
        path.join(process.cwd(), 'cards.json'),
      ];

  for (const c of candidates) {
    if (fs.existsSync(c)) {
      console.log(`  Loading: ${c}`);
      return JSON.parse(fs.readFileSync(c, 'utf8'));
    }
  }

  console.error(`\n  Error: No JSON file found for piece "${pieceName}".`);
  console.error(`  Searched: ${candidates.join(', ')}`);
  console.error(`  Pass a JSON file path as the second argument.\n`);
  process.exit(1);
}

// ── MAIN ──────────────────────────────────────────────────────────────
async function main() {
  const allCards   = loadCardsJSON();
  const pieceCards = allCards.filter(c => c.piece === pieceName);

  if (!pieceCards.length) {
    console.error(`\n  Error: No cards found with piece === "${pieceName}" in JSON.\n`);
    process.exit(1);
  }

  // Output directory: ./<piece-name>-cards/
  const outDir = path.join(process.cwd(), `${pieceName}-cards`);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const toolPath = path.resolve(__dirname, 'ai-card-studio.html');
  const toolURL  = serveBase
    ? `${serveBase.replace(/\/$/, '')}/tools/ai-card-studio.html`
    : `file://${toolPath}`;

  console.log(`\n  Exporting ${pieceCards.length} card${pieceCards.length === 1 ? '' : 's'} for piece: "${pieceName}"`);
  console.log(`  Tool URL:  ${toolURL}`);
  console.log(`  Output:    ${outDir}\n`);

  // ── LAUNCH BROWSER ──────────────────────────────────────────────────
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });

  // Navigate and wait for fonts
  await page.goto(toolURL, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForTimeout(1500); // font render buffer

  // Verify the tool loaded
  const toolReady = await page.evaluate(() => typeof window.cardStudio === 'object');
  if (!toolReady) {
    console.error('  Error: ai-card-studio.html did not expose window.cardStudio API.');
    await browser.close();
    process.exit(1);
  }

  // Inject card data for this piece
  await page.evaluate((cards) => {
    window.cardStudio.loadJSON(cards);
  }, pieceCards);

  await page.waitForTimeout(300); // allow re-render

  // ── ITERATE AND SCREENSHOT ───────────────────────────────────────────
  const shellCounts = {};
  let successCount  = 0;

  for (let i = 0; i < pieceCards.length; i++) {
    const card = pieceCards[i];
    const sh   = (card.shell || 'A').toLowerCase();

    if (!shellCounts[sh]) shellCounts[sh] = 0;
    shellCounts[sh]++;
    const shIdx    = String(shellCounts[sh]).padStart(2, '0');
    const filename = `${pieceName}-shell-${sh}-${shIdx}.png`;
    const filepath = path.join(outDir, filename);

    // Navigate to this card in the tool
    await page.evaluate((idx) => {
      window.cardStudio.showCard(idx);
    }, i);

    await page.waitForTimeout(120); // render settle

    // Screenshot the card preview element at true 300×280
    const cardEl = await page.$('#card-preview');
    if (!cardEl) {
      console.error(`  ✗ Slide ${i + 1} of ${pieceCards.length} — could not find #card-preview`);
      continue;
    }

    const box = await cardEl.boundingBox();
    if (!box) {
      console.error(`  ✗ Slide ${i + 1} of ${pieceCards.length} — #card-preview has no bounding box`);
      continue;
    }

    await cardEl.screenshot({ path: filepath });
    successCount++;

    console.log(`  Slide ${i + 1} of ${pieceCards.length} → ${filename}`);
  }

  await browser.close();

  // ── SUMMARY ─────────────────────────────────────────────────────────
  console.log(`\n  ✓ ${successCount} of ${pieceCards.length} cards exported → ./${pieceName}-cards/\n`);

  if (successCount < pieceCards.length) {
    process.exit(1);
  }
}

main().catch(err => {
  console.error('\n  Export failed:', err.message || err);
  process.exit(1);
});
