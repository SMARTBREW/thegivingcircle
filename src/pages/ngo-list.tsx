import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, CheckCircle, MapPin, Users, Calendar, ChevronDown, Shield, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
// Removed unused imports

interface NGO {
  id: string;
  name: string;
  description: string;
  verified: boolean;
  logo: string;
  location: string;
  causes: string[];
  yearEstablished: number;
  impactMetrics: {
    label: string;
    value: number;
    unit: string;
  }[];
  featuredImage: string;
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const NGOList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < 640);
    
    // Add resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ngos: NGO[] = [
    {
      id: '1',
      name: 'Smile Foundation',
      description: 'Working towards the welfare of children, their families, and the community as a whole through comprehensive health, education, and livelihood programs. We focus on creating sustainable change by empowering communities and building long-term partnerships. Our initiatives span across education support, healthcare services, and women empowerment programs that have transformed thousands of lives across India.',
      verified: true,
      logo: '/Smileshero.jpg',
      location: 'Delhi',
      causes: ['Education', 'Healthcare', 'Women Empowerment'],
      yearEstablished: 2002,
      impactMetrics: [
        { label: 'Children Educated', value: 75000, unit: 'children' },
        { label: 'Communities Served', value: 2500, unit: 'communities' },
        { label: 'Healthcare Recipients', value: 125000, unit: 'people' },
      ],
      featuredImage: '/Smileshero.jpg',
      contactInfo: {
        email: 'info@smilefoundation.org',
        phone: '+91-11-43123700',
        website: 'www.smilefoundation.org',
      },
      socialMedia: {
        facebook: 'smilefoundationindia',
        twitter: 'smilefoundation',
        instagram: 'smilefoundationindia',
      },
    },
    {
      id: '2',
      name: 'Khushii Foundation',
      description: 'Dedicated to providing quality education, healthcare, and skill development to underprivileged children and communities across India. We believe in creating opportunities for holistic development through innovative programs and sustainable solutions. Our work encompasses child welfare initiatives, skill development training, and rural development projects that address the root causes of poverty and inequality.',
      verified: true,
      logo: '/khushii.jpg',
      location: 'Multiple Locations',
      causes: ['Child Welfare', 'Skill Development', 'Rural Development'],
      yearEstablished: 2003,
      impactMetrics: [
        { label: 'Students Supported', value: 35000, unit: 'students' },
        { label: 'Schools Established', value: 45, unit: 'schools' },
        { label: 'Communities Impacted', value: 1800, unit: 'communities' },
      ],
      featuredImage: '/khushii.jpg',
      contactInfo: {
        email: 'contact@khushii.org',
        phone: '+91-11-41550912',
        website: 'www.khushii.org',
      },
      socialMedia: {
        facebook: 'khushiindia',
        instagram: 'khushii_ngo',
      },
    },
    {
      id: '3',
      name: 'Animal Care Foundation',
      description: 'Working towards the rescue, rehabilitation, and welfare of street animals while promoting animal rights and humane treatment across communities. We focus on creating awareness about animal welfare, providing medical care to injured animals, and implementing sterilization programs to control population. Our environmental initiatives also include promoting sustainable practices that protect both animals and their natural habitats.',
      verified: true,
      logo: '/Animal care.jpg',
      location: 'Mumbai',
      causes: ['Animal Welfare', 'Environment', 'Education'],
      yearEstablished: 2010,
      impactMetrics: [
        { label: 'Animals Rescued', value: 12000, unit: 'animals' },
        { label: 'Sterilizations', value: 8500, unit: 'procedures' },
        { label: 'Adoption Drives', value: 320, unit: 'events' },
      ],
      featuredImage: '/Animal care.jpg',
      contactInfo: {
        email: 'help@animalcare.org',
        phone: '+91-22-26354410',
        website: 'www.animalcarefoundation.org',
      },
      socialMedia: {
        facebook: 'animalcarefoundation',
        instagram: 'animalcare_foundation',
      },
    },
    {
      id: '4',
      name: 'Mamta Health Institute',
      description: 'Focused on maternal and child health, reproductive health, and HIV/AIDS prevention through community-based interventions and awareness programs. We work closely with healthcare systems to improve access to quality medical services for women and children. Our comprehensive approach includes health education, medical support, vaccination drives, and empowerment programs that strengthen communities from within.',
      verified: true,
      logo: '/mamta.jpg',
      location: 'New Delhi',
      causes: ['Healthcare', 'Women Empowerment', 'Child Welfare'],
      yearEstablished: 1990,
      impactMetrics: [
        { label: 'Women Supported', value: 45000, unit: 'women' },
        { label: 'Children Vaccinated', value: 28000, unit: 'children' },
        { label: 'Health Programs', value: 520, unit: 'programs' },
      ],
      featuredImage: '/mamta.jpg',
      contactInfo: {
        email: 'info@mamtahimc.org',
        phone: '+91-11-29220210',
        website: 'www.mamtahimc.org',
      },
      socialMedia: {
        twitter: 'mamta_himc',
        linkedin: 'mamta-health-institute',
      },
    },
    {
      id: '5',
      name: 'Kokan Unnati Foundation',
      description: 'Working towards sustainable development in the Konkan region through education, agriculture, and livelihood programs that preserve traditional knowledge while embracing modern techniques. We focus on farmer training, sustainable agriculture practices, and environmental conservation. Our community-driven approach ensures that development projects are tailored to local needs and create lasting positive impact.',
      verified: true,
      logo: '/kokan.jpg',
      location: 'Maharashtra',
      causes: ['Rural Development', 'Skill Development', 'Environment'],
      yearEstablished: 2015,
      impactMetrics: [
        { label: 'Farmers Trained', value: 3200, unit: 'farmers' },
        { label: 'Villages Covered', value: 85, unit: 'villages' },
        { label: 'Sustainable Projects', value: 45, unit: 'projects' },
      ],
      featuredImage: '/kokan.jpg',
      contactInfo: {
        email: 'contact@kokanunnati.org',
        phone: '+91-2352-228486',
        website: 'www.kokanunnati.org',
      },
      socialMedia: {
        facebook: 'kokanunnati',
        instagram: 'kokan_unnati',
      },
    },
    {
      id: '6',
      name: 'Janakalyan Welfare Program',
      description: 'Focused on tribal welfare, education, and sustainable livelihood development in remote areas of central India where access to basic services is limited. We work with indigenous communities to preserve their cultural heritage while providing modern educational opportunities and healthcare access. Our programs emphasize community participation and traditional knowledge integration with contemporary development approaches.',
      verified: true,
      logo: '/JWP.jpg',
      location: 'Chhattisgarh',
      causes: ['Tribal Welfare', 'Education', 'Rural Development'],
      yearEstablished: 2008,
      impactMetrics: [
        { label: 'Tribal Communities', value: 240, unit: 'communities' },
        { label: 'Children in School', value: 5800, unit: 'children' },
        { label: 'Livelihood Projects', value: 35, unit: 'projects' },
      ],
      featuredImage: '/JWP.jpg',
      contactInfo: {
        email: 'info@janakalyan.org',
        phone: '+91-7712-423865',
        website: 'www.janakalyan.org',
      },
      socialMedia: {
        facebook: 'janakalyanwelfare',
      },
    },
  ];

  const filters = [
    { id: 'all', label: 'All NGOs', count: ngos.length },
    { id: 'education', label: 'Education', count: ngos.filter(ngo => ngo.causes.includes('Education')).length },
    { id: 'healthcare', label: 'Healthcare', count: ngos.filter(ngo => ngo.causes.includes('Healthcare')).length },
    { id: 'women', label: 'Women Empowerment', count: ngos.filter(ngo => ngo.causes.includes('Women Empowerment')).length },
    { id: 'environment', label: 'Environment', count: ngos.filter(ngo => ngo.causes.includes('Environment')).length },
    { id: 'rural', label: 'Rural Development', count: ngos.filter(ngo => ngo.causes.includes('Rural Development')).length },
    { id: 'child', label: 'Child Welfare', count: ngos.filter(ngo => ngo.causes.includes('Child Welfare')).length },
  ];

  const filteredNGOs = ngos.filter(ngo => {
    if (selectedFilter !== 'all' && !ngo.causes.some(cause => cause.toLowerCase().includes(selectedFilter))) {
      return false;
    }
    
    if (searchTerm && !ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !ngo.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !ngo.causes.some(cause => cause.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }
    
    return true;
  });

  // Removed convertToNGODetails function - now using routing with NGODetailContainer

  const handleLearnMore = (ngo: NGO) => {
    navigate(`/ngo-detail/${ngo.id}`);
  };

  const NGOCard: React.FC<{ ngo: NGO; index: number }> = ({ ngo, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div 
        className="overflow-hidden group cursor-pointer h-full flex flex-col bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={() => handleLearnMore(ngo)}
      >
        <div className="relative flex-shrink-0">
          <img
            src={ngo.featuredImage}
            alt={ngo.name}
            className="w-full h-28 sm:h-32 lg:h-36 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Verified Badge */}
          {ngo.verified && (
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
              <CheckCircle className="w-3 h-3 mr-1" />
              <span>Verified</span>
            </div>
          )}
          
          {/* Location */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            <span className="truncate max-w-20 sm:max-w-none">{ngo.location}</span>
          </div>
        </div>

        <div className="p-2 sm:p-3 lg:p-4 flex flex-col flex-1">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src={ngo.logo}
                  alt={`${ngo.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-medium text-gray-800 truncate">Est. {ngo.yearEstablished}</div>
                <div className="text-xs text-blue-600 font-medium">{new Date().getFullYear() - ngo.yearEstablished}+ years</div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-1">
            {ngo.name}
          </h3>
          
          {/* Tagline with highlighted background */}
          <div className="mb-2">
            <span className="inline-block bg-blue-100/70 backdrop-blur-sm text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
              {ngo.causes.slice(0, 2).join(' & ')}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-xs mb-2 line-clamp-3 leading-relaxed">
            {ngo.description}
          </p>

          {/* Certifications & Website */}
          <div className="mb-2">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Registered NGO
              </span>
              <span className="text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                <Award className="w-3 h-3" />
                Certified
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <a 
                href={`https://${ngo.contactInfo.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer truncate flex items-center gap-1"
                title={`Visit ${ngo.contactInfo.website}`}
              >
                <ExternalLink className="w-3 h-3" />
                {ngo.contactInfo.website}
              </a>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleLearnMore(ngo);
                }}
                className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg font-medium transition-colors duration-200 flex items-center gap-1 flex-shrink-0"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-3 sm:mb-4 px-4 sm:px-0">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NGO Partners
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Discover our network of verified NGO partners creating meaningful change across India.
            Every organization here has been thoroughly vetted for transparency and impact.
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
                placeholder="Search NGOs by name, cause, or location..."
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
                      ? 'bg-blue-600 text-white shadow-lg'
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
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2">{ngos.length}</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-800">Verified NGOs</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2">24</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-800">States Covered</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2">18+</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-800">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2">2M+</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-800">Lives Impacted</div>
          </div>
        </motion.div>

        {/* NGOs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredNGOs.length > 0 ? (
            filteredNGOs.map((ngo, index) => (
              <NGOCard key={ngo.id} ngo={ngo} index={index} />
            ))
          ) : (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-3 py-16 text-center">
              <p className="text-gray-500 text-lg">No NGOs found matching your search criteria.</p>
            </div>
          )}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            Are you an NGO looking to expand your impact?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join our network of verified NGOs and connect with passionate champions who want to support your cause.
            Apply to become a partner today.
          </p>
          <a href="/ngo-partner">
            <Button 
              size="lg" 
              className="px-6 sm:px-8 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Become a Partner
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NGOList; 