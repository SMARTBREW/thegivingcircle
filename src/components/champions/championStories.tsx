import React, { useState } from 'react';
import { ArrowLeft, Heart, Trophy, Users, Calendar, MapPin, Target, Share2, BookOpen, TrendingUp, Award, CheckCircle, User, DollarSign, Clock, Globe, Radio } from 'lucide-react';
import { ChampionStory } from '../../types';

/**
 * Corporate Champion Impact Report Component
 * 
 * This component displays executive-level impact assessments with formal corporate styling.
 * All data is dynamically driven from backend systems with emphasis on measurable outcomes.
 * 
 * Usage Example:
 * 
 * // In a parent component or page:
 * import { useEffect, useState } from 'react';
 * import { championStoriesAPI } from '../../utils/api';
 * import ChampionStoryPage from './championStories';
 * 
 * const ChampionStoryContainer = ({ storyId }: { storyId: string }) => {
 *   const [story, setStory] = useState<ChampionStory | null>(null);
 *   const [loading, setLoading] = useState(true);
 * 
 *   useEffect(() => {
 *     const fetchStory = async () => {
 *       try {
 *         const data = await championStoriesAPI.getStoryById(storyId);
 *         setStory(data);
 *       } catch (error) {
 *         console.error('Failed to fetch story:', error);
 *       } finally {
 *         setLoading(false);
 *       }
 *     };
 *     fetchStory();
 *   }, [storyId]);
 * 
 *   return (
 *     <ChampionStoryPage 
 *       championStory={story} 
 *       loading={loading}
 *       onBack={() => window.history.back()}
 *     />
 *   );
 * };
 */

interface ChampionStoryPageProps {
  championStory: ChampionStory;
  onBack?: () => void;
  loading?: boolean;
}

// Icon mapping for impact analytics
const iconMap: { [key: string]: React.ComponentType<any> } = {
  'Users': Users,
  'Trophy': Trophy,
  'Heart': Heart,
  'Calendar': Calendar,
  'DollarSign': DollarSign,
  'Clock': Clock,
  'Globe': Globe,
  'Target': Target
};

