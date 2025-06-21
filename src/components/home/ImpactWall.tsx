import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import { Badge, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface ImpactCardProps {
  id: string;
  title: string;
  description: string;
  ngoName: string;
  championName: string;
  impactNumber: number;
  impactUnit: string;
  image: string;
  verified: boolean;
  location: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  title,
  description,
  ngoName,
  championName,
  impactNumber,
  impactUnit,
  image,
  verified,
  location,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl shadow-lg h-full"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        {verified && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <CheckCircle className="w-3 h-3 mr-1" />
            NFT Verified
          </div>
        )}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-text">
          {location}
        </div>
      </div>
      
      <div className="bg-white p-6 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Badge className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">{ngoName}</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-accent-500">{impactNumber.toLocaleString()}</div>
            <div className="text-xs text-text/70">{impactUnit}</div>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-text mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-text/70 text-sm mb-4 line-clamp-3 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {championName.charAt(0)}
            </div>
            <div>
              <div className="text-xs text-text/70">Champion</div>
              <div className="text-sm font-medium text-text">{championName}</div>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="text-primary-500 hover:text-primary-700">
            View Story
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const ImpactWall: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const impactStories: ImpactCardProps[] = [
    {
      id: '1',
      title: 'Empowering Rural Girls Through Education',
      description: 'Providing quality education and life skills training to underprivileged girls in remote villages of Rajasthan.',
      ngoName: 'Saheli Foundation',
      championName: 'Priya Sharma',
      impactNumber: 150,
      impactUnit: 'Girls Educated',
      image: 'https://images.pexels.com/photos/8923827/pexels-photo-8923827.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
      location: 'Rajasthan',
    },
    {
      id: '2',
      title: 'Clean Water Initiative for Tribal Communities',
      description: 'Installing water purification systems and educating communities about hygiene practices.',
      ngoName: 'Water Warriors',
      championName: 'Rajesh Kumar',
      impactNumber: 2500,
      impactUnit: 'People Served',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
      location: 'Jharkhand',
    },
    {
      id: '3',
      title: 'Skill Development for Urban Youth',
      description: 'Training unemployed youth in digital skills and connecting them with job opportunities.',
      ngoName: 'Future Builders',
      championName: 'Anita Verma',
      impactNumber: 85,
      impactUnit: 'Youth Trained',
      image: 'https://images.pexels.com/photos/8923834/pexels-photo-8923834.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
      location: 'Mumbai',
    },
    {
      id: '4',
      title: 'Healthcare Support for Elderly',
      description: 'Providing free health checkups and medicines to elderly people in slum areas.',
      ngoName: 'Care Connect',
      championName: 'Suresh Patel',
      impactNumber: 320,
      impactUnit: 'Seniors Treated',
      image: 'https://images.pexels.com/photos/8923864/pexels-photo-8923864.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
      location: 'Delhi',
    },
    {
      id: '5',
      title: 'Child Nutrition Program',
      description: 'Fighting malnutrition by providing nutritious meals to children in government schools.',
      ngoName: 'Nutrition First',
      championName: 'Meera Singh',
      impactNumber: 1200,
      impactUnit: 'Children Fed',
      image: 'https://images.pexels.com/photos/8923849/pexels-photo-8923849.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
      location: 'Bihar',
    },
    {
      id: '6',
      title: 'Women Entrepreneurship Support',
      description: 'Supporting rural women to start their own businesses through micro-financing and training.',
      ngoName: 'She Power',
      championName: 'Kavita Joshi',
      impactNumber: 45,
      impactUnit: 'Businesses Started',
      image: 'https://images.pexels.com/photos/8923858/pexels-photo-8923858.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
      location: 'Gujarat',
    },
  ];

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };
  
  const totalPages = Math.ceil(impactStories.length / itemsPerPage.desktop);
  const totalMobilePages = Math.ceil(impactStories.length / itemsPerPage.mobile);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    setIsTouching(false);
    if (touchStart - touchEnd > 100) {
      // Swipe left
      setCurrentPage((prev) => Math.min(prev + 1, totalMobilePages - 1));
    } else if (touchStart - touchEnd < -100) {
      // Swipe right
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section className="section-padding bg-neutral">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text mb-6">
            Real Impact,{' '}
            <span className="gradient-text">
              Real Stories
            </span>
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            Every story represents lives transformed, communities uplifted, and champions who believed in change.
            These verified impact stories show the real difference your support makes.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {impactStories.map((story) => (
              <div key={story.id} className="w-full flex-shrink-0 px-2">
                <ImpactCard {...story} />
              </div>
            ))}
          </div>
          
          {/* Mobile Pagination Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalMobilePages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage ? 'bg-primary-500 w-8' : 'bg-gray-300 hover:bg-primary-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ImpactCard {...story} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="accent"
            size="lg"
            onClick={() => window.location.href = '/nft-wall'}
            rounded
            className="group"
          >
            View All Impact Stories
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};