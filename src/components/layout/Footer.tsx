import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Users, Shield, FileText, Scale, Heart, ArrowUpRight, Globe, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

     
        <div className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            
            <div className="md:col-span-1 space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Link to="/">
                  <img 
                    src="/Giving_Circle..-removebg-preview.png" 
                    alt="The Giving Circle" 
                    className="h-8 sm:h-9 md:h-10 w-auto"
                    width="227"
                    height="56"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                A trusted community platform connecting verified NGO partners with passionate change makers and donors across India & abroad. Building transparency and trust in philanthropy through verified partnerships and measurable impact.
                </p>
                <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base text-gray-600 break-words">
                  <Network className="w-3 h-3 sm:w-4 sm:h-4 text-green-700 flex-shrink-0" />
                  <span>Community-Driven Platform</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base text-gray-600 break-words">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-700 flex-shrink-0" />
                  <span>Trust & Transparency Focused</span>
                </div>
              </div>
              
             
            </div>

            <div className="md:col-span-1">
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4 md:mb-6">
                Community Platform
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <Link 
                  to="/impact-stories" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-xs sm:text-sm md:text-base break-words">Live Causes</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
                <Link 
                  to="/impact-stories" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-xs sm:text-sm md:text-base break-words">Impact Stories</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
                <Link 
                  to="/live-causes" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-xs sm:text-sm md:text-base break-words">Browse Causes</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
                <Link 
                  to="/ngo-list" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-xs sm:text-sm md:text-base break-words">NGO Partners</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
                <Link 
                  to="/the-giving-circle" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-xs sm:text-sm md:text-base break-words">About Us</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4 md:mb-6">
                Trust & Partnership
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <Link 
                  to="/onboarding" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-xs sm:text-sm md:text-base break-words">Become a Champion</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
                <Link 
                  to="/ngo-partner" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-xs sm:text-sm md:text-base break-words">NGO Partnership</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
                <Link 
                  to="/the-giving-circle" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-xs sm:text-sm md:text-base break-words">Trust & Safety</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4 md:mb-6">
                Contact & Support
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start space-x-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">General Inquiries</div>
                      <a href="mailto:hello@thegivingcircle.in" className="text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:text-green-700 transition-colors break-all">
                        hello@thegivingcircle.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Support</div>
                      <div className="text-xs sm:text-sm md:text-base font-medium text-gray-900 break-words">+91 98103 53603 </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">Mon-Fri 9AM-6PM IST</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Platform Base</div>
                      <div className="text-xs sm:text-sm md:text-base font-medium text-gray-900 break-words">Grugram, Haryana</div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">India</div>
                    </div>
                  </div>
                </div>

                 <div className="space-y-2 sm:space-y-3">
                <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 uppercase tracking-wide">
                  Connect With Us
                </h4>
                <div className="flex space-x-2 sm:space-x-3">
                  <a 
                    href="https://linkedin.com/company/thegivingcircle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-700 transition-colors duration-200 p-1.5 sm:p-2 rounded-lg hover:bg-gray-50"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a 
                    href="https://twitter.com/thegivingcircle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-700 transition-colors duration-200 p-1.5 sm:p-2 rounded-lg hover:bg-gray-50"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a 
                    href="https://instagram.com/thegivingcircle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-700 transition-colors duration-200 p-1.5 sm:p-2 rounded-lg hover:bg-gray-50"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-4 sm:py-5 md:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-3 sm:space-y-4 lg:space-y-0">
            
            <div className="space-y-2">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 break-words">
                © {currentYear} The Giving Circle Community Platform. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Globe className="w-3 h-3 flex-shrink-0" />
                  <span className="break-words">Community Platform</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3 flex-shrink-0" />
                  <span className="break-words">Trust Verified</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3 flex-shrink-0" />
                  <span className="break-words">NGO Network Partner</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
              <Link 
                to="/the-giving-circle" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 break-words"
              >
                <Scale className="w-3 h-3 flex-shrink-0" />
                <span>Privacy Policy</span>
              </Link>
              <Link 
                to="/the-giving-circle" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 break-words"
              >
                <FileText className="w-3 h-3 flex-shrink-0" />
                <span>Terms of Use</span>
              </Link>
              <Link 
                to="/the-giving-circle" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 break-words"
              >
                <Shield className="w-3 h-3 flex-shrink-0" />
                <span>Trust & Safety</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};