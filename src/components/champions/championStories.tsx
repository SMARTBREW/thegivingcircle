import React, { useState } from 'react';
import { ArrowLeft, Heart, Trophy, Users, Calendar, MapPin, Target, Share2, BookOpen, TrendingUp, Award, CheckCircle } from 'lucide-react';

const ChampionSuccessStoryPage = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  // Sample champion data - in real app, this would come from props/route params
  const champion = {
    id: 1,
    title: 'Help Gangaiah Get Back on His Feet',
    organizer: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    category: 'Medical',
    impact: '50 Families',
    successRate: '150%',
    supporters: 127,
    status: 'Life Changed',
    goalAmount: '₹5,00,000',
    raisedAmount: '₹7,50,000',
    startDate: 'January 15, 2024',
    completionDate: 'April 22, 2024',
    beneficiaryAge: 45,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  };

  const milestones = [
    {
      date: 'Jan 15, 2024',
      title: 'Campaign Launched',
      description: 'Priya started the campaign to help Gangaiah who lost his leg in an accident',
      amount: '₹0',
      percentage: 0
    },
    {
      date: 'Feb 10, 2024',
      title: 'First Major Donation',
      description: 'Local community rallied together with ₹1,50,000 in donations',
      amount: '₹1,50,000',
      percentage: 30
    },
    {
      date: 'Mar 5, 2024',
      title: 'Goal Achieved',
      description: 'Reached the initial goal of ₹5,00,000 for prosthetic leg and treatment',
      amount: '₹5,00,000',
      percentage: 100
    },
    {
      date: 'Apr 22, 2024',
      title: 'Success & Beyond',
      description: 'Exceeded goal by 150%! Extra funds helped 49 more families in need',
      amount: '₹7,50,000',
      percentage: 150
    }
  ];

  const impactStats = [
    { icon: Users, label: 'Families Helped', value: '50', description: 'Direct beneficiaries' },
    { icon: Trophy, label: 'Success Rate', value: '150%', description: 'Goal exceeded' },
    { icon: Heart, label: 'Supporters', value: '127', description: 'Amazing donors' },
    { icon: Calendar, label: 'Duration', value: '97 days', description: 'Campaign length' }
  ];

  const updates = [
    {
      date: 'May 15, 2024',
      title: 'Gangaiah\'s New Beginning',
      content: 'Gangaiah successfully received his prosthetic leg and completed rehabilitation. He has now returned to work and is supporting his family again.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      date: 'Apr 30, 2024',
      title: 'Community Impact Expanded',
      content: 'With the additional funds raised, we were able to help 49 more families with medical emergencies in the same community.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      date: 'Apr 22, 2024',
      title: 'Campaign Successfully Completed',
      content: 'Thanks to 127 amazing supporters, we not only met our goal but exceeded it by 50%! This success will create a ripple effect of positive change.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      

      {/* Hero Section */}
      <div className="bg-white mt-[150px]">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                {champion.title}
              </h1>
              
              <div className="flex items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span className="font-medium text-lg">{champion.organizer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span className="text-sm">{champion.location}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Campaign Result</span>
                  <span className="text-2xl font-bold text-green-600">{champion.successRate}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-gray-800">{champion.raisedAmount}</span>
                  <span className="text-sm text-gray-600">of {champion.goalAmount} goal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{ width: '150%', maxWidth: '100%' }}></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={champion.image} 
                alt="Champion success story"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <div className="flex items-center gap-1">
                  <TrendingUp className="text-green-500" size={16} />
                  <span className="text-sm font-semibold text-gray-800">{champion.successRate} Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Impact Overview</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <stat.icon className="mx-auto mb-2 text-purple-600" size={32} />
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Story & Timeline */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Story Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">The Success Story</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Gangaiah, a 45-year-old daily wage worker from Mumbai, faced a life-changing accident that resulted in the loss of his leg. 
                  As the sole breadwinner for his family of four, this tragedy threatened not just his livelihood but the future of his children's education and his family's basic needs.
                </p>
                
                <p className="mb-4">
                  Priya Sharma, a social worker in the community, witnessed Gangaiah's struggle and decided to take action. She launched this campaign with a goal to raise ₹5,00,000 for Gangaiah's prosthetic leg, rehabilitation, and family support during his recovery period.
                </p>
                
                <p className="mb-4">
                  What started as a mission to help one family became a movement that transformed an entire community. The overwhelming response from 127 supporters not only achieved the original goal but exceeded it by 150%, raising ₹7,50,000 in total.
                </p>
                
                <p className="mb-6">
                  Today, Gangaiah has not only regained his mobility and returned to work but has become a symbol of hope in his community. The additional funds raised have been used to help 49 other families facing medical emergencies, creating a ripple effect of positive change that continues to impact lives.
                </p>
              </div>
            </div>

            {/* Campaign Updates */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Campaign Updates</h3>
              <div className="space-y-6">
                {updates.map((update, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={update.image} 
                      alt="Update" 
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800">{update.title}</h4>
                        <span className="text-sm text-gray-500">{update.date}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{update.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campaign Timeline */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Campaign Timeline</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    {index !== milestones.length - 1 && (
                      <div className="absolute left-4 top-8 w-0.5 h-16 bg-gray-200"></div>
                    )}
                    <div className="flex gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        milestone.percentage >= 100 
                          ? 'bg-green-500 text-white' 
                          : milestone.percentage > 0 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-300 text-gray-600'
                      }`}>
                        {milestone.percentage >= 100 ? <CheckCircle size={16} /> : <div className="w-2 h-2 bg-current rounded-full"></div>}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">{milestone.date}</div>
                        <div className="font-semibold text-gray-800 mb-1">{milestone.title}</div>
                        <div className="text-sm text-gray-600 mb-2">{milestone.description}</div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-green-600">{milestone.amount}</span>
                          <span className="text-xs text-gray-500">{milestone.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Champion Info */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-4">Champion Organizer</h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {champion.organizer.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{champion.organizer}</div>
                    <div className="text-sm text-gray-600">Community Organizer</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Priya has been working in community development for over 8 years and has successfully organized 12 campaigns that have helped over 200 families in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Inspired by This Success Story?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of champions who are making a difference in their communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Own Campaign
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Explore More Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionSuccessStoryPage;