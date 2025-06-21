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
          className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center mb-6 shadow-lg`}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        
        <div className={`absolute -top-2 -right-2 w-8 h-8 ${color} rounded-full flex items-center justify-center shadow-lg`}>
          <span className="text-white font-bold text-sm">{number}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-text mb-4">{title}</h3>
        <p className="text-text/70 leading-relaxed max-w-sm">{description}</p>
      </motion.div>
      
      {number < 4 && (
        <div className="hidden lg:block absolute top-10 left-full w-32 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-8" />
      )}
    </motion.div>
  );
};

// NGO Partner Logo component
const NGOPartnerLogo: React.FC<{ imagePath: string }> = ({ imagePath }) => {
  return (
    <div className="flex-shrink-0 mx-4 md:mx-8">
      <div className="h-16 w-32 md:h-20 md:w-40 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
        <img src={imagePath} alt="NGO Partner" className="max-h-full max-w-full object-contain" />
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
      icon: <UserPlus className="w-10 h-10 text-white" />,
      title: 'Join as Champion',
      description: 'Sign up with your mobile number and tell us about the causes you care about most.',
      color: 'bg-primary-500',
    },
    {
      icon: <Building2 className="w-10 h-10 text-white" />,
      title: 'NGO Executes',
      description: 'Our verified NGO partners execute impactful projects with your support and guidance.',
      color: 'bg-primary-600',
    },
    {
      icon: <Camera className="w-10 h-10 text-white" />,
      title: 'Story Documented',
      description: 'Real impact is captured through photos, videos, and testimonials from beneficiaries.',
      color: 'bg-accent-500',
    },
    {
      icon: <Award className="w-10 h-10 text-white" />,
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
        animation: marquee 20s linear infinite;
      }
      .animate-marquee:hover {
        animation-play-state: paused;
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
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text mb-6">
            How It{' '}
            <span className="gradient-text">
              Works
            </span>
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            From champion to verified impact story - every step is transparent, documented, and meaningful.
            Join thousands who have already created lasting change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div 
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text mb-4">
              Ready to Start Your Impact Journey?
            </h3>
            <p className="text-lg text-text/70 mb-8 max-w-2xl mx-auto">
              Join our community of changemakers and see your compassion transform into documented impact stories.
            </p>
            <Button
              variant="accent"
              size="lg"
              onClick={() => window.location.href = '/onboarding'}
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
          className="mt-24 text-center"
        >
          <h3 className="text-xl text-text/70 mb-12 uppercase tracking-wider font-medium">
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
      </div>
    </section>
  );
};