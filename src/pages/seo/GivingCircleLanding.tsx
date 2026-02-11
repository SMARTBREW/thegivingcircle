import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Heart, Globe, Shield } from 'lucide-react';
import { PrimaryButton, Section } from '../../components/ui';

const GivingCircleLanding = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>Giving Circle | Join a Community of Changemakers & Social Impact</title>
                <meta name="description" content="What is a Giving Circle? Join The Giving Circle India to pool resources, support trusted NGOs, and create massive social impact through collective giving." />
                <meta name="keywords" content="giving circle, collective giving, giving circle india, donation circle, community giving, social impact community" />
                <link rel="canonical" href="https://www.thegivingcircle.in/giving-circle" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-emerald-900 text-white overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    srcSet="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80 600w, 
                           https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80 1200w,
                           https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 2000w"
                    sizes="100vw"
                    alt="Community impact background"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
                    fetchPriority="high"
                />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        The Power of a <span className="text-emerald-400">Giving Circle</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Connect, Collaborate, and Create Change. Join India's most trusted collective giving movement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/onboarding">
                            <PrimaryButton size="lg" className="w-full sm:w-auto">
                                Start Your Own Circle
                            </PrimaryButton>
                        </Link>
                        <Link to="/live-causes">
                            <button className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 font-bold rounded-xl hover:bg-emerald-900/50 transition-all w-full sm:w-auto">
                                Find a Cause
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* What is a Giving Circle? */}
            <Section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        What is a Giving Circle?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        A <strong>Giving Circle</strong> is a form of participatory philanthropy where individuals pool their resources—time, money, and skills—to donate to a cause they care about. By giving together, we amplify our impact, turning small individual contributions into life-changing support for communities in need.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="p-6 bg-emerald-50 rounded-2xl">
                            <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Connect</h3>
                            <p className="text-gray-600">Join like-minded individuals who share your passion for social change.</p>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-2xl">
                            <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Contribute</h3>
                            <p className="text-gray-600">Pool donations to fund high-impact projects verified by our team.</p>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-2xl">
                            <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Change</h3>
                            <p className="text-gray-600">Witness the tangible impact of your collective generosity.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Why Join The Giving Circle? */}
            <Section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose The Giving Circle?</h2>
                        <p className="mt-4 text-xl text-gray-600">We make social giving transparent, easy, and impactful.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <Shield className="w-8 h-8 text-emerald-600 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">100% Verified NGOs</h3>
                                    <p className="text-gray-600">We personally vet every nonprofit partner to ensure your money reaches the right hands.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Users className="w-8 h-8 text-emerald-600 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
                                    <p className="text-gray-600">Be a "Cause Champion". Lead your own circle and inspire others to give back.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Globe className="w-8 h-8 text-emerald-600 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pan-India Impact</h3>
                                    <p className="text-gray-600">From flood relief in Uttarakhand to animal welfare in Noida, we cover it all.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                srcSet="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80 400w,
                                        https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80 800w"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                alt="Community volunteers focusing on social impact"
                                className="rounded-2xl shadow-2xl"
                                loading="lazy"
                                width="800"
                                height="600"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                                <p className="font-bold text-emerald-800 text-lg">"The Giving Circle transformed how I donate. It feels personal and powerful."</p>
                                <p className="text-gray-500 mt-2 text-sm">- Priya S., Cause Champion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <section className="bg-emerald-900 py-20 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Start Your Circle?</h2>
                    <p className="text-xl text-emerald-100 mb-10">
                        It takes just one person to start a movement. Be that person today.
                    </p>
                    <Link to="/onboarding">
                        <button className="bg-white text-emerald-900 font-bold text-lg px-10 py-5 rounded-full hover:bg-emerald-50 transition-all shadow-lg transform hover:-translate-y-1">
                            Become a Cause Champion
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default GivingCircleLanding;
