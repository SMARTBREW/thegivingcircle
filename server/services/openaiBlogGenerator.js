import OpenAI from 'openai';

function getTodayISODate() {
  return new Date().toISOString().split('T')[0];
}

function extractFirstJsonObject(text) {
  if (!text) return null;
  // Strip citation markers like 【4†source】 that web search can inject
  const clean = text.replace(/【[^】]*】/g, '');
  const firstBrace = clean.indexOf('{');
  const lastBrace = clean.lastIndexOf('}');
  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) return null;
  const candidate = clean.slice(firstBrace, lastBrace + 1);
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

  const slugSafe = existingPost?.slug || '';
  const titleSafe = existingPost?.title || '';
  const today = getTodayISODate();

  const system = [
    'You are a senior editor for The Giving Circle (India), a verified NGO donation platform.',
    'Your job is to update blog posts with genuinely fresh, current information sourced from the web.',
    'Search the web to find: recent statistics, policy changes, news relevant to NGOs and donations in India.',
    'Only include facts you found and can verify - never hallucinate statistics.',
    'For tax or compliance topics, keep it high-level and add a "confirm with a tax professional" note.',
    'Keep the exact same `slug` and `heroImage` as provided.',
    'Output ONLY valid JSON. No markdown fences, no explanations, no citation markers.',
  ].join('\n');

  const user = [
    `Today is ${today}. Update this blog post for ${updatePurpose} freshness.`,
    `Search the web for recent news, statistics, or developments about: "${titleSafe}" in the context of India, NGO donations, and philanthropy.`,
    `Incorporate any current data you find (e.g. updated government figures, recent reports, new policies).`,
    '',
    'Existing post:',
    JSON.stringify(existingPost, null, 2),
    '',
    'Return a single JSON object with ALL of these keys:',
    '- slug (must be exactly: ' + slugSafe + ')',
    '- title (can be improved but keep the core keyword focus)',
    '- description (150-160 characters, keyword-rich)',
    '- keywords (comma-separated, include long-tail variants)',
    '- category (keep same as input)',
    '- datePublished (keep same as input: ' + existingPost.datePublished + ')',
    '- dateModified (set to today: ' + today + ')',
    '- heroImage (keep exactly: ' + (existingPost.heroImage || '') + ')',
    '- readingTime (keep same as input)',
    '- toc (array of section heading strings)',
    '- sections (array of objects: { heading, paragraphs: string[], bullets?: string[], callout?: string })',
    '- faqs (array of objects: { q, a } - include at least 4 FAQs targeting real search queries)',
    '- related (array of objects: { title, href })',
  ].join('\n');

  let content;

  try {
    // Responses API with web search (SDK >= 4.77)
    const resp = await client.responses.create({
      model,
      tools: [{ type: 'web_search_preview' }],
      instructions: system,
      input: user,
    });
    content = resp.output_text;
  } catch (webSearchErr) {
    // Fallback to standard chat completions if web search is unavailable
    console.warn(`Web search unavailable (${webSearchErr?.message}), falling back to chat completions.`);
    const resp = await client.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      temperature: 0.45,
    });
    content = resp?.choices?.[0]?.message?.content;
  }

  const parsed = extractFirstJsonObject(content);
  if (!parsed) {
    throw new Error(`OpenAI did not return parsable JSON for slug: ${slugSafe}`);
  }

  // Safety guards - never let AI change these fields
  parsed.slug = existingPost.slug;
  parsed.dateModified = today;
  parsed.datePublished = existingPost.datePublished;
  parsed.category = parsed.category || existingPost.category;
  parsed.readingTime = parsed.readingTime || existingPost.readingTime;
  if (existingPost.heroImage) {
    parsed.heroImage = existingPost.heroImage;
  }

  return parsed;
}
