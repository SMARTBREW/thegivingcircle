import { Target, Globe, Heart, Users, CheckCircle, Award, Shield } from 'lucide-react';

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
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">
              Why Giving Matters - Our Core Values
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed break-words">
              These fundamental principles guide every decision we make on our social impact platform India. They define our giving philosophy and drive our mission to transform community giving through transparency and community-driven social impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-green-700 rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-6 group-hover:bg-green-800 transition-colors duration-300">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 break-words">{value.title}</h3>
                <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm leading-relaxed break-words">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> 

      <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed break-words">
                Our mission is to revolutionize community giving by creating India's most transparent and accountable 
                Cause Champions platform, where every donation creates measurable community-driven social impact and builds lasting 
                connections between Cause Champions and communities. We enable social change through giving on our trusted community empowerment platform.
              </p>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Eliminate uncertainty in community giving through complete transparency on The Giving Circle India</p>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Provide real-time tracking of community impact and social change through our community impact platform</p>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Foster meaningful relationships between Cause Champions and beneficiaries through community-driven social impact</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">Impact by the Numbers</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 mb-1 sm:mb-2 break-words">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 break-words">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">A World Transformed Through Community Giving</h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 sm:mt-2 md:mt-3 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Every charitable organization on The Giving Circle operates with complete transparency and verified impact</p>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-1.5 sm:mt-2 md:mt-3 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Cause Champions see exactly how their contributions create social change through our community impact platform</p>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 md:mt-3 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Communities are empowered through direct connection with Cause Champions on our community empowerment platform</p>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 sm:mt-2 md:mt-3 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Community giving becomes a catalyst for sustainable development and community-driven social impact</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed break-words">
                Our vision is a world where community giving is completely transparent, deeply impactful, 
                and universally trusted. A future where every Cause Champion creates social change through giving, generating a ripple effect 
                of community-driven social impact that extends far beyond the initial donation.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed break-words">
                Through our social impact platform India, we're building the foundation for a new era of 
                community giving—one where Cause Champions, organizations, and communities work together in perfect 
                harmony to solve India's most pressing challenges. This is why giving matters and why community giving matters.
              </p>
            </div>
          </div>
        </div>
      </section>   
    </div>
  );
}