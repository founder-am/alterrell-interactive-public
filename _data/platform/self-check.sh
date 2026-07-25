#!/usr/bin/env bash
# audits/self-check.sh — repo-native self-audit. Read-only.
#
# Reads only repo files. NEVER modifies anything. Prints findings and,
# for each finding, a proposed fix command — AMA runs the commands AMA
# chooses. Diagnose, don't treat. See capture/hq-sweep-audit.md for the
# ruling this implements (six checks, each tied to a real prior failure).
#
# Usage: audits/self-check.sh   (run from anywhere in the repo)

set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT" || exit 1

TODAY="$(date +%Y-%m-%d)"
FLAG_COUNT=0

flag() {
  # $1 = finding, $2 = proposed fix command
  FLAG_COUNT=$((FLAG_COUNT + 1))
  echo "FLAG: $1"
  echo "  fix: $2"
}

pass() {
  echo "PASS: $1"
}

# epoch seconds for a YYYY-MM-DD date, BSD date (macOS) first, GNU date fallback
epoch_of() {
  date -j -f "%Y-%m-%d" "$1" +%s 2>/dev/null || date -d "$1" +%s 2>/dev/null
}

days_between() {
  # days from $1 to $2 (both YYYY-MM-DD); empty string if $1 doesn't parse
  local e1 e2
  e1="$(epoch_of "$1")" || return
  [ -z "$e1" ] && return
  e2="$(epoch_of "$2")"
  echo $(( (e2 - e1) / 86400 ))
}

as_of_date() {
  # first "as-of: YYYY-MM-DD" match in a file
  [ -f "$1" ] || return
  grep -m1 -oE 'as-of:[[:space:]]*[0-9]{4}-[0-9]{2}-[0-9]{2}' "$1" | grep -oE '[0-9]{4}-[0-9]{2}-[0-9]{2}'
}

echo "=== self-check.sh — $TODAY ==="
echo

# --- ROT LINE ---------------------------------------------------------
# LIVE if the script ran and DESK.md exists and is fresh (<=9 days old).
# Otherwise DEGRADED: <what's actually wrong>.
if [ ! -f "DESK.md" ]; then
  echo "ROT: DEGRADED: DESK.md missing"
else
  desk_date="$(as_of_date DESK.md)"
  if [ -z "$desk_date" ]; then
    echo "ROT: DEGRADED: DESK.md has no as-of stamp"
  else
    desk_age="$(days_between "$desk_date" "$TODAY")"
    if [ -n "$desk_age" ] && [ "$desk_age" -ge 0 ] && [ "$desk_age" -le 9 ]; then
      echo "ROT: LIVE"
    else
      echo "ROT: DEGRADED: DESK.md stale (as-of $desk_date, ${desk_age:-unparseable} days old)"
    fi
  fi
fi
echo

# --- CHECK 1: DIVERGENCE ----------------------------------------------
# Compare piece-status fields across capture/*.md and STATUS-*.md (also
# OPEN-LOOPS.md, which carries the same field). Flag any tracked field
# where files disagree. Data-driven so new fields can be added below.
echo "--- 1. DIVERGENCE ---"

check_divergence_field() {
  # $1 = label, $2 = stale-pattern (ERE), $3 = correct-pattern (ERE), rest = files to check
  local label="$1" stale_pat="$2" correct_pat="$3"
  shift 3
  local stale_files=() correct_files=()
  local f
  for f in "$@"; do
    [ -f "$f" ] || continue
    if grep -qiE "$correct_pat" "$f"; then
      correct_files+=("$f")
    elif grep -qiE "$stale_pat" "$f"; then
      stale_files+=("$f")
    fi
  done
  if [ "${#stale_files[@]}" -gt 0 ] && [ "${#correct_files[@]}" -gt 0 ]; then
    flag "DIVERGENCE — $label: ${stale_files[*]} still carry the stale field; ${correct_files[*]} has the correction" \
         "edit ${stale_files[*]} to match the corrected field in ${correct_files[*]}"
  else
    pass "DIVERGENCE — $label: no disagreement across tracked files"
  fi
}

check_divergence_field "Where's Beyoncé build status" \
  "rebuild from template" \
  "copy complete|Type 2 build" \
  OPEN-LOOPS.md STATUS-INTERACTIVE.md capture/hq-sweep-audit.md

check_divergence_field "Lecturer + writer CVs status" \
  "unanswered since Jul 4|Blocks the whole lecturer track|Blocked/waiting" \
  "package complete|not blocked" \
  OPEN-LOOPS.md STATUS-WRITING.md STATUS-LIFE.md capture/hq-sweep-audit.md

