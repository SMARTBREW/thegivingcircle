import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../types';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      role: 'Cause Champion',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/w_400,h_400,c_fill,g_face,q_auto,f_auto/v1758200608/images/_DSC9857.jpg',
      quote: 'Becoming a Cause Champion through The Giving Circle has been life-changing. Seeing the girls I supported graduate and start businesses is proof of real impact. This trusted charity platform made it possible to witness verified change and create meaningful impact stories.',
      organization: 'Supporting Girls Education Through Community Giving',
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      role: 'NGO Partner Director',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/w_400,h_400,c_fill,g_face,q_auto,f_auto/v1758200608/images/_DSC9857.jpg',
      quote: 'The Giving Circle\'s transparent giving platform and verification process have elevated our social impact work. Cause Champions can see exactly how their support creates real change across India, building trust through community-driven social impact and accountability.',
      organization: 'Verified NGO Partner - Water Warriors Foundation',
    },
    {
      id: '3',
      name: 'Anita Verma',
      role: 'Cause Champion',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/w_400,h_400,c_fill,g_face,q_auto,f_auto/v1758200608/images/_DSC9857.jpg',
      quote: 'This legitimate charity platform gives me verified proof that my donations are making a real difference. I can share impact stories India with friends and inspire them to join our giving circle and support social causes too.',
      organization: 'Youth Skill Development - Community Impact',
    },
    {
      id: '4',
      name: 'Suresh Patel',
      role: 'Community Leader',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/w_400,h_400,c_fill,g_face,q_auto,f_auto/v1758200608/images/_DSC9857.jpg',
      quote: 'Working with The Giving Circle has brought our community together. The champions genuinely care about our progress and celebrate every milestone with us.',
      organization: 'Rural Development Initiative',
    },
    {
      id: '5',
      name: 'Shivashish Maurya',
      role: 'Founder & NGO Partner',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1765531157/images/animal-protect/WhatsApp_Image_2025-12-12_at_14.16.18.jpg',
      quote: 'The Giving Circle social impact platform was crucial in bringing Pawsitive Protectors and Bowls of Hope to life. Their transparent community giving platform connected us with passionate Cause Champions who created real verified impact for animals across India.',
      organization: 'Animal Care - Verified NGO Partner',
    },
  ];

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (!isTouching) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [testimonials.length, isTouching]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    setIsTouching(false);
    if (touchStart - touchEnd > 100) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else if (touchStart - touchEnd < -100) {
      // Swipe right
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            Voices of Change
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed break-words px-2">
            Hear from Cause Champions, trusted NGO partners, and community members whose lives have been transformed through India's community giving platform. Discover verified impact stories and how our social impact platform creates lasting change across India.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <div 
            className="relative min-h-[200px] sm:min-h-[250px] md:min-h-[280px] flex items-center justify-center px-2 sm:px-4"
            ref={testimonialRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto"
              >
                <motion.div 
                  className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl p-3 sm:p-4 md:p-5 lg:p-6 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 15, 0, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4"
                  >
                    <Quote className="w-5 h-5 sm:w-6 md:w-8 lg:w-10 text-green-100" />
                  </motion.div>
                  
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 pt-5 sm:pt-0">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={testimonials[currentIndex].image.includes('w_400') 
                          ? testimonials[currentIndex].image.replace(/w_400(,h_400)?/g, 'w_128,h_128')
                          : testimonials[currentIndex].image.replace(/\/upload\/([^/]+)\//, '/upload/w_128,h_128,c_fill,q_75,f_auto/$1/')
                        }
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 sm:w-14 md:w-16 lg:w-18 rounded-full object-cover shadow-lg border-2 border-white"
                        width="128"
                        height="128"
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.div>
                    
                    <div className="flex-1 text-center sm:text-left w-full">
                      <blockquote className="text-sm sm:text-base md:text-lg text-gray-600 italic leading-relaxed mb-2 sm:mb-3 md:mb-4 px-1 sm:px-0 break-words">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                      
                      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="font-medium text-xs sm:text-sm md:text-base" style={{ color: '#456FA5' }}>
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm break-words">
                          {testimonials[currentIndex].organization}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile swipe indicator */}
          <div className="sm:hidden flex justify-center mt-3 items-center">
            <div className="text-xs text-gray-500 flex items-center bg-white/80 px-2 sm:px-3 py-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M17 8l4 4-4 4"></path>
                <path d="M3 12h18"></path>
              </svg>
              Swipe to see more
            </div>
          </div>

          {/* Navigation Indicators */}
          <div className="flex items-center justify-center space-x-4 mt-3 sm:mt-4 md:mt-5">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentIndex(index)}
                  className="relative transition-all duration-200"
                  aria-label={`Go to testimonial ${index + 1}`}
                  style={{ minWidth: '44px', minHeight: '44px', padding: '20px 0' }}
                >
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 sm:h-3 md:h-4 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-green-700 w-6 sm:w-8 md:w-10' 
                      : 'bg-gray-300 w-2 sm:w-3 md:w-4 hover:bg-green-400'
                  }`} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};