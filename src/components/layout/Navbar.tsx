import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart, AlertCircle, Bell, ChevronDown } from 'lucide-react';

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
  const [dropdownStates, setDropdownStates] = useState<{ [key: string]: boolean }>({});

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
      href: '/live-causes',
      highlight: true,
      urgent: true,
    },
    { 
      name: 'Impact Stories', 
      href: '/impact-stories'
    },
    { 
      name: 'Causes', 
      href: '/causes'
    },
    { 
      name: 'NGO Partners', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Become a NGO Partner', href: '/ngo-partner' },
        { name: 'NGOs Listed With Us', href: '/ngo-list' },
        { name: 'NGO Details', href: '/ngo-detail/1' }
      ]
    },
    {
      name: 'About Us',
      hasDropdown: true,
      dropdownItems: [
        { name: 'The Giving Circle', href: '/the-giving-circle' },
        { name: 'Our Vision', href: '/the-giving-circle#vision' },
        { name: 'Our Story', href: '/the-giving-circle#story' }
      ]
    }
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

  // Close dropdown when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-menu')) {
        setDropdownStates({});
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (itemName: string) => {
    setDropdownStates(prev => {
      const isCurrentlyOpen = prev[itemName];
      // If the clicked dropdown is open, close it
      // If it's closed, close all others and open only this one
      if (isCurrentlyOpen) {
        return {
          ...prev,
          [itemName]: false
        };
      } else {
        // Close all dropdowns and open only the clicked one
        const newStates: { [key: string]: boolean } = {};
        Object.keys(prev).forEach(key => {
          newStates[key] = false;
        });
        newStates[itemName] = true;
        return newStates;
      }
    });
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
              <a href="/" className="cursor-pointer">
                <img 
                  src="/Giving_Circle..-removebg-preview.png" 
                  alt="The Giving Circle Logo" 
                  className="h-8 sm:h-9 md:h-10 lg:h-10 xl:h-11 drop-shadow-lg"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation - Hidden on mobile and small tablets */}
            <div className="hidden xl:block">
              <div className="flex items-center space-x-0">
                {navItems.map((item, index) => (
                  item.hasDropdown ? (
                    <div key={item.name} className="relative dropdown-menu">
                      <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ 
                          y: -2,
                          color: item.highlight ? '#e11d48' : '#1f2937'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(item.name);
                        }}
                        className={`px-2 xl:px-3 py-2 text-xs lg:text-sm font-bold transition-all duration-300 relative ${
                          item.highlight ? 'text-gray-700 hover:text-red-600' : 'text-gray-700 hover:text-gray-900'
                        } flex items-center`}
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
                          <span className={item.highlight ? 'text-red-600' : ''}>{item.name}</span>
                          <ChevronDown 
                            className={`ml-0.5 w-3 h-3 transition-transform ${dropdownStates[item.name] ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </motion.button>
                      
                      {/* Dropdown Menu */}
                      {dropdownStates[item.name] && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-48 z-50"
                        >
                          {item.dropdownItems.map((dropdownItem, dropIdx) => (
                            <motion.a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: dropIdx * 0.05 }}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                              onClick={() => setDropdownStates({})}
                            >
                              {dropdownItem.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
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
                      className={`px-2 xl:px-3 py-2 text-xs lg:text-sm font-bold transition-all duration-300 relative ${
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
                  )
                ))}
              </div>
            </div>

            {/* Medium screen navigation - Shows condensed nav for tablets */}
            <div className="hidden lg:flex xl:hidden items-center space-x-1">
              {navItems.map((item, index) => (
                item.hasDropdown ? (
                  <div key={item.name} className="relative dropdown-menu">
                    <motion.button
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        y: -2,
                        color: item.highlight ? '#e11d48' : '#1f2937'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.name);
                      }}
                      className={`px-2 py-2 text-xs font-bold transition-all duration-300 relative ${
                        item.highlight ? 'text-gray-700 hover:text-red-600' : 'text-gray-700 hover:text-gray-900'
                      } flex items-center`}
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
                        <span className={item.highlight ? 'text-red-600' : ''}>{item.name}</span>
                        <ChevronDown 
                          className={`ml-1 w-3 h-3 transition-transform ${dropdownStates[item.name] ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </motion.button>
                    
                    {/* Dropdown Menu - Tablet */}
                    {dropdownStates[item.name] && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-40 z-50"
                      >
                        {item.dropdownItems.map((dropdownItem, dropIdx) => (
                          <motion.a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: dropIdx * 0.05 }}
                            className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                            onClick={() => setDropdownStates({})}
                          >
                            {dropdownItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
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
                )
              ))}
            </div>

            {/* CTA Button - Responsive sizing and visibility */}
            <div className="hidden xl:flex items-center ml-2">
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
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 xl:px-4 py-2 rounded-lg font-medium text-xs lg:text-sm shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
              >
                Become a Cause Champion
              </motion.button>
            </div>

            {/* Mobile menu button - Only shows on small screens */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>

            {/* Tablet CTA - Shows on medium screens only */}
            <div className="hidden lg:flex xl:hidden items-center ml-2">
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
            className="lg:hidden overflow-hidden"
          >
            <div className="pt-3 sm:pt-4 pb-2 space-y-1 sm:space-y-2">
              {navItems.map((item, index) => (
                item.hasDropdown ? (
                  <div key={item.name} className="space-y-1">
                    <motion.button
                      initial={{ x: -50, opacity: 0 }}
                      animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center justify-between w-full px-3 sm:px-4 py-2 text-sm sm:text-base font-bold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 rounded-lg ${
                        item.highlight ? 'text-red-600' : 'text-gray-700 hover:text-gray-900'
                      }`}
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
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${dropdownStates[item.name] ? 'rotate-180' : ''}`} 
                      />
                    </motion.button>
                    
                    {/* Mobile dropdown menu items */}
                    {dropdownStates[item.name] && (
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems.map((dropdownItem, dropIdx) => (
                          <motion.a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: dropIdx * 0.05 }}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors rounded-lg"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
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
                )
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