import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, User, MapPin, Heart, Clock, Target, Building2, Calendar, Users } from 'lucide-react';

type Cause = {
  id: number;
  title: string;
  organizer: string;
  ngo: string;
  location: string;
  category: string;
  goalAmount: string;
  raisedAmount: string;
  progressPercentage: number;
  supporters: number;
  daysLeft: number;
  image: string;
  urgency: string;
  description: string;
  beneficiaries: string;
  timeline: string;
  updates: string[];
};

const LiveCausesPage = () => {
  const [selectedNGO, setSelectedNGO] = useState('All NGOs');
  const [selectedFilter, setSelectedFilter] = useState('Most Urgent');
  const [visibleCauses, setVisibleCauses] = useState(9);
  const [currentSlide, setCurrentSlide] = useState(0);

  const ngos = [
    'All NGOs',
    'Khushii',
    'Join Womens program',
    'Animal Care',
    'Mamta Himc',
    'Kokan'
  ];

  const ngoShowcase = [
    {
      name: 'Khushii',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&h=800&fit=crop',
      description: 'Empowering underprivileged children through education and healthcare',
      focus: 'Child Development & Education'
    },
    {
      name: 'Join Womens Program',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop',
      description: 'Supporting women empowerment through skill development and entrepreneurship',
      focus: 'Women Empowerment & Skills'
    },
    {
      name: 'Animal Care',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=800&fit=crop',
      description: 'Rescuing, treating and rehabilitating street animals across India',
      focus: 'Animal Welfare & Rescue'
    },
    {
      name: 'Mamta Himc',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop',
      description: 'Providing quality healthcare services to rural and urban communities',
      focus: 'Healthcare & Medical Aid'
    },
    {
      name: 'Kokan',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=800&fit=crop',
      description: 'Sustainable development and environmental conservation in coastal regions',
      focus: 'Environment & Rural Development'
    }
  ];

  const causes = [
    // Khushii causes
    {
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
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop',
      urgency: 'High',
      description: 'This urgent campaign aims to provide essential educational resources, school supplies, and learning materials to children living in Mumbai\'s slum areas. The funds will be used to establish temporary learning centers, provide books, uniforms, and nutritious meals to ensure these children don\'t miss out on their education.',
      beneficiaries: '250 children aged 6-14',
      timeline: '6 months',
      updates: [
        'Learning center setup completed in Dharavi',
        '150 children enrolled in the program',
        'Distribution of school supplies ongoing'
      ]
    },
    {
      id: 2,
      title: 'Nutritional Support for Malnourished Children',
      organizer: 'Dr. Rajesh Kumar',
      ngo: 'Khushii',
      location: 'Delhi, India',
      category: 'Child Welfare',
      goalAmount: '₹6,00,000',
      raisedAmount: '₹4,20,000',
      progressPercentage: 70,
      supporters: 267,
      daysLeft: 12,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop',
      urgency: 'Critical',
      description: 'Critical intervention program to address severe malnutrition among children in Delhi\'s underprivileged communities. The program includes nutritional supplements, regular health checkups, and community education on child nutrition.',
      beneficiaries: '500 malnourished children',
      timeline: '12 months',
      updates: [
        'Medical screening completed for 300 children',
        'Nutritional supplement distribution started',
        'Community awareness sessions conducted'
      ]
    },
    // Join Womens Program causes
    {
      id: 4,
      title: 'Skill Training for Single Mothers',
      organizer: 'Meera Singh',
      ngo: 'Join Womens program',
      location: 'Bangalore, Karnataka',
      category: 'Women Empowerment',
      goalAmount: '₹7,00,000',
      raisedAmount: '₹3,50,000',
      progressPercentage: 50,
      supporters: 156,
      daysLeft: 30,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop',
      urgency: 'Medium',
      description: 'Comprehensive skill development program for single mothers to help them become financially independent. Training includes tailoring, computer skills, beauty therapy, and small business management.',
      beneficiaries: '200 single mothers',
      timeline: '8 months',
      updates: [
        'Training center established',
        '75 women enrolled in first batch',
        'Partnership with local businesses for job placement'
      ]
    },
    {
      id: 5,
      title: 'Entrepreneurship Support for Rural Women',
      organizer: 'Kavya Joshi',
      ngo: 'Join Womens program',
      location: 'Uttar Pradesh, India',
      category: 'Women Empowerment',
      goalAmount: '₹5,50,000',
      raisedAmount: '₹4,80,000',
      progressPercentage: 87,
      supporters: 234,
      daysLeft: 8,
      image: 'https://images.unsplash.com/photo-1594736797933-d0d8f3a0e3f7?w=400&h=250&fit=crop',
      urgency: 'High',
      description: 'Supporting rural women to start their own businesses through microfinance, business training, and mentorship. Focus on traditional crafts, agriculture, and small-scale manufacturing.',
      beneficiaries: '150 rural women entrepreneurs',
      timeline: '10 months',
      updates: [
        '120 women received business training',
        '80 micro-loans disbursed',
        '45 businesses successfully launched'
      ]
    },
    // Animal Care causes
    {
      id: 7,
      title: 'Emergency Surgery for Injured Street Dogs',
      organizer: 'Dr. Sunita Reddy',
      ngo: 'Animal Care',
      location: 'Chennai, Tamil Nadu',
      category: 'Animal Rescue',
      goalAmount: '₹4,80,000',
      raisedAmount: '₹4,20,000',
      progressPercentage: 88,
      supporters: 312,
      daysLeft: 6,
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop',
      urgency: 'Critical',
      description: 'Emergency medical intervention for severely injured street dogs requiring immediate surgical care. Funds cover surgery costs, post-operative care, and rehabilitation until the animals are ready for adoption.',
      beneficiaries: '100+ injured street dogs',
      timeline: '3 months',
      updates: [
        '25 emergency surgeries completed',
        '15 dogs successfully rehabilitated',
        '8 dogs found loving homes'
      ]
    },
    {
      id: 8,
      title: 'Mobile Veterinary Clinic for Rural Areas',
      organizer: 'Ravi Gupta',
      ngo: 'Animal Care',
      location: 'Haryana, India',
      category: 'Animal Healthcare',
      goalAmount: '₹12,00,000',
      raisedAmount: '₹7,80,000',
      progressPercentage: 65,
      supporters: 445,
      daysLeft: 35,
      image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=400&h=250&fit=crop',
      urgency: 'High',
      description: 'Establishing mobile veterinary clinics to provide healthcare services to animals in remote rural areas where veterinary care is not easily accessible. The van will be equipped with medical equipment and medicines.',
      beneficiaries: '5000+ rural animals',
      timeline: '2 years',
      updates: [
        'Mobile clinic van purchased and equipped',
        'Veterinary team assembled',
        'Route planning for 50 villages completed'
      ]
    },
    // Mamta Himc causes
    {
      id: 10,
      title: 'Free Heart Surgery for Underprivileged Patients',
      organizer: 'Dr. Vikram Nair',
      ngo: 'Mamta Himc',
      location: 'Hyderabad, Telangana',
      category: 'Healthcare',
      goalAmount: '₹18,00,000',
      raisedAmount: '₹12,60,000',
      progressPercentage: 70,
      supporters: 678,
      daysLeft: 15,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      urgency: 'Critical',
      description: 'Life-saving heart surgeries for underprivileged patients who cannot afford the high cost of cardiac procedures. The program covers surgery costs, hospital stay, medications, and follow-up care.',
      beneficiaries: '25 heart patients',
      timeline: '6 months',
      updates: [
        '8 successful heart surgeries completed',
        '15 patients on waiting list',
        'Pre-operative assessments ongoing'
      ]
    },
    {
      id: 11,
      title: 'Mobile Health Units for Remote Villages',
      organizer: 'Dr. Pooja Reddy',
      ngo: 'Mamta Himc',
      location: 'Odisha, India',
      category: 'Healthcare',
      goalAmount: '₹10,50,000',
      raisedAmount: '₹6,80,000',
      progressPercentage: 65,
      supporters: 389,
      daysLeft: 28,
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=250&fit=crop',
      urgency: 'High',
      description: 'Mobile health units to provide basic healthcare services to remote villages in Odisha where medical facilities are scarce. Services include general checkups, vaccinations, and health education.',
      beneficiaries: '10,000+ villagers',
      timeline: '18 months',
      updates: [
        '2 mobile units deployed',
        '25 villages covered',
        '3,500 patients treated'
      ]
    },
    // Kokan causes
    {
      id: 13,
      title: 'Coastal Cleanup and Marine Conservation',
      organizer: 'Sagar Patil',
      ngo: 'Kokan',
      location: 'Goa, India',
      category: 'Environment',
      goalAmount: '₹8,00,000',
      raisedAmount: '₹5,60,000',
      progressPercentage: 70,
      supporters: 267,
      daysLeft: 20,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=250&fit=crop',
      urgency: 'Medium',
      description: 'Large-scale coastal cleanup initiative combined with marine conservation efforts. The project includes beach cleaning, plastic waste removal, coral reef restoration, and community awareness programs.',
      beneficiaries: '50 km of coastline',
      timeline: '12 months',
      updates: [
        '15 km of coastline cleaned',
        '5 tons of plastic waste removed',
        '200 volunteers trained'
      ]
    },
    {
      id: 14,
      title: 'Sustainable Fishing Training for Coastal Communities',
      organizer: 'Prashant Koli',
      ngo: 'Kokan',
      location: 'Ratnagiri, Maharashtra',
      category: 'Livelihood',
      goalAmount: '₹6,50,000',
      raisedAmount: '₹4,20,000',
      progressPercentage: 65,
      supporters: 198,
      daysLeft: 25,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop',
      urgency: 'Medium',
      description: 'Training program for fishing communities to adopt sustainable fishing practices, learn alternative livelihoods, and preserve marine ecosystems. Includes modern fishing techniques and boat maintenance.',
      beneficiaries: '500 fishing families',
      timeline: '15 months',
      updates: [
        '200 fishermen trained in sustainable practices',
        '50 boats equipped with modern gear',
        'Community fishing guidelines established'
      ]
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ngoShowcase.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'text-red-700 bg-red-100';
      case 'High': return 'text-orange-700 bg-orange-100';
      case 'Medium': return 'text-yellow-700 bg-yellow-100';
      default: return 'text-gray-700 bg-gray-100';
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
    window.location.href = `/causes-details`;
  };

  // Handle card click (entire card becomes clickable)
  const handleCardClick = () => {
    handleViewDetails();
  };

  // Handle donate button click (prevent card click when clicking donate)
  const handleDonateClick = (e: React.MouseEvent, causeId: number) => {
    e.stopPropagation();
    // Handle donation logic here
    console.log('Donate clicked for cause:', causeId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with NGO Showcase */}
      <div className="relative text-white overflow-hidden">
        <div className="absolute inset-0 "></div>
        
        {/* Sliding NGO Background Images */}
        <div className="absolute inset-0">
          {ngoShowcase.map((ngo, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                backgroundImage: `url(${ngo.image})`,
              }}
            />
          ))}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 mt-20 leading-tight animate-fade-in">
              Live Causes Making Impact
            </h1>
            
            <div className="text-lg lg:text-xl mb-8 leading-relaxed animate-fade-in-delay">
              <p>Join <span className="font-semibold">1,23,456</span> compassionate donors</p>
              <p>supporting urgent causes across India</p>
            </div>
            
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-delay-2">
              <Heart size={20} />
              Start Donating Today
              <ArrowRight size={20} />
            </button>
          </div>

          {/* NGO Info Overlay */}
          <div className="absolute bottom-8 right-8 bg-white bg-opacity-90 rounded-lg p-4 max-w-sm animate-fade-in-delay">
            <div className="flex items-center gap-3 mb-2">
              <Building2 size={20} className="text-purple-600" />
              <h3 className="font-bold text-gray-800">{ngoShowcase[currentSlide].name}</h3>
            </div>
            <p className="text-purple-600 font-semibold text-sm mb-2">{ngoShowcase[currentSlide].focus}</p>
            <p className="text-gray-600 text-sm">{ngoShowcase[currentSlide].description}</p>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {ngoShowcase.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Building2 size={20} />
                NGO PARTNERS
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {ngos.map((ngo) => (
                  <button
                    key={ngo}
                    onClick={() => {
                      setSelectedNGO(ngo);
                      setVisibleCauses(9);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                      selectedNGO === ngo
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {ngo}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Search and Filters */}
            <div className="mb-8">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search live causes by title, location, or category"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="text-gray-600">Showing causes from</span>
                
                <select 
                  value={selectedNGO}
                  onChange={(e) => {
                    setSelectedNGO(e.target.value);
                    setVisibleCauses(9);
                  }}
                  className="border border-purple-500 text-purple-600 rounded-md px-3 py-1 bg-white focus:ring-2 focus:ring-purple-500"
                >
                  {ngos.map(ngo => (
                    <option key={ngo} value={ngo}>{ngo}</option>
                  ))}
                </select>
                
                <span className="text-gray-600">sorted by</span>
                
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="border border-purple-500 text-purple-600 rounded-md px-3 py-1 bg-white focus:ring-2 focus:ring-purple-500"
                >
                  <option>Most Urgent</option>
                  <option>Highest Goal</option>
                  <option>Most Supporters</option>
                  <option>Ending Soon</option>
                  <option>Recently Added</option>
                </select>

                <button className="text-purple-500 ml-auto hover:text-purple-700 transition-colors">Reset Filters</button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-gray-600">
              Showing {Math.min(visibleCauses, filteredCauses.length)} of {filteredCauses.length} live causes
            </div>

            {/* Cause Cards - 3x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {visibleCausesList.map((cause, index) => (
                <div
                  key={cause.id}
                  onClick={handleCardClick}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={cause.image} 
                      alt={cause.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(cause.urgency)}`}>
                        {cause.urgency}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Clock size={12} />
                      {cause.daysLeft} days left
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                        {cause.title}
                      </h3>
                      
                      <div className="text-xs text-purple-600 font-medium mb-2 flex items-center gap-1">
                        <Building2 size={12} />
                        {cause.ngo}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User size={14} />
                        <span>{cause.organizer}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} />
                        <span>{cause.location}</span>
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-green-600">{cause.raisedAmount}</span>
                        <span className="text-gray-600">of {cause.goalAmount}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{cause.progressPercentage}% raised</span>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Heart size={14} className="text-red-500" />
                          <span>{cause.supporters} supporters</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={handleViewDetails}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        View Details
                      </button>
                      <button 
                        onClick={(e) => handleDonateClick(e, cause.id)}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-3 rounded-md text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
                      >
                        <Target size={14} className="inline mr-1" />
                        Donate Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCauses < filteredCauses.length && (
              <div className="flex justify-center">
                <button 
                  onClick={loadMore}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Load More Causes
                </button>
              </div>
            )}

            {visibleCauses >= filteredCauses.length && filteredCauses.length > 9 && (
              <div className="text-center text-gray-600 py-4">
                You've viewed all {filteredCauses.length} causes from {selectedNGO}
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