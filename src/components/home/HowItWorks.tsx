import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Building2, Camera, Award } from 'lucide-react';
import { Button } from '../ui/Button';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      <motion.div 
        className="flex flex-col items-center text-center"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl ${color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white">
            {icon}
          </div>
        </motion.div>
        
        <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 ${color} rounded-full flex items-center justify-center shadow-lg`}>
          <span className="text-white font-bold text-xs sm:text-sm">{number}</span>
        </div>
        
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold text-text mb-3 sm:mb-4 px-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-base text-text/70 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm px-2">
          {description}
        </p>
      </motion.div>
      
      {/* Connection line - hidden on mobile, visible on larger screens */}
      {number < 4 && (
        <>
          {/* Horizontal line for lg+ screens */}
          <div className="hidden lg:block absolute top-8 md:top-10 lg:top-12 left-full w-16 xl:w-24 2xl:w-32 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4 lg:translate-x-8" />
          
          {/* Vertical line for md screens */}
          <div className="hidden md:block lg:hidden absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-0.5 translate-y-4" />
        </>
      )}
    </motion.div>
  );
};

// NGO Partner Logo component
const NGOPartnerLogo: React.FC<{ imagePath: string }> = ({ imagePath }) => {
  return (
    <div className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-6 xl:mx-8">
      <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 lg:h-18 lg:w-36 xl:h-20 xl:w-40 bg-white rounded-md sm:rounded-lg shadow-md flex items-center justify-center p-1 sm:p-2">
        <img 
          src={imagePath} 
          alt="NGO Partner" 
          className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
        />
      </div>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const ngoSliderRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: <UserPlus className="w-full h-full" />,
      title: 'Join as Champion',
      description: 'Sign up with your mobile number and tell us about the causes you care about most.',
      color: 'bg-primary-500',
    },
    {
      icon: <Building2 className="w-full h-full" />,
      title: 'NGO Executes',
      description: 'Our verified NGO partners execute impactful projects with your support and guidance.',
      color: 'bg-primary-600',
    },
    {
      icon: <Camera className="w-full h-full" />,
      title: 'Story Documented',
      description: 'Real impact is captured through photos, videos, and testimonials from beneficiaries.',
      color: 'bg-accent-500',
    },
    {
      icon: <Award className="w-full h-full" />,
      title: 'NFT Published',
      description: 'Your impact story is verified and published as an NFT, creating permanent proof of change.',
      color: 'bg-accent-600',
    },
  ];

  const ngoPartners = [
    { imagePath: "/khushii.jpg" },
    { imagePath: "/JWP.jpg" },
    { imagePath: "/Animal care.jpg" },
    { imagePath: "/mamta.jpg" },
    { imagePath: "/kokan.jpg" }
  ];

  // Auto-slide functionality
  useEffect(() => {
    let slideInterval: ReturnType<typeof setInterval>;
    
    if (!isTouching) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          const nextSlide = (prevSlide + 1) % ngoPartners.length;
          
          // Scroll to the next slide
          if (ngoSliderRef.current) {
            const slideWidth = ngoSliderRef.current.scrollWidth / ngoPartners.length;
            ngoSliderRef.current.scrollTo({
              left: nextSlide * slideWidth,
              behavior: 'smooth'
            });
          }
          
          return nextSlide;
        });
      }, 3000); // Change slide every 3 seconds
    }
    
    return () => {
      if (slideInterval) clearInterval(slideInterval);
    };
  }, [isTouching, ngoPartners.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    // For mobile slider effect
    if (ngoSliderRef.current && isTouching) {
      const slider = ngoSliderRef.current;
      const touchDiff = touchStart - e.targetTouches[0].clientX;
      
      // Apply the scroll based on touch movement
      if (slider) {
        slider.scrollLeft += touchDiff / 5;
      }
    }
  };
  
  const handleTouchEnd = () => {
    setIsTouching(false);
    
    // Calculate which slide to snap to after touch ends
    if (ngoSliderRef.current) {
      const slider = ngoSliderRef.current;
      const slideWidth = slider.scrollWidth / ngoPartners.length;
      const currentScrollPosition = slider.scrollLeft;
      const newSlideIndex = Math.round(currentScrollPosition / slideWidth);
      
      setCurrentSlide(newSlideIndex);
      
      // Snap to the closest slide
      slider.scrollTo({
        left: newSlideIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  // Function to scroll to a specific slide
  const scrollToSlide = (index: number) => {
    if (ngoSliderRef.current) {
      const slideWidth = ngoSliderRef.current.scrollWidth / ngoPartners.length;
      ngoSliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  // Add the marquee styles to the document head
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement('style');
    
    // Add the keyframes and classes
    styleEl.innerHTML = `
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-33.333%);
        }
      }
      .animate-marquee {
        animation: marquee 15s linear infinite;
      }
      .animate-marquee:hover {
        animation-play-state: paused;
      }
      
      /* Responsive marquee speeds */
      @media (max-width: 640px) {
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      }
      
      @media (min-width: 1024px) {
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      }
    `;
    
    // Append to the head
    document.head.appendChild(styleEl);
    
    // Cleanup
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text mb-4 sm:mb-6 md:mb-8 px-4">
            How It{' '}
            <span className="gradient-text">
              Works
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl text-text/70 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed">
            From champion to verified impact story - every step is transparent, documented, and meaningful.
            Join thousands who have already created lasting change.
          </p>
        </motion.div>

        {/* Steps Grid - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-6 xl:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              color={step.color}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mx-4 sm:mx-0"
        >
          <motion.div 
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-display font-bold text-text mb-3 sm:mb-4 md:mb-6 px-2">
              Ready to Start Your Impact Journey?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg text-text/70 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 leading-relaxed">
              Join our community of changemakers and see your compassion transform into documented impact stories.
            </p>
            <Button
              variant="accent"
              size="lg"
              onClick={() => window.location.href = '/onboarding'}
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5"
            >
              Become a Champion Today
            </Button>
          </motion.div>
        </motion.div>

        {/* Trusted by NGO Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 text-center"
        >
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-text/70 mb-8 sm:mb-10 md:mb-12 lg:mb-16 uppercase tracking-wider font-medium px-4">
            Trusted by NGO Partners
          </h3>
          
          {/* Marquee animation for NGO partners */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex">
              {/* First set */}
              {ngoPartners.map((partner, index) => (
                <NGOPartnerLogo 
                  key={`set1-${index}`} 
                  imagePath={partner.imagePath} 
                />
              ))}
              {/* Second set */}
              {ngoPartners.map((partner, index) => (
                <NGOPartnerLogo 
                  key={`set2-${index}`} 
                  imagePath={partner.imagePath} 
                />
              ))}
              {/* Third set */}
              {ngoPartners.map((partner, index) => (
                <NGOPartnerLogo 
                  key={`set3-${index}`} 
                  imagePath={partner.imagePath} 
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Slide Indicators */}
        {/* <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:hidden">
          {ngoPartners.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-primary-500 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};