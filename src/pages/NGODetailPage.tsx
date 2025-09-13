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
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                {ngoDetails.name}
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                {ngoDetails.shortDescription}
              </h2>

              {/* Key Performance Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {ngoDetails.impactMetrics.slice(0, 3).map((metric, index) => {
                  const IconComponent = iconMap[metric.icon] || Target;
                  
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <IconComponent size={16} className="sm:w-5 sm:h-5" />
                        </div>
                        <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide">{metric.label}</div>
                      </div>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 text-white">{metric.value}<span className="text-sm sm:text-lg">{metric.unit}</span></div>
                      <div className="text-xs text-slate-300 leading-relaxed">{metric.description}</div>
                    </div>
                  );
                })}
                
                {/* Efficiency Rating Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Award size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Efficiency Rating</div>
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 text-white">A+</div>
                  <div className="text-xs text-slate-300 leading-relaxed">Third-Party Verified</div>
                </div>
              </div>

              {/* Trust & Credibility Badges */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Verified className="text-emerald-400" size={14} />
                    <span className="font-medium text-white">Verified Partner</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Shield className="text-blue-400" size={14} />
                    <span className="font-medium text-white">Government Registered</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Award className="text-amber-400" size={14} />
                    <span className="font-medium text-white">Award Winning</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <BarChart3 className="text-green-400" size={14} />
                    <span className="font-medium text-white">Transparent Reporting</span>
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
      <div className="bg-white py-8 sm:py-10 border-b border-gray-200">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
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

       {/* Our Foundation Section */}
       <div className="bg-gray-50 py-12 sm:py-16 md:py-20">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Section Header */}
           <div className="text-center mb-12 sm:mb-16">
             <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
               Our{' '}
               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                 Foundation
               </span>
             </h2>
             <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
               The story behind our commitment to creating lasting social change
             </p>
           </div>

           {/* Main Content */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             {/* Image Section */}
             <div className="order-2 lg:order-1">
               <div className="relative">
                 <img 
                   src={ngoDetails.logo} 
                   alt={`${ngoDetails.name} Foundation Story`}
                   className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-2xl"
                 />
                 <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg text-sm font-bold">
                   EST. {ngoDetails.yearEstablished}
                 </div>
                 <div className="absolute bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                   {new Date().getFullYear() - ngoDetails.yearEstablished}+ Years of Impact
                 </div>
               </div>
             </div>

             {/* Story Content */}
             <div className="order-1 lg:order-2">
               <div className="space-y-6">
                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                   Our Foundation Story
                 </h3>
                 
                 <div className="space-y-5 text-gray-700 leading-relaxed">
                   <p className="text-lg">
                     <strong className="text-gray-900">Founded in {ngoDetails.yearEstablished}</strong>, {ngoDetails.name} emerged from a deep understanding that sustainable social change requires more than good intentions—it demands strategic vision, measurable impact, and unwavering commitment to transparency.
                   </p>
                   
                   <p className="text-lg">
                     What began as a grassroots initiative has evolved into a nationally recognized institution, serving communities across multiple states while maintaining our core belief that every individual deserves access to opportunities that can transform their life trajectory.
                   </p>
                   
                   <p className="text-lg">
                     Our journey reflects <strong className="text-gray-900">{new Date().getFullYear() - ngoDetails.yearEstablished} years</strong> of learning, adapting, and growing alongside the communities we serve.
                   </p>
                 </div>

                 {/* Mission & Vision Cards */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                   <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                     <h4 className="font-bold text-gray-900 mb-3 text-lg">Our Mission</h4>
                     <p className="text-gray-700 text-sm leading-relaxed">{ngoDetails.mission}</p>
                   </div>
                   <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                     <h4 className="font-bold text-gray-900 mb-3 text-lg">Our Vision</h4>
                     <p className="text-gray-700 text-sm leading-relaxed">{ngoDetails.vision}</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Core Values Section */}
           <div className="mt-12 sm:mt-16">
             <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
               Our Core Values & Principles
             </h4>
             <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
               {ngoDetails.values.map((value, index) => (
                 <span key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium border border-purple-200 hover:shadow-md transition-shadow">
                   {value}
                 </span>
               ))}
             </div>
           </div>

           {/* Key Achievements Section */}
           <div className="mt-12 sm:mt-16">
             <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8 sm:p-12">
               <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                 Key Milestones & Achievements
               </h4>
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                 {ngoDetails.impactMetrics.slice(0, 4).map((metric, index) => {
                   const IconComponent = iconMap[metric.icon] || Target;
                   return (
                     <div key={index} className="text-center">
                       <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                         <IconComponent className="text-purple-600" size={24} />
                       </div>
                       <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{metric.value}{metric.unit}</div>
                       <div className="text-sm sm:text-base font-semibold text-gray-700 mb-2">{metric.label}</div>
                       <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">{metric.description}</div>
                     </div>
                   );
                 })}
               </div>
             </div>
           </div>
         </div>
       </div>



      {/* Impact Documentation Gallery */}
      <div className="bg-white py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Impact Documentation &{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Evidence
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Gallery of our causes and projects showcasing real community impact
            </p>
          </div>

          {/* Simple Image Gallery Grid - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Selected Image Details - 2 lines of text at bottom */}
          {selectedGalleryItem && (
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{selectedGalleryItem.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{selectedGalleryItem.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Leadership & Governance Section */}
      <div className="bg-gray-50 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Leadership &{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Governance
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Executive leadership driving organizational excellence and strategic vision
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ngoDetails.leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center group hover:shadow-xl transition-all border border-gray-100">
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
                
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{leader.name}</h3>
                <div className="text-slate-600 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">{leader.role}</div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{leader.bio}</p>
                
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
        <div className="bg-white py-8 sm:py-10">
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="text-center mb-8 sm:mb-10">
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
      <div className="bg-slate-800 text-white py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NGO Partnership
            </span>{' '}
            Platform
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Are you an NGO looking to expand your impact? Join our verified network of transparent organizations committed to measurable social change.
          </p>
          
          <div className="flex justify-center items-center">
            <button 
              onClick={() => navigate('/ngo-partner')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <Handshake size={16} className="sm:w-5 sm:h-5" />
              Become a NGO Partner with US
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default NGODetailPage; 