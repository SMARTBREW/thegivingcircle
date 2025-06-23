import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-text border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-1 lg:col-span-1">
            <div className="flex items-center justify-start space-x-3">
              <img 
                src="/Giving_Circle..-removebg-preview.png" 
                alt="The Giving Circle Logo" 
                className="h-8 sm:h-9 lg:h-10 w-auto"
              />
            </div>
            <p className="text-text/80 leading-relaxed text-sm sm:text-base text-left max-w-md">
              Connecting hearts, creating change. Join us in building a circle of giving that transforms lives and communities across India.
            </p>
            <div className="flex justify-start space-x-3 sm:space-x-4">
              <a 
                href="#" 
                className="text-text/70 hover:text-primary-500 transition-colors p-1 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="text-text/70 hover:text-accent-500 transition-colors p-1 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="text-text/70 hover:text-primary-500 transition-colors p-1 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links and For Champions in one row */}
          <div className="sm:col-span-1 lg:col-span-1 flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary-500">
              Quick Links
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <Link 
                to="/impact-stories" 
                className="block text-sm sm:text-base text-text/70 hover:text-primary-500 transition-colors py-1"
              >
                Live Causes
              </Link>
              <Link 
                to="/nft-wall" 
                className="block text-sm sm:text-base text-text/70 hover:text-primary-500 transition-colors py-1"
              >
                Impact Stories
              </Link>
              <Link 
                to="/champions" 
                className="block text-sm sm:text-base text-text/70 hover:text-primary-500 transition-colors py-1"
              >
                Champions
              </Link>
              <Link 
                to="/ngo-partner" 
                className="block text-sm sm:text-base text-text/70 hover:text-primary-500 transition-colors py-1"
              >
                NGO Partners
              </Link>
            </div>
          </div>

          <div className="sm:col-span-1 lg:col-span-1 flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-accent-500">
              For Champions
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <Link 
                to="/onboarding" 
                className="block text-sm sm:text-base text-text/70 hover:text-accent-500 transition-colors py-1"
              >
                Become a Champion
              </Link>
              <Link 
                to="/dashboard" 
                className="block text-sm sm:text-base text-text/70 hover:text-accent-500 transition-colors py-1"
              >
                Champion Dashboard
              </Link>
              <a 
                href="#" 
                className="block text-sm sm:text-base text-text/70 hover:text-accent-500 transition-colors py-1"
              >
                Success Stories
              </a>
              <a 
                href="#" 
                className="block text-sm sm:text-base text-text/70 hover:text-accent-500 transition-colors py-1"
              >
                Community Guidelines
              </a>
            </div>
          </div>

          {/* Get in Touch horizontally aligned on sm+ screens */}
          <div className="sm:col-span-1 lg:col-span-1 flex flex-col text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary-500">
              Get in Touch
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-start space-x-2 sm:space-x-3 text-text/70">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-primary-500" />
                <span className="text-sm sm:text-base break-all sm:break-normal">
                  hello@thegivingcircle.org
                </span>
              </div>
              <div className="flex items-center justify-start space-x-2 sm:space-x-3 text-text/70">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-primary-500" />
                <span className="text-sm sm:text-base">+91 98765 43210</span>
              </div>
              <div className="flex items-start justify-start space-x-2 sm:space-x-3 text-text/70">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-primary-500" />
                <span className="text-sm sm:text-base text-left">
                  Mumbai, Maharashtra<br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 gap-4">
            
            {/* Copyright */}
            <p className="text-text/70 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
              © {currentYear} The Giving Circle. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm order-1 sm:order-2">
              <a 
                href="#" 
                className="text-text/70 hover:text-primary-500 transition-colors py-1 whitespace-nowrap"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-text/70 hover:text-primary-500 transition-colors py-1 whitespace-nowrap"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-text/70 hover:text-primary-500 transition-colors py-1 whitespace-nowrap"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};