#!/bin/sh
# usage: render.sh <out-dir> <svg>...
OUT="$1"; shift
for f in "$@"; do
  n=$(basename "$f" .svg)
  W=$(grep -o 'viewBox="0 0 [0-9]* [0-9]*"' "$f" | head -1 | awk '{print $3}')
  H=$(grep -o 'viewBox="0 0 [0-9]* [0-9]*"' "$f" | head -1 | awk '{print $4}' | tr -d '"')
  rm -f "$OUT/$n.png"
  "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars \
    --user-data-dir="$(cygpath -w "$OUT/chrome-profile-$n")" \
    --screenshot="$(cygpath -w "$OUT/$n.png")" --window-size=$W,$H "file:///$(cygpath -m "$PWD/$f")" >/dev/null 2>&1
  [ -f "$OUT/$n.png" ] && echo "ok $n" || echo "FAIL $n"
done
