import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CircleIconProps {
  onClick?: () => void;
}

const CircleIcon: React.FC<CircleIconProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="fixed bottom-16 right-8 z-50 cursor-pointer"
      initial={{ scale: 1 }}
      animate={{ scale: isHovered ? 1.1 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative w-16 h-16">
        {/* Outer ring with gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-pink-500 animate-spin-slow"></div>
        
        {/* Inner circle */}
        <div className="absolute inset-1 rounded-full bg-white"></div>
        
        {/* Inner gradient circle */}
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-pink-500 flex items-center justify-center">
          <div className="text-white font-bold text-xs">TGC</div>
        </div>
      </div>
    </motion.div>
  );
};

export default CircleIcon; 