import React from 'react';
import { ArrowLeft, Heart, Share2, Bookmark, Shield, Award, CheckCircle, AlertCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Clock, Target, Building2, User, Users, Calendar } from 'lucide-react';

const CauseDetailPage = () => {
  // Sample cause data (using the first cause from your original data)
  const cause = {
    id: 1,
    title: 'Emergency Education Support for Slum Children',
    organizer: 'Priya Sharma',
    ngo: 'Khushii',
    location: 'Mumbai, Maharashtra',
    category: 'Education',
    goalAmount: '₹4,50,000',
    raisedAmount: '₹2,80,000',
    progressPercentage: 62,
    supporters: 143,
    daysLeft: 18,
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop',
    urgency: 'High',
    description: 'This urgent campaign aims to provide essential educational resources, school supplies, and learning materials to children living in Mumbai\'s slum areas. The funds will be used to establish temporary learning centers, provide books, uniforms, and nutritious meals to ensure these children don\'t miss out on their education.',
    beneficiaries: '250 children aged 6-14',
    timeline: '6 months',
    updates: [
      'Learning center setup completed in Dharavi',
      '150 children enrolled in the program',
      'Distribution of school supplies ongoing'
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'Khushii',
    logo: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=100&h=100&fit=crop',
    description: 'Khushii is a non-profit organization dedicated to empowering underprivileged children through education, healthcare, and holistic development programs across India.',
    focus: 'Child Development & Education',
    founded: '2008',
    location: 'Mumbai, Maharashtra',
    impact: '50,000+ children impacted',
    certification: 'Section 8, 80G, FCRA',
    contact: {
      phone: '+91-9876543210',
      email: 'info@khushii.org',
      website: 'www.khushii.org',
      social: {
        facebook: '@KhushiiNGO',
        twitter: '@KhushiiOrg',
        instagram: '@khushii_official'
      }
    },
    achievements: [
      '15+ years of dedicated service',
      'Presence in 12 states across India',
      'Winner of National CSR Excellence Award 2023',
      'ISO 9001:2015 certified organization'
    ],
    currentProjects: 25,
    totalBeneficiaries: '50,000+',
    transparency: 95
  };

  const getUrgencyColor = (urgency:string) => {
    switch (urgency) {
      case 'Critical': return 'text-red-700 bg-red-100';
      case 'High': return 'text-orange-700 bg-orange-100';
      case 'Medium': return 'text-yellow-700 bg-yellow-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     

      <div className="container mx-auto px-6 py-8 mt-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image and Title */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="relative h-64 md:h-80">
                <img 
                  src={cause.image} 
                  alt={cause.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(cause.urgency)}`}>
                    {cause.urgency} Priority
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {cause.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-purple-600" />
                    <span className="font-medium text-purple-600">{cause.ngo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Organized by {cause.organizer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{cause.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{cause.timeline}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {cause.description}
                </p>
              </div>
            </div>

            {/* Project Updates */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-600" />
                Recent Updates
              </h2>
              <div className="space-y-4">
                {cause.updates.map((update, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{update}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target size={20} className="text-blue-600" />
                Impact & Beneficiaries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Direct Beneficiaries</h3>
                  <p className="text-blue-700">{cause.beneficiaries}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Project Timeline</h3>
                  <p className="text-green-700">{cause.timeline}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Donation Progress */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-1">{cause.raisedAmount}</div>
                <div className="text-gray-600">raised of {cause.goalAmount} goal</div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{cause.supporters}</div>
                  <div className="text-sm text-gray-600">supporters</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{cause.daysLeft}</div>
                  <div className="text-sm text-gray-600">days left</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{cause.progressPercentage}%</div>
                  <div className="text-sm text-gray-600">funded</div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all mb-3">
                Donate Now
              </button>
              
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Share this cause
              </button>
            </div>

            {/* NGO Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Building2 size={20} className="text-purple-600" />
                About {ngoDetails.name}
              </h3>
              
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={ngoDetails.logo} 
                  alt={ngoDetails.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{ngoDetails.name}</h4>
                  <p className="text-sm text-purple-600">{ngoDetails.focus}</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {ngoDetails.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Founded:</span>
                  <span className="font-medium">{ngoDetails.founded}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{ngoDetails.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Impact:</span>
                  <span className="font-medium">{ngoDetails.impact}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Transparency:</span>
                  <span className="font-medium text-green-600">{ngoDetails.transparency}%</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <Shield size={16} className="text-green-600" />
                <span className="text-sm text-green-600 font-medium">Verified NGO</span>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={14} />
                    <span>{ngoDetails.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={14} />
                    <span>{ngoDetails.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Globe size={14} />
                    <span>{ngoDetails.contact.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseDetailPage;