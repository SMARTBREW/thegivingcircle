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
      image: 'https://images.pexels.com/photos/8924530/pexels-photo-8924530.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Seeing the girls I supported graduate from school and start their own businesses has been the most rewarding experience of my life. The Giving Circle made it possible to witness real change.',
      organization: 'Supporting Girls Education',
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      role: 'NGO Director',
      image: 'https://images.pexels.com/photos/8924531/pexels-photo-8924531.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The transparency and documentation process has elevated our work. Champions can see exactly how their support transforms lives, creating a beautiful cycle of trust and impact.',
      organization: 'Water Warriors Foundation',
    },
    {
      id: '3',
      name: 'Anita Verma',
      role: 'Cause Champion',
      image: 'https://images.pexels.com/photos/8924532/pexels-photo-8924532.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The NFT verification gives me proof that my contributions are making a real difference. I can share my impact stories with friends and inspire them to join too.',
      organization: 'Youth Skill Development',
    },
    {
      id: '4',
      name: 'Suresh Patel',
      role: 'Community Leader',
      image: 'https://images.pexels.com/photos/8924533/pexels-photo-8924533.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Working with The Giving Circle has brought our community together. The champions genuinely care about our progress and celebrate every milestone with us.',
      organization: 'Rural Development Initiative',
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-neutral to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text mb-4 sm:mb-6 md:mb-8 px-4">
            Voices of{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Change
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl text-text/70 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed">
            Hear from champions, NGO partners, and community members whose lives have been transformed
            through our circle of giving.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <div 
            className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[400px] flex items-center justify-center px-2 sm:px-4"
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
                className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto"
              >
                <motion.div 
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 15, 0, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6"
                  >
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary-100" />
                  </motion.div>
                  
                  <div className="flex flex-col sm:flex-row md:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 pt-8 sm:pt-0">
                    <motion.div 
                      className="flex-shrink-0 order-first sm:order-first"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full object-cover shadow-lg border-2 sm:border-4 border-white"
                      />
                    </motion.div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text/80 italic leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                      
                      <div className="space-y-1 sm:space-y-2">
                        <div className="font-semibold text-text text-base sm:text-lg md:text-xl lg:text-2xl">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-primary-500 font-medium text-sm sm:text-base md:text-lg lg:text-xl">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-text/60 text-xs sm:text-sm md:text-base lg:text-lg">
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
          <div className="sm:hidden flex justify-center mt-4 items-center">
            <div className="text-xs text-text/50 flex items-center bg-white/80 px-3 py-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M17 8l4 4-4 4"></path>
                <path d="M3 12h18"></path>
              </svg>
              Swipe to see more
            </div>
          </div>

          {/* Navigation Indicators */}
          <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8 md:mt-10">
            <div className="flex space-x-2 sm:space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 sm:h-3 md:h-4 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-primary-500 w-6 sm:w-8 md:w-10' 
                      : 'bg-gray-300 w-2 sm:w-3 md:w-4 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Testimonials Grid - Responsive visibility and layout */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4 md:mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-primary-100"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-text text-sm sm:text-base md:text-lg lg:text-xl truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-primary-500 truncate">
                    {testimonial.role}
                  </div>
                  <div className="text-xs sm:text-sm text-text/60 truncate">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
              <p className="text-text/70 text-xs sm:text-sm md:text-base lg:text-lg italic leading-relaxed">
                "{testimonial.quote.slice(0, window.innerWidth < 640 ? 80 : window.innerWidth < 1024 ? 100 : 120)}..."
              </p>
              
              {/* Read More Button for smaller cards */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))}
                className="mt-3 sm:mt-4 text-xs sm:text-sm text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                Read full testimonial →
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only additional testimonials - Horizontal scroll */}
        <div className="mt-8 sm:hidden">
          <h3 className="text-lg font-semibold text-text mb-4 px-4">More Stories</h3>
          <div className="flex space-x-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
            {testimonials.filter((_, index) => index !== currentIndex).slice(0, 2).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))}
                className="bg-white rounded-xl p-4 shadow-md min-w-[280px] cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary-100"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-text text-sm truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-primary-500 truncate">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-text/70 text-xs italic leading-relaxed">
                  "{testimonial.quote.slice(0, 80)}..."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom scrollbar hide styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};