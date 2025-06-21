import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Live Causes', href: '/causes' },
    { name: 'Impact Stories', href: '/impact' },
    { name: 'Champions', href: '/onboarding' },
    { name: 'NGO Partners', href: '/ngo-partner' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        scrolled ? 'top-2' : 'top-4'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`
          bg-white/80 backdrop-blur-2xl border border-white/20 
          rounded-2xl px-6 py-3 shadow-2xl shadow-black/10 
          transition-all duration-500 backdrop-saturate-150
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
                className="h-10 md:h-12 drop-shadow-lg"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
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
                      color: '#1f2937'
                    }}
                    className="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-bold transition-all duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
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
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                Become a Cause Champion
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-2 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-gray-700 hover:text-gray-900 block px-4 py-2 text-base font-bold hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-2">
                <motion.button
                  initial={{ x: -50, opacity: 0 }}
                  animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/onboarding';
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium shadow-lg transition-all duration-300 backdrop-blur-sm w-full"
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