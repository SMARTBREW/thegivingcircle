#!/usr/bin/env bash
# Collect every website image into ONE flat folder (no subfolders).
# Ready to upload to Google Drive.
#
# Usage:
#   bash scripts/export-all-images.sh
#   bash scripts/export-all-images.sh ~/Desktop/TGC-website-images
#   npm run export:images

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-$HOME/Desktop/TGC-website-images}"
URL_LIST="$(mktemp)"
MANIFEST="$OUT/manifest.txt"

echo "📦 Exporting The Giving Circle images (flat folder)"
echo "   Project: $ROOT"
echo "   Output:  $OUT"
echo ""

rm -rf "$OUT"
mkdir -p "$OUT"

# Avoid name collisions: if filename already exists, prefix with a short hash
unique_dest() {
  local name="$1"
  local dest="$OUT/$name"
  if [[ ! -e "$dest" ]]; then
    echo "$dest"
    return
  fi
  local base="${name%.*}"
  local ext="${name##*.}"
  local n=2
  while [[ -e "$OUT/${base}-${n}.${ext}" ]]; do
    n=$((n + 1))
  done
  echo "$OUT/${base}-${n}.${ext}"
}

# --- 1) Local public assets (flat) ---
echo "→ Copying public/ images into one folder..."
LOCAL_OK=0
find "$ROOT/public" -type f \( \
  -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o \
  -iname '*.webp' -o -iname '*.gif' -o -iname '*.svg' -o \
  -iname '*.ico' -o -iname '*.heic' -o -iname '*.avif' \
\) -print0 | while IFS= read -r -d '' file; do
  name="$(basename "$file")"
  dest="$(unique_dest "$name")"
  cp "$file" "$dest"
  LOCAL_OK=$((LOCAL_OK + 1))
done
# recount (subshell above)
LOCAL_COUNT=$(find "$OUT" -maxdepth 1 -type f ! -name 'manifest.txt' ! -name 'cloudinary-urls.txt' | wc -l | tr -d ' ')
echo "   Copied local files (folder now has $LOCAL_COUNT files)"

# --- 2) Unique Cloudinary URLs ---
echo "→ Collecting Cloudinary URLs..."
rg -oN --no-filename "https://res\.cloudinary\.com/[^\"'\s)<>]+" \
  "$ROOT/src" \
  "$ROOT/public" \
  "$ROOT/index.html" \
  "$ROOT/cloudinary-urls.json" \
  "$ROOT/cloudinary-urls-blogs.json" \
  2>/dev/null \
  | sed "s/[\"']//g; s/[),.;]*$//" \
  | sort -u > "$URL_LIST" || true

cp "$URL_LIST" "$OUT/cloudinary-urls.txt"
URL_COUNT=$(wc -l < "$URL_LIST" | tr -d ' ')
echo "   Found $URL_COUNT unique Cloudinary URLs"

# --- 3) Download Cloudinary into same flat folder ---
echo "→ Downloading Cloudinary images..."
OK=0
FAIL=0
{
  echo "The Giving Circle — flat image export"
  echo "Generated: $(date)"
  echo ""
} > "$MANIFEST"

while IFS= read -r url || [[ -n "$url" ]]; do
  [[ -z "$url" ]] && continue
  name="$(basename "$url" | cut -d'?' -f1)"
  # Drop Cloudinary transform leftovers if basename is weird
  [[ -z "$name" || "$name" == *','* ]] && name="cloudinary-$(echo -n "$url" | shasum | cut -c1-10).jpg"
  dest="$(unique_dest "$name")"

  if curl -fsSL --retry 2 --retry-delay 1 "$url" -o "$dest"; then
    OK=$((OK + 1))
    echo "OK  $(basename "$dest")  ←  $url" >> "$MANIFEST"
    printf "   ✓ %s\n" "$(basename "$dest")"
  else
    FAIL=$((FAIL + 1))
    echo "FAIL $url" >> "$MANIFEST"
    printf "   ✗ failed: %s\n" "$url"
    rm -f "$dest"
  fi
done < "$URL_LIST"

rm -f "$URL_LIST"

# --- 4) Zip ---
ZIP="$OUT.zip"
echo ""
echo "→ Creating zip..."
(
  cd "$(dirname "$OUT")"
  rm -f "$(basename "$ZIP")"
  zip -qr "$(basename "$ZIP")" "$(basename "$OUT")"
)

TOTAL=$(find "$OUT" -maxdepth 1 -type f ! -name 'manifest.txt' ! -name 'cloudinary-urls.txt' | wc -l | tr -d ' ')
{
  echo ""
  echo "=== Summary ==="
  echo "Images in folder: $TOTAL"
  echo "Cloudinary OK:    $OK"
  echo "Cloudinary FAIL:  $FAIL"
  echo "Zip:              $ZIP"
} | tee -a "$MANIFEST"

echo ""
echo "✅ Done — all images in one folder:"
echo "   $OUT"
echo "   $ZIP"
echo ""
echo "Upload to Drive: New → File upload → $ZIP"
echo "              or New → Folder upload → $OUT"
