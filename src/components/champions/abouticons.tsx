import React from 'react';
import { motion } from 'framer-motion';

const AboutIconsPage: React.FC = () => {
  const reasonsData = [
    {
      icon: "❤️",
      title: "Community Support When Needed Most",
      description: "Medical emergencies arrive unexpectedly, and sometimes health insurance and savings aren't enough. Through The Giving Circle, small contributions from many compassionate individuals can create life-changing impact for someone in need."
    },
    {
      icon: "🤲",
      title: "Dignity in Seeking Help",
      description: "Asking for financial assistance can be challenging. Our platform provides a respectful and supportive environment where people can share their stories and receive help from a caring community without discomfort or stigma."
    },
    {
      icon: "⏱️",
      title: "Swift Response to Urgent Needs",
      description: "Critical medical situations require immediate action. The Giving Circle connects those in need with generous donors quickly, enabling treatment to begin promptly and giving families peace of mind during difficult times."
    },
    {
      icon: "🌱",
      title: "Sustainable Support Without Debt",
      description: "Unlike loans that create long-term financial strain, collective giving through our platform offers debt-free assistance. This allows recipients to focus on recovery rather than repayment, creating a genuine cycle of giving."
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
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-4">
            Why Join The Giving Circle for Medical Support?
          </h2>
          <div className="w-20 h-1.5 bg-gray-400 mx-auto rounded-full"></div>
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
              className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <motion.div
                className="text-6xl mb-6 bg-gray-100 inline-block p-4 rounded-full"
                whileHover={{ scale: 1.1, rotate: 5 }}
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