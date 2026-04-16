import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import { BLOG_POSTS, type BlogPost } from './blogPosts';
import { ApiClient } from '../../utils/api';

const BlogIndex = () => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    ApiClient.getBlogPosts()
      .then((serverPosts) => {
        if (Array.isArray(serverPosts) && serverPosts.length) {
          // Merge: prefer API version where available, keep static posts that
          // aren't in MongoDB yet (e.g. newly added posts pending first seed)
          const apiBySlug = new Map(serverPosts.map((p) => [p.slug, p]));
          const merged = BLOG_POSTS.map((staticPost) =>
            apiBySlug.has(staticPost.slug) ? apiBySlug.get(staticPost.slug)! : staticPost
          );
          setPosts(merged);
          setIsApiLoaded(true);
        }
      })
      .catch((err) => {
        console.error('Failed to load blog posts from backend:', err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Blog | The Giving Circle - Community Giving Guides"
        description="Guides on donating, choosing verified NGOs, understanding 80G, and making education, women empowerment, and CSR giving more impactful in India."
        keywords="giving circle blog, donate online, donate NGO, 80G tax benefit guide, 80g tax benefit, verified NGO, csr initiatives, education donation, ngo role, role of ngo, fundraising meaning"
        canonicalUrl="https://www.thegivingcircle.in/blog"
        ogTitle="The Giving Circle Blog | Guides to Donate with Confidence"
        ogDescription="Weekly-style giving guides built for clarity: donate effectively, choose verified NGOs, and understand 80G in India."
      />

      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-green-700 hover:text-green-900">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">Blog</li>
            </ol>
          </nav>

          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Giving Guides
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            The Giving Circle Blog
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Practical, trust-first guides to help you donate confidently - especially for education giving, 80G tax benefits, and verified NGO impact.
          </p>
        </div>
      </section>

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post) => {
            const lastUpdatedLabel = isApiLoaded && post.dateModified
              ? new Date(post.dateModified).toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })
              : '--';

            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-400 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center bg-green-50 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{`Last updated: ${lastUpdatedLabel}`}</span>
                </div>
                <h2 className="mt-3 text-lg font-bold text-gray-900 leading-snug">{post.title}</h2>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{post.description}</p>
                <div className="mt-4 text-green-700 font-medium text-sm">
                  Read article →
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <section className="bg-green-700 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to donate with confidence?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore verified education causes and start giving with clarity, transparency, and support for real outcomes.
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
              Explore Verified NGOs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogIndex;

