import { motion } from "framer-motion";
import { Heart, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

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
      className="relative mb-4 w-full max-w-7xl mx-auto h-auto py-4 sm:py-6 md:py-8 flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-8 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-white/30 mt-4 sm:mt-6 md:mt-8 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Left accent decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 md:w-4 bg-green-700"></div>

      {/* Background decorations */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 opacity-30 blur-xl"></div>
      
      {/* Floating icons */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-20">
        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 animate-pulse" />
      </div>
      

      {/* Main Content */}
      <div className="flex flex-col w-full items-center gap-3 sm:gap-4 md:gap-3 z-10">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4 md:gap-3 w-full md:ml-4 text-center md:text-left">
          <motion.h3
            className="font-bold text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 break-words"
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
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-1 sm:px-2 md:px-0 break-words leading-relaxed"
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
            className="flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2 justify-center md:justify-start"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 },
              },
            }}
          >
            <div className="flex items-center gap-1 bg-pink-100 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
              <span className="text-[10px] sm:text-xs text-gray-600">Support Social Causes</span>
            </div>
            <div className="flex items-center gap-1 bg-purple-100 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
              <span className="text-[10px] sm:text-xs text-gray-600">Community Giving</span>
            </div>
            <div className="flex items-center gap-1 bg-indigo-100 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-500" />
              <span className="text-[10px] sm:text-xs text-gray-600">Verified Impact Stories</span>
            </div>
          </motion.div>

        <motion.div
            className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          variants={{
              hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
                y: 0,
              transition: { duration: 0.6, delay: 0.4 },
            },
          }}
        >
            <Link
              to="/onboarding"
              className="bg-green-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 font-semibold text-sm sm:text-base rounded-full hover:bg-green-800 transition-all duration-300 text-center shadow-md hover:shadow-lg"
              aria-label="Become a Cause Champion and start your giving circle"
            >
              Become a Cause Champion
            </Link>
            <Link
              to="/live-causes"
              className="bg-white text-green-700 border-2 border-green-700 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 font-semibold text-sm sm:text-base rounded-full hover:bg-green-50 transition-all duration-300 text-center shadow-md hover:shadow-lg"
              aria-label="Browse all live causes and support social causes"
            >
              Browse Live Causes
            </Link>
        </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChampionFundraiserBox;