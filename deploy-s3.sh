#!/bin/bash
set -e

BUCKET_NAME="thegivingcircle-website"
REGION="ap-south-1"
DISTRIBUTION_ID="E1N8EZN5Z7I1E7"

echo "🚀 Building application..."
npm run build

echo "📦 Uploading to S3 with optimized cache headers..."

# Upload HTML files (no cache)
echo "  → Uploading HTML files..."
aws s3 sync dist/ s3://${BUCKET_NAME} \
  --exclude "*" \
  --include "*.html" \
  --cache-control "no-cache,no-store,must-revalidate" \
  --content-type "text/html" \
  --metadata-directive REPLACE \
  --region ${REGION}

# Upload JS/CSS assets (1 year cache - they have content hashes)
echo "  → Uploading JS/CSS assets..."
aws s3 sync dist/assets/ s3://${BUCKET_NAME}/assets/ \
  --exclude "*" \
  --include "*.js" \
  --include "*.css" \
  --cache-control "max-age=31536000,public,immutable" \
  --metadata-directive REPLACE \
  --region ${REGION}

# Upload fonts (1 year cache - immutable)
echo "  → Uploading fonts..."
aws s3 sync dist/fonts/ s3://${BUCKET_NAME}/fonts/ \
  --cache-control "max-age=31536000,public,immutable" \
  --metadata-directive REPLACE \
  --region ${REGION}

# Upload images (1 week cache)
echo "  → Uploading images..."
aws s3 sync dist/ s3://${BUCKET_NAME} \
  --exclude "*" \
  --include "*.jpg" \
  --include "*.jpeg" \
  --include "*.png" \
  --include "*.webp" \
  --include "*.svg" \
  --include "*.gif" \
  --cache-control "max-age=604800,public" \
  --metadata-directive REPLACE \
  --region ${REGION}

# Upload remaining files (1 day cache)
echo "  → Uploading remaining files..."
aws s3 sync dist/ s3://${BUCKET_NAME} \
  --exclude "*.html" \
  --exclude "*.js" \
  --exclude "*.css" \
  --exclude "*.jpg" \
  --exclude "*.jpeg" \
  --exclude "*.png" \
  --exclude "*.webp" \
  --exclude "*.svg" \
  --exclude "*.gif" \
  --cache-control "max-age=86400,public" \
  --metadata-directive REPLACE \
  --delete \
  --region ${REGION}

echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id ${DISTRIBUTION_ID} \
  --paths "/*" \
  --query 'Invalidation.{Id:Id,Status:Status,CreateTime:CreateTime}' \
  --output json

echo ""
echo "✅ Deployment complete!"
echo "🌐 Site: https://www.thegivingcircle.in"
echo ""
echo "📊 Cache Strategy:"
echo "  • HTML files: No cache (always fresh)"
echo "  • JS/CSS: 1 year (immutable with content hashes)"
echo "  • Fonts: 1 year (immutable)"
echo "  • Images: 1 week"
echo "  • Other files: 1 day"
