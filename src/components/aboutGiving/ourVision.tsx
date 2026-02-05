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
        description: "Building a support circle and support community between donors and beneficiaries"
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
              These fundamental principles guide every decision we make on our giving platform and community support platform. They define our giving philosophy and drive our mission to transform community giving, social giving, and community support through transparency. We believe in giving to community, creating a support circle, and providing giving support to communities across India.
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
                Our mission is to revolutionize community giving and social giving by creating India's most transparent and accountable 
                giving platform, where every contribution creates measurable impact through our community support platform. We build lasting 
                connections between Cause Champions and communities, creating a circle of support that enables social causes to support and grow. Through our giving india initiative, we provide giving support, community support, and give and help resources to enable support from community to community. This is supporting india through communities for communities.
              </p>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Eliminate uncertainty in community giving and social giving through complete transparency on our giving platform</p>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Provide real-time tracking of impact for causes to support and supported causes through our community support platform</p>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Foster meaningful relationships between giving community members and beneficiaries, creating support of community and india care initiatives</p>
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
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Every charitable organization on our giving platform operates with complete transparency, offering community causes and social causes to support with verified impact</p>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-1.5 sm:mt-2 md:mt-3 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Our giving community sees exactly how they give through our platform, creating social change and supporting india's most important causes to support</p>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 md:mt-3 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">The india community is empowered through direct connection, creating a circle of support where community support and support from community flows naturally through our community support platform</p>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 sm:mt-2 md:mt-3 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words">Community giving and social giving become catalysts for sustainable development, where communities support each other through circle aid and community helpline resources</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed break-words">
                Our vision is a world where community giving and social giving are completely transparent, deeply impactful, 
                and universally trusted. A future where every member of our giving community creates social change, where community support and support circle initiatives generate a ripple effect 
                that extends far beyond the initial contribution. We envision a world where giving to community is seamless, where communities for communities thrive, and where support from community creates lasting india care.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed break-words">
                Through our giving platform and community support platform, we're building the foundation for a new era of 
                community giving—one where our giving community, organizations, and the india community work together in perfect 
                harmony to support social causes and solve India's most pressing challenges. By providing giving support, circle aid, and community offering resources, we enable supporting india through communities support. This is why giving matters—when we give and help together, we create a strong support community that brings real change.
              </p>
            </div>
          </div>
        </div>
      </section>   
    </div>
  );
}