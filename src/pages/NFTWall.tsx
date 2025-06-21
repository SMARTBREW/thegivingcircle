import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, CheckCircle, MapPin, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ImpactStory } from '../types';

export const NFTWall: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

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
    // Add more sample stories...
  ];

  const filters = [
    { id: 'all', label: 'All Stories', count: impactStories.length },
    { id: 'education', label: 'Education', count: 12 },
    { id: 'healthcare', label: 'Healthcare', count: 8 },
    { id: 'environment', label: 'Environment', count: 6 },
    { id: 'women', label: 'Women Empowerment', count: 15 },
  ];

  const StoryCard: React.FC<{ story: ImpactStory; index: number }> = ({ story, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card hover className="overflow-hidden group cursor-pointer">
        <div className="relative">
          <img
            src={story.media[0]?.url}
            alt={story.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* NFT Badge */}
          {story.nftVerified && (
            <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
              <CheckCircle className="w-3 h-3 mr-1" />
              NFT #{story.nftTokenId}
            </div>
          )}
          
          {/* Location */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {story.location}
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 text-xs font-bold">
                  {story.ngo.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{story.ngo.name}</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                  Verified NGO
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-500 flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {story.publishedAt.toLocaleDateString()}
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {story.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {story.description}
          </p>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {story.impactMetrics.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-primary-600">
                  {metric.value.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {story.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Champion Info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-burgundy-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {story.causeChampion.name.charAt(0)}
              </div>
              <div>
                <div className="text-xs text-gray-500">Champion</div>
                <div className="text-sm font-medium text-gray-900">
                  {story.causeChampion.name}
                </div>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="text-primary-600">
              View Full Story
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Impact{' '}
            <span className="bg-gradient-to-r from-primary-500 to-burgundy-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every story here represents real lives transformed, verified through blockchain technology.
            Explore the documented impact created by our champions and NGO partners.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search stories, NGOs, or champions..."
                leftIcon={<Search className="w-5 h-5" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>
              Filter
            </Button>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">156</div>
            <div className="text-gray-600">Total Stories</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-teal-600 mb-2">89</div>
            <div className="text-gray-600">Active NGOs</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-indigo-600 mb-2">2.5K</div>
            <div className="text-gray-600">Champions</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-burgundy-600 mb-2">45K</div>
            <div className="text-gray-600">Lives Impacted</div>
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactStories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            Load More Stories
          </Button>
        </motion.div>
      </div>
    </div>
  );
};