# Cadence/reset-day fields, not just piece-status. This is what let the
# ROLLUP.md-vs-Friday-ruling contradiction through undetected: WEEKPLAN.md
# still headers its weekly section "resets every Monday", and ROLLUP.md's
# weekly rows are harvested from it on that same Monday-Sunday span (see
# WEEKPLAN.md's own "Sunday review harvests this into ROLLUP.md" line) —
# even though ROLLUP.md never restates the day itself, it inherits the
# stale cadence structurally.
check_cadence_divergence() {
  local monday_pat="resets? every monday|resets? monday"
  local friday_pat="resets? friday|quota window now resets friday"
  local monday_files=() friday_files=()
  local f
  for f in WEEKPLAN.md ROLLUP.md OPEN-LOOPS.md STATUS-*.md capture/*.md reference/*.md; do
    [ -f "$f" ] || continue
    grep -qiE "$monday_pat" "$f" && monday_files+=("$f")
    grep -qiE "$friday_pat" "$f" && friday_files+=("$f")
  done
  if [ "${#monday_files[@]}" -gt 0 ] && [ "${#friday_files[@]}" -gt 0 ]; then
    local affected=("${monday_files[@]}")
    if [[ " ${monday_files[*]} " == *" WEEKPLAN.md "* ]] && [ -f "ROLLUP.md" ] && [[ ! " ${monday_files[*]} " == *" ROLLUP.md "* ]]; then
      affected+=("ROLLUP.md (inherits WEEKPLAN.md's Monday-anchored weekly rows via the Sunday-harvest link, even though it never restates the day)")
    fi
    flag "DIVERGENCE — weekly reset-day cadence: ${affected[*]} anchor the week on Monday; ${friday_files[*]} rule the quota window resets Friday (ends 23:59 Thursday)" \
         "edit WEEKPLAN.md's reset-day header to Friday-anchored and reconcile ROLLUP.md's weekly-row cadence to match, per capture/hq-sweep-audit.md — or retire WEEKPLAN.md/ROLLUP.md's weekly cadence per the seasons ruling and confirm nothing else depends on it"
  else
    pass "DIVERGENCE — weekly reset-day cadence: no contradiction found across tracked files"
  fi
}
check_cadence_divergence

echo

# --- CHECK 2: STALENESS -------------------------------------------------
# DESK.md / BOARD.html as-of date >9 days old -> STALE.
echo "--- 2. STALENESS ---"
check_staleness() {
  local f="$1"
  if [ ! -f "$f" ]; then
    flag "STALENESS — $f does not exist" "generate $f (see reference/FRIDAY-PROMPT.md)"
    return
  fi
  local d age
  d="$(as_of_date "$f")"
  if [ -z "$d" ]; then
    flag "STALENESS — $f has no 'as-of: YYYY-MM-DD' stamp" "add a machine-stamped as-of date to the top of $f and regenerate"
    return
  fi
  age="$(days_between "$d" "$TODAY")"
  if [ -z "$age" ]; then
    flag "STALENESS — $f as-of date '$d' didn't parse" "fix the as-of date format in $f to YYYY-MM-DD"
  elif [ "$age" -gt 9 ]; then
    flag "STALENESS — $f is STALE (as-of $d, $age days old)" "regenerate $f from current repo state (see reference/FRIDAY-PROMPT.md)"
  else
    pass "STALENESS — $f fresh (as-of $d, $age days old)"
  fi
}
check_staleness "DESK.md"
check_staleness "BOARD.html"
echo

# --- CHECK 3: ORPHAN ARTIFACT -------------------------------------------
# Files under outputs/ or capture/ that are untracked or uncommitted.
echo "--- 3. ORPHAN ARTIFACT ---"
orphan_found=0
while IFS= read -r line; do
  [ -z "$line" ] && continue
  status="${line:0:2}"
  path="${line:3}"
  orphan_found=1
  flag "ORPHAN ARTIFACT — $path ($status, uncommitted) under outputs/ or capture/" \
       "git add '$path' && git commit -m 'capture: add $path'"
done < <(git status --porcelain -- outputs/ capture/ 2>/dev/null)
[ "$orphan_found" -eq 0 ] && pass "ORPHAN ARTIFACT — outputs/ and capture/ are fully committed"
echo

# --- CHECK 4: ORPHAN DECISION -------------------------------------------
# capture/*.md flagged "escalate to DECISIONS" with no matching row yet.
echo "--- 4. ORPHAN DECISION ---"
DECISIONS_FILE="canonical/DECISIONS.md"
[ -f "$DECISIONS_FILE" ] || DECISIONS_FILE="DECISIONS.md"
orphan_decision_found=0
for f in capture/*.md; do
  [ -f "$f" ] || continue
  while IFS=: read -r lineno content; do
    # skip the check's own spec text describing this mechanism, not a real escalation
    case "$content" in
      *"capture files flagged"*) continue ;;
    esac
    orphan_decision_found=1
    trimmed="$(echo "$content" | sed -E 's/^[[:space:]]+//')"
    flag "ORPHAN DECISION — $f:$lineno escalates to DECISIONS, no row in $DECISIONS_FILE yet: \"$trimmed\"" \
         "review and, if approved, add a numbered row to $DECISIONS_FILE (proposed rows are printed at the end of the Friday readout — never auto-appended)"
  done < <(grep -inE "escalate to decisions" "$f")
done
[ "$orphan_decision_found" -eq 0 ] && pass "ORPHAN DECISION — no unresolved escalations found in capture/*.md"
echo

# --- CHECK 5: UNRECONCILED CONFLICT -------------------------------------
# Same D-number on two different rows in DECISIONS.md (catches the known
# D-13..D-17 collision pattern), plus STATUS-*.md files contradicting
# each other on the same tracked field.
echo "--- 5. UNRECONCILED CONFLICT ---"
if [ ! -f "$DECISIONS_FILE" ]; then
  flag "UNRECONCILED CONFLICT — no DECISIONS.md found (expected $DECISIONS_FILE)" "create $DECISIONS_FILE"
else
  dupes="$(grep -oE '^\| D-[0-9]+ \|' "$DECISIONS_FILE" | sed -E 's/^\| (D-[0-9]+) \|/\1/' | sort | uniq -d)"
  if [ -n "$dupes" ]; then
    flag "UNRECONCILED CONFLICT — duplicate D-number rows in $DECISIONS_FILE: $(echo "$dupes" | tr '\n' ' ')" \
         "renumber the duplicate rows in $DECISIONS_FILE to the next free D-number and add a Repair log note (see the D-13..D-17 -> D-24..D-28 precedent already logged there)"
  else
    pass "UNRECONCILED CONFLICT — no duplicate D-number rows in $DECISIONS_FILE (D-13..D-17 collision was repaired 2026-07-18)"
  fi
fi
# STATUS-*.md vs STATUS-*.md on the same tracked fields (capture-vs-STATUS
# divergence is covered by check 1; this is STATUS-file-vs-STATUS-file only)
status_conflict_found=0
check_status_conflict() {
  local label="$1" pat_a="$2" pat_b="$3"
  shift 3
  local a_files=() b_files=()
  local f
  for f in "$@"; do
    [ -f "$f" ] || continue
    grep -qiE "$pat_a" "$f" && a_files+=("$f")
    grep -qiE "$pat_b" "$f" && b_files+=("$f")
  done
  if [ "${#a_files[@]}" -gt 0 ] && [ "${#b_files[@]}" -gt 0 ]; then
    status_conflict_found=1
    flag "UNRECONCILED CONFLICT — $label: ${a_files[*]} vs ${b_files[*]} disagree" \
         "reconcile ${a_files[*]} and ${b_files[*]} on: $label"
  fi
}
check_status_conflict "Where's Beyoncé build status" "rebuild from template" "copy complete|Type 2 build" STATUS-*.md
check_status_conflict "Lecturer + writer CVs status" "Blocked/waiting.*CVs|unanswered since Jul 4" "package complete|CVs.*not blocked" STATUS-*.md
[ "$status_conflict_found" -eq 0 ] && pass "UNRECONCILED CONFLICT — STATUS-*.md files agree with each other on tracked fields"
echo

# --- CHECK 6: TOUCHPOINT CREEP ------------------------------------------
# Count scheduled/automated-job mentions (cron, Zapier, Cowork) in
# instructions/*.md or audits/*; compare to the recorded baseline.
echo "--- 6. TOUCHPOINT CREEP ---"
BASELINE_FILE="audits/baseline-touchpoints.txt"
scan_targets=()
[ -d "instructions" ] && scan_targets+=(instructions/*.md)
[ -d "audits" ] && scan_targets+=("audits")
if [ "${#scan_targets[@]}" -eq 0 ]; then
  touch_count=0
else
  touch_count="$(grep -rniE 'cron|zapier|cowork' "${scan_targets[@]}" 2>/dev/null | grep -v "^audits/baseline-touchpoints.txt:" | grep -v "^audits/self-check.sh:" | wc -l | tr -d ' ')"
fi
if [ ! -f "$BASELINE_FILE" ]; then
  flag "TOUCHPOINT CREEP — $BASELINE_FILE does not exist; current count is $touch_count" \
       "echo 0 > $BASELINE_FILE   (establishes the tripwire; re-run to compare $touch_count against it)"
else
  baseline="$(tr -d '[:space:]' < "$BASELINE_FILE")"
  if [ "$touch_count" -gt "$baseline" ]; then
    flag "TOUCHPOINT CREEP — $touch_count scheduled/automated-job mentions found, baseline is $baseline" \
         "review the mentions (grep -rniE 'cron|zapier|cowork' audits/), then run: echo $touch_count > $BASELINE_FILE   to accept as the new baseline, or undo the new touchpoint first"
  else
    pass "TOUCHPOINT CREEP — $touch_count mentions, at or below baseline of $baseline"
  fi
fi
echo

# --- SUMMARY -------------------------------------------------------------
echo "=== $FLAG_COUNT flag(s) ==="
exit 0
