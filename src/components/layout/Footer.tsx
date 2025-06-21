import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-text border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Giving_Circle..-removebg-preview.png" 
                alt="The Giving Circle Logo" 
                className="h-10"
              />
            </div>
            <p className="text-text/80 leading-relaxed">
              Connecting hearts, creating change. Join us in building a circle of giving that transforms lives and communities across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text/70 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text/70 hover:text-accent-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text/70 hover:text-primary-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-500">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/impact-stories" className="block text-text/70 hover:text-primary-500 transition-colors">
                Live Causes
              </Link>
              <Link to="/nft-wall" className="block text-text/70 hover:text-primary-500 transition-colors">
                Impact Stories
              </Link>
              <Link to="/champions" className="block text-text/70 hover:text-primary-500 transition-colors">
                Champions
              </Link>
              <Link to="/ngo-partner" className="block text-text/70 hover:text-primary-500 transition-colors">
                NGO Partners
              </Link>
            </div>
          </div>

          {/* For Champions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-500">For Champions</h3>
            <div className="space-y-3">
              <Link to="/onboarding" className="block text-text/70 hover:text-accent-500 transition-colors">
                Become a Champion
              </Link>
              <Link to="/dashboard" className="block text-text/70 hover:text-accent-500 transition-colors">
                Champion Dashboard
              </Link>
              <a href="#" className="block text-text/70 hover:text-accent-500 transition-colors">
                Success Stories
              </a>
              <a href="#" className="block text-text/70 hover:text-accent-500 transition-colors">
                Community Guidelines
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-500">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-text/70">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary-500" />
                <span>hello@thegivingcircle.org</span>
              </div>
              <div className="flex items-center space-x-3 text-text/70">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3 text-text/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-500" />
                <span>
                  Mumbai, Maharashtra<br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text/70 text-sm">
              © {currentYear} The Giving Circle. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-text/70 hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-text/70 hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-text/70 hover:text-primary-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};