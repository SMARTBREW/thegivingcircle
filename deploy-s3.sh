#!/bin/bash
set -e

BUCKET_NAME="thegivingcircle-website"
REGION="ap-south-1"

echo "🚀 Building application..."
npm run build

echo "📦 Uploading to S3..."
aws s3 sync dist/ s3://${BUCKET_NAME} --delete --region ${REGION}

echo "✅ Upload complete!"
echo ""
echo "Next steps:"
echo "1. Create CloudFront distribution (if not exists)"
echo "2. Invalidate CloudFront cache:"
echo "   aws cloudfront create-invalidation --distribution-id <DIST_ID> --paths '/*'"
