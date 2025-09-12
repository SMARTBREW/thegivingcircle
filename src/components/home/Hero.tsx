import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  ArrowRight,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  MapPin,
  Share2,
  User2,
  Users2,
} from "lucide-react";

const FUNDRAISING_DATA = [
  {
    id: 1,
    title: "Wings of Hope",
    description: "Giving wings to dreams through education and opportunity. Your contribution provides scholarships, school supplies, and educational resources to children who aspire for a better future.",
    image: "https://i.pinimg.com/originals/89/d2/df/89d2df3b22deb8589bbbc0b3dbab5b88.jpg",
    category: "Education • Empowerment",
    fullDescription: "Education is the foundation of a better future, but many children lack access to quality learning opportunities. Wings of Hope provides scholarships, school supplies, digital learning tools, and mentorship programs to underprivileged students. We support both formal education and skill development, ensuring children can pursue their dreams regardless of their economic background. Every child deserves the chance to soar.",
    raised: 34800,
    goal: 90000,
    donors: 198,
    daysLeft: 30,
    location: "Schools and Communities Nationwide",
    organizer: "JWP",
    updates: [
      "Provided scholarships to 80 students this month",
      "Distributed learning materials to 200 children",
      "Launched digital literacy program in 10 schools",
    ],
  },
  {
    id: 2,
    title: "Pawsitive Protectors",
    description: "Protecting and caring for stray animals in our communities. Your donation funds rescue operations, medical care, food, and shelter for abandoned and injured animals.",
    image: "/images/animals-2.jpeg",
    category: "Animal Welfare • Rescue",
    fullDescription: "Stray animals face daily struggles for survival, from hunger and disease to accidents and abuse. Our comprehensive animal welfare program provides medical care, food, shelter, and adoption services for abandoned and injured animals. We operate mobile veterinary clinics, establish feeding stations, and run sterilization programs to control the stray population humanely. Every animal deserves love, care, and a chance at a better life.",
    raised: 28500,
    goal: 75000,
    donors: 156,
    daysLeft: 22,
    location: "Urban and Rural Communities",
    organizer: "Animal Care",
    updates: [
      "Rescued and treated 45 injured animals this month",
      "Established 12 new feeding stations",
      "Completed 30 sterilization surgeries",
    ],
  },
  {
    id: 3,
    title: "Pads for Freedom",
    description: "Empowering women and girls with access to menstrual hygiene products. Your support provides sanitary pads, education, and breaks the stigma around menstruation in underserved communities.",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/how-to-start-an-ngo-175922739-16x9_0.jpg?VersionId=buesIO_jv.Z1G3PFC7JPztLdZ8qtdHUA&size=690:388",
    category: "Women Empowerment • Health",
    fullDescription: "Menstrual hygiene is a fundamental right, yet millions of women and girls in India lack access to sanitary products, forcing them to miss school and work. This campaign provides free sanitary pads, conducts awareness workshops, and breaks the taboo surrounding menstruation. We distribute pads in schools, rural communities, and urban slums, ensuring no woman has to compromise her dignity or opportunities due to lack of menstrual hygiene products.",
    raised: 45750,
    goal: 100000,
    donors: 234,
    daysLeft: 15,
    location: "Schools and Communities Nationwide",
    organizer: "KHUSHII",
    updates: [
      "Distributed 50,000 sanitary pads this month",
      "Conducted awareness workshops in 25 schools",
      "Reached 1,200 women in rural communities",
    ],
  },
  {
    id: 4,
    title: "Bowls of Hope",
    description: "Filling empty bowls with hope and nutrition for stray animals. Your donation provides daily meals, medical care, and creates feeding stations for hungry animals in need.",
    image: "/images/animal3.webp",
    category: "Animal Welfare • Nutrition",
    fullDescription: "Stray animals often go days without food, leading to malnutrition and suffering. Bowls of Hope creates a network of feeding stations and provides daily nutritious meals for stray dogs, cats, and other animals. We also offer medical care, vaccination programs, and work with local communities to ensure sustainable animal welfare. Every bowl filled represents hope, compassion, and a commitment to animal welfare.",
    raised: 52300,
    goal: 120000,
    donors: 289,
    daysLeft: 18,
    location: "Animal Feeding Stations Nationwide",
    organizer: "Animal Care",
    updates: [
      "Fed 1,500 animals daily this month",
      "Established 20 new feeding stations",
      "Provided medical care to 75 sick animals",
    ],
  },
  {
    id: 5,
    title: "Flood Relief in Uttarakhand",
    description: "Providing immediate relief to flood-affected families in Uttarakhand. Your support delivers emergency supplies, medical aid, and helps rebuild homes destroyed by devastating floods.",
    image: "/images/Uttarakhand-rescue.jpg",
    category: "Disaster Relief • Emergency",
    fullDescription: "Uttarakhand has faced devastating floods that have destroyed homes, displaced families, and left communities without basic necessities. Our emergency response team provides immediate relief including food, clean water, medical supplies, and temporary shelter. We focus on rebuilding infrastructure, restoring livelihoods, and providing psychological support to affected families. Every donation helps bring hope and stability back to these resilient communities.",
    raised: 67200,
    goal: 150000,
    donors: 412,
    daysLeft: 8,
    location: "Uttarakhand Flood-Affected Areas",
    organizer: "GUS",
    updates: [
      "Provided emergency supplies to 300+ families",
      "Rebuilt 15 homes in affected villages",
      "Distributed clean water to 1,000 people",
    ],
  },
  {
    id: 6,
    title: "Flood Animal Rescue",
    description: "Rescuing animals trapped in floodwaters and providing emergency veterinary care. Your support funds rescue boats, medical supplies, and temporary shelters for flood-affected animals.",
    image: "/images/flood-animal.jpg",
    category: "Animal Rescue • Emergency",
    fullDescription: "When floods strike, animals are often the forgotten victims, trapped in rising waters without food or medical care. Our specialized rescue team uses boats and specialized equipment to save animals from floodwaters, providing immediate medical attention, food, and temporary shelter. We work with local veterinarians and animal welfare organizations to ensure rescued animals receive proper care and find loving homes.",
    raised: 41600,
    goal: 95000,
    donors: 167,
    daysLeft: 25,
    location: "Flood-Affected Areas Nationwide",
    organizer: "Animal Care",
    updates: [
      "Rescued 120 animals from floodwaters this month",
      "Provided emergency medical care to 85 animals",
      "Reunited 40 pets with their families",
    ],
  },
];

const FundraisingHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    }, 500);
  }, [currentIndex]);


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
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate campaigns for infinite scroll
  const duplicatedCampaigns = useMemo(() => [...FUNDRAISING_DATA, ...FUNDRAISING_DATA], []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 transition-all duration-500">
        <div
          className="absolute inset-0 transition-opacity duration-1000"
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
      <div className="relative z-20 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20 sm:pb-40 min-h-screen">
        {/* Top Section - Spacer */}
        <div className="max-w-2xl ml-0 space-y-4 sm:space-y-6 lg:space-y-8 mt-8 sm:mt-16 lg:mt-20">
          {/* Empty spacer to maintain layout */}
        </div>

        {/* Bottom Section - Badge, Title, Description, Buttons, and Helper Text */}
        <div className="max-w-2xl ml-0 space-y-6 sm:space-y-8 mb-12 sm:mb-0">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-sm border border-purple-500/30 animate-slide-in-left">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
            {currentCampaign.category} • Verified
          </div>

          {/* Title */}
          <div>
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}>
              {currentCampaign.title}
            </h1>
          </div>

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
              <span>Donate Now</span>
            </button>
          </div>

        </div>
      </div>

      {/* Desktop Scrolling Cards */}
      <div className="hidden md:block absolute right-8 bottom-32 z-30 w-3/4 max-w-3xl">
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
        .animate-fade-in { animation: fade-in 10s ease-out; }
        .animate-fade-in-delayed { animation: fade-in 1s ease-out 1s both; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out 0.6s both; }
        .animate-scroll-horizontal { animation: scroll-horizontal 45s linear infinite; width: 200%; }
        .animate-modal-appear { animation: modal-appear 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .animate-progress-bar { animation: progress-bar 1s ease-out 0.3s both; }
      `}</style>
    </div>
  );
};

export default FundraisingHero;