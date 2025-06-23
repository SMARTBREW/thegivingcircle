import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Heart,
  ArrowRight,
  DollarSign,
  Users,
  Target,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  MapPin,
  Share2,
  User2,
  Users2,
} from "lucide-react";

type Campaign = {
  id: number;
  // ...other properties if needed
};

const FUNDRAISING_DATA = [
  {
    id: 1,
    title: "Help Save Lives Through Medical Care",
    description: "Every donation brings hope to families facing medical emergencies. Your contribution directly funds life-saving treatments and gives patients a fighting chance for recovery.",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/how-to-start-an-ngo-175922739-16x9_0.jpg?VersionId=buesIO_jv.Z1G3PFC7JPztLdZ8qtdHUA&size=690:388",
    category: "Medical Emergency",
    fullDescription: "In hospitals across our region, families are facing impossible choices between financial stability and life-saving medical care. This campaign directly funds emergency surgeries, cancer treatments, and critical medical procedures for those who cannot afford them. Every dollar donated goes directly to covering medical bills, purchasing essential medications, and providing post-treatment care support. We work with verified medical institutions to ensure transparency and maximum impact.",
    raised: 45750,
    goal: 100000,
    donors: 234,
    daysLeft: 15,
    location: "Regional Medical Centers",
    organizer: "Healthcare Heroes Foundation",
    updates: [
      "Successfully funded 12 emergency surgeries this month",
      "Partnered with 3 additional hospitals",
      "Provided medication support to 45 families",
    ],
  },
  {
    id: 2,
    title: "Education for Underprivileged Children",
    description: "Break the cycle of poverty through education. Your support provides books, uniforms, and school supplies to children who dream of a brighter future but lack the resources.",
    image: "https://savioursfoundation.org/wp-content/uploads/2021/01/ngo-1024x768.jpg",
    category: "Education",
    fullDescription: "Education is the most powerful weapon against poverty, but thousands of children in our communities lack access to basic school supplies, uniforms, and learning materials. This campaign provides comprehensive educational support including textbooks, writing materials, school uniforms, nutritious meals, and after-school tutoring programs. We also fund teacher training programs and classroom infrastructure improvements.",
    raised: 28500,
    goal: 75000,
    donors: 156,
    daysLeft: 22,
    location: "Rural Schools Network",
    organizer: "Education For All Initiative",
    updates: [
      "Equipped 8 classrooms with new learning materials",
      "Provided school uniforms to 120 children",
      "Launched weekend tutoring program",
    ],
  },
  {
    id: 3,
    title: "Disaster Relief for Affected Families",
    description: "When natural disasters strike, families lose everything. Your donation provides emergency shelter, food, clean water, and helps rebuild communities from the ground up.",
    image: "https://www.workaway.info/gfx/landingpages/ngo_4.jpg",
    category: "Disaster Relief",
    fullDescription: "Recent natural disasters have left thousands of families homeless and without basic necessities. This emergency relief campaign provides immediate assistance including temporary shelters, emergency food supplies, clean drinking water, medical aid, and clothing. We also focus on long-term recovery by helping families rebuild their homes and restore their livelihoods through job training and small business support.",
    raised: 67200,
    goal: 150000,
    donors: 412,
    daysLeft: 8,
    location: "Disaster-Affected Regions",
    organizer: "Emergency Response Coalition",
    updates: [
      "Provided emergency shelter to 200+ families",
      "Distributed food packages to 500 households",
      "Set up mobile medical clinics in 5 locations",
    ],
  },
  {
    id: 4,
    title: "Clean Water for Rural Communities",
    description: "Access to clean water shouldn't be a luxury. Help us build wells and water purification systems in remote villages where families walk miles for clean drinking water.",
    image: "https://i.pinimg.com/originals/89/d2/df/89d2df3b22deb8589bbbc0b3dbab5b88.jpg",
    category: "Water Crisis",
    fullDescription: "Over 2 billion people worldwide lack access to clean drinking water at home. In remote villages, women and children walk hours daily to collect water that's often contaminated. This campaign funds the construction of deep-water wells, solar-powered water purification systems, and community water storage facilities. We also provide water quality testing and maintenance training to ensure long-term sustainability.",
    raised: 34800,
    goal: 90000,
    donors: 198,
    daysLeft: 30,
    location: "Remote Villages, Sub-Saharan Africa",
    organizer: "Water Access Foundation",
    updates: [
      "Completed 3 wells serving 1,200 people",
      "Installed solar purification systems",
      "Trained 25 local water technicians",
    ],
  },
  {
    id: 5,
    title: "Food Security for Hungry Families",
    description: "No child should go to bed hungry. Your support provides nutritious meals, food packages, and sustainable farming solutions to communities facing food insecurity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQH0Rn9T2TN-mI-beUbFMAeZ7ug39LSys7A&s",
    category: "Hunger Relief",
    fullDescription: "Food insecurity affects millions of families globally, with children being the most vulnerable. This comprehensive program provides immediate relief through food distributions while building long-term solutions. We supply nutritious meal packages, support community gardens, provide farming equipment and seeds, and offer agricultural training. Our school feeding programs ensure children receive at least one nutritious meal daily.",
    raised: 52300,
    goal: 120000,
    donors: 289,
    daysLeft: 18,
    location: "Food-Insecure Communities",
    organizer: "Global Nutrition Network",
    updates: [
      "Fed 2,000 children through school programs",
      "Established 15 community gardens",
      "Distributed farming kits to 100 families",
    ],
  },
  {
    id: 6,
    title: "Healthcare for Remote Villages",
    description: "Bring medical care to the doorsteps of those who need it most. Fund mobile clinics, medicines, and healthcare workers serving in the most remote and underserved areas.",
    image: "https://media.istockphoto.com/id/535555239/photo/happy-indian-school-children.jpg?s=612x612&w=0&k=20&c=fcpTUHiHJuaeRS-xHJy4oOflwKpBooiPecyewzohvhk=",
    category: "Healthcare Access",
    fullDescription: "In remote areas, the nearest hospital can be hundreds of miles away. Our mobile healthcare program brings medical services directly to underserved communities. We operate mobile clinics equipped with diagnostic tools, provide vaccinations, maternal healthcare, and chronic disease management. The program also trains community health workers and establishes telemedicine connections to specialist doctors.",
    raised: 41600,
    goal: 95000,
    donors: 167,
    daysLeft: 25,
    location: "Remote Rural Areas",
    organizer: "Mobile Health Alliance",
    updates: [
      "Served 3,500 patients in remote areas",
      "Completed 200 vaccinations this month",
      "Trained 30 community health workers",
    ],
  },
  {
    id: 7,
    title: "Animal Rescue and Rehabilitation",
    description: "Rescue, heal, and find loving homes for abandoned and injured animals. Your donation covers veterinary care, shelter, food, and rehabilitation for animals in need.",
    image: "https://annamrita.org/wp-content/uploads/2023/03/Feeding-India-How-Food-NGOs-Support-Indias-Fight-Against-Hunger_.jpg",
    category: "Animal Welfare",
    fullDescription: "Thousands of animals suffer from abandonment, abuse, and neglect every day. Our comprehensive animal rescue program provides emergency veterinary care, rehabilitation services, temporary shelter, and adoption services. We also run spay/neuter programs to control pet overpopulation and educational campaigns to promote responsible pet ownership. Every rescued animal receives medical care, behavioral training, and love until they find their forever home.",
    raised: 23400,
    goal: 60000,
    donors: 312,
    daysLeft: 35,
    location: "Regional Animal Shelters",
    organizer: "Paws & Hearts Rescue",
    updates: [
      "Rescued and treated 85 animals this quarter",
      "Found homes for 42 pets",
      "Completed 150 spay/neuter procedures",
    ],
  },
];

const FundraisingHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentCampaign = useMemo(() => FUNDRAISING_DATA[currentIndex], [currentIndex]);

  const formatCurrency = useCallback((amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  }, []);

  const getProgressPercentage = useCallback((raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  }, []);

  const handleCardClick = useCallback((campaign: { id: number }) => {
    const newIndex = FUNDRAISING_DATA.findIndex(c => c.id === campaign.id);
    if (newIndex === currentIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  }, [currentIndex]);

  const handleHeroClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleBecomChampion = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.location.href = '/onboarding';
  }, []);

  const handlePartnerNGO = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.location.href = '/ngo-partner';
  }, []);

  // Auto-rotate campaigns
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % FUNDRAISING_DATA.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate campaigns for infinite scroll
  const duplicatedCampaigns = useMemo(() => [...FUNDRAISING_DATA, ...FUNDRAISING_DATA], []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 cursor-pointer transition-all duration-300 hover:scale-105" onClick={handleHeroClick}>
        <div
          className="absolute inset-0 transition-opacity duration-800"
          style={{
            backgroundImage: `url(${currentCampaign.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: isTransitioning ? 0 : 1,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20 sm:pb-40 cursor-pointer min-h-screen" onClick={handleHeroClick}>
        {/* Top Section - Badge and Title */}
        <div className="max-w-2xl ml-0 space-y-4 sm:space-y-6 lg:space-y-8 mt-8 sm:mt-16 lg:mt-20">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-sm border border-purple-500/30 animate-slide-in-left">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
            {currentCampaign.category} • Urgent • Verified
          </div>

          {/* Title */}
          <div className="relative h-20 sm:h-32 lg:h-40 overflow-hidden">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight absolute inset-0 transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}>
              {currentCampaign.title}
            </h1>
          </div>
        </div>

        {/* Bottom Section - Description, Buttons, and Helper Text */}
        <div className="max-w-2xl ml-0 space-y-6 sm:space-y-8 mb-12 sm:mb-0">
          {/* Description */}
          <div>
            <p className={`text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed transition-all duration-500 delay-100 ${isTransitioning ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}>
              {currentCampaign.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-in-up">
            <button
              onClick={handleBecomChampion}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Users2 className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Become a Champion</span>
            </button>

            <button
              onClick={handlePartnerNGO}
              className="group bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Partner as NGO</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-white/60 text-xs sm:text-sm animate-fade-in-delayed font-bold">
            ✨ Click anywhere to learn more about this cause
          </p>
        </div>
      </div>

      {/* Desktop Scrolling Cards */}
      <div className="hidden md:block absolute right-8 top-3/4 transform -translate-y-1/4 z-30 w-3/4 max-w-3xl">
        <div className="relative flex items-center">
          <button className="absolute left-0 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button className="absolute right-0 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110">
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mx-12 w-full">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

              <div className="overflow-hidden">
                <div className="flex space-x-3 animate-scroll-horizontal">
                  {duplicatedCampaigns.map((campaign, index) => (
                    <div
                      key={`${campaign.id}-${index}`}
                      onClick={() => handleCardClick(campaign)}
                      className={`relative flex-shrink-0 w-48 h-28 rounded-lg overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                        currentCampaign.id === campaign.id
                          ? "ring-2 ring-purple-500 shadow-2xl shadow-purple-500/25"
                          : "hover:shadow-xl"
                      }`}
                    >
                      <img
                        src={campaign.image}
                        alt={campaign.category}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="text-white text-sm font-semibold line-clamp-2">
                          {campaign.title.split(" ").slice(0, 4).join(" ")}...
                        </div>
                      </div>

                      {currentCampaign.id === campaign.id && (
                        <div className="absolute top-2 right-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-lg" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Carousel Indicators */}
      <div className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {FUNDRAISING_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-modal-appear" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="relative">
              <img
                src={currentCampaign.image}
                alt={currentCampaign.title}
                className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-2xl" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-4 sm:left-6 right-4 sm:right-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {currentCampaign.category}
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                    Verified Campaign
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  {currentCampaign.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    {formatCurrency(currentCampaign.raised)}
                  </span>
                  <span className="text-sm sm:text-base text-gray-600">
                    of {formatCurrency(currentCampaign.goal)} goal
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out animate-progress-bar"
                    style={{
                      width: `${getProgressPercentage(currentCampaign.raised, currentCampaign.goal)}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                  <span>{currentCampaign.donors} donors</span>
                  <span>{currentCampaign.daysLeft} days left</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <User2 className="h-5 w-5" />
                  <span>Become a Champion</span>
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <Share2 className="h-5 w-5" />
                  <span>Share Campaign</span>
                </button>
              </div>

              {/* Campaign Details */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    About This Campaign
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {currentCampaign.fullDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Campaign Info
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">Organizer</p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {currentCampaign.organizer}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">Location</p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {currentCampaign.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">Days Left</p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {currentCampaign.daysLeft} days remaining
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Updates */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Recent Updates
                </h3>
                <div className="space-y-3">
                  {currentCampaign.updates.map((update, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 text-sm sm:text-base">{update}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-1400px); }
        }
        @keyframes modal-appear {
          from { opacity: 0; transform: scale(0.8) translateY(50px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes progress-bar {
          from { width: 0; }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-delayed { animation: fade-in 1s ease-out 1s both; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out 0.6s both; }
        .animate-scroll-horizontal { animation: scroll-horizontal 30s linear infinite; width: 200%; }
        .animate-modal-appear { animation: modal-appear 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .animate-progress-bar { animation: progress-bar 1s ease-out 0.3s both; }
      `}</style>
    </div>
  );
};

export default FundraisingHero;