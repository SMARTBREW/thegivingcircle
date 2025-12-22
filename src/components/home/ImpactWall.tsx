import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Badge, CheckCircle } from 'lucide-react';

interface ImpactCardProps {
  id: string;
  title: string;
  description: string;
  ngoName: string;
  impactNumber: number;
  impactUnit: string;
  image: string;
  verified: boolean;
  location: string;
}


const ImpactCard: React.FC<ImpactCardProps> = ({
  title,
  description,
  ngoName,
  impactNumber,
  impactUnit,
  image,
  verified,
  location,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-56 object-cover hover:scale-105 transition-transform duration-300"
        />
        {verified && (
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center shadow-lg">
            <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
            <span className="hidden sm:inline"> Verified</span>
            <span className="sm:hidden">V</span>
          </div>
        )}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium text-gray-700 shadow-sm">
          {location}
        </div>
      </div>
      
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col min-h-[200px] sm:min-h-[220px] md:min-h-[240px]">
        <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
          <div className="flex items-center space-x-1.5 sm:space-x-2 min-w-0 flex-1">
            <Badge className="w-3 h-3 sm:w-4 sm:h-4 text-green-700 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-green-700 truncate">{ngoName}</span>
          </div>
          <div className="text-right flex-shrink-0 ml-2">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-700 whitespace-nowrap">{impactNumber.toLocaleString()}</div>
            <div className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">{impactUnit}</div>
          </div>
        </div>
        
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-0 line-clamp-3 flex-grow leading-relaxed">
          {description}
        </p>
        
      </div>
    </motion.div>
  );
};

export const ImpactWall: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const impactStories: ImpactCardProps[] = [
    {
      id: '1',
      title: 'Wings of Hope',
      description: 'Empowering girls with menstrual awareness, and providing eco-friendly cloth reusable pads, to keep them in school.',
      ngoName: 'JWP',
      impactNumber: 22418,
      impactUnit: 'Girls Empowered',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183056/images/jwp/_DSC9767.jpg',
      verified: true,
      location: 'Noida',
    },
    {
      id: '2',
      title: 'Pawsitive Protectors',
      description: 'Protecting the voiceless street animals and communities with free rabies vaccinations, collaring & deworming.',
      ngoName: 'Animal Care',
      impactNumber: 7126,
      impactUnit: 'Animals Helped',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183019/images/animal-protect/animal14.jpg',
      verified: true,
      location: 'Delhi',
    },
    {
      id: '4',
      title: 'Bowls of Hope',
      description: 'Daily feeding & care program at Animal Care shelters for strays, with nutritious meals and veterinary care.',
      ngoName: 'Animal Care',
      impactNumber: 1859,
      impactUnit: 'Bowls Installed',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
      verified: true,
      location: 'Delhi',
    },
    {
      id: '5',
      title: 'Flood Relief in Uttarakhand',
      description: 'Emergency relief support to affected communities by providing shelter, food, medical aid, and rehabilitation support.',
      ngoName: 'GUS',
      impactNumber: 2400,
      impactUnit: 'Families Supported',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
      verified: true,
      location: 'Uttarakhand',
    },
    {
      id: '6',
      title: 'Emergency Animal Rescue',
      description: 'Emergency rescue & rehabilitation operations for animals affected by floods in Uttarakhand and Punjab.',
      ngoName: 'Animal Care',
      impactNumber: 812,
      impactUnit: 'Animals Rescued',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png',
      verified: true,
      location: 'Delhi',
    },
  ];

  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1024) return 3; // lg - show grid instead
      if (width >= 768) return 2;  // md/tablet
      if (width >= 640) return 2;  // sm
      return 1; // mobile
    }
    return 1;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);
  
  // Update items per page on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(0); // Reset to first page on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(impactStories.length / itemsPerPage);
  
  // Auto-slide carousel every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    } else if (touchStart - touchEnd < -100) {
      // Swipe right
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }
  };


  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2">
            Our Impact Stories
          </h2>
          <div className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto px-3 sm:px-4 md:px-6 space-y-3 sm:space-y-4 md:space-y-5 leading-relaxed md:leading-7 lg:leading-8 text-center">
            <p>
              Discover real impact stories from across India through our verified charity platform.
            </p>
            <p>
              The Giving Circle connects passionate Cause Champions with trusted NGO partners and verified causes India. Our transparent giving platform has created thousands of impact stories, transforming lives through community-driven social impact. Every contribution on our social impact platform creates meaningful change that's verified and documented.
            </p>
            <p>
              Join India's trusted charity platform where community partnerships make a difference. Together, we're creating lasting social change across India through legitimate, accountable giving.
            </p>
          </div>
        </motion.div>

        {/* Mobile and Tablet Carousel */}
        <div className="lg:hidden relative overflow-hidden mb-6 sm:mb-8">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentPage * (100 / itemsPerPage)}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {impactStories.map((story) => (
              <div 
                key={story.id} 
                className={`flex-shrink-0 px-1.5 sm:px-2 md:px-3 ${
                  itemsPerPage === 1 ? 'w-full' : 'w-1/2'
                }`}
              >
                <ImpactCard {...story} />
              </div>
            ))}
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-1.5 sm:space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-1.5 sm:h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-green-600 w-5 sm:w-6 md:w-8' 
                    : 'bg-gray-300 hover:bg-green-300 w-1.5 sm:w-2 md:w-3'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Large Screen Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 xl:gap-6 2xl:gap-8 mb-8 lg:mb-12">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ImpactCard {...story} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};