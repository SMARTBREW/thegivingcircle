import OpenAI from 'openai';

function getTodayISODate() {
  return new Date().toISOString().split('T')[0];
}

function extractFirstJsonObject(text) {
  if (!text) return null;
  const firstBrace = text.indexOf('{');
  const lastBrace = text.lastIndexOf('}');
  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) return null;
  const candidate = text.slice(firstBrace, lastBrace + 1);
  try {
    return JSON.parse(candidate);
  } catch {
    return null;
  }
}

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('Missing OPENAI_API_KEY in environment');
  }
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

export async function generateUpdatedBlogPost({ existingPost, updatePurpose }) {
  const client = getOpenAIClient();
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

  const titleSafe = existingPost?.title || '';
  const slugSafe = existingPost?.slug || '';

  const system = [
    'You are a senior editor for The Giving Circle (India).',
    'Write trustworthy, non-generic blog content for donors.',
    'Follow the required JSON format exactly and do not output anything except valid JSON.',
    'IMPORTANT: Avoid making up facts. When you mention tax benefits or compliance, keep it high-level and include a short “for eligibility, confirm with a tax professional” style disclaimer.',
    'Keep the exact same `slug`, and keep `heroImage` unchanged if provided.'
  ].join('\n');

  const user = [
    `Update this blog post for ${updatePurpose} freshness.`,
    '',
    `Existing post:`,
    JSON.stringify(existingPost, null, 2),
    '',
    'Return JSON with these keys (all required):',
    '- slug (same as input)',
    '- title',
    '- description',
    '- keywords',
    '- category (keep same if provided)',
    '- datePublished (keep same as input)',
    '- dateModified (set to today YYYY-MM-DD)',
    '- heroImage (keep same if provided)',
    '- readingTime (keep same if provided)',
    '- toc (array of strings)',
    '- sections (array; each with heading, paragraphs, optional bullets, optional callout)',
    '- faqs (array; each with q and a)',
    '- related (array with title/href)'
  ].join('\n');

  const resp = await client.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
    temperature: 0.45,
  });

  const content = resp?.choices?.[0]?.message?.content;
  const parsed = extractFirstJsonObject(content);
  if (!parsed) {
    throw new Error(`OpenAI did not return parsable JSON for slug: ${slugSafe}`);
  }

  // Safety: ensure we didn't accidentally change slug.
  parsed.slug = existingPost.slug;
  parsed.dateModified = getTodayISODate();
  if (existingPost.heroImage && parsed.heroImage !== existingPost.heroImage) {
    parsed.heroImage = existingPost.heroImage;
  }

  // Keep original datePublished, category, readingTime if missing.
  parsed.datePublished = parsed.datePublished || existingPost.datePublished;
  parsed.category = parsed.category || existingPost.category;
  parsed.readingTime = parsed.readingTime || existingPost.readingTime;

  return parsed;
}

