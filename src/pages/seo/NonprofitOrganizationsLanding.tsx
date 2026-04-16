import SEOHead from '../../components/SEO/SEOHead';
import { Link } from 'react-router-dom';
import { Search, CheckCircle, HandHeart, Trophy } from 'lucide-react';
import { Section } from '../../components/ui';

const NonprofitOrganizationsLanding = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <SEOHead
                title="Nonprofit Organizations India | List of NGOs"
                description="Comprehensive directory of verified nonprofit organizations in India. Find and support trusted NGOs working in education, health, environment and social welfare."
                keywords="nonprofit organizations, ngo directory, trusted charities, donate to nonprofit, social impact, ngo full form, top NGO, best NGO, ngo role, role of ngo, verified NGO, helping the poor, act of kindness, donation 80g"
                canonicalUrl="https://www.thegivingcircle.in/nonprofit-organizations"
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
                <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-1.5 bg-green-100 rounded-full text-green-800 font-medium text-sm mb-6">
                        Verified NGO Directory
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Verified <span className="text-green-700">Nonprofit Organizations</span> in India
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Discover and support trusted NGOs in India. We verify partners for transparency and compliance so you can give with confidence and track real impact.
                    </p>

                    <div className="max-w-3xl mx-auto bg-white rounded-xl p-2 flex shadow-lg border border-gray-200">
                        <input
                            type="text"
                            placeholder="Search for a cause or NGO (e.g., Animal Welfare)"
                            className="flex-1 px-4 py-3 text-gray-900 focus:outline-none rounded-l-lg"
                            readOnly
                            onClick={() => window.location.href = '/live-causes'}
                        />
                        <button
                            onClick={() => window.location.href = '/live-causes'}
                            className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="container max-w-[1200px] mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-green-700">50+</div>
                        <div className="text-gray-600 text-sm">Verified Partners</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-green-700">₹1 Cr+</div>
                        <div className="text-gray-600 text-sm">Funds Raised</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-green-700">100%</div>
                        <div className="text-gray-600 text-sm">Transparency</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-green-700">12+</div>
                        <div className="text-gray-600 text-sm">Cities Covered</div>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <Section className="py-20">
                <div className="container max-w-[1200px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Browse by Cause</h2>
                        <div className="w-16 h-1 bg-green-700 mx-auto mb-6"></div>
                        <p className="text-gray-600">Find a nonprofit organization dedicated to what matters most to you.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <Link to="/live-causes?category=Education" className="group block bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                            <Trophy className="w-7 h-7 text-orange-600 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Education & Skill</h3>
                        <p className="text-gray-500 mb-4">Support schools, scholarships, and vocational training centers.</p>
                        <span className="text-orange-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">View NGOs <ArrowRight className="w-4 h-4" /></span>
                    </Link>

                    {/* Card 2 */}
                    <Link to="/live-causes?category=Health" className="group block bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors">
                            <HandHeart className="w-7 h-7 text-rose-600 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare</h3>
                        <p className="text-gray-500 mb-4">Medical aid, rural clinics, and emergency surgeries.</p>
                        <span className="text-rose-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">View NGOs <ArrowRight className="w-4 h-4" /></span>
                    </Link>

                    {/* Card 3 */}
                    <Link to="/live-causes?category=Animals" className="group block bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                            <CheckCircle className="w-7 h-7 text-green-600 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Animal Welfare</h3>
                        <p className="text-gray-500 mb-4">Shelters, rescue teams, and feeding programs.</p>
                        <span className="text-green-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">View NGOs <ArrowRight className="w-4 h-4" /></span>
                    </Link>
                </div>
                </div>
            </Section>

            {/* Featured Location: Noida & Gurugram Links */}
            <section className="bg-green-700 py-16 sm:py-20">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Change starts locally. Find NGOs near you.</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/ngos/best-ngo-in-noida" className="px-6 py-3 border border-white/60 text-white rounded-full hover:border-white hover:bg-white/10 transition">NGOs in Noida</Link>
                        <Link to="/ngos/best-ngo-in-gurugram" className="px-6 py-3 border border-white/60 text-white rounded-full hover:border-white hover:bg-white/10 transition">NGOs in Gurugram</Link>
                        <Link to="/ngos/best-ngo-in-delhi" className="px-6 py-3 border border-white/60 text-white rounded-full hover:border-white hover:bg-white/10 transition">NGOs in Delhi</Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

// Helper icon component
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

export default NonprofitOrganizationsLanding;
