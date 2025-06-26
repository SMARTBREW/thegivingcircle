import React from 'react';
import { motion } from 'framer-motion';

const BecomeChampionPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Become a Champion
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join thousands making a difference in communities worldwide
          </motion.p>
        </div>
      </motion.div>

      {/* Process Steps Timeline */}
      <motion.div
        className="py-16 px-6 bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your Journey to Becoming a Champion
          </motion.h2>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between">
            {/* Horizontal timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
            <div className="flex flex-col md:flex-row w-full justify-between items-center relative z-10">
              {[
                {
                  step: "01",
                  title: "Personal Information",
                  icon: "👤",
                  description: "Share your basic details and tell us about yourself"
                },
                {
                  step: "02",
                  title: "Skills Assessment", 
                  icon: "⭐",
                  description: "Showcase your expertise and experience level"
                },
                {
                  step: "03",
                  title: "Program Selection",
                  icon: "🎯", 
                  description: "Choose the program that aligns with your passion"
                },
                {
                  step: "04",
                  title: "Review & Submit",
                  icon: "✅",
                  description: "Final review of your application and submission"
                }
              ].map((item, index, arr) => (
                <React.Fragment key={item.step}>
                  <motion.div
                    className="relative flex flex-col items-center text-center md:w-1/4 w-full mb-12 md:mb-0"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                  >
                    {/* Step number circle */}
                    <motion.div
                      className="relative z-10 w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-lg shadow-lg mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.step}
                    </motion.div>
                    {/* Content */}
                    <div className="flex flex-col items-center">
                      <span className="text-3xl mb-2">{item.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                  {/* Connector for all but last step */}
                  {index < arr.length - 1 && (
                    <div className="hidden md:block h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 mx-2"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Requirements Section */}
     
    </div>
  );
};

export default BecomeChampionPage;