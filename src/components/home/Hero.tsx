import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Users2,
} from "lucide-react";
import PrimaryButton from '../ui/PrimaryButton';
import CloudinaryImage from '../ui/CloudinaryImage';
import { AnimatedSection } from '../AnimatedSection';

const FUNDRAISING_DATA = [
  {
    id: 1,
    title: "Wings of Hope",
    description: "Inspired change-makers are taking it upon themselves to ensure underprivileged girls don’t  drop out of school when they start menstruating. Their mission is simple yet powerful: keeping girls in school. Period.",
    image: "https://res.cloudinary.com/dcdhhylin/image/upload/v1758200608/images/_DSC9857.jpg",
    category: "Education • Health • Empowerment",
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
    description: "Fighting rabies together! Your support helps protect street animals and our communities by providing Free Vaccinations. Join India's ‘Zero Deaths by 2030 Mission’. Every shot saves lives!",
    image: "https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg",
    category: "Animal Welfare • Community • Vaccination",
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
    id: 4,
    title: "Bowls of Hope",
    description: "Give life with each bowl! Be a kind-hearted Cause Champion and help to fill empty bowls for voiceless shelter animals. Your compassion brings hope to vulnerable lives, transforming hunger into healing.",
    image: "https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg",
    category: "Animal Welfare • Nutrition • Shelter",
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
    title: "Disaster Relief in Uttarakhand",
    description: "Providing critical relief to flood & landslide affected families. Your support delivers life sustaining supplies - food, medical aid, rescue and rehabilitation and also helps in rebuilding schools and homes.",
    image: "https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg",
    category: "Emergency • Disaster Relief • Community",
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
    description: "Thousands of animals are struggling to survive in floodwaters. With your support, we can rescue them from danger, provide food, emergency medical care, and shelter, and even provide dignified final rites to those we cannot save.",
    image: "https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png",
    category: "Emergency • Animal Rescue",
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


  const handleCardClick = useCallback((campaign: { id: number }) => {
    const newIndex = FUNDRAISING_DATA.findIndex(c => c.id === campaign.id);
    if (newIndex === currentIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  }, [currentIndex]);


  const handleBecomChampion = useCallback(() => {
    window.location.href = '/onboarding';
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
          <AnimatedSection direction="left" delay={0.1}>
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-green-700/20 text-green-300 text-xs sm:text-sm font-medium backdrop-blur-sm border border-green-500/30 animate-slide-in-left">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              {currentCampaign.category}
            </div>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection direction="up" delay={0.3}>
            <div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}>
                {currentCampaign.title}
              </h1>
            </div>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection direction="up" delay={0.5}>
            <div>
              <p className={`text-base sm:text-lg md:text-xl text-white/90 leading-relaxed transition-all duration-500 delay-100 ${isTransitioning ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}>
                {currentCampaign.description}
              </p>
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection direction="up" delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-in-up">
              <PrimaryButton
                onClick={handleBecomChampion}
                icon={<Users2 className="h-4 w-4 sm:h-5 sm:w-5" />}
                aria-label="Become a Cause Champion and start your giving circle to support social causes India"
              >
                Become a Cause Champion
              </PrimaryButton>
            </div>
          </AnimatedSection>

        </div>
      </div>

      {/* Desktop Scrolling Cards */}
      <div className="hidden md:block absolute right-8 bottom-32 z-30 w-3/4 max-w-3xl">
        <div className="relative flex items-center">
          {/* Navigation buttons removed - not functional */}

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
                          ? "ring-2 ring-green-700 shadow-2xl shadow-green-700/25"
                          : "hover:shadow-xl"
                      }`}
                    >
                      <CloudinaryImage
                        src={campaign.image}
                        alt={campaign.category}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 192px, 256px"
                        width={256}
                        height={149}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="text-white text-sm font-semibold line-clamp-2">
                          {campaign.title.split(" ").slice(0, 4).join(" ")}...
                        </div>
                      </div>

                      {currentCampaign.id === campaign.id && (
                        <div className="absolute top-2 right-2">
                          <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse shadow-lg" />
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