#!/bin/sh
# usage: render2x.sh <out-dir> <svg>...   -> PNG mit Faktor 4 (Logos) bzw. 2
OUT="$1"; shift
for f in "$@"; do
  n=$(basename "$f" .svg)
  VB=$(grep -o 'viewBox="[^"]*"' "$f" | head -1 | tr -d '"' | cut -d= -f2)
  W=$(echo $VB | awk '{printf "%d", $3+0.5}'); H=$(echo $VB | awk '{printf "%d", $4+0.5}')
  S=2; [ $W -lt 200 ] && S=12
  TMP="$OUT/_wrap_$n.html"
  printf '<html><body style="margin:0;background:transparent"><img src="file:///%s" style="width:%spx;height:%spx;display:block"></body></html>' "$(cygpath -m "$PWD/$f" 2>/dev/null || cygpath -m "$f")" $W $H > "$TMP"
  rm -f "$OUT/$n.png"
  "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars --default-background-color=00000000 \
    --force-device-scale-factor=$S --user-data-dir="$(cygpath -w "$OUT/.chrome-$n")" \
    --screenshot="$(cygpath -w "$OUT/$n.png")" --window-size=$W,$H "file:///$(cygpath -m "$TMP")" >/dev/null 2>&1
  [ -f "$OUT/$n.png" ] && echo "ok $n" || echo "FAIL $n"
done
