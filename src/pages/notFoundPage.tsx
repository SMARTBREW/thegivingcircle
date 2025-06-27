import React from 'react';
import { motion } from 'framer-motion';

interface CauseButtonProps {
  title: string;
  href: string;
  delay: number;
}

const CauseButton: React.FC<CauseButtonProps> = ({ title, href, delay }) => (
  <motion.a
    href={href}
    className="group relative inline-flex items-center gap-2 px-6 py-3 text-teal-600 font-medium text-lg hover:text-teal-700 transition-colors duration-200"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10">{title}</span>
    <motion.span
      className="text-teal-400"
      initial={{ x: 0 }}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      ›
    </motion.span>
    <motion.div
      className="absolute inset-0 bg-teal-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      layoutId="button-bg"
    />
  </motion.a>
);

const SleepingCat: React.FC = () => (
  <motion.div
    className="relative w-20 h-20 mx-4"
    initial={{ scale: 0, rotate: -10 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
  >
    {/* Circle background */}
    <motion.div
      className="absolute inset-0 bg-teal-200 rounded-full flex items-center justify-center overflow-hidden"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Sleeping cat illustration - centered and contained within circle */}
      <svg width="48" height="36" viewBox="0 0 48 36" className="text-gray-600">
        {/* Cat body (sleeping curled up) */}
        <ellipse cx="24" cy="26" rx="16" ry="8" fill="currentColor" opacity="0.8"/>
        {/* Cat head */}
        <circle cx="24" cy="16" r="10" fill="currentColor" opacity="0.8"/>
        {/* Cat ears */}
        <path d="M16 8 L14 2 L20 6 Z" fill="currentColor" opacity="0.8"/>
        <path d="M28 6 L32 8 L34 2 Z" fill="currentColor" opacity="0.8"/>
        {/* Closed eyes (curved lines) */}
        <path d="M20 14 Q20 16 20 14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M28 14 Q28 16 28 14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Nose */}
        <circle cx="24" cy="18" r="1.5" fill="currentColor" opacity="0.7"/>
        {/* Mouth */}
        <path d="M24 20 Q21 22 19 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M24 20 Q27 22 29 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Whiskers */}
        <line x1="14" y1="16" x2="19" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
        <line x1="14" y1="18" x2="19" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
        <line x1="34" y1="16" x2="29" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
        <line x1="34" y1="18" x2="29" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
        {/* Curled tail */}
        <path d="M40 26 Q42 20 38 18 Q36 20 38 22" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8"/>
      </svg>
    </motion.div>
    
    {/* Sleep Z's outside the circle */}
    <motion.div
      className="absolute -top-2 -right-2 text-gray-600 font-bold text-sm"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: [0, 1, 0], y: [5, -5, -10] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
    >
      z
    </motion.div>
    <motion.div
      className="absolute -top-4 right-0 text-gray-600 font-bold text-xs"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: [0, 1, 0], y: [5, -5, -10] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
    >
      z
    </motion.div>
    <motion.div
      className="absolute -top-6 right-2 text-gray-600 font-bold text-xs"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: [0, 1, 0], y: [5, -5, -10] }}
      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
    >
      z
    </motion.div>
  </motion.div>
);

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Large 404 with sleeping cat */}
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.span
            className="text-9xl md:text-[12rem] font-bold text-teal-200 select-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            4
          </motion.span>
          
          <SleepingCat />
          
          <motion.span
            className="text-9xl md:text-[12rem] font-bold text-teal-200 select-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            4
          </motion.span>
        </motion.div>

        {/* Main message */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            className="text-gray-600 text-lg md:text-xl mb-2"
            whileHover={{ scale: 1.02 }}
          >
            This page does not exist.
          </motion.p>
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            But your heart is in the right place!
          </motion.h1>
          <motion.p
            className="text-gray-500 text-sm md:text-base max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Tap below to find out how your help can transform someone's life.
          </motion.p>
        </motion.div>

        {/* Cause buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <CauseButton
            title="Medical Cause"
            href="#medical"
            delay={1.4}
          />
          <CauseButton
            title="Education Cause"
            href="#education"
            delay={1.6}
          />
          <CauseButton
            title="Cancer Funding"
            href="#cancer"
            delay={1.8}
          />
          <CauseButton
            title="Social Impact Plan"
            href="#social"
            delay={2.0}
          />
        </motion.div>

        {/* Subtle decorative elements */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-teal-300 rounded-full opacity-30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 bg-teal-400 rounded-full opacity-20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-2 h-2 bg-teal-200 rounded-full opacity-25"
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.1, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>
    </div>
  );
};

export default NotFoundPage;