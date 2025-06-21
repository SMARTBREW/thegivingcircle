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
    <section className="section-padding bg-gradient-to-b from-neutral to-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text mb-6">
            Voices of{' '}
            <span className="gradient-text">
              Change
            </span>
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            Hear from champions, NGO partners, and community members whose lives have been transformed
            through our circle of giving.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <div 
            className="relative min-h-[400px] flex items-center justify-center"
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
                className="w-full max-w-4xl mx-auto"
              >
                <motion.div 
                  className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 15, 0, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Quote className="absolute top-6 left-6 w-12 h-12 text-primary-100" />
                  </motion.div>
                  
                  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
                      />
                    </motion.div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <blockquote className="text-lg md:text-xl text-text/80 italic leading-relaxed mb-6">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                      
                      <div>
                        <div className="font-semibold text-text text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-primary-500 font-medium">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-text/60 text-sm">
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
          <div className="md:hidden flex justify-center mt-4 items-center">
            <div className="text-sm text-text/50 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M17 8l4 4-4 4"></path>
                <path d="M3 12h18"></path>
              </svg>
              Swipe to see more
            </div>
          </div>

          {/* Navigation Indicators */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-primary-500 w-8' : 'bg-gray-300 w-3 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Testimonials Grid - Hidden on mobile, visible on desktop */}
        <div className="mt-20 hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                />
                <div>
                  <div className="font-semibold text-text">{testimonial.name}</div>
                  <div className="text-sm text-primary-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-text/70 text-sm italic">
                "{testimonial.quote.slice(0, 120)}..."
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};