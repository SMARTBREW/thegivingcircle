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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="bg-gray-800 py-20 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Become a Giving Circle Champion
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join our distinguished network of advocates making meaningful impact through compassionate giving
          </motion.p>
        </div>
      </motion.div>

      {/* Process Steps Timeline */}
      <motion.div
        className="py-20 px-6 bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The Path to Becoming a Champion
          </motion.h2>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between">
            {/* Horizontal timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 w-full bg-gradient-to-r from-gray-400 to-gray-600 transform -translate-y-1/2 z-0"></div>
            <div className="flex flex-col md:flex-row w-full justify-between items-center relative z-10">
              {[
                {
                  step: "01",
                  title: "Application Submission",
                  icon: "📋",
                  description: "Complete our formal application with your professional background and charitable interests"
                },
                {
                  step: "02",
                  title: "Values Alignment", 
                  icon: "🔍",
                  description: "We carefully assess how your expertise and values align with our mission and community needs"
                },
                {
                  step: "03",
                  title: "Initiative Selection",
                  icon: "🤝", 
                  description: "Select the philanthropic initiatives that resonate most with your purpose and expertise"
                },
                {
                  step: "04",
                  title: "Formalization & Onboarding",
                  icon: "🏆",
                  description: "Official acceptance into The Giving Circle Champion program with comprehensive onboarding"
                }
              ].map((item, index, arr) => (
                <React.Fragment key={item.step}>
                  <motion.div
                    className="relative flex flex-col items-center text-center md:w-1/4 w-full mb-16 md:mb-0"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                  >
                    {/* Step number circle */}
                    <motion.div
                      className="relative z-10 w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center text-gray-800 font-bold text-lg shadow-md mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.step}
                    </motion.div>
                    {/* Content */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                      <span className="text-3xl mb-3">{item.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                  {/* Connector for all but last step */}
                  {index < arr.length - 1 && (
                    <div className="hidden md:block h-1 w-8 bg-gradient-to-r from-gray-400 to-gray-600 mx-2"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Becoming a Champion with The Giving Circle is a commitment to excellence in philanthropy and service. We welcome dedicated individuals who share our vision of creating sustainable impact through collective giving.
            </p>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md transition-colors duration-300 shadow-md">
              Apply to Become a Champion
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BecomeChampionPage;