import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

export const AboutUs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const teamSliderRef = useRef<HTMLDivElement>(null);

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text mb-4 sm:mb-6 md:mb-8 px-4">
            About{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl text-text/70 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed">
            We're on a mission to bridge the gap between good intentions and verified impact, 
            creating a world where every act of kindness leaves a permanent, traceable mark.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-28"
        >
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text mb-6 sm:mb-8">
                Our Story
              </h2>
              <div className="space-y-4 sm:space-y-6 text-text/70">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Founded in 2023, we started with a simple question: "How can we make social impact 
                  more transparent and verifiable?" After witnessing countless well-intentioned donations 
                  disappear into organizational overhead, we knew there had to be a better way.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Our breakthrough came when we realized that blockchain technology could create permanent, 
                  immutable records of impact stories. By partnering with verified NGOs and documenting 
                  every project from start to finish, we've created a new model of accountable philanthropy.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Today, thousands of champions trust us to turn their compassion into verified change, 
                  one impact story at a time.
                  {' '}
                  <a
                    href="/the-giving-circle"
                    className="text-purple-600 hover:text-pink-600 underline font-semibold transition-colors duration-200"
                  >
                    Know more
                  </a>
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div 
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Replace this src with your actual image path */}
                <img 
                  src="/Smileshero.jpg" 
                  alt="Our Story - Making Impact Together"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                />
                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Optional: Add a floating element for visual interest */}
                
              </motion.div>          
              {/* Optional: Add a decorative element behind the image */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl sm:rounded-3xl -z-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};