const ChampionStoryPage: React.FC<ChampionStoryPageProps> = ({ 
  championStory, 
  onBack,
  loading = false 
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-bold">Loading Executive Report...</p>
        </div>
      </div>
    );
  }

  if (!championStory) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Report Not Found</h2>
          <p className="text-slate-600 mb-4">The executive impact report you're looking for doesn't exist.</p>
          {onBack && (
            <button 
              onClick={onBack}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-bold"
            >
              Return to Directory
            </button>
          )}
        </div>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white pt-[100px]">
        <div className="container mx-auto px-8 py-16">
          {onBack && (
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg transition-all font-medium text-sm mb-8"
            >
              <ArrowLeft size={16} />
              <span>Back to Champions</span>
            </button>
          )}

          {/* Champion Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Radio size={20} className="text-blue-600" />
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{championStory.category}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  {championStory.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Help {championStory.organizer} make a lasting impact in {championStory.location}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-black mb-1">{championStory.successRate}</div>
                    <div className="text-sm text-gray-600">Campaign Progress</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-black mb-1">{championStory.supporters}</div>
                    <div className="text-sm text-gray-600">Supporters</div>
                </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-black mb-1">{championStory.impact}</div>
                    <div className="text-sm text-gray-600">People Helped</div>
                </div>
                </div>
              </div>
            </div>

            {/* Champion Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8 relative">
                {/* Verified Badge - Top Left */}
                <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
                  <CheckCircle size={12} />
                  Verified
                </div>
                
                <div className="text-center mb-6 mt-6">
                  <div className="relative inline-block">
                    {championStory.organizerAvatar || championStory.organizer.toLowerCase().includes('priya sharma') ? (
                      <img 
                        src={championStory.organizer.toLowerCase().includes('priya sharma') 
                          ? "https://directory.uthscsa.edu/sites/directory/files/sharma_priya.jpg" 
                          : championStory.organizerAvatar} 
                        alt={championStory.organizer}
                        className="w-24 h-24 rounded-xl object-cover mx-auto mb-4"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        {getInitials(championStory.organizer)}
                      </div>
                    )}
                    <div className="absolute -bottom-1 -right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-1.5 rounded-full shadow-lg">
                      <Award size={14} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{championStory.organizer}</h3>
                  <div className="flex items-center justify-center gap-1 text-gray-600 text-sm">
                    <MapPin size={14} />
                    <span>{championStory.location}</span>
                  </div>
                </div>

                {championStory.organizerBio && (
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">About the Champion</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {championStory.organizerBio}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Details */}
      <div className="bg-white">
        <div className="container mx-auto px-8 py-16">
                    {/* Single Full Width Image with Fundraising Overlay */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={championStory.image} 
              alt={championStory.title}
              className="w-full h-full object-cover"
            />
            

            
            {/* Status Badge */}
            <div className="absolute top-8 right-8 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
              {championStory.status}
            </div>
            
            {/* Fundraising Content */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-medium text-white drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>Funds Raised</span>
                <span className="text-5xl font-black text-white drop-shadow-2xl" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>{championStory.raisedAmount}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-white drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>Goal</span>
                <span className="text-xl font-medium text-white drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>{championStory.goalAmount}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative bg-black/30 rounded-full h-4 mb-4">
                <div 
                  className="absolute top-0 left-0 bg-white h-4 rounded-full shadow-lg"
                  style={{ width: `${Math.min(parseInt(championStory.successRate), 100)}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm text-white drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                <span className="font-medium">{championStory.successRate} funded</span>
                <span className="font-medium">{championStory.supporters} supporters</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stories */}
      <div className="bg-white">
        <div className="container mx-auto px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See the Real Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every donation creates real change. Here's how {championStory.organizer}'s campaign is making a difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {championStory.impactStats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon] || Users;
              
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-white border-2 border-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-black" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">{stat.label}</div>
                  <div className="text-xs text-gray-600 leading-relaxed">{stat.description}</div>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Story & Updates */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Champion's Story */}
          <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {championStory.organizer}'s Story
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: championStory.storyContent }} />
              </div>
            </div>

            {/* Campaign Updates */}
              {championStory.updates && championStory.updates.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Campaign Updates</h3>
              <div className="space-y-6">
                    {championStory.updates.map((update, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <div className="flex gap-6">
                    <img 
                      src={update.image} 
                            alt="Campaign Update" 
                            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-bold text-gray-900 text-lg">{update.title}</h4>
                              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{update.date}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{update.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
              )}
          </div>

          {/* Campaign Timeline */}
          <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Campaign Timeline</h3>
                
              <div className="space-y-6">
                  {championStory.milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                      {index !== championStory.milestones.length - 1 && (
                        <div className="absolute left-4 top-10 w-0.5 h-16 bg-gray-200"></div>
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
                          <div className="text-xs text-gray-500 mb-1">{milestone.date}</div>
                          <div className="font-semibold text-gray-900 mb-2">{milestone.title}</div>
                          <div className="text-sm text-gray-600 mb-3 leading-relaxed">{milestone.description}</div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between items-center text-sm">
                              <span className="font-semibold text-gray-900">{milestone.amount}</span>
                              <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded">{milestone.percentage}% complete</span>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
                {/* Support Actions */}
                <div className="mt-8 pt-6 border-t space-y-3">
                  <button 
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                      isFollowing 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {isFollowing ? 'Following' : 'Follow Campaign'}
                  </button>
                  <button className="w-full py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    <Share2 size={16} />
                    Share Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support More Champions */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-8 py-16 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Support More Champions Like {championStory.organizer}
          </h2>
          <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Every donation creates real change. Discover more inspiring stories and help champions 
            make a lasting impact in their communities.
          </p>
          
          <div className="flex flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold border border-gray-400 hover:bg-gray-50 transition-all">
              Start Your Own Campaign
            </button>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold border border-gray-400 hover:bg-gray-50 transition-all">
              Browse All Champions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionStoryPage;