import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';
import { getBlogPostBySlug } from './blogPosts';
import type { BlogPost } from './blogPosts';
import { ApiClient } from '../../utils/api';

const FRONTEND_HERO_OVERRIDES: Record<string, string> = {
  'how-to-donate-for-child-education-in-india-80g':
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1774264931/images/blogs/school-day-focus-and-support.png',
  'verified-ngos-in-delhi':
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1774264924/images/blogs/reviewing-impact-reports-in-delhi.png',
  'csr-projects-in-india':
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1774264920/images/blogs/business-professionals-reviewing-csr-project-data.png',
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const resolvedSlug = slug || '';

  const [post, setPost] = useState<BlogPost | undefined>(() => getBlogPostBySlug(resolvedSlug));
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // Always reset to fallback first (for predictable SEO metadata + UI),
    // then attempt to load the latest content from the backend.
    setIsApiLoaded(false);
    setPost(getBlogPostBySlug(resolvedSlug));
    setOpenFaqIndex(null);

    ApiClient.getBlogPostBySlug(resolvedSlug)
      .then((serverPost) => {
        if (serverPost) {
          setPost(serverPost);
          setIsApiLoaded(true);
        }
      })
      .catch((err) => {
        console.error('Failed to load blog post from backend:', err);
      });
  }, [resolvedSlug]);

  // Basic guard for unknown slugs
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SEOHead
          title="Blog Post Not Found | The Giving Circle"
          description="The requested blog post could not be found."
          canonicalUrl="https://www.thegivingcircle.in/blog"
          noindex
        />
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Post not found</h1>
          <p className="text-gray-700 mb-6">
            The blog page you’re looking for doesn’t exist or hasn’t been published yet.
          </p>
          <Link to="/blog" className="text-green-700 hover:text-green-900 font-medium">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://www.thegivingcircle.in/blog/${post.slug}`;
  const heroImage =
    FRONTEND_HERO_OVERRIDES[post.slug] ||
    post.heroImage ||
    'https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png';
  const lastUpdatedLabel = isApiLoaded && post.dateModified
    ? new Date(post.dateModified).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : '';

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={post.title}
        description={post.description}
        keywords={post.keywords}
        canonicalUrl={canonicalUrl}
        ogTitle={post.title}
        ogDescription={post.description}
        ogImage={heroImage}
      />
      <ArticleSchema
        title={post.title}
        description={post.description}
        image={heroImage}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        category={post.category}
        location="India"
        author="The Giving Circle Team"
      />

      {/* Hero Image (About Us style) */}
      <section className="relative h-[56vh] sm:h-[66vh] md:h-[74vh] lg:h-[82vh] overflow-hidden pt-20 sm:pt-24">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45"></div>
        </div>
      </section>

      {/* Hero Text */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-10 sm:py-14">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-green-700 hover:text-green-900">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link to="/blog" className="text-green-700 hover:text-green-900">
                  Blog
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">{post.title}</li>
            </ol>
          </nav>

          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            {post.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>The Giving Circle Team</span>
            <span>•</span>
            <span>{lastUpdatedLabel ? `Last updated: ${lastUpdatedLabel}` : 'Last updated: --'}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TOC */}
        <div className="bg-white rounded-xl p-6 mb-12 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-3">In This Article</h2>
          <ol className="space-y-1 text-sm">
            {post.toc.map((item, i) => (
              <li key={item}>
                <a
                  href={`#section-${i + 1}`}
                  className="text-green-700 hover:text-green-900"
                >
                  {i + 1}. {item}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        {post.sections.map((section, idx) => (
          <section key={section.heading} id={`section-${idx + 1}`} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{section.heading}</h2>
            <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

            {section.paragraphs.map((p) => (
              <p key={p} className="text-gray-700 text-lg leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {section.bullets && (
              <ul className="space-y-3 mb-4">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-50 text-green-800 rounded-full flex items-center justify-center font-bold text-xs mt-1">
                      *
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.callout && (
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                <p className="text-green-900">
                  <strong>In short:</strong> {section.callout}
                </p>
              </div>
            )}
          </section>
        ))}

        {/* FAQ */}
        <section id={`section-${post.sections.length + 1}`} className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

          <div className="space-y-4">
            {post.faqs.map((faq, index) => (
              <div key={faq.q} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="text-green-700 shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 shrink-0" size={20} />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="p-4 sm:p-5 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {post.related.map(({ title, href }) => (
              <Link
                key={href}
                to={href}
                className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-green-400 transition-all"
              >
                <h3 className="font-semibold text-gray-900">
                  {title} →
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Full-width CTA */}
      <section className="bg-green-700 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Support education with confidence
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Choose verified education causes and donate with clarity, transparency, and 80G benefit guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/donate-for-education-india"
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Donate for Education
            </Link>
            <Link
              to="/ngos"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1"
            >
              Browse Verified NGOs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;

