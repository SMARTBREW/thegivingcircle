export type BlogFaq = {
  q: string;
  a: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  category: string;
  datePublished: string; // YYYY-MM-DD
  dateModified: string; // YYYY-MM-DD
  heroImage?: string;
  readingTime: string;
  toc: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  related: { title: string; href: string }[];
};

const TODAY = new Date().toISOString().split('T')[0];

// Initial post set. You can keep adding posts weekly by extending this array
// (or later by moving to a CMS / codegen workflow).
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-donate-for-child-education-in-india-80g',
    title: 'How to Donate for Child Education in India (Step-by-Step + 80G)',
    description:
      'A step-by-step guide to donating for child education in India, understanding 80G tax benefits, and choosing verified NGOs for real, trackable impact.',
    keywords:
      'donate for child education India, education NGO donation, NGO for education India, 80G tax benefit donation India, verified NGO India, how to donate effectively',
    category: 'Giving Guide',
    datePublished: '2026-03-19',
    dateModified: TODAY,
    heroImage: 'https://www.thegivingcircle.in/images/blogs/School%20day%20focus%20and%20support.png',
    readingTime: '7 min read',
    toc: [
      'Why child education donations matter',
      'Step-by-step: how to donate effectively',
      'How 80G tax benefits work (high-level)',
      'How to choose a verified NGO',
      'Common mistakes to avoid',
      'Frequently asked questions',
    ],
    sections: [
      {
        heading: 'Why Child Education Donations Matter',
        paragraphs: [
          'When children stay in school, families break the cycle of poverty over time. Education funding doesn’t only cover textbooks—it supports attendance, learning, and long-term pathways to livelihoods.',
          'But education impact depends on execution quality. That’s why choosing the right, verified NGO and understanding how your donation is tracked matters just as much as the amount you contribute.',
        ],
        callout:
          'Goal-focused giving is more effective than one-time donations without follow-up or transparency.',
      },
      {
        heading: 'Step-by-Step: How to Donate Effectively',
        paragraphs: [
          'Here’s a simple process you can follow to donate for child education in India with clarity and confidence:',
        ],
        bullets: [
          'Pick the cause: choose “education” and ensure the NGO works with children in a defined geography.',
          'Choose your giving amount: you can start with a small recurring contribution so education support stays consistent.',
          'Donate through The Giving Circle: your donation flows to verified education causes.',
          'Track impact: you receive updates and visibility into how funds support beneficiaries.',
          'Get your 80G receipt (for eligible donations): use it for tax deduction, as per Indian tax rules.',
        ],
      },
      {
        heading: 'How 80G Tax Benefits Work (High-Level)',
        paragraphs: [
          'In India, eligible donations under Section 80G can qualify for tax deductions. Typically, you receive an 80G receipt/acknowledgement after donating.',
          'Tax rules can vary by individual circumstances. Always confirm eligibility for your case and consult a qualified tax professional if needed.',
        ],
      },
      {
        heading: 'How to Choose a Verified NGO',
        paragraphs: [
          'A “verified” NGO should have documentation and transparency standards. On The Giving Circle, we focus on causes where verification and reporting help reduce uncertainty.',
          'Before you donate, look for clear beneficiary focus, documented operations, and regular updates that show outcomes—not just announcements.',
        ],
        callout:
          'Prefer NGOs that share utilization/impact reporting regularly and clearly explain what your funds support.',
      },
      {
        heading: 'Common Mistakes to Avoid',
        paragraphs: [
          'Avoid these pitfalls when donating for child education:',
        ],
        bullets: [
          'Donating without checking if the NGO supports education outcomes (not just administrative costs).',
          'Choosing only based on “claims” without any evidence of reporting or follow-up.',
          'Making a one-time donation when recurring support is what helps children stay in school.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I donate for child education in India?',
        a: 'Start by choosing an education cause on The Giving Circle, donate (recurring or one-time), and review updates/impact visibility provided for the verified NGO.',
      },
      {
        q: 'Do education donations qualify for 80G tax benefit?',
        a: 'Eligible donations qualify for Section 80G tax deduction when made to eligible entities. Receipts are generated for eligible donations. Always verify applicability for your case and consult a professional if needed.',
      },
      {
        q: 'How do I verify NGOs before donating?',
        a: 'Look for verification and transparent reporting. The Giving Circle focuses on verified and trackable causes, and provides structured information so you can make an informed decision.',
      },
      {
        q: 'What should I do if I want more transparency?',
        a: 'Use the impact and update sections available for causes on the platform, and consider recurring giving so you can follow outcomes over time.',
      },
    ],
    related: [
      { title: 'Donate for Education India', href: '/donate-for-education-india' },
      { title: 'Verified NGOs Directory', href: '/ngos' },
      { title: 'What is a Giving Circle?', href: '/what-is-a-giving-circle' },
      { title: 'Explore Live Causes', href: '/live-causes' },
    ],
  },
  {
    slug: 'verified-ngos-in-delhi',
    title: 'Verified NGOs in Delhi: How to Choose Trustworthy Causes',
    description:
      'Learn what "verified NGOs" mean on The Giving Circle, which transparency signals to check, and how to donate to trusted education causes in Delhi (80G basics).',
    keywords:
      'verified NGOs in Delhi, trusted NGO in Delhi, NGO verification, donate to verified NGO Delhi, education NGO donation Delhi, 80G donation Delhi, charity in Delhi',
    category: 'Trust & Verification Guide',
    datePublished: '2026-03-23',
    dateModified: TODAY,
    heroImage: 'https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png',
    readingTime: '6 min read',
    toc: [
      'What “verified” means',
      'Transparency signals to check',
      'What to expect in donation updates',
      'How to donate to verified NGOs in Delhi',
      'Frequently asked questions',
    ],
    sections: [
      {
        heading: 'What “Verified” Means on The Giving Circle',
        paragraphs: [
          '“Verified” is about reducing uncertainty before you donate. It means the NGO or cause partner is reviewed against documentation and transparency requirements so you can understand what your money supports.',
          'Instead of relying only on announcements, we encourage donors to look for proof of structured operations and clear reporting.'
        ],
        callout: 'Verification helps you donate with confidence by focusing on transparency, not just claims.',
      },
      {
        heading: 'Transparency Signals to Check Before You Donate',
        paragraphs: [
          'Before donating to an NGO in Delhi, scan for these signals:',
        ],
        bullets: [
          'Clear beneficiary focus (who the program helps and where it operates)',
          'Regular updates that explain outcomes, not only fundraising messages',
          'Utilization or impact reporting that shows progress over time',
          'How the organization communicates and responds to questions',
        ],
      },
      {
        heading: 'What to Expect in Donation Updates',
        paragraphs: [
          'Good updates should help you answer: “What changed because of this donation?”',
          'Look for details like activity summaries, measurable progress, timeframes, and (where available) evidence of learning, attendance, or service delivery.'
        ],
        bullets: [
          'A timeline of activities (what happened and when)',
          'Program costs explained at a high level',
          'Impact summaries that are easy to understand',
        ],
      },
      {
        heading: 'How to Donate to Verified NGOs in Delhi',
        paragraphs: [
          'Use our verified NGOs in Delhi page to explore trust-first options.',
          'Choose the causes you want to support and donate in a way that lets you follow outcomes (for example, recurring giving).',
          'Start here: /verified-ngos-in-delhi (and you can also browse at /ngos).',
        ],
        callout: 'Tip: recurring support often makes it easier to see outcomes evolve.'
      },
    ],
    faqs: [
      {
        q: 'Are all NGOs on the platform verified?',
        a: 'The Giving Circle aims to list verified, trust-first NGO options. When in doubt, review the available reporting and updates for the specific cause you want to donate to.'
      },
      {
        q: 'Do donations qualify for 80G?',
        a: 'Some donations may qualify for Section 80G benefits depending on eligibility. Always verify eligibility for your case and consult a tax professional if needed.'
      },
      {
        q: 'How often will I get updates?',
        a: 'Update frequency depends on the cause and its reporting cycle. We prioritize transparent, structured updates so donors can follow progress over time.'
      },
      {
        q: 'How do I pick between two similar NGOs?',
        a: 'Compare transparency signals: clarity of beneficiary focus, quality of updates, and evidence of consistent reporting.'
      },
    ],
    related: [
      { title: 'Verified NGOs Directory', href: '/ngos' },
      { title: 'CSR Projects in India (for companies)', href: '/csr-projects-in-india' },
      { title: 'Donate for Education India', href: '/donate-for-education-india' },
      { title: 'What is a Giving Circle?', href: '/what-is-a-giving-circle' },
    ],
  },
  {
    slug: 'csr-projects-in-india',
    title: 'CSR Projects in India: Step-by-Step for Companies',
    description:
      'Understand CSR projects in India: how companies fund verified causes, what partners do, and how monitoring/reporting typically works (high-level) for planning.',
    keywords:
      'CSR projects in India, company CSR funding, CSR reporting, verified NGO partnership, education CSR funding, women empowerment CSR, CSR compliance basics',
    category: 'CSR for Companies',
    datePublished: '2026-03-23',
    dateModified: TODAY,
    heroImage: 'https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png',
    readingTime: '7 min read',
    toc: [
      'What CSR means (high-level)',
      'How CSR projects get funded',
      'Choosing a verified partner',
      'CSR reporting: what to expect',
      'Frequently asked questions',
    ],
    sections: [
      {
        heading: 'What CSR Means (High-Level)',
        paragraphs: [
          'Corporate Social Responsibility (CSR) projects are initiatives companies fund to create measurable social outcomes.',
          'A strong CSR program usually combines a clear problem statement, defined beneficiaries, a funded plan, and ongoing monitoring with reporting.'
        ],
      },
      {
        heading: 'How CSR Projects Get Funded: Step-by-step',
        paragraphs: [
          'A practical process companies can follow:',
        ],
        bullets: [
          'Define focus areas (education, women empowerment, health, community development, etc.)',
          'Set the CSR budget and project duration',
          'Select partners and define roles (implementation, monitoring, reporting)',
          'Approve a spending plan and expected outcomes',
          'Track progress and review impact reporting',
        ],
      },
      {
        heading: 'How to Choose a Verified Partner',
        paragraphs: [
          'Choose partners based on clarity, documentation, and reporting capability.',
          'On The Giving Circle, verified causes are presented with structured information so CSR teams can understand what will be delivered and how updates are shared.'
        ],
        callout: 'Prioritize organizations that communicate outcomes clearly and consistently.'
      },
      {
        heading: 'CSR Reporting: What to Expect',
        paragraphs: [
          'CSR reporting is often required by internal governance and compliance processes.',
          'At a practical level, expect structured updates that summarize activities, timelines, and outcomes. For compliance-specific needs, confirm requirements with your legal/advisory team.'
        ],
        bullets: [
          'Activity and progress updates (what happened)',
          'High-level cost allocation context',
          'Outcome snapshots that show change over time',
        ],
      },
      {
        heading: 'How The Giving Circle Supports CSR Giving',
        paragraphs: [
          'The Giving Circle helps connect companies with trust-first, verified causes by providing structured cause information and a platform for consistent updates.',
          'This makes it easier to plan, fund, and monitor CSR initiatives with clarity.'
        ],
      },
    ],
    faqs: [
      {
        q: 'Can my company fund CSR projects in India through The Giving Circle?',
        a: 'Yes. You can explore verified causes and plan CSR initiatives with structured information to support monitoring and reporting workflows.'
      },
      {
        q: 'What kinds of projects can be funded?',
        a: 'Common CSR focus areas include education, women empowerment, health, welfare, and community development. Pick causes aligned to your CSR goals.'
      },
      {
        q: 'What documentation should we prepare?',
        a: 'Typically you will align on beneficiary scope, project plan, responsibilities, and reporting expectations. For compliance requirements, confirm with your legal/advisory team.'
      },
      {
        q: 'How is impact tracked?',
        a: 'Impact is tracked through structured updates that summarize activities and outcomes. Frequency depends on the project reporting cycle.'
      },
    ],
    related: [
      { title: 'CSR Projects in India', href: '/csr-projects-in-india' },
      { title: 'Verified NGOs Directory', href: '/ngos' },
      { title: 'Verified NGOs in Delhi', href: '/verified-ngos-in-delhi' },
      { title: 'Explore Live Causes', href: '/live-causes' },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

