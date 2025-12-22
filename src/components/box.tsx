import { motion } from "framer-motion";
import { Heart, Users, Target } from "lucide-react";

const ChampionFundraiserBox = ({
  description = "Cause Champions are passionate advocates creating community-driven social impact across India. Join our social impact platform to support social causes, share verified impact stories, and amplify your change through The Giving Circle's trusted charity platform and champion network.",
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

  return (
    <motion.div
      className="relative mb-4 w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[70vw] mx-auto h-auto py-6 md:py-8 flex flex-col md:flex-row items-center px-6 sm:px-8 md:px-10 bg-white/90 backdrop-blur-md dark:bg-white/10 dark:backdrop-blur-md rounded-xl shadow-xl border border-white/30 dark:border-white/20 mt-4 sm:mt-6 md:mt-8 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Left accent decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 md:w-4 bg-green-700"></div>

      {/* Background decorations */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 opacity-30 blur-xl"></div>
      
      {/* Floating icons */}
      <div className="absolute top-4 right-4 opacity-20">
        <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
      </div>
      

      {/* Main Content */}
      <div className="flex flex-col w-full items-center gap-4 md:gap-3 z-10">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-3 w-full ml-0 md:ml-4 text-center md:text-left">
          <motion.h3
            className="font-bold text-gray-900 text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 whitespace-nowrap"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.1 },
              },
            }}
          >
            Become a Cause Champion Today!
          </motion.h3>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 px-2 md:px-0"
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
            className="flex flex-nowrap gap-3 mt-2 justify-center md:justify-start overflow-x-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 },
              },
            }}
          >
            <div className="flex items-center gap-1 bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-xs text-gray-600">Support Social Causes</span>
            </div>
            <div className="flex items-center gap-1 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
              <Users className="w-4 h-4 text-purple-500" />
              <span className="text-xs text-gray-600">Community Giving</span>
            </div>
            <div className="flex items-center gap-1 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
              <Target className="w-4 h-4 text-indigo-500" />
              <span className="text-xs text-gray-600">Verified Impact Stories</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChampionFundraiserBox;