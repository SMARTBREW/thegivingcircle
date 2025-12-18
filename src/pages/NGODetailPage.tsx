import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  MapPin,
  Globe,
  Mail,
  Phone,
  Handshake,
  Shield,
  Building,
  Trophy
} from 'lucide-react';
import { NGODetails } from '../types';

interface NGODetailPageProps {
  ngoDetails: NGODetails;
  onBack?: () => void;
  loading?: boolean;
}


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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Organization Profile Not Available</h2>
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
              <span className="font-medium">Back to Organizations</span>
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
              <h2 className="text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                {ngoDetails.shortDescription}
              </h2>

              {/* Institutional Certifications & Compliance - Moved to Hero Section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-6 text-left">Institutional Certifications & Compliance</h3>
                <div className="flex flex-wrap justify-start gap-4">
                  {ngoDetails.certifications.map((cert, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                      <Shield className="text-emerald-400" size={16} />
                      <span className="text-sm font-medium text-white">{cert}</span>
                    </div>
                  ))}
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




       {/* Our Foundation Section */}
       <div className="bg-gray-50 py-8 sm:py-10 md:py-12 lg:py-14">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Section Header */}
           <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
               Our{' '}
               <span className="bg-gradient-to-r green-700 bg-clip-text text-transparent">
                 Foundation
               </span>
             </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                 <div className="absolute bottom-6 right-6 bg-gradient-to-r green-700 text-white px-4 py-2 rounded-lg text-sm font-bold">
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

               </div>
             </div>
           </div>

         </div>
       </div>



      {/* Impact Documentation Gallery */}
      <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Impact Documentation &{' '}
              <span className="bg-gradient-to-r green-700 bg-clip-text text-transparent">
                Evidence
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">{selectedGalleryItem.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{selectedGalleryItem.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Awards & Recognition Section */}
      {ngoDetails.awards && ngoDetails.awards.length > 0 && (
        <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Awards & Industry Recognition</h2>
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
      <div className="bg-slate-800 text-white py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r green-600 bg-clip-text text-transparent">
              NGO Partnership
            </span>{' '}
            Platform
          </h2>
          <p className="text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Are you an NGO looking to expand your impact? Join our verified network of transparent organizations committed to measurable social change.
          </p>
          
          <div className="flex justify-center items-center">
            <button 
              onClick={() => navigate('/ngo-partner')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r green-700 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
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