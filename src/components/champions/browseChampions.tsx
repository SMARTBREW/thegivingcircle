import React, { useState } from 'react';
import { Search, ArrowRight, User, MapPin, Heart, Trophy, Target } from 'lucide-react';

const CauseChampionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Medical');
  const [selectedFilter, setSelectedFilter] = useState('Most Successful');

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
      title: 'Help Gangaiah Get Back on His Feet',
      organizer: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      category: 'Medical',
      impact: '50 Families',
      successRate: '150%',
      supporters: 127,
      status: 'Life Changed'
    },
    {
      id: 2,
      title: 'Brain Injury Recovery Support',
      organizer: 'Raj Patel',
      location: 'Delhi, Delhi',
      category: 'Medical',
      impact: '25 Patients',
      successRate: '120%',
      supporters: 89,
      status: 'Recovery Success'
    },
    {
      id: 3,
      title: 'Save Utkarsh from Rare Disease',
      organizer: 'Meera Singh',
      location: 'Bangalore, Karnataka',
      category: 'Medical',
      impact: '1000 Lives',
      successRate: '180%',
      supporters: 203,
      status: 'Miracle Achieved'
    },
    {
      id: 4,
      title: 'School for Underprivileged Kids',
      organizer: 'Amit Kumar',
      location: 'Pune, Maharashtra',
      category: 'Education',
      impact: '500 Students',
      successRate: '200%',
      supporters: 312,
      status: 'Dreams Fulfilled'
    },
    {
      id: 5,
      title: 'Clean Water Initiative',
      organizer: 'Sunita Reddy',
      location: 'Hyderabad, Telangana',
      category: 'Environment',
      impact: '2000 People',
      successRate: '175%',
      supporters: 256,
      status: 'Community Served'
    },
    {
      id: 6,
      title: 'Girls Education Program',
      organizer: 'Kavya Joshi',
      location: 'Jaipur, Rajasthan',
      category: 'Women & Girls',
      impact: '300 Girls',
      successRate: '165%',
      supporters: 198,
      status: 'Future Secured'
    },
    {
      id: 7,
      title: 'Animal Shelter Expansion',
      organizer: 'Dr. Vikram Nair',
      location: 'Chennai, Tamil Nadu',
      category: 'Animals',
      impact: '800 Animals',
      successRate: '140%',
      supporters: 167,
      status: 'Lives Saved'
    },
    {
      id: 8,
      title: 'Orphanage Food Program',
      organizer: 'Sister Mary',
      location: 'Kolkata, West Bengal',
      category: 'Food & Hunger',
      impact: '150 Children',
      successRate: '130%',
      supporters: 145,
      status: 'Hunger Ended'
    },
    {
      id: 9,
      title: 'Children Cancer Treatment',
      organizer: 'Ravi Gupta',
      location: 'Lucknow, Uttar Pradesh',
      category: 'Children',
      impact: '75 Children',
      successRate: '220%',
      supporters: 425,
      status: 'Hope Restored'
    }
  ];

  const getSuccessRateColor = (rate: string) => {
    const numRate = parseInt(rate);
    if (numRate >= 200) return 'text-green-700 bg-green-100';
    if (numRate >= 150) return 'text-blue-700 bg-blue-100';
    return 'text-purple-700 bg-purple-100';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white overflow-hidden">
        <div className="absolute inset-0"></div>
        
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: 'url(https://savioursfoundation.org/wp-content/uploads/2021/01/ngo-1024x768.jpg)' }}
        ></div>
        
        <div className="relative container mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 mt-20 leading-tight animate-fade-in">
              Celebrate Our Cause Champions
            </h1>
            
            <div className="text-lg lg:text-xl mb-8 leading-relaxed animate-fade-in-delay">
              <p>Meet the <span className="font-semibold">421,908</span> heroes who made it happen</p>
              <p>& discover their incredible success stories</p>
            </div>
            
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-delay-2">
              <Trophy size={20} />
              View Success Stories
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">CATEGORIES</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
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
                  placeholder="Search success stories by champion or cause"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="text-gray-600">Showing champions for</span>
                
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-purple-500 text-purple-600 rounded-md px-3 py-1 bg-white focus:ring-2 focus:ring-purple-500"
                >
                  <option>Medical</option>
                  <option>Education</option>
                  <option>Children</option>
                </select>
                
                <span className="text-gray-600">sorted by</span>
                
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="border border-purple-500 text-purple-600 rounded-md px-3 py-1 bg-white focus:ring-2 focus:ring-purple-500"
                >
                  <option>Most Successful</option>
                  <option>Most Supporters</option>
                  <option>Recent Completions</option>
                  <option>Highest Goals</option>
                </select>

                <button className="text-purple-500 ml-auto hover:text-purple-700 transition-colors">Reset Filters</button>
              </div>
            </div>

            {/* Champion Cards - 3x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {champions.map((champion, index) => (
                <div
                  key={champion.id}
                  onClick={() => window.location.href = '/causes-stories'}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-gradient-to-r from-purple-600 to-pink-600"
                >
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <Trophy size={18} className="text-yellow-500" />
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSuccessRateColor(champion.successRate)}`}>
                          {champion.successRate}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{champion.impact}</div>
                        <div className="text-xs text-gray-500">raised</div>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                      {champion.title}
                    </h3>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User size={14} />
                        <span className="font-medium">{champion.organizer}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} />
                        <span>{champion.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart size={14} className="text-red-500" />
                        <span className="font-medium">{champion.supporters}</span>
                      </div>
                      <div className="text-purple-600 font-medium text-xs">
                        {champion.category}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                        View Story
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-3 rounded-md text-sm font-medium  transition-all">
                        <Target size={14} className="inline mr-1" />
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                View More Champions
              </button>
              
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 shadow-lg">
                Become a Champion
              </button>
            </div> */}
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

export default CauseChampionsPage;