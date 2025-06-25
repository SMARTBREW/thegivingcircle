import React, { useState } from 'react';
import { Search, ArrowRight, User, MapPin, Heart, Trophy, Target, Shield, CheckCircle, Award, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CauseChampionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Medical');
  const [selectedFilter, setSelectedFilter] = useState('Most Successful');
  const [showMoreCards, setShowMoreCards] = useState(false);
  const navigate = useNavigate();

  const categories = [
    'All Categories',
    'Education',
    'Medical',
    'Women & Girls',
    'Animals',
    'Creative',
    'Food & Hunger',
    'Environment',
    'Children',
    'Memorial'
  ];

  const champions = [
    {
      id: 1,
      title: 'Medical Support for Gangaiah\'s Recovery',
      organizer: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      category: 'Medical',
      impact: '₹2,50,000',
      goalAmount: '₹2,00,000',
      successRate: '125%',
      supporters: 127,
      status: 'Successfully Completed',
      verified: true,
      duration: '3 months',
      beneficiaries: '1 individual',
      transparency: 95,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Brain Injury Recovery & Rehabilitation Program',
      organizer: 'Dr. Raj Patel',
      location: 'Delhi, Delhi',
      category: 'Medical',
      impact: '₹3,60,000',
      goalAmount: '₹3,00,000',
      successRate: '120%',
      supporters: 89,
      status: 'Successfully Completed',
      verified: true,
      duration: '4 months',
      beneficiaries: '25 patients',
      transparency: 98,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Rare Disease Treatment Fund for Utkarsh',
      organizer: 'Dr. Meera Singh',
      location: 'Bangalore, Karnataka',
      category: 'Medical',
      impact: '₹9,00,000',
      goalAmount: '₹5,00,000',
      successRate: '180%',
      supporters: 203,
      status: 'Exceeded Expectations',
      verified: true,
      duration: '6 months',
      beneficiaries: '1 individual + family',
      transparency: 100,
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: 'Educational Infrastructure for Underprivileged Children',
      organizer: 'Prof. Amit Kumar',
      location: 'Pune, Maharashtra',
      category: 'Education',
      impact: '₹10,00,000',
      goalAmount: '₹5,00,000',
      successRate: '200%',
      supporters: 312,
      status: 'Milestone Achieved',
      verified: true,
      duration: '8 months',
      beneficiaries: '500 students',
      transparency: 97,
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      title: 'Clean Water Access Initiative',
      organizer: 'Mrs. Sunita Reddy',
      location: 'Hyderabad, Telangana',
      category: 'Environment',
      impact: '₹8,75,000',
      goalAmount: '₹5,00,000',
      successRate: '175%',
      supporters: 256,
      status: 'Community Impact Achieved',
      verified: true,
      duration: '5 months',
      beneficiaries: '2,000 individuals',
      transparency: 96,
      image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      title: 'Girls Education & Empowerment Program',
      organizer: 'Dr. Kavya Joshi',
      location: 'Jaipur, Rajasthan',
      category: 'Women & Girls',
      impact: '₹6,60,000',
      goalAmount: '₹4,00,000',
      successRate: '165%',
      supporters: 198,
      status: 'Educational Goals Met',
      verified: true,
      duration: '12 months',
      beneficiaries: '300 girls',
      transparency: 94,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 7,
      title: 'Animal Welfare & Shelter Expansion Project',
      organizer: 'Dr. Vikram Nair, Veterinarian',
      location: 'Chennai, Tamil Nadu',
      category: 'Animals',
      impact: '₹7,00,000',
      goalAmount: '₹5,00,000',
      successRate: '140%',
      supporters: 167,
      status: 'Facility Operational',
      verified: true,
      duration: '6 months',
      beneficiaries: '800+ animals',
      transparency: 99,
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 8,
      title: 'Nutrition Program for Orphaned Children',
      organizer: 'Sister Mary, Certified Social Worker',
      location: 'Kolkata, West Bengal',
      category: 'Food & Hunger',
      impact: '₹3,90,000',
      goalAmount: '₹3,00,000',
      successRate: '130%',
      supporters: 145,
      status: 'Nutritional Goals Achieved',
      verified: true,
      duration: '12 months',
      beneficiaries: '150 children',
      transparency: 93,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 9,
      title: 'Pediatric Cancer Treatment Support Fund',
      organizer: 'Dr. Ravi Gupta, Oncologist',
      location: 'Lucknow, Uttar Pradesh',
      category: 'Children',
      impact: '₹22,00,000',
      goalAmount: '₹10,00,000',
      successRate: '220%',
      supporters: 425,
      status: 'Treatment Fund Established',
      verified: true,
      duration: '9 months',
      beneficiaries: '75 children',
      transparency: 100,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const additionalChampions = [
    {
      id: 10,
      title: 'Rural Healthcare Access Program',
      organizer: 'Dr. Anita Desai',
      location: 'Udaipur, Rajasthan',
      category: 'Medical',
      impact: '₹5,25,000',
      goalAmount: '₹4,00,000',
      successRate: '131%',
      supporters: 178,
      status: 'Healthcare Improved',
      verified: true,
      duration: '7 months',
      beneficiaries: '1,200 villagers',
      transparency: 96,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 11,
      title: 'Digital Literacy for Senior Citizens',
      organizer: 'Prof. Ramesh Gupta',
      location: 'Chandigarh, Punjab',
      category: 'Education',
      impact: '₹2,80,000',
      goalAmount: '₹2,00,000',
      successRate: '140%',
      supporters: 156,
      status: 'Skills Enhanced',
      verified: true,
      duration: '5 months',
      beneficiaries: '400 seniors',
      transparency: 94,
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 12,
      title: 'Sustainable Farming Initiative',
      organizer: 'Mrs. Kavitha Nair',
      location: 'Coimbatore, Tamil Nadu',
      category: 'Environment',
      impact: '₹6,50,000',
      goalAmount: '₹5,00,000',
      successRate: '130%',
      supporters: 189,
      status: 'Farms Transformed',
      verified: true,
      duration: '10 months',
      beneficiaries: '250 farmers',
      transparency: 98,
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 13,
      title: 'Skill Development for Women',
      organizer: 'Ms. Priyanka Sharma',
      location: 'Indore, Madhya Pradesh',
      category: 'Women & Girls',
      impact: '₹4,20,000',
      goalAmount: '₹3,50,000',
      successRate: '120%',
      supporters: 234,
      status: 'Employment Created',
      verified: true,
      duration: '8 months',
      beneficiaries: '180 women',
      transparency: 97,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 14,
      title: 'Street Children Rehabilitation',
      organizer: 'Mr. Suresh Kumar',
      location: 'Ahmedabad, Gujarat',
      category: 'Children',
      impact: '₹7,80,000',
      goalAmount: '₹6,00,000',
      successRate: '130%',
      supporters: 267,
      status: 'Lives Rehabilitated',
      verified: true,
      duration: '12 months',
      beneficiaries: '95 children',
      transparency: 95,
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 15,
      title: 'Emergency Food Distribution Network',
      organizer: 'Mrs. Rashida Khan',
      location: 'Patna, Bihar',
      category: 'Food & Hunger',
      impact: '₹5,60,000',
      goalAmount: '₹4,50,000',
      successRate: '124%',
      supporters: 298,
      status: 'Hunger Addressed',
      verified: true,
      duration: '6 months',
      beneficiaries: '800 families',
      transparency: 93,
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const displayedChampions = showMoreCards ? [...champions, ...additionalChampions] : champions;

  const getSuccessRateColor = (rate: string) => {
    const numRate = parseInt(rate);
    if (numRate >= 200) return 'text-emerald-700 bg-emerald-50 border border-emerald-200';
    if (numRate >= 150) return 'text-blue-700 bg-blue-50 border border-blue-200';
    return 'text-purple-700 bg-purple-50 border border-purple-200';
  };

  const getTransparencyColor = (score: number) => {
    if (score >= 95) return 'text-emerald-600';
    if (score >= 90) return 'text-blue-600';
    return 'text-yellow-600';
  };

  const handleBecomeCauseChampion = () => {
    navigate('/cause-champion-onboarding');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Hero Section */}
      <div className="relative text-white overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/10/71/31/08/360_F_1071310855_u75NLHFeghjkytHUjK66GcSDwZ40hAzI.jpg)' }}
        ></div>
        
        <div className="relative container mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-blue-400" size={28} />
              <span className="text-blue-400 font-medium text-base">Verified Impact Champions</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
              Verified Cause Champions
            </h1>
            
            <p className="text-lg lg:text-xl mb-10 leading-relaxed text-gray-100 drop-shadow-md max-w-2xl">
              Browse through <span className="font-semibold text-white">421,908 verified champions</span> who have successfully completed their impact initiatives with full transparency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mb-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="text-green-400" size={18} />
                  <span className="font-semibold text-sm">100% Verified</span>
                </div>
                <p className="text-xs text-gray-300">Rigorous verification process</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="text-yellow-400" size={18} />
                  <span className="font-semibold text-sm">₹45+ Crores</span>
                </div>
                <p className="text-xs text-gray-300">Successfully distributed</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="text-red-400" size={18} />
                  <span className="font-semibold text-sm">2M+ Lives</span>
                </div>
                <p className="text-xs text-gray-300">Positively impacted</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Professional Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="text-orange-500" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">Impact Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-blue-600" size={16} />
                  <span className="font-semibold text-blue-800 text-sm">Trust & Safety</span>
                </div>
                <p className="text-blue-700 text-xs">All champions are verified and monitored for impact transparency.</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Professional Search and Filters */}
            <div className="mb-8 bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Verified Champions</h2>
              
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by champion name, cause, or location..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Professional Filters */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="text-gray-700 font-medium">Viewing champions in</span>
                
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 text-gray-700 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  <option>Medical</option>
                  <option>Education</option>
                  <option>Children</option>
                  <option>Environment</option>
                </select>
                
                <span className="text-gray-700 font-medium">sorted by</span>
                
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="border border-gray-300 text-gray-700 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  <option>Success Rate</option>
                  <option>Impact Amount</option>
                  <option>Transparency Score</option>
                  <option>Recent Completions</option>
                </select>

                <button className="text-blue-600 ml-auto hover:text-blue-800 transition-colors font-medium">
                  Reset All Filters
                </button>
              </div>
            </div>

            {/* Professional Champion Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedChampions.map((champion, index) => (
                <div
                  key={champion.id}
                  onClick={() => navigate(`/champion-story/${champion.id}`)}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden cursor-pointer group"
                >
                  {/* Champion Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={champion.image} 
                      alt={champion.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      {champion.verified && (
                        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                          <CheckCircle size={14} className="text-green-600" />
                          <span className="text-xs font-medium text-green-700">Verified</span>
                      </div>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSuccessRateColor(champion.successRate)}`}>
                        {champion.successRate} funded
                      </span>
                      </div>
                    </div>
                    
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {champion.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User size={14} />
                        <span className="font-medium">{champion.organizer}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} />
                        <span>{champion.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Target size={14} />
                        <span>{champion.beneficiaries} • {champion.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart size={14} className="text-red-500" />
                        <span className="font-medium">{champion.supporters} supporters</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} className={getTransparencyColor(champion.transparency)} />
                        <span className={`font-medium ${getTransparencyColor(champion.transparency)}`}>
                          {champion.transparency}% transparent
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Status</span>
                        <span className="font-medium text-green-600">{champion.status}</span>
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click event
                          navigate(`/champion-story/${champion.id}`);
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-sm font-medium transition-all"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {!showMoreCards && (
              <div className="text-center mb-8">
                <button 
                  onClick={() => setShowMoreCards(true)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
                >
                  Load More Champions
              </button>
              </div>
            )}

            {/* Trust Footer */}
            <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="text-blue-600" size={24} />
                <h3 className="text-lg font-semibold text-gray-800">Verified Impact Guarantee</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Every champion listed here has been verified through our rigorous screening process and 
                maintains regular impact reporting with third-party audits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium border border-blue-600 hover:border-blue-800 px-6 py-3 rounded-lg transition-colors">
                  Learn about our verification process →
                </button>
                
                <button 
                  onClick={handleBecomeCauseChampion}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Become a Cause Champion
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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

export default CauseChampionsPage;