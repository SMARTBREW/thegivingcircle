import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart, AlertCircle, Bell } from 'lucide-react';

// Custom Siren Icon Component
const SirenIcon = ({ size = 18, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"></path>
    <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2H5v2Z"></path>
    <path d="M21 12h1"></path>
    <path d="M18.5 4.5 18 5"></path>
    <path d="M2 12h1"></path>
    <path d="M12 2v1"></path>
    <path d="m4.929 4.929.707.707"></path>
    <path d="M12 12v6"></path>
  </svg>
);

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [blinkState, setBlinkState] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Siren blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkState(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Live Causes', 
      href: '/impact-stories', 
      highlight: true,
      urgent: true
    },
    { name: 'Impact Stories', href: '/nft-wall' },
    { name: 'Champions', href: '/causes' },
    { name: 'NGO Partners', href: '/ngo-partner' },
  ];

  // Animation for the pulse effect
  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed z-50 transition-all duration-500 ${
        scrolled 
          ? 'top-1 left-2 right-2 sm:top-2 sm:left-3 sm:right-3 md:top-2 md:left-4 md:right-4' 
          : 'top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 md:top-4 md:left-4 md:right-4'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`
          bg-white/80 backdrop-blur-2xl border border-white/20 
          rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 
          shadow-2xl shadow-black/10 transition-all duration-500 backdrop-saturate-150
          ${scrolled ? 'bg-white/90 backdrop-blur-3xl shadow-3xl border-white/30' : ''}
        `}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center"
            >
              <img 
                src="/Giving_Circle..-removebg-preview.png" 
                alt="The Giving Circle Logo" 
                className="h-8 sm:h-9 md:h-10 lg:h-12 drop-shadow-lg"
              />
            </motion.div>

            {/* Desktop Navigation - Hidden on mobile and small tablets */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -2,
                      color: item.highlight ? '#e11d48' : '#1f2937'
                    }}
                    className={`px-3 lg:px-4 py-2 text-sm lg:text-sm font-bold transition-all duration-300 relative ${
                      item.highlight ? 'text-red-600' : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      {item.urgent && (
                        <motion.div 
                          animate={{
                            scale: blinkState ? 1.1 : 1
                          }}
                          transition={{
                            duration: 0.2
                          }}
                          className="relative flex items-center"
                        >
                          <SirenIcon size={18} className={`${blinkState ? 'text-red-600' : 'text-red-500'}`} />
                        </motion.div>
                      )}
                      {item.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Medium screen navigation - Shows condensed nav for tablets */}
            <div className="hidden md:flex lg:hidden items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -2,
                    color: item.highlight ? '#e11d48' : '#1f2937'
                  }}
                  className={`px-2 py-2 text-xs font-bold transition-all duration-300 relative ${
                    item.highlight ? 'text-red-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {item.urgent && (
                      <motion.div 
                        animate={{
                          scale: blinkState ? 1.1 : 1
                        }}
                        transition={{
                          duration: 0.2
                        }}
                        className="relative flex items-center"
                      >
                        <SirenIcon size={16} className={`${blinkState ? 'text-red-600' : 'text-red-500'}`} />
                      </motion.div>
                    )}
                    {item.name}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Button - Responsive sizing and visibility */}
            <div className="hidden lg:flex items-center">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/onboarding'}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 lg:px-6 py-2 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                <span className="hidden lg:inline">Become a Cause Champion</span>
                <span className="lg:hidden">Join Us</span>
              </motion.button>
            </div>

            {/* Mobile menu button - Only shows on small screens */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>

            {/* Tablet CTA - Shows on medium screens only */}
            <div className="hidden md:flex lg:hidden items-center ml-2">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/onboarding'}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg font-medium text-xs shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                Champion
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation - Only shows on small screens */}
          <motion.div
            initial={false}
            animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-3 sm:pt-4 pb-2 space-y-1 sm:space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`block px-3 sm:px-4 py-2 text-sm sm:text-base font-bold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 rounded-lg ${
                    item.highlight ? 'text-red-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    {item.urgent && (
                      <motion.div 
                        animate={{
                          scale: blinkState ? 1.1 : 1
                        }}
                        transition={{
                          duration: 0.2
                        }}
                        className="relative flex items-center"
                      >
                        <SirenIcon size={16} className={`${blinkState ? 'text-red-600' : 'text-red-500'}`} />
                      </motion.div>
                    )}
                    {item.name}
                  </div>
                </motion.a>
              ))}
              <div className="pt-2 sm:pt-3">
                <motion.button
                  initial={{ x: -50, opacity: 0 }}
                  animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/onboarding';
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base shadow-lg transition-all duration-300 backdrop-blur-sm w-full"
                >
                  Become a Cause Champion
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export const Navbar = NavbarComponent;