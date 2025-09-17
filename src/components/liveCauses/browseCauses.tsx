import React, { useState } from 'react';
import { Search, MapPin, Heart, Target, Building2, Users, Shield, CheckCircle, Award, Star } from 'lucide-react';

// Cause type definition removed as it's not used in this component

const LiveCausesPage = () => {
  const [selectedNGO, setSelectedNGO] = useState('All NGOs');
  const [selectedFilter, setSelectedFilter] = useState('Most Urgent');
  const [visibleCauses, setVisibleCauses] = useState(9);

  const ngos = [
    'All NGOs',
    'JWP',
    'Animal Care',
    'KHUSHII',
    'GUS'
  ];

  

  const causes = [
    // JWP causes
    {
      id: 1,
      title: 'Wings of Hope',
      organizer: 'Meera Singh',
      ngo: 'JWP',
      location: 'Uttarakhand, India',
      category: 'Women Empowerment',
      goalAmount: '₹6,50,000',
      raisedAmount: '₹4,80,000',
      progressPercentage: 74,
      supporters: 234,
      daysLeft: 28,
      image: '/images/jwp/_MG_6955.JPG',
      urgency: 'High',
      description: 'Empowering women through skill development, entrepreneurship training, and financial literacy programs across Uttarakhand.',
      beneficiaries: '1000 women',
      timeline: '15 months',
      updates: [
        '500 women enrolled',
        '50 self-help groups formed',
        '200 micro-enterprises started'
      ]
    },
    // Animal Care causes
    {
      id: 2,
      title: 'Pawsitive Protectors',
      organizer: 'Dr. Sunita Reddy',
      ngo: 'Animal Care',
      location: 'Mumbai, Maharashtra',
      category: 'Animal Welfare',
      goalAmount: '₹5,20,000',
      raisedAmount: '₹3,90,000',
      progressPercentage: 75,
      supporters: 312,
      daysLeft: 20,
      image: '/images/animal3.webp',
      urgency: 'High',
      description: 'Comprehensive animal protection program focusing on rescue operations, medical care, and community awareness for street animals.',
      beneficiaries: '1500+ animals',
      timeline: '12 months',
      updates: [
        '800 animals rescued',
        '25 rescue operations completed',
        'Community awareness programs active'
      ]
    },
    {
      id: 3,
      title: 'Bowls of Hope',
      organizer: 'Dr. Sunita Reddy',
      ngo: 'Animal Care',
      location: 'Chennai, Tamil Nadu',
      category: 'Animal Welfare',
      goalAmount: '₹7,80,000',
      raisedAmount: '₹6,20,000',
      progressPercentage: 79,
      supporters: 445,
      daysLeft: 18,
      image: '/images/animal3.webp',
      urgency: 'Critical',
      description: 'Daily feeding program for street dogs and cats across Chennai, providing nutritious meals and basic veterinary care.',
      beneficiaries: '2000+ street animals',
      timeline: '12 months',
      updates: [
        '1500 animals fed daily',
        '25 feeding stations established',
        '100 animals vaccinated'
      ]
    },
    {
      id: 4,
      title: 'Flood Animal Rescue',
      organizer: 'Dr. Sunita Reddy',
      ngo: 'Animal Care',
      location: 'Uttarakhand, India',
      category: 'Emergency Response',
      goalAmount: '₹4,50,000',
      raisedAmount: '₹3,20,000',
      progressPercentage: 71,
      supporters: 198,
      daysLeft: 25,
      image: '/images/flood animal.jpg',
      urgency: 'Critical',
      description: 'Emergency rescue operations for animals affected by floods in Uttarakhand, providing immediate medical care and rehabilitation.',
      beneficiaries: '500+ flood-affected animals',
      timeline: '8 months',
      updates: [
        '300 animals rescued from flood zones',
        'Emergency medical camps established',
        'Rehabilitation centers operational'
      ]
    },
    // KHUSHII causes
    {
      id: 5,
      title: 'Pads for Freedom',
      organizer: 'Dr. Meera Singh',
      ngo: 'KHUSHII',
      location: 'Delhi, India',
      category: 'Women Health',
      goalAmount: '₹3,50,000',
      raisedAmount: '₹2,80,000',
      progressPercentage: 80,
      supporters: 189,
      daysLeft: 15,
      image: '/images/khushi/48.jpg',
      urgency: 'High',
      description: 'Providing free sanitary pads and menstrual hygiene education to girls and women in rural and urban slum areas to ensure dignity and continued education.',
      beneficiaries: '2000 girls and women',
      timeline: '6 months',
      updates: [
        '1500 pad kits distributed',
        '50 awareness sessions conducted',
        'School dropout prevention program active'
      ]
    },
    // GUS causes
    {
      id: 6,
      title: 'Flood Relief in Uttarakhand',
      organizer: 'Prashant Koli',
      ngo: 'GUS',
      location: 'Uttarakhand, India',
      category: 'Disaster Relief',
      goalAmount: '₹8,50,000',
      raisedAmount: '₹6,20,000',
      progressPercentage: 73,
      supporters: 267,
      daysLeft: 30,
      image: '/images/Uttarakhand-rescue.jpg',
      urgency: 'Critical',
      description: 'Comprehensive flood relief operations providing emergency shelter, food, medical aid, and rehabilitation support to affected communities in Uttarakhand.',
      beneficiaries: '2000+ flood-affected families',
      timeline: '18 months',
      updates: [
        '500 families provided emergency shelter',
        'Medical camps serving 1000+ people',
        'Infrastructure rebuilding initiated'
      ]
    }
  ];

  

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'text-red-700 bg-red-100 border border-red-200';
      case 'High': return 'text-orange-700 bg-orange-100 border border-orange-200';
      case 'Medium': return 'text-yellow-700 bg-yellow-100 border border-yellow-200';
      default: return 'text-gray-700 bg-gray-100 border border-gray-200';
    }
  };

  const filteredCauses = selectedNGO === 'All NGOs' 
    ? causes 
    : causes.filter(cause => cause.ngo === selectedNGO);

  const visibleCausesList = filteredCauses.slice(0, visibleCauses);

  const loadMore = () => {
    setVisibleCauses(prev => Math.min(prev + 6, filteredCauses.length));
  };

  // Function to handle navigation to cause details page
  const handleViewDetails = () => {
    // Simulate navigation - in a real app, you would use React Router
    window.location.href = `/live-causes-details`;
  };

  // Handle card click (entire card becomes clickable)
  const handleCardClick = (cause: any) => {
    if (cause.ngo === 'KHUSHII') {
      window.location.href = `/khushi-cause-details`;
    } else {
      handleViewDetails();
    }
  };

  // Handle donate button click (prevent card click when clicking donate)
  const handleDonateClick = (e: React.MouseEvent, causeId: number) => {
    e.stopPropagation();
    // Handle donation logic here
    console.log('Donate clicked for cause:', causeId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Hero Section with NGO Showcase */}
      <div className="relative text-white overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        
        
        <div className="relative container mx-auto px-4 ml-[90px] sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
          <div className="max-w-4xl">

            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-12 sm:mb-6 leading-tight animate-fade-in text-white drop-shadow-lg">
              Transforming Lives Through{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Verified Causes
              </span>
            </h1>
            
            <p className="text-lg mb-6 sm:mb-8 leading-relaxed animate-fade-in-delay text-gray-100 drop-shadow-md max-w-2xl">
              Join <span className="font-semibold text-white">1,23,456+ verified donors</span> creating measurable social impact through rigorously monitored initiatives across India.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mb-6 sm:mb-8 animate-fade-in-delay">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="text-green-400" size={18} />
                  <span className="font-semibold text-sm">100% Verified</span>
                </div>
                <p className="text-xs text-gray-300">Rigorous NGO verification</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="text-blue-400" size={18} />
                  <span className="font-semibold text-sm">₹89+ Crores</span>
                </div>
                <p className="text-xs text-gray-300">Successfully allocated</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="text-purple-400" size={18} />
                  <span className="font-semibold text-sm">5M+ Lives</span>
                </div>
                <p className="text-xs text-gray-300">Positively impacted</p>
              </div>
            </div>
            

          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Professional Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-blue-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-900">Verified NGO Partners</h3>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {ngos.map((ngo) => (
                  <button
                    key={ngo}
                    onClick={() => {
                      setSelectedNGO(ngo);
                      setVisibleCauses(9);
                    }}
                    className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base ${
                      selectedNGO === ngo
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {ngo}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-blue-600" size={16} />
                  <span className="font-semibold text-blue-800 text-sm">Impact Guarantee</span>
                </div>
                <p className="text-blue-700 text-xs leading-relaxed">All partner NGOs undergo quarterly audits and maintain transparent fund allocation reporting.</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Professional Search and Filters */}
            <div className="mb-4 sm:mb-6 bg-white rounded-xl shadow-sm border p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Find Verified Causes</h2>
              
              {/* Search Bar */}
              <div className="relative mb-4 sm:mb-6">
                <Search className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by cause title, NGO partner, or location..."
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Professional Filters */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                <span className="text-gray-600 font-medium">Viewing causes from</span>
                
                <select 
                  value={selectedNGO}
                  onChange={(e) => {
                    setSelectedNGO(e.target.value);
                    setVisibleCauses(9);
                  }}
                  className="border border-gray-300 text-gray-600 rounded-lg px-2 sm:px-4 py-1 sm:py-2 bg-white focus:ring-2 focus:ring-purple-500 font-medium text-xs sm:text-sm"
                >
                  {ngos.map(ngo => (
                    <option key={ngo} value={ngo}>{ngo}</option>
                  ))}
                </select>
                
                <span className="text-gray-600 font-medium">sorted by</span>
                
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="border border-gray-300 text-gray-600 rounded-lg px-2 sm:px-4 py-1 sm:py-2 bg-white focus:ring-2 focus:ring-purple-500 font-medium text-xs sm:text-sm"
                >
                  <option>Most Urgent</option>
                  <option>Highest Goal</option>
                  <option>Most Supporters</option>
                  <option>Ending Soon</option>
                  <option>Recently Added</option>
                </select>

                <button className="text-purple-600 ml-auto hover:text-purple-800 transition-colors font-medium text-xs sm:text-sm">
                  Reset All Filters
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
              <div className="text-gray-600 text-sm sm:text-base">
                Displaying <span className="font-semibold">{Math.min(visibleCauses, filteredCauses.length)}</span> of <span className="font-semibold">{filteredCauses.length}</span> verified active causes
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All causes verified & monitored</span>
              </div>
            </div>

            {/* Professional Cause Cards - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {visibleCausesList.map((cause) => (
                <div
                  key={cause.id}
                  onClick={() => handleCardClick(cause)}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={cause.image} 
                      alt={cause.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(cause.urgency)}`}>
                          {cause.urgency} Priority
                        </span>
                        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-1 sm:px-2 py-1">
                          <CheckCircle size={12} className="text-green-600" />
                          <span className="text-xs font-medium text-green-700">Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {cause.title}
                    </h3>
                    
                    <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <Building2 size={12} className="text-purple-600" />
                        <span className="font-medium">{cause.ngo}</span>
                        <span className="text-green-600">•</span>
                        <span className="text-green-600 text-xs">Verified</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <MapPin size={12} />
                        <span>{cause.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <Target size={12} />
                        <span>{cause.beneficiaries} • {cause.timeline}</span>
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <div>
                          <span className="text-lg sm:text-2xl font-bold text-gray-900">{cause.raisedAmount}</span>
                          <span className="text-xs sm:text-sm text-gray-600 ml-1 sm:ml-2">raised</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs sm:text-sm font-medium text-gray-600">{cause.progressPercentage}% of {cause.goalAmount}</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 mb-2 sm:mb-3">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 sm:h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <div className="flex items-center gap-1">
                          <Heart size={12} className="text-red-500" />
                          <span className="font-medium">{cause.supporters} donors</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-yellow-500" />
                          <span className="font-medium">Impact Score: {Math.floor(85 + Math.random() * 15)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3 sm:mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Status</span>
                        <span className="font-medium text-green-600">Active • Verified</span>
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDonateClick(e, cause.id);
                        }}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-all"
                      >
                        Contribute Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCauses < filteredCauses.length && (
              <div className="text-center mb-4 sm:mb-6">
                <button 
                  onClick={loadMore}
                  className="bg-white hover:bg-gray-50 text-gray-600 border border-gray-300 hover:border-purple-300 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-md transition-all duration-300 text-sm sm:text-base"
                >
                  Load More Causes
                </button>
              </div>
            )}

          </div>
        </div>
      </div>



      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LiveCausesPage;