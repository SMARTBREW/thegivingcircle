import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Badge, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CloudinaryImage from '../ui/CloudinaryImage';

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
  id,
  title,
  description,
  ngoName,
  impactNumber,
  impactUnit,
  image,
  verified,
  location,
}) => {
  // Map story IDs to their detail page routes
  const routeMap: { [key: string]: string } = {
    '1': '/khushi-cause-details',
    '2': '/pawsitive-protectors-cause-details',
    '4': '/bowls-of-hope-cause-details',
    '5': '/flood-relief-cause-details',
    '6': '/flood-animal-rescue-cause-details',
  };

  const detailRoute = routeMap[id] || '/live-causes';

  return (
    <Link 
      to={detailRoute}
      className="block h-full"
      aria-label={`View details about ${title} - ${impactNumber.toLocaleString()} ${impactUnit}`}
    >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
        className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white cursor-pointer group"
    >
      <div className="relative">
        <CloudinaryImage
          src={image}
          alt={title}
          className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover hover:scale-105 transition-transform duration-300"
          width={637}
          height={288}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
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
      
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
        <div className="flex items-center justify-between mb-2 sm:mb-3 gap-1.5 sm:gap-2">
          <div className="flex items-center space-x-1.5 sm:space-x-2 min-w-0 flex-1">
            <Badge className="w-3 h-3 sm:w-4 sm:h-4 text-green-700 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-green-700 truncate break-words">{ngoName}</span>
          </div>
          <div className="text-right flex-shrink-0 ml-1 sm:ml-2">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-700 whitespace-nowrap">{impactNumber.toLocaleString()}</div>
            <div className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">{impactUnit}</div>
          </div>
        </div>
        
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2 leading-tight break-words">
          {title}
        </h3>
        
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-0 line-clamp-3 flex-grow leading-relaxed break-words">
          {description}
        </p>
        
        <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-100">
          <span className="text-xs sm:text-sm text-green-700 font-medium group-hover:underline">
            Learn More →
          </span>
        </div>
      </div>
    </motion.div>
    </Link>
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

  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1024) return 3;
      if (width >= 768) return 2; 
      if (width >= 640) return 2;
      return 1;
    }
    return 1;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const totalPages = Math.ceil(impactStories.length / itemsPerPage);
  
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
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    } else if (touchStart - touchEnd < -100) {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }
  };


  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
            Our Impact Stories
          </h2>
          <div className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-6 space-y-3 sm:space-y-4 md:space-y-5 leading-relaxed text-center break-words">
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

        <div className="lg:hidden relative overflow-hidden mb-4 sm:mb-6 md:mb-8">
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
                className={`flex-shrink-0 px-2 sm:px-3 ${
                  itemsPerPage === 1 ? 'w-full' : 'w-1/2'
                }`}
              >
                <ImpactCard {...story} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-3 sm:mt-4 md:mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className="relative transition-all duration-300"
                aria-label={`Go to page ${index + 1}`}
                style={{ minWidth: '44px', minHeight: '44px', padding: '20px 0' }}
              >
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-green-600 w-6 sm:w-8' 
                    : 'bg-gray-300 hover:bg-green-300 w-2 sm:w-3'
                }`} />
              </button>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-4 xl:gap-6">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <Link
            to="/live-causes"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Browse all live causes and support social causes in India"
          >
            <span className="text-sm sm:text-base md:text-lg">View All Live Causes</span>
            <span className="ml-2 text-lg sm:text-xl">→</span>
          </Link>
          <p className="mt-4 text-xs sm:text-sm text-gray-600">
            Explore more verified causes and create impact through our{' '}
            <Link to="/impact-stories" className="text-green-700 hover:underline font-medium">
              impact stories
            </Link>
            {' '}or{' '}
            <Link to="/the-giving-circle" className="text-green-700 hover:underline font-medium">
              learn about our platform
            </Link>
          </p>
        </motion.div>

      </div>
    </section>
  );
};