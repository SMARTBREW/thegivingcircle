import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, CheckCircle, MapPin, Users, Calendar, ChevronDown, Badge, ArrowRight, Star, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  [x: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    accent: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white focus:ring-purple-500',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 hover:border-gray-400',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

const Input: React.FC<{
  placeholder?: string;
  leftIcon?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}> = ({ placeholder, leftIcon, value, onChange, className = '' }) => {
  return (
    <div className="relative">
      {leftIcon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {leftIcon}
        </div>
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full ${leftIcon ? 'pl-10' : 'pl-4'} pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${className}`}
      />
    </div>
  );
};

const ImpactStories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const navigate = useNavigate();

  // Updated data aligned with Live Causes & NGO partners
  const impactStories: ImpactCardProps[] = [
    {
      id: '1',
      title: 'Wings of Hope',
      description: 'Empowering women through skill development, entrepreneurship training, and financial literacy programs across Uttarakhand.',
      ngoName: 'JWP',
      championName: 'Meera Singh',
      impactNumber: 1000,
      impactUnit: 'Women Empowered',
      image: '/images/animals-2.jpeg',
      verified: true,
      location: 'Uttarakhand',
    },
    {
      id: '2',
      title: 'Pawsitive Protectors',
      description: 'Comprehensive animal protection program focusing on rescue operations, medical care, and community awareness for street animals.',
      ngoName: 'Animal Care',
      championName: 'Dr. Sunita Reddy',
      impactNumber: 1500,
      impactUnit: 'Animals Helped',
      image: '/images/animal3.webp',
      verified: true,
      location: 'Mumbai',
    },
    {
      id: '3',
      title: 'Pads for Freedom',
      description: 'Providing free sanitary pads and menstrual hygiene education to ensure dignity and continued education.',
      ngoName: 'KHUSHII',
      championName: 'Dr. Meera Singh',
      impactNumber: 2000,
      impactUnit: 'Girls & Women Served',
      image: '/images/animals-2.jpeg',
      verified: true,
      location: 'Delhi',
    },
    {
      id: '4',
      title: 'Bowls of Hope',
      description: 'Daily feeding program for street dogs and cats, providing nutritious meals and basic veterinary care.',
      ngoName: 'Animal Care',
      championName: 'Dr. Sunita Reddy',
      impactNumber: 2000,
      impactUnit: 'Meals Served / Day',
      image: '/images/animal3.webp',
      verified: true,
      location: 'Chennai',
    },
    {
      id: '5',
      title: 'Flood Relief in Uttarakhand',
      description: 'Emergency shelter, food, medical aid, and rehabilitation support to flood-affected communities in Uttarakhand.',
      ngoName: 'GUS',
      championName: 'Prashant Koli',
      impactNumber: 2000,
      impactUnit: 'Families Supported',
      image: '/images/Uttarakhand-rescue.jpg',
      verified: true,
      location: 'Uttarakhand',
    },
    {
      id: '6',
      title: 'Flood Animal Rescue',
      description: 'Emergency rescue operations and rehabilitation for animals affected by floods in Uttarakhand.',
      ngoName: 'Animal Care',
      championName: 'Field Rescue Team',
      impactNumber: 500,
      impactUnit: 'Animals Rescued',
      image: '/images/flood animal.jpg',
      verified: true,
      location: 'Uttarakhand',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Stories', count: impactStories.length },
    { id: 'education', label: 'Education', count: 2 },
    { id: 'healthcare', label: 'Healthcare', count: 1 },
    { id: 'water', label: 'Clean Water', count: 1 },
    { id: 'skills', label: 'Skill Development', count: 1 },
    { id: 'nutrition', label: 'Child Nutrition', count: 1 },
    { id: 'women', label: 'Women Empowerment', count: 1 },
  ];

  // Map filter IDs to arrays of story IDs to display for each filter
  const filterStoryMap: Record<string, string[]> = {
    all: impactStories.map((s) => s.id),
    education: ['1', '3'], 
    healthcare: ['4'],     
    water: ['2', '5'],     
    skills: ['3', '6'],    
    nutrition: ['5'],     
    women: ['6', '1', '5'],
  };

  // Filtered and searched stories
  const filteredStories = impactStories.filter((story) => {
    // Only show stories whose ID is in the current filter's list
    const allowedIds = filterStoryMap[selectedFilter] || filterStoryMap['all'];
    const matchesFilter = allowedIds.includes(story.id);
    // Search logic
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      story.title.toLowerCase().includes(search) ||
      story.ngoName.toLowerCase().includes(search) ||
      story.championName.toLowerCase().includes(search);
    return matchesFilter && (!searchTerm || matchesSearch);
  });

  const StoryCard: React.FC<{ story: ImpactCardProps; index: number }> = ({ story, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white group cursor-pointer"
      onClick={() => navigate('/impact-stories-details')}
    >
      <div className="relative">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* NFT Verification Badge */}
        {story.verified && (
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
            <CheckCircle className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">NFT Verified</span>
            <span className="sm:hidden">Verified</span>
          </div>
        )}
        
        {/* Location Badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
          {story.location}
        </div>

        {/* NFT Token ID */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-mono">
          #TGC{story.id.padStart(3, '0')}
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col h-[calc(100%-10rem)] sm:h-[calc(100%-11rem)] md:h-[calc(100%-12rem)] lg:h-[calc(100%-13rem)]">
        {/* NGO Info and Impact Metrics */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Badge className="w-4 h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-blue-600 truncate">{story.ngoName}</span>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
              {story.impactNumber.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">{story.impactUnit}</div>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {story.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
          {story.description}
        </p>

        {/* Additional Impact Metrics for NFT Wall */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-sm font-bold text-gray-900">
              {Math.floor(story.impactNumber * 0.8)}
            </div>
            <div className="text-xs text-gray-500">Direct Impact</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-sm font-bold text-gray-900">
              {Math.floor(story.impactNumber * 0.3)}
            </div>
            <div className="text-xs text-gray-500">Indirect Impact</div>
          </div>
        </div>

        {/* Tags based on content */}
        <div className="flex flex-wrap gap-1 mb-4">
          {story.title.includes('Education') && (
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
              Education
            </span>
          )}
          {story.title.includes('Water') && (
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
              Clean Water
            </span>
          )}
          {story.title.includes('Skill') && (
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
              Skills
            </span>
          )}
          {story.title.includes('Healthcare') && (
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
              Healthcare
            </span>
          )}
          {story.title.includes('Nutrition') && (
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
              Nutrition
            </span>
          )}
          {story.title.includes('Women') && (
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
              Women Empowerment
            </span>
          )}
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
            Verified
          </span>
        </div>
        
        {/* Champion Info and Action */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {story.championName.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-500">Champion</div>
              <div className="text-sm font-medium text-gray-900 truncate">{story.championName}</div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-600 hover:text-blue-700 flex-shrink-0 ml-2"
            onClick={(e) => { e.stopPropagation(); navigate('/impact-stories-details'); }}
          >
            <span className="hidden sm:inline">View Details</span>
            <span className="sm:hidden">Details</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            Verified Impact{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto px-4">
            Every story here represents real lives transformed, verified through blockchain technology.
            Explore the documented impact created by our champions and NGO partners.
          </p>
        </motion.div>

        {/* Stats Section */}
       

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search stories, NGOs, or champions..."
                leftIcon={<Search className="w-5 h-5" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              icon={<Filter className="w-4 h-4" />}
              className="sm:hidden"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              Filter
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
            </Button>
            <Button 
              variant="outline" 
              icon={<Filter className="w-4 h-4" />}
              className="hidden sm:flex"
            >
              Filter Stories
            </Button>
          </div>

          {/* Filter Pills */}
          <div className={`sm:block ${showMobileFilters ? 'block' : 'hidden'}`}>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setSelectedFilter(filter.id);
                    setShowMobileFilters(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-black mb-1">{impactStories.length}</div>
            <div className="text-sm text-gray-800">Verified Stories</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-black mb-1">{impactStories.length}</div>
            <div className="text-sm text-gray-800">Verified NGOs</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-black mb-1">{impactStories.length}</div>
            <div className="text-sm text-gray-800">Active Champions</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-black mb-1">
              {impactStories.reduce((total, story) => total + story.impactNumber, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-800">Lives Impacted</div>
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredStories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            variant="primary" 
            className="shadow-lg hover:shadow-xl group"
          >
            Load More Stories
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ImpactStories;