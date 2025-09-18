import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Badge, CheckCircle } from 'lucide-react';

interface ImpactCardProps {
  id: string;
  title: string;
  description: string;
  ngoName: string;
  championName: string;
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
          className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover hover:scale-105 transition-transform duration-300"
        />
        {verified && (
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
            <CheckCircle className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline"> Verified</span>
            <span className="sm:hidden">Verified</span>
          </div>
        )}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
          {location}
        </div>
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 flex flex-col h-[calc(100%-10rem)] sm:h-[calc(100%-11rem)] md:h-[calc(100%-12rem)] lg:h-[calc(100%-13rem)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Badge className="w-4 h-4 text-purple-600" />
            <span className="text-xs sm:text-sm font-medium text-purple-600 truncate">{ngoName}</span>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-pink-600">{impactNumber.toLocaleString()}</div>
            <div className="text-xs text-gray-500">{impactUnit}</div>
          </div>
        </div>
        
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3 flex-grow leading-relaxed">
          {description}
        </p>
        
        {/* <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {championName.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-500">Champion</div>
              <div className="text-sm font-medium text-gray-900 truncate">{championName}</div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-purple-600 hover:text-purple-700 flex-shrink-0 ml-2"
            onClick={() => {}}
          >
            <span className="hidden sm:inline">View Story</span>
            <span className="sm:hidden">View</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div> */}
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
      description: 'Empowering women through skill development, entrepreneurship training, and financial literacy programs across Uttarakhand.',
      ngoName: 'JWP',
      championName: 'Meera Singh',
      impactNumber: 1000,
      impactUnit: 'Women Empowered',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183056/images/jwp/_DSC9767.jpg',
      verified: true,
      location: 'Uttarakhand',
    },
    {
      id: '2',
      title: 'Pawsitive Protectors',
      description: 'Comprehensive animal protection program focusing on rescue operations, medical care, and community awareness for street animals.',
      ngoName: 'Animal Care',
      championName: 'Dr. Sunita Reddy',
      impactNumber: 1500,
      impactUnit: 'Animals Helped',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183019/images/animal-protect/animal14.jpg',
      verified: true,
      location: 'Mumbai',
    },
    {
      id: '3',
      title: 'Pads for Freedom',
      description: 'Providing free sanitary pads and menstrual hygiene education to ensure dignity and continued education.',
      ngoName: 'KHUSHII',
      championName: 'Dr. Meera Singh',
      impactNumber: 2000,
      impactUnit: 'Girls & Women Served',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183100/images/khushi/20.jpg',
      verified: true,
      location: 'Delhi',
    },
    {
      id: '4',
      title: 'Bowls of Hope',
      description: 'Daily feeding program for street dogs and cats, providing nutritious meals and basic veterinary care.',
      ngoName: 'Animal Care',
      championName: 'Dr. Sunita Reddy',
      impactNumber: 2000,
      impactUnit: 'Meals Served / Day',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
      verified: true,
      location: 'Chennai',
    },
    {
      id: '5',
      title: 'Flood Relief in Uttarakhand',
      description: 'Emergency shelter, food, medical aid, and rehabilitation support to flood-affected communities in Uttarakhand.',
      ngoName: 'GUS',
      championName: 'Prashant Koli',
      impactNumber: 2000,
      impactUnit: 'Families Supported',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
      verified: true,
      location: 'Uttarakhand',
    },
    {
      id: '6',
      title: 'Flood Animal Rescue',
      description: 'Emergency rescue operations and rehabilitation for animals affected by floods in Uttarakhand.',
      ngoName: 'Animal Care',
      championName: 'Field Rescue Team',
      impactNumber: 500,
      impactUnit: 'Animals Rescued',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png',
      verified: true,
      location: 'Uttarakhand',
    },
  ];

  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1024) return 3; // lg
      if (width >= 768) return 2;  // md
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
    <section className="py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <div className="text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto px-4 space-y-4 sm:space-y-5 leading-relaxed md:leading-8 text-center">
            <p>
              We’ve reimagined how to give and the powerful impact it can have when done together.
            </p>
            <p>
              By connecting passionate champions with trusted partners, we’ve built a community where every contribution makes a meaningful difference. Through our united efforts, thousands have discovered that their individual generosity becomes extraordinary when combined with others who share their purpose.
            </p>
            <p>
              Together, we’re not just supporting causes we’re creating lasting change that ripples far beyond what any of us could achieve alone.
            </p>
          </div>
        </motion.div>

        {/* Mobile and Small Tablet Carousel */}
        <div className="lg:hidden relative overflow-hidden mb-8">
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
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-purple-600 w-6 sm:w-8' 
                    : 'bg-gray-300 hover:bg-purple-300 w-2 sm:w-3'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Large Screen Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 mb-12">
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

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="accent"
            size="lg"
            onClick={() => window.location.href = '/impact-stories'}
            className="group shadow-lg hover:shadow-xl"
          >
            <span className="hidden sm:inline">View All Causes</span>
            <span className="sm:hidden">View All Stories</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};