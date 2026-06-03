#!/bin/bash
# Publish CloudFront Function for SEO 301 redirects (S3 static site).
set -e

FUNCTION_NAME="thegivingcircle-seo-redirects"
REGION="us-east-1" # CloudFront functions must be created in us-east-1
SOURCE="cloudfront/seo-redirects.js"
DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-E1N8EZN5Z7I1E7}"

if [ ! -f "$SOURCE" ]; then
  echo "Missing $SOURCE"
  exit 1
fi

echo "📤 Publishing CloudFront function: $FUNCTION_NAME"

EXISTING=$(aws cloudfront describe-function --name "$FUNCTION_NAME" --stage LIVE 2>/dev/null || true)
if [ -n "$EXISTING" ]; then
  ETAG=$(aws cloudfront describe-function --name "$FUNCTION_NAME" --query 'ETag' --output text)
  UPDATE=$(aws cloudfront update-function \
    --name "$FUNCTION_NAME" \
    --function-config "Comment=SEO 301 redirects,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://$SOURCE" \
    --if-match "$ETAG" \
    --query '{ETag:ETag,Status:FunctionMetadata.Status}' \
    --output json)
  NEW_ETAG=$(echo "$UPDATE" | python3 -c "import sys,json; print(json.load(sys.stdin)['ETag'])")
  aws cloudfront publish-function --name "$FUNCTION_NAME" --if-match "$NEW_ETAG" >/dev/null
  echo "✓ Updated and published function"
else
  CREATE=$(aws cloudfront create-function \
    --name "$FUNCTION_NAME" \
    --function-config "Comment=SEO 301 redirects,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://$SOURCE" \
    --query '{ETag:ETag}' \
    --output json)
  NEW_ETAG=$(echo "$CREATE" | python3 -c "import sys,json; print(json.load(sys.stdin)['ETag'])")
  aws cloudfront publish-function --name "$FUNCTION_NAME" --if-match "$NEW_ETAG" >/dev/null
  echo "✓ Created and published function"
fi

FUNCTION_ARN=$(aws cloudfront describe-function --name "$FUNCTION_NAME" --stage LIVE --query 'FunctionSummary.FunctionMetadata.FunctionARN' --output text)
echo ""
echo "Function ARN: $FUNCTION_ARN"
echo ""
echo "⚠️  Attach this function to distribution $DISTRIBUTION_ID (viewer-request) if not already:"
echo "   AWS Console → CloudFront → $DISTRIBUTION_ID → Behaviors → Default → Edit"
echo "   CloudFront Functions → Associate: $FUNCTION_NAME (viewer request)"
echo ""
echo "Or run with AWS CLI (requires current distribution config):"
echo "   See cloudfront/README.md"
