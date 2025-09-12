import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/ui/PrimaryButton';
import { 
  ArrowLeft,
  Heart,
  Award,
  Users,
  Calendar,
  MapPin,
  Target,
  Globe,
  Mail,
  Phone,
  TrendingUp,
  Handshake,
  Shield,
  Building,
  BarChart3,
  Trophy,
  Verified,
  Badge as BadgeIcon,
  CheckCircle as CheckCircleIcon,
  Clock as ClockIcon,
  Star
} from 'lucide-react';
import { NGODetails } from '../types';

/**
 * NGO Executive Profile & Impact Assessment Component
 * 
 * This component displays comprehensive institutional information about an NGO including:
 * - Executive Summary & Organizational Overview
 * - Mission-Critical Impact Metrics & KPIs
 * - Institutional Timeline & Strategic Milestones
 * - Impact Documentation & Visual Evidence
 * - Leadership & Governance Structure
 * - Strategic Partnerships & Industry Recognition
 * - Financial Transparency & Accountability Metrics
 * 
 * Features corporate-grade design with professional styling, comprehensive 
 * data visualization, and institutional credibility indicators to showcase 
 * organizational excellence and measurable social impact.
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
  const navigate = useNavigate();
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<any>(null);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-slate-800 mx-auto mb-6"></div>
          <p className="text-slate-800 font-bold text-lg">Loading Executive Profile...</p>
          <p className="text-slate-600 mt-2">Preparing comprehensive organizational assessment</p>
        </div>
      </div>
    );
  }

  if (!ngoDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Organization Profile Not Available</h2>
            <p className="text-slate-600 mb-6">The institutional profile you're looking for is currently unavailable or access has been restricted.</p>
            {onBack && (
              <button 
                onClick={onBack}
                className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-900 transition-colors font-semibold"
              >
                Return to Organization Directory
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const filteredGallery = ngoDetails.gallery;

  return (
    <div className="min-h-screen bg-white">
      {/* Executive Header Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white pt-[100px]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-8 py-16">
          {onBack && (
            <button 
              onClick={onBack}
              className="flex items-center gap-3 text-white/70 hover:text-white mb-8 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all backdrop-blur-sm">
                <ArrowLeft size={18} />
              </div>
              <span className="font-medium">← Back to Organizations</span>
            </button>
          )}



          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3">
              {/* Organization Identity */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-sm font-bold">EST. {ngoDetails.yearEstablished}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-sm font-bold">{new Date().getFullYear() - ngoDetails.yearEstablished}+ YEARS</span>
                </div>
                <div className="bg-emerald-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-emerald-400/30">
                  <span className="text-sm font-bold text-emerald-300">VERIFIED</span>
                </div>
              </div>

              {/* Organization Name and Executive Summary */}
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
                {ngoDetails.name}
              </h1>
              <h2 className="text-xl lg:text-2xl text-slate-300 font-medium mb-6 leading-relaxed">
                {ngoDetails.shortDescription}
              </h2>

              {/* Key Performance Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {ngoDetails.impactMetrics.slice(0, 3).map((metric, index) => {
                  const IconComponent = iconMap[metric.icon] || Target;
                  
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <IconComponent size={20} />
                        </div>
                        <div className="text-xs font-bold text-slate-300 uppercase tracking-wide">{metric.label}</div>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold mb-1">{metric.value}<span className="text-lg">{metric.unit}</span></div>
                      <div className="text-xs text-slate-300">{metric.description}</div>
                    </div>
                  );
                })}
                
                {/* Efficiency Rating Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Award size={20} />
                    </div>
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wide">Efficiency Rating</div>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold mb-1">A+</div>
                  <div className="text-xs text-slate-300">Third-Party Verified</div>
                </div>
              </div>

              {/* Trust & Credibility Badges */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Verified className="text-emerald-400" size={18} />
                    <span className="font-semibold">Verified Partner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="text-blue-400" size={18} />
                    <span className="font-semibold">Government Registered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="text-amber-400" size={18} />
                    <span className="font-semibold">Award Winning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="text-green-400" size={18} />
                    <span className="font-semibold">Transparent Reporting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Information Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
                {/* Institution Badge */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl mb-4 shadow-lg">
                    <img 
                      src={ngoDetails.logo} 
                      alt={ngoDetails.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>

                </div>

                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{ngoDetails.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-gray-600 text-sm mb-3">
                    <MapPin size={14} />
                    <span>{ngoDetails.location}</span>
                  </div>
                  
                  {/* Registration Info */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-600 mb-1">Registration No.</div>
                    <div className="text-sm font-mono font-bold text-gray-900">{ngoDetails.registrationNumber}</div>
                  </div>
                </div>

                {/* Executive Contact */}
                <div className="space-y-3 text-sm border-t pt-4">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-slate-600" />
                    <span className="text-gray-700">{ngoDetails.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-slate-600" />
                    <span className="text-gray-700">{ngoDetails.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-slate-600" />
                    <a href={`https://${ngoDetails.contactInfo.website}`} className="text-blue-600 hover:underline font-medium">
                      {ngoDetails.contactInfo.website}
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Institutional Certifications & Compliance Section */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Institutional Certifications & Compliance</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {ngoDetails.certifications.map((cert, index) => (
                <div key={index} className="bg-white px-4 py-2 rounded-lg border border-gray-200 flex items-center gap-2">
                  <Shield className="text-emerald-600" size={16} />
                  <span className="text-sm font-medium text-gray-800">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Foundation Story & Institutional Timeline */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The story behind our commitment to creating lasting social change
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Foundation Story - 75% Space */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-12 border border-gray-100">
                <div className="prose prose-lg max-w-none">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
                    {/* Story Image */}
                    <div className="lg:col-span-1">
                      <div className="relative">
                        <img 
                          src={ngoDetails.logo} 
                          alt={`${ngoDetails.name} story`}
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                        <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold">
                          EST. {ngoDetails.yearEstablished}
                        </div>
                      </div>
                    </div>

                    {/* Story Text */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Foundation Story</h3>
                      <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-lg">
                          <strong className="text-slate-800">Founded in {ngoDetails.yearEstablished}</strong>, {ngoDetails.name} emerged from a deep understanding that sustainable social change requires more than good intentions—it demands strategic vision, measurable impact, and unwavering commitment to transparency.
                        </p>
                        
                        <p>
                          What began as a grassroots initiative has evolved into a nationally recognized institution, serving communities across multiple states while maintaining our core belief that every individual deserves access to opportunities that can transform their life trajectory. Our journey reflects {new Date().getFullYear() - ngoDetails.yearEstablished} years of learning, adapting, and growing alongside the communities we serve.
                        </p>
                        
                        <p>
                          <strong className="text-slate-800">Our mission</strong> remains clear: <em>{ngoDetails.mission}</em> This drives every program we design, every partnership we forge, and every measurement we track to ensure our work creates lasting, meaningful change.
                        </p>
                        
                        <p>
                          <strong className="text-slate-800">We envision</strong> <em>{ngoDetails.vision}</em> This vision guides our strategic planning and inspires our team to push beyond conventional approaches, always seeking innovative solutions to complex social challenges.
                        </p>
                        
                        <p>
                          Today, {ngoDetails.name} stands as a testament to what's possible when passionate individuals unite around shared values of {ngoDetails.values.join(', ')}. Through comprehensive programs, strategic partnerships, and evidence-based interventions, we continue to expand our impact while staying true to the principles that founded our organization.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Achievements Bar */}
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 border border-slate-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Key Milestones & Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {ngoDetails.impactMetrics.slice(0, 4).map((metric, index) => {
                        const IconComponent = iconMap[metric.icon] || Target;
                        return (
                          <div key={index} className="text-center">
                            <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                              <IconComponent className="text-slate-700" size={20} />
                            </div>
                            <div className="text-2xl font-bold text-slate-800 mb-1">{metric.value}{metric.unit}</div>
                            <div className="text-sm font-medium text-gray-700">{metric.label}</div>
                            <div className="text-xs text-gray-600 mt-1">{metric.description}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Values & Principles */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Our Core Values & Principles</h4>
                    <div className="flex flex-wrap gap-3">
                      {ngoDetails.values.map((value, index) => (
                        <span key={index} className="bg-slate-100 text-slate-800 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Timeline - 25% Space */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Institutional Timeline</h3>
                
                <div className="space-y-6">
                  {ngoDetails.timeline.map((milestone, index) => (
                    <div key={index} className="relative">
                      {index !== ngoDetails.timeline.length - 1 && (
                        <div className="absolute left-4 top-10 w-0.5 h-16 bg-gray-200"></div>
                      )}
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          {String(milestone.year).slice(-2)}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">{milestone.year}</div>
                          <div className="font-semibold text-gray-900 mb-2">{milestone.title}</div>
                          <div className="text-sm text-gray-600 mb-3 leading-relaxed">{milestone.description}</div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-xs font-semibold text-gray-900 mb-2">{milestone.milestone}</div>
                            {milestone.impact && (
                              <div className="grid grid-cols-2 gap-2">
                                {milestone.impact.map((impact, idx) => (
                                  <div key={idx} className="text-center">
                                    <div className="text-sm font-bold text-slate-800">{impact.value}</div>
                                    <div className="text-xs text-gray-600">{impact.label}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Areas & Measurable Impact (JWP only as requested) */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Areas & Measurable Impact</h2>
            <p className="text-lg text-gray-600">Strategic interventions creating sustainable change across multiple sectors</p>
          </div>

          {(() => {
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
              beneficiaries: string;
              timeline: string;
            };

            const causes: Cause[] = [
              { id: 1, title: 'Wings of Hope', organizer: 'Meera Singh', ngo: 'JWP', location: 'Uttarakhand, India', category: 'Women Empowerment', goalAmount: '₹6,50,000', raisedAmount: '₹4,80,000', progressPercentage: 74, supporters: 234, daysLeft: 28, image: '/JWP.jpg', urgency: 'High', beneficiaries: '1000 women', timeline: '15 months' },
            ];

            const filtered = causes; // JWP only for now

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((cause) => (
                  <div key={cause.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img src={cause.image} alt={cause.title} className="w-full h-full object-cover" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cause.urgency === 'Critical' ? 'text-red-700 bg-red-100 border border-red-200' : 'text-orange-700 bg-orange-100 border border-orange-200'}`}>
                          {cause.urgency} Priority
                        </span>
                        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                          <CheckCircleIcon size={14} className="text-green-600" />
                          <span className="text-xs font-medium text-green-700">Verified</span>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 font-medium">
                        <ClockIcon size={12} />
                        {cause.daysLeft} days left
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-gray-800 mb-3 line-clamp-2">{cause.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <BadgeIcon className="w-4 h-4 text-blue-600" />
                          <span className="font-medium">{cause.ngo}</span>
                          <span className="text-green-600">•</span>
                          <span className="text-green-600 text-xs">Verified</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin size={14} />
                          <span>{cause.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Target size={14} />
                          <span>{cause.beneficiaries} • {cause.timeline}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <span className="text-2xl font-bold text-gray-800">{cause.raisedAmount}</span>
                            <span className="text-sm text-gray-600 ml-2">raised</span>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-medium text-gray-600">{cause.progressPercentage}% of {cause.goalAmount}</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full" style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}></div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-1">
                            <Heart size={14} className="text-red-500" />
                            <span className="font-medium">{cause.supporters} donors</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-500" />
                            <span className="font-medium">Impact Score: 93</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="text-gray-600">Status</span>
                        <span className="font-medium text-green-600">Active • Verified</span>
                      </div>

                      <PrimaryButton className="w-full">Contribute Now</PrimaryButton>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </div>



      {/* Impact Documentation Gallery */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact Documentation & Evidence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gallery of our causes and projects showcasing real community impact
            </p>
          </div>

          {/* Simple Image Gallery Grid - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {filteredGallery.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedGalleryItem(selectedGalleryItem?.id === item.id ? null : item)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={item.url}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Selected Image Details - 2 lines of text at bottom */}
          {selectedGalleryItem && (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{selectedGalleryItem.title}</h3>
              <p className="text-gray-700">{selectedGalleryItem.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Leadership & Governance Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership & Governance Structure</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Executive leadership driving organizational excellence and strategic vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ngoDetails.leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all border border-gray-100">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  {leader.image ? (
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full rounded-full object-cover shadow-lg"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{leader.name}</h3>
                <div className="text-slate-600 font-semibold mb-4 text-sm">{leader.role}</div>
                <p className="text-gray-700 text-xs leading-relaxed mb-4">{leader.bio}</p>
                
                <div className="space-y-2 text-xs text-gray-600 border-t pt-4">
                  <div><strong>Experience:</strong> {leader.experience}</div>
                  <div><strong>Education:</strong> {leader.education}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards & Recognition Section */}
      {ngoDetails.awards && ngoDetails.awards.length > 0 && (
        <div className="bg-white py-20">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Industry Recognition</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Third-party validation of organizational excellence and social impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ngoDetails.awards.map((award, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-8 text-center border border-amber-200">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="text-white" size={28} />
                  </div>
                  <div className="text-lg font-bold text-amber-900 mb-2">{award.title}</div>
                  <div className="text-sm text-amber-700 mb-3">{award.year}</div>
                  <p className="text-xs text-amber-800 mb-4">{award.description}</p>
                  <div className="text-xs font-medium text-amber-600">{award.organization}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Partnership & Collaboration Section */}
      <div className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our NGO Partnership Platform</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-300">
            Are you an NGO looking to expand your impact? Join our verified network of transparent organizations committed to measurable social change.
          </p>
          
          <div className="flex justify-center items-center">
            <button 
              onClick={() => navigate('/ngo-partner')}
              className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all flex items-center gap-3"
            >
              <Handshake size={20} />
              Become a NGO Partner with US
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default NGODetailPage; 