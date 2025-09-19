import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Users, Shield, FileText, Scale, Heart, ArrowUpRight, Globe, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

     
        
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <Link to="/">
                  <img 
                    src="/Giving_Circle..-removebg-preview.png" 
                    alt="The Giving Circle" 
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  A trusted community platform connecting verified NGO partners like JWP, Animal Care, KHUSHII, and GUS with cause champions and donors across India. Building transparency and trust in the philanthropic ecosystem through verified partnerships and measurable impact.
                </p>
                <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
                  <Network className="w-4 h-4 text-purple-600" />
                  <span>Community-Driven Platform</span>
                </div>
                <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span>Trust & Transparency Focused</span>
                </div>
              </div>
              
              {/* Professional Social Links */}
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 uppercase tracking-wide">
                  Connect With Us
                </h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://linkedin.com/company/thegivingcircle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-purple-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://twitter.com/thegivingcircle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-purple-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://instagram.com/thegivingcircle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-purple-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Community Platform */}
            <div className="md:col-span-1">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 uppercase tracking-wide mb-4 sm:mb-6">
                Community Platform
              </h3>
              <div className="space-y-4">
                <Link 
                  to="/impact-stories" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base">Live Causes</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  to="/impact-stories" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base">Impact Stories</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  to="/live-causes" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base">Browse Causes</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  to="/ngo-list" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base">NGO Partners</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  to="/the-giving-circle" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base">About Us</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>

            {/* Trust & Partnership */}
            <div className="md:col-span-1">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 uppercase tracking-wide mb-4 sm:mb-6">
                Trust & Partnership
              </h3>
              <div className="space-y-4">
                <Link 
                  to="/onboarding" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base">Become a Champion</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  to="/ngo-partner" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base">NGO Partnership</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  to="/the-giving-circle" 
                  className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base">Trust & Safety</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>

            {/* Contact & Support */}
            <div className="md:col-span-1">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 uppercase tracking-wide mb-4 sm:mb-6">
                Contact & Support
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Mail className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600">General Inquiries</div>
                      <a href="mailto:hello@thegivingcircle.org" className="text-sm sm:text-base font-medium text-gray-900 hover:text-purple-600 transition-colors">
                        hello@thegivingcircle.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Phone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600">Support</div>
                      <div className="text-sm sm:text-base font-medium text-gray-900">+91 98765 43210</div>
                      <div className="text-xs sm:text-sm text-gray-500">Mon-Fri 9AM-6PM IST</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600">Platform Base</div>
                      <div className="text-sm sm:text-base font-medium text-gray-900">Mumbai, Maharashtra</div>
                      <div className="text-xs sm:text-sm text-gray-500">India</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Link 
                    to="/the-giving-circle" 
                    className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <span className="text-sm sm:text-base">Help Center</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link 
                    to="/live-causes" 
                    className="flex items-center group text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <span className="text-sm sm:text-base">Community Support</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Enhanced Legal and Trust Indicators */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            
            {/* Left: Copyright and Platform Status */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-gray-600">
                © {currentYear} The Giving Circle Community Platform. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Globe className="w-3 h-3" />
                  <span>Community Platform</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>Trust Verified</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>NGO Network Partner</span>
                </div>
              </div>
            </div>
            
            {/* Right: Legal Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base">
              <Link 
                to="/the-giving-circle" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1"
              >
                <Scale className="w-3 h-3" />
                <span>Privacy Policy</span>
              </Link>
              <Link 
                to="/the-giving-circle" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1"
              >
                <FileText className="w-3 h-3" />
                <span>Terms of Use</span>
              </Link>
              <Link 
                to="/the-giving-circle" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1"
              >
                <Shield className="w-3 h-3" />
                <span>Trust & Safety</span>
              </Link>
              <Link 
                to="/live-causes" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1"
              >
                <Heart className="w-3 h-3" />
                <span>Community Values</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};