import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, CheckCircle, MapPin, Users, Calendar, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ImpactStory } from '../types';

export const NFTWall: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const impactStories: ImpactStory[] = [
    {
      id: '1',
      title: 'Digital Literacy Program for Rural Women',
      description: 'Training 200 rural women in Rajasthan on digital skills, enabling them to access government services and start online businesses.',
      ngo: {
        id: '1',
        name: 'Digital Empowerment Foundation',
        description: 'Bridging the digital divide',
        verified: true,
        logo: '',
        panCard: '',
        aadhaarCard: '',
        certificate12A: '',
        certificate80G: '',
        contactEmail: '',
        contactPhone: '',
        address: '',
        causesSupported: [],
        registeredAt: new Date(),
      },
      causeChampion: {
        id: '1',
        name: 'Priya Sharma',
        city: 'Mumbai',
        state: 'Maharashtra',
        causeInterest: 'Women Empowerment',
        whyICare: '',
        phoneNumber: '',
        joinedAt: new Date(),
        campaignsSupported: 5,
      },
      impactMetrics: [
        { label: 'Women Trained', value: 200, unit: 'women' },
        { label: 'Online Businesses Started', value: 45, unit: 'businesses' },
        { label: 'Monthly Income Increase', value: 3500, unit: '₹ average' },
      ],
      media: [
        {
          type: 'image',
          url: 'https://images.pexels.com/photos/8923858/pexels-photo-8923858.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
      nftVerified: true,
      nftTokenId: 'TGC001',
      publishedAt: new Date('2024-01-15'),
      tags: ['Digital Skills', 'Women Empowerment', 'Rural Development'],
      location: 'Rajasthan',
    },
    {
      id: '2',
      title: 'Clean Water Initiative in Rural Schools',
      description: 'Installing water purification systems in 50 rural schools across Uttar Pradesh, providing clean drinking water to over 5,000 students.',
      ngo: {
        id: '2',
        name: 'Water for All Foundation',
        description: 'Ensuring clean water access',
        verified: true,
        logo: '',
        panCard: '',
        aadhaarCard: '',
        certificate12A: '',
        certificate80G: '',
        contactEmail: '',
        contactPhone: '',
        address: '',
        causesSupported: [],
        registeredAt: new Date(),
      },
      causeChampion: {
        id: '2',
        name: 'Rahul Singh',
        city: 'Delhi',
        state: 'Delhi',
        causeInterest: 'Clean Water Access',
        whyICare: '',
        phoneNumber: '',
        joinedAt: new Date(),
        campaignsSupported: 3,
      },
      impactMetrics: [
        { label: 'Schools Covered', value: 50, unit: 'schools' },
        { label: 'Students Benefited', value: 5000, unit: 'students' },
        { label: 'Water Systems Installed', value: 50, unit: 'systems' },
      ],
      media: [
        {
          type: 'image',
          url: 'https://images.pexels.com/photos/6995297/pexels-photo-6995297.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
      nftVerified: true,
      nftTokenId: 'TGC002',
      publishedAt: new Date('2024-02-10'),
      tags: ['Clean Water', 'Education', 'Rural Development'],
      location: 'Uttar Pradesh',
    },
    {
      id: '3',
      title: 'Skill Development for Urban Youth',
      description: 'Providing vocational training to 300 underprivileged youth in Mumbai, helping them secure employment in various industries.',
      ngo: {
        id: '3',
        name: 'Youth Skills Initiative',
        description: 'Empowering youth through skills',
        verified: true,
        logo: '',
        panCard: '',
        aadhaarCard: '',
        certificate12A: '',
        certificate80G: '',
        contactEmail: '',
        contactPhone: '',
        address: '',
        causesSupported: [],
        registeredAt: new Date(),
      },
      causeChampion: {
        id: '3',
        name: 'Anita Desai',
        city: 'Pune',
        state: 'Maharashtra',
        causeInterest: 'Skill Development',
        whyICare: '',
        phoneNumber: '',
        joinedAt: new Date(),
        campaignsSupported: 7,
      },
      impactMetrics: [
        { label: 'Youth Trained', value: 300, unit: 'youth' },
        { label: 'Job Placements', value: 220, unit: 'placements' },
        { label: 'Average Salary', value: 15000, unit: '₹/month' },
      ],
      media: [
        {
          type: 'image',
          url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
      nftVerified: true,
      nftTokenId: 'TGC003',
      publishedAt: new Date('2024-03-05'),
      tags: ['Skill Development', 'Youth Empowerment', 'Employment'],
      location: 'Maharashtra',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Stories', count: impactStories.length },
    { id: 'education', label: 'Education', count: 12 },
    { id: 'healthcare', label: 'Healthcare', count: 8 },
    { id: 'environment', label: 'Environment', count: 6 },
    { id: 'women', label: 'Women Empowerment', count: 15 },
    { id: 'water', label: 'Clean Water', count: 9 },
    { id: 'skills', label: 'Skill Development', count: 11 },
  ];

  const StoryCard: React.FC<{ story: ImpactStory; index: number }> = ({ story, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card hover className="overflow-hidden group cursor-pointer h-full">
        <div className="relative">
          <img
            src={story.media[0]?.url}
            alt={story.title}
            className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* NFT Badge */}
          {story.nftVerified && (
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
              <CheckCircle className="w-3 h-3 mr-1" />
              <span className="hidden sm:inline">NFT </span>#{story.nftTokenId}
            </div>
          )}
          
          {/* Location */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            <span className="truncate max-w-20 sm:max-w-none">{story.location}</span>
          </div>
        </div>

        <CardContent className="p-3 sm:p-4 lg:p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-teal-600 text-xs font-bold">
                  {story.ngo.name.charAt(0)}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">{story.ngo.name}</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1 text-green-500 flex-shrink-0" />
                  <span className="hidden sm:inline">Verified NGO</span>
                  <span className="sm:hidden">Verified</span>
                </div>
              </div>
            </div>
            
            <div className="text-right flex-shrink-0">
              <div className="text-xs text-gray-500 flex items-center">
                <Calendar className="w-3 h-3 mr-1 sm:inline hidden" />
                <span className="hidden sm:inline">{story.publishedAt.toLocaleDateString()}</span>
                <span className="sm:hidden">{story.publishedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
            </div>
          </div>

          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 flex-shrink-0">
            {story.title}
          </h3>
          
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 flex-1">
            {story.description}
          </p>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
            {story.impactMetrics.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="text-sm sm:text-base lg:text-lg font-bold text-primary-600">
                  {metric.value.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 truncate" title={metric.label}>
                  {metric.label.length > 12 && window.innerWidth < 640 
                    ? metric.label.substring(0, 12) + '...' 
                    : metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            {story.tags.slice(0, window.innerWidth < 640 ? 1 : 2).map((tag, idx) => (
              <span
                key={idx}
                className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium truncate"
                title={tag}
              >
                {tag.length > 15 && window.innerWidth < 640 ? tag.substring(0, 15) + '...' : tag}
              </span>
            ))}
            {story.tags.length > (window.innerWidth < 640 ? 1 : 2) && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                +{story.tags.length - (window.innerWidth < 640 ? 1 : 2)}
              </span>
            )}
          </div>

          {/* Champion Info */}
          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary-500 to-burgundy-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {story.causeChampion.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-gray-500">Champion</div>
                <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                  {story.causeChampion.name}
                </div>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="text-primary-600 px-2 sm:px-3 text-xs sm:text-sm flex-shrink-0">
              <span className="hidden sm:inline">View Full Story</span>
              <span className="sm:hidden">View</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
            Impact{' '}
            <span className="bg-gradient-to-r from-primary-500 to-burgundy-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Every story here represents real lives transformed, verified through blockchain technology.
            Explore the documented impact created by our champions and NGO partners.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search stories, NGOs, or champions..."
                leftIcon={<Search className="w-4 h-4 sm:w-5 sm:h-5" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-sm sm:text-base"
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
              Filter
            </Button>
          </div>

          {/* Filter Tabs - Mobile Collapsible */}
          <div className={`sm:block ${showMobileFilters ? 'block' : 'hidden'}`}>
            <div className="flex flex-wrap gap-2 sm:gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setSelectedFilter(filter.id);
                    setShowMobileFilters(false);
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span className="hidden sm:inline">{filter.label} ({filter.count})</span>
                  <span className="sm:hidden">{filter.label.length > 10 ? filter.label.substring(0, 10) + '...' : filter.label} ({filter.count})</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-600 mb-1 sm:mb-2">156</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">Total Stories</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600 mb-1 sm:mb-2">89</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">Active NGOs</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600 mb-1 sm:mb-2">2.5K</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">Champions</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-burgundy-600 mb-1 sm:mb-2">45K</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">Lives Impacted</div>
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {impactStories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <Button size="lg" variant="outline" className="px-6 sm:px-8">
            <span className="text-sm sm:text-base">Load More Stories</span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};