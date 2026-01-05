import React from 'react';
import { motion } from 'framer-motion';

export const OurImpact: React.FC = () => {

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            Our{' '}
            <span className="bg-gradient-to-r green-700 bg-clip-text text-transparent">
              Impact
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
          >
            "The Giving Circle has transformed how we create impact together. By connecting passionate cause champions with our verified NGO partners (JWP, Animal Care, KHUSHII, and GUS), we've built a community where every contribution makes a meaningful difference. Together, we're not just funding causes - we're building lasting change."
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 mt-2"
          >
            - The Giving Circle Community
          </motion.p>
        </div>
        
      </div>
    </section>
  );
}; 