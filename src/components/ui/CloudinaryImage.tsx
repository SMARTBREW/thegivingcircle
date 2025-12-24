import React from 'react';

type CloudinaryImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  style?: React.CSSProperties;
};

const CLOUDINARY_UPLOAD_SEGMENT = '/upload/';

function isCloudinaryUrl(url: string): boolean {
  return /res\.cloudinary\.com\//.test(url) && url.includes(CLOUDINARY_UPLOAD_SEGMENT);
}

function buildTransformedUrl(baseUrl: string, transformation: string): string {
  if (!isCloudinaryUrl(baseUrl)) return baseUrl;
  const [prefix, rest] = baseUrl.split(CLOUDINARY_UPLOAD_SEGMENT);
  const restParts = rest.split('/');
  const firstPart = restParts[0];
  const hasExistingTransform = !firstPart.startsWith('v') && firstPart.length > 0;

  const defaultTransform = transformation;
  let finalTransform = defaultTransform;

  if (hasExistingTransform) {
    const existing = firstPart;
    const pieces = new Set(existing.split(','));
    defaultTransform.split(',').forEach((p) => pieces.add(p));
    finalTransform = Array.from(pieces).join(',');
    restParts[0] = finalTransform;
    return `${prefix}${CLOUDINARY_UPLOAD_SEGMENT}${restParts.join('/')}`;
  }

  return `${prefix}${CLOUDINARY_UPLOAD_SEGMENT}${finalTransform}/${rest}`;
}

function buildSrcSet(url: string, targetWidths: number[], height?: number): string | undefined {
  if (!isCloudinaryUrl(url)) return undefined;
  const descriptors: string[] = [];
  for (const w of targetWidths) {
    const transforms = [
      `w_${w}`,
      height ? `h_${height}` : undefined,
      'c_fill',
      'dpr_auto',
      'f_auto',
      'q_70',
    ]
      .filter(Boolean)
      .join(',');
    const u = buildTransformedUrl(url, transforms);
    descriptors.push(`${u} ${w}w`);
  }
  return descriptors.join(', ');
}

export function CloudinaryImage({
  src,
  alt,
  className,
  sizes,
  width,
  height,
  priority = false,
  style,
}: CloudinaryImageProps) {
  const commonTransforms = [
    width ? `w_${width}` : undefined,
    height ? `h_${height}` : undefined,
    (width || height) ? 'c_fill' : undefined,
    'dpr_auto',
    'f_auto',
    'q_70',
  ]
    .filter(Boolean)
    .join(',');

  const optimizedSrc = isCloudinaryUrl(src)
    ? buildTransformedUrl(src, commonTransforms)
    : src;

  const srcSet = buildSrcSet(src, [320, 480, 640, 768, 1024, 1280, 1920], height);
  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={defaultSizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      style={style}
    />
  );
}

export default CloudinaryImage;


