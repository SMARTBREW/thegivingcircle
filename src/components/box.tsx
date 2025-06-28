import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Target } from "lucide-react";

const ChampionFundraiserBox = ({
  text = "Become a Cause Champion Today!",
  description = "Cause Champions are passionate advocates who lead transformative change in their communities. Share your story, inspire supporters, and amplify your impact through our champion network.",
}) => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleBecomeChampion = () => {
    // Navigate to champion onboarding page
    console.log("Navigate to become a champion");
  };

  const handleLearnMore = () => {
    // Navigate to about champions page
    console.log("Navigate to learn more about champions");
  };

  return (
    <motion.div
      className="relative mb-10 w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[70vw] mx-auto h-auto py-8 md:py-10 flex flex-col md:flex-row items-center px-6 sm:px-8 md:px-10 bg-white/90 backdrop-blur-md dark:bg-white/10 dark:backdrop-blur-md rounded-xl shadow-xl border border-white/30 dark:border-white/20 mt-8 sm:mt-10 md:mt-12 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Left accent decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 md:w-4 bg-gradient-to-b from-purple-600 to-pink-600"></div>

      {/* Background decorations */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 opacity-30 blur-xl"></div>
      
      {/* Floating icons */}
      <div className="absolute top-4 right-4 opacity-20">
        <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
      </div>
      

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8 md:gap-6 z-10">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-3 w-full md:max-w-[65%] ml-0 md:ml-4 text-center md:text-left">
          <motion.h3
            className="font-bold text-black text-xl sm:text-2xl md:text-3xl"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.1 },
              },
            }}
          >
            {text}
          </motion.h3>

          <motion.p
            className="font-normal text-black text-sm sm:text-base px-2 md:px-0"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
          >
            {description}
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 },
              },
            }}
          >
            <div className="flex items-center gap-1 bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-xs text-black">Cause Advocacy</span>
            </div>
            <div className="flex items-center gap-1 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
              <Users className="w-4 h-4 text-purple-500" />
              <span className="text-xs text-black">Champion Network</span>
            </div>
            <div className="flex items-center gap-1 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
              <Target className="w-4 h-4 text-indigo-500" />
              <span className="text-xs text-black">Impact Stories</span>
            </div>
          </motion.div>
        </div>

        {/* Button Section */}
        <motion.div
          className="w-full md:w-auto flex flex-col sm:flex-row gap-3 justify-center md:justify-end mt-4 md:mt-0"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, delay: 0.4 },
            },
          }}
        >
          {/* Primary Button */}
          <motion.button
            onClick={handleBecomeChampion}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap min-w-fit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(147, 51, 234, 0.3)",
              transition: { type: "spring", stiffness: 400, damping: 20 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="whitespace-nowrap">Become Champion</span>
            <motion.div
              animate={{
                x: [0, 5, 0],
                transition: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeOut",
                  repeatDelay: 0.5,
                },
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            onClick={handleLearnMore}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white  text-black dark:text-black font-semibold rounded-lg shadow-md border transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap min-w-fit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              transition: { type: "spring", stiffness: 400, damping: 20 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="whitespace-nowrap">Learn More</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChampionFundraiserBox;