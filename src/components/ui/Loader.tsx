import React from 'react';
import { motion } from 'framer-motion';

const MinimalSpinner: React.FC = () => (
  <motion.div
    className="relative w-12 h-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-gray-200"
      style={{ borderTopColor: '#374151' }}
      animate={{ rotate: 360 }}
      transition={{ 
        duration: 1, 
        repeat: Infinity, 
        ease: "linear" 
      }}
    />
  </motion.div>
);



const Loader: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        {/* Minimal spinner */}
        <div className="flex justify-center mb-8">
          <MinimalSpinner />
        </div>
        
        {/* Simple loading text */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="text-xl font-medium text-gray-900 mb-3">
            Loading
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Please wait a moment while we prepare your content
          </p>
        </motion.div>
        

      </div>
    </div>
  );
};

export default Loader;

