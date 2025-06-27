import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Heart, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  Target, 
  Share2, 
  CheckCircle, 
  Globe, 
  Mail, 
  Phone, 
  ExternalLink,
  Play,
  Star,
  TrendingUp,
  BookOpen,
  Handshake,
  Shield,
  Building,
  Clock,
  Download
} from 'lucide-react';
import { NGODetails } from '../types';

/**
 * NGO Detail Page Component
 * 
 * This component displays comprehensive information about an NGO including:
 * - Organization overview and mission
 * - Causes and impact metrics
 * - Timeline and milestones
 * - Gallery of work
 * - Leadership team
 * - Partnerships and awards
 * 
 * Features a formal, professional design with heart-touching elements
 * to showcase the humanitarian impact of the organization.
 */

interface NGODetailPageProps {
  ngoDetails: NGODetails;
  onBack?: () => void;
  loading?: boolean;
}

// Icon mapping for impact metrics
const iconMap: { [key: string]: React.ComponentType<any> } = {
  'Users': Users,
  'Heart': Heart,
  'Target': Target,
  'Calendar': Calendar,
  'Globe': Globe,
  'TrendingUp': TrendingUp,
  'Building': Building,
  'Award': Award
};

const NGODetailPage: React.FC<NGODetailPageProps> = ({ 
  ngoDetails, 
  onBack,
  loading = false 
}) => {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('all');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<any>(null);
  const [isFollowing, setIsFollowing] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-700 font-semibold text-lg">Loading Organization Profile...</p>
        </div>
      </div>
    );
  }

  if (!ngoDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Organization Not Found</h2>
            <p className="text-slate-600 mb-6">The organization profile you're looking for doesn't exist or has been removed.</p>
            {onBack && (
              <button 
                onClick={onBack}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Return to Organizations
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const galleryFilters = ['all', ...Array.from(new Set(ngoDetails.gallery.map(item => item.cause)))];

  const filteredGallery = activeGalleryFilter === 'all' 
    ? ngoDetails.gallery 
    : ngoDetails.gallery.filter(item => item.cause === activeGalleryFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Organization Overview */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white pt-[100px]">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 container mx-auto px-8 py-20">
          {onBack && (
            <button 
              onClick={onBack}
              className="flex items-center gap-3 text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowLeft size={18} />
              </div>
              <span className="font-medium">Back to Organizations</span>
            </button>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              {/* Organization Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  {ngoDetails.verified && (
                    <>
                      <CheckCircle size={18} className="text-green-400" />
                      <span className="text-sm font-semibold">Verified Organization</span>
                    </>
                  )}
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-medium">Est. {ngoDetails.yearEstablished}</span>
                </div>
              </div>

              {/* Organization Name and Mission */}
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {ngoDetails.name}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
                {ngoDetails.shortDescription}
              </p>

              {/* Quick Impact Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ngoDetails.impactMetrics.slice(0, 3).map((metric, index) => {
                  const IconComponent = iconMap[metric.icon] || Target;
                  
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent size={24} />
                      </div>
                      <div className="text-3xl font-bold mb-1">{metric.value}{metric.unit}</div>
                      <div className="text-sm text-blue-100 font-medium">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Organization Logo and Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
                {/* Premium Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Award size={16} className="inline mr-1" />
                    Trusted Partner
                  </div>
                </div>

                <div className="text-center mt-4">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <img 
                      src={ngoDetails.logo} 
                      alt={ngoDetails.name}
                      className="w-full h-full rounded-xl object-cover shadow-lg"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{ngoDetails.name}</h3>
                  
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
                    <MapPin size={16} />
                    <span className="text-sm">{ngoDetails.location}</span>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={16} className="text-blue-600" />
                      <span className="text-gray-700">{ngoDetails.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail size={16} className="text-blue-600" />
                      <span className="text-gray-700">{ngoDetails.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Globe size={16} className="text-blue-600" />
                      <a href={`https://${ngoDetails.contactInfo.website}`} className="text-blue-600 hover:underline">
                        {ngoDetails.contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles and unwavering commitment to social change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Target className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">{ngoDetails.mission}</p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Star className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">{ngoDetails.vision}</p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Heart className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <div className="space-y-2">
                {ngoDetails.values.map((value, index) => (
                  <div key={index} className="text-gray-700 text-sm bg-gray-50 rounded-lg px-3 py-2">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Causes and Impact Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Causes & Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every cause we support creates ripples of positive change across communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {ngoDetails.causes.map((cause, index) => (
              <div key={cause.id} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={cause.image} 
                    alt={cause.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{cause.name}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{cause.description}</p>
                  
                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {cause.impactMetrics.map((metric, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {metric.value}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Approach */}
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Our Approach</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{cause.approach}</p>
                  </div>

                  {/* Beneficiaries */}
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Who We Help</h4>
                    <div className="flex flex-wrap gap-2">
                      {cause.beneficiaries.map((beneficiary, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {beneficiary}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that mark our commitment to creating lasting social impact
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-blue-300 transform md:-translate-x-0.5"></div>
              
              {ngoDetails.timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-blue-600 rounded-full transform md:-translate-x-3 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 group hover:shadow-xl transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                          {item.year}
                        </div>
                        <Calendar size={16} className="text-gray-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                        <div className="font-semibold text-blue-900 mb-2">Milestone Achievement</div>
                        <div className="text-blue-800 text-sm">{item.milestone}</div>
                      </div>

                      {item.impact && (
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          {item.impact.map((impact, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-lg font-bold text-blue-600">{impact.value}</div>
                              <div className="text-xs text-gray-600">{impact.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual stories of transformation and hope from our work across communities
            </p>
          </div>

          {/* Gallery Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveGalleryFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeGalleryFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter === 'all' ? 'All Causes' : filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedGalleryItem(item)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all">
                  <div className="h-64 relative">
                    <img 
                      src={item.type === 'video' ? item.thumbnail || item.url : item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="text-blue-600 ml-1" size={24} />
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-white/90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {item.cause}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-600 text-xs">{item.location}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by passion and guided by expertise, our leaders inspire change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ngoDetails.leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  {leader.image ? (
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full rounded-full object-cover shadow-lg"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{leader.role}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{leader.bio}</p>
                
                <div className="space-y-2 text-xs text-gray-600">
                  <div><strong>Experience:</strong> {leader.experience}</div>
                  <div><strong>Education:</strong> {leader.education}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Together, we can create lasting change. Partner with us to make a meaningful impact 
            in the lives of those who need it most.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-3 ${
                isFollowing 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20'
              }`}
            >
              <Heart size={20} className={isFollowing ? 'fill-current' : ''} />
              {isFollowing ? 'Following Organization' : 'Follow Organization'}
            </button>
            
            <button className="px-8 py-4 bg-yellow-500 text-yellow-900 rounded-lg font-semibold hover:bg-yellow-400 transition-all flex items-center gap-3">
              <Handshake size={20} />
              Partner With Us
            </button>
            
            <button className="px-8 py-4 bg-white/10 text-white border-2 border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-3">
              <Share2 size={20} />
              Share Organization
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGODetailPage; 