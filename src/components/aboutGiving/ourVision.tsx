import { Target, Globe, Heart, Users, ArrowRight, CheckCircle, Award, Shield } from 'lucide-react';

export default function MissionVisionPage() {
  const coreValues = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Complete visibility into every donation and its impact"
    },
    {
      icon: Award,
      title: "Accountability",
      description: "Rigorous verification of all philanthropic activities"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Unwavering commitment to ethical practices"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building bridges between donors and beneficiaries"
    }
  ];

  const impactStats = [
    { value: "100%", label: "Donation Transparency" },
    { value: "24/7", label: "Impact Tracking" },
    { value: "∞", label: "Community Reach" },
    { value: "1:1", label: "Verified Impact" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Core{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These fundamental principles guide every decision we make and every action we take 
              in our mission to transform philanthropy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:bg-gray-50 rounded-xl p-4 sm:p-6 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mb-4 sm:mb-6 group-hover:from-purple-700 group-hover:to-pink-700 transition-colors duration-300">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> 

      {/* Mission Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                To revolutionize philanthropy by creating the world's most transparent and accountable 
                giving platform, where every donation creates measurable impact and builds lasting 
                connections between donors and communities.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">Eliminate uncertainty in charitable giving through complete transparency</p>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">Provide real-time tracking of donation impact and outcomes</p>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">Foster meaningful relationships between donors and beneficiaries</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Impact by the Numbers</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">A World Transformed</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 sm:mt-3"></div>
                    <p className="text-sm sm:text-base text-gray-700">Every charitable organization operates with complete transparency</p>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 sm:mt-3"></div>
                    <p className="text-sm sm:text-base text-gray-700">Donors see exactly how their contributions create change</p>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 sm:mt-3"></div>
                    <p className="text-sm sm:text-base text-gray-700">Communities are empowered through direct connection with supporters</p>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 sm:mt-3"></div>
                    <p className="text-sm sm:text-base text-gray-700">Philanthropy becomes a catalyst for sustainable development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mb-4 sm:mb-6">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                We envision a world where philanthropy is completely transparent, deeply impactful, 
                and universally trusted. A future where every act of giving creates a ripple effect 
                of positive change that extends far beyond the initial donation.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Through technology and innovation, we're building the foundation for a new era of 
                giving—one where donors, organizations, and communities work together in perfect 
                harmony to solve the world's most pressing challenges.
              </p>
              <div className="inline-flex items-center text-purple-600 font-medium text-sm sm:text-base">
                <span>Join us in this vision</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>   
    </div>
  );
}