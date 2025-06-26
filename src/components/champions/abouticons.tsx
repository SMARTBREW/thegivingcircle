import React from 'react';
import { motion } from 'framer-motion';

const AboutIconsPage: React.FC = () => {
  const reasonsData = [
    {
      icon: "💰",
      title: "High Cost Of Treatment",
      description: "Medical emergencies come without a warning. At times, health insurance and savings are not enough to cover the expensive bill. Crowdfunding helps you reach your goal by getting small contributions from a large group of people."
    },
    {
      icon: "🤝",
      title: "Asking For Money Isn't Easy",
      description: "When in need, asking for help from people and describing financial problems face-to-face can be awkward and inconvenient. Online crowdfunding makes the process of asking for money easier and way more seamless."
    },
    {
      icon: "⏰",
      title: "Emergencies Demand A Prompt Response",
      description: "When your loved ones are diagnosed with life threatening diseases, it's overwhelming emotionally as well as financially. Most medical emergencies require the treatment to start at the earliest. By giving you a platform to share your emergency, online crowdfunding helps you gather funds quickly."
    },
    {
      icon: "😟",
      title: "Loan Repayment Is Stressful",
      description: "Getting drowned in personal loans is very common in times of medical emergencies. Once the money is gathered, repaying that loan may take months, sometimes years together. Online crowdfunding comes without debts."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-4">
            Why are people choosing medical crowdfunding?
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {reasonsData.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              {/* Icon */}
              <motion.div
                className="text-6xl mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {reason.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm max-w-md mx-auto">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutIconsPage;