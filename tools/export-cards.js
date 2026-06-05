#!/usr/bin/env node
'use strict';

/**
 * export-cards.js — Alterrell Interactive
 * Puppeteer export script for AI Card Studio.
 *
 * Usage:
 *   node export-cards.js <piece-name> [path/to/cards.json]
 *
 * Examples:
 *   node export-cards.js copaganda
 *   node export-cards.js copaganda ./copaganda-cards.json
 *
 * Behavior:
 *   1. Reads card JSON from [piece].json, [piece]-cards.json, or cards.json in cwd
 *      (or from the explicit path given as second arg)
 *   2. Opens tools/ai-card-studio.html in headless Chromium
 *   3. Injects the card data via window.studio.loadCards()
 *   4. Finds all contact-sheet thumbnails for the given piece
 *   5. For each card (ordered A→B→C→D, then by index within shell):
 *      clicks the thumbnail, waits 150ms, screenshots #card-preview at 300×280px
 *   6. Saves to ./<piece>-cards/<piece>-shell-<a|b|c|d>-<01|02>.png
 *
 * Output naming:
 *   copaganda-shell-a-01.png
 *   copaganda-shell-a-02.png
 *   copaganda-shell-b-01.png
 *   ...
 *
 * Install dependency once:
 *   npm install puppeteer
 *
 * Tip: serve the repo locally for best font rendering:
 *   npx serve . -p 4000
 *   STUDIO_URL=http://localhost:4000/tools/ai-card-studio.html node export-cards.js copaganda
 */

const puppeteer = require('puppeteer');
const path      = require('path');
const fs        = require('fs');

// ── ARGS ──────────────────────────────────────────────────────────────
const pieceName = process.argv[2];
const jsonArg   = process.argv[3];       // optional explicit JSON path

if (!pieceName) {
  console.error('\n  Usage: node export-cards.js <piece-name> [cards.json]\n');
  process.exit(1);
}

// ── FIND JSON ─────────────────────────────────────────────────────────
function resolveJSON() {
  if (jsonArg) {
    const p = path.resolve(jsonArg);
    if (!fs.existsSync(p)) {
      console.error('  Error: file not found: ' + p);
      process.exit(1);
    }
    return p;
  }
  const candidates = [
    path.join(process.cwd(), pieceName + '.json'),
    path.join(process.cwd(), pieceName + '-cards.json'),
    path.join(process.cwd(), 'cards.json'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  console.error('\n  Error: no JSON file found for piece "' + pieceName + '".');
  console.error('  Checked:\n' + candidates.map(c => '    ' + c).join('\n'));
  console.error('\n  Pass a JSON file as the second argument, or create ' + pieceName + '.json in cwd.\n');
  process.exit(1);
}

// ── MAIN ──────────────────────────────────────────────────────────────
async function main() {
  const jsonPath = resolveJSON();
  const allCards = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  if (!Array.isArray(allCards)) {
    console.error('  Error: JSON must be an array of card objects.');
    process.exit(1);
  }

  // Filter to this piece
  const pieceCards = allCards.filter(c => c.piece === pieceName);
  if (!pieceCards.length) {
    console.error('\n  Error: no cards found with piece === "' + pieceName + '" in ' + jsonPath + '\n');
    process.exit(1);
  }

  // Create output directory
  const outDir = path.join(process.cwd(), pieceName + '-cards');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // Tool URL — use STUDIO_URL env var for local-server mode, else file://
  const toolFile = path.resolve(__dirname, 'ai-card-studio.html');
  const toolURL  = process.env.STUDIO_URL || ('file://' + toolFile);

  console.log('\n  Piece:   ' + pieceName);
  console.log('  Cards:   ' + pieceCards.length + ' (from ' + path.basename(jsonPath) + ')');
  console.log('  Output:  ' + outDir);
  console.log('  Tool:    ' + toolURL);
  console.log('');

  // ── LAUNCH ──────────────────────────────────────────────────────────
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 1 });

  await page.goto(toolURL, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForTimeout(1500);   // Google Fonts render buffer

  // Verify tool loaded
  const ok = await page.evaluate(() => typeof window.studio === 'object');
  if (!ok) {
    console.error('  Error: window.studio API not found. Is ai-card-studio.html up to date?');
    await browser.close();
    process.exit(1);
  }

  // Inject card data
  await page.evaluate((cards) => { window.studio.loadCards(cards); }, pieceCards);
  await page.waitForTimeout(300);

  // ── COLLECT THUMBNAILS ordered A→B→C→D, then by shell index ──────
  // Puppeteer reads the DOM thumbnails that match the piece
  const thumbData = await page.evaluate((piece) => {
    const items = Array.from(document.querySelectorAll('.s-thumb-item[data-piece="' + piece + '"]'));
    // Sort: shell A < B < C < D, then by shIdx within shell
    items.sort((a, b) => {
      const shA = a.dataset.shell, shB = b.dataset.shell;
      if (shA !== shB) return shA < shB ? -1 : 1;
      return parseInt(a.dataset.shIdx, 10) - parseInt(b.dataset.shIdx, 10);
    });
    return items.map(el => ({
      gIdx:   parseInt(el.dataset.gIdx,  10),
      shell:  el.dataset.shell.toLowerCase(),
      shIdx:  parseInt(el.dataset.shIdx, 10) + 1,  // 1-based
    }));
  }, pieceName);

  if (!thumbData.length) {
    console.error('  Error: no thumbnails found for piece "' + pieceName + '" in the contact sheet.');
    console.error('  Make sure the JSON contains cards with piece === "' + pieceName + '".\n');
    await browser.close();
    process.exit(1);
  }

  // ── SCREENSHOT EACH CARD ─────────────────────────────────────────
  let saved = 0;

  for (let i = 0; i < thumbData.length; i++) {
    const { gIdx, shell, shIdx } = thumbData[i];
    const filename = pieceName + '-shell-' + shell + '-' + String(shIdx).padStart(2, '0') + '.png';
    const filepath = path.join(outDir, filename);

    // Click the thumbnail to load it into the center preview
    await page.evaluate((idx) => {
      const el = document.querySelector('.s-thumb-item[data-g-idx="' + idx + '"]');
      if (el) el.click();
    }, gIdx);

    await page.waitForTimeout(150);  // per-spec render settle

    // Screenshot the center preview panel card element (exactly 300×280)
    const cardEl = await page.$('#card-preview .carousel__card');
    if (!cardEl) {
      console.error('  ✗ Card ' + (i+1) + ' of ' + thumbData.length + ' — #card-preview .carousel__card not found');
      continue;
    }

    await cardEl.screenshot({ path: filepath });
    saved++;

    console.log('  Card ' + (i+1) + ' of ' + thumbData.length + ' → ' + filename);
  }

  await browser.close();

  // ── SUMMARY ─────────────────────────────────────────────────────
  console.log('\n  Done. ' + saved + ' cards saved to: ' + outDir + '\n');

  if (saved < thumbData.length) process.exit(1);
}

main().catch(err => {
  console.error('\n  Fatal: ' + (err.message || err) + '\n');
  process.exit(1);
});
