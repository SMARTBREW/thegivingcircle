import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Shield, Award, CheckCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Target, Users, TrendingUp, Trophy, Camera, AlertTriangle, Heart, LifeBuoy } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';

const FloodAnimalRescueCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Flood Animal Rescue cause data focused on emergency animal rescue during floods
  const cause = {
    id: 5,
    title: 'Flood Animal Rescue',
    subtitle: 'How to help flood victims Uttarakhand - Emergency animal rescue and disaster relief India',
    organizer: 'AnimalCare India',
    ngo: 'AnimalCare India',
    location: 'Uttarakhand, Punjab, India',
    category: 'Disaster Relief India • Emergency Response',
    goalAmount: '₹4,50,000',
    raisedAmount: '₹2,80,000',
    progressPercentage: 62,
    supporters: 189,
    daysLeft: 15,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png',
    urgency: 'Critical',
    
    // Problem Statement
    problemStatement: 'How to help flood victims in Uttarakhand? Thousands of animals struggle to survive floods. Emergency animal rescue India is critical - animals trapped in floodwaters face drowning, starvation, injury. Flood animal rescue operations are urgently needed. Disaster relief India must include animals. Street dogs, livestock, and wildlife need flood rescue operations. These voiceless victims depend on emergency response India for survival.',
    
    // Root Causes
    rootCauses: [
      'Lack of emergency animal rescue infrastructure during disasters',
      'Limited flood relief Uttarakhand resources for animal rescue',
      'No coordinated disaster animal relief response plans',
      'Insufficient training in flood animal rescue operations',
      'Limited awareness about emergency response India for animals'
    ],
    
    // Consequences if not addressed
    consequences: [
      'Massive animal deaths without flood animal rescue operations',
      'Suffering animals need emergency response India urgently',
      'Waterborne diseases spread without disaster animal relief',
      'Rural communities lose livestock without flood relief Uttarakhand',
      'Trauma continues without disaster rehabilitation programs'
    ],
    
    // Our Solution
    solution: {
      approach: 'Flood Animal Rescue provides rapid emergency animal rescue India and disaster relief through specialized flood rescue operations, emergency response teams, and disaster rehabilitation for animals trapped in Uttarakhand and Punjab floods.',
      components: [
        'Emergency animal rescue India - specialized teams with boats and equipment',
        'Flood relief Uttarakhand - emergency shelters and medical care facilities',
        'Disaster animal relief - coordination with disaster management authorities',
        'Flood animal rescue operations - immediate medical care and rehabilitation',
        'Disaster rehabilitation - long-term recovery programs for rescued animals'
      ]
    },
    
    // Beneficiaries
    beneficiaries: {
      primary: '1,500+ animals rescued through emergency animal rescue operations',
      secondary: '10,000+ community members - how to help flood victims Uttarakhand',
      community: '20+ flood-affected villages receiving disaster relief India',
      longTerm: 'Comprehensive disaster animal relief and emergency response ecosystem'
    },
    
    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png',
        caption: 'Emergency animal rescue India - flood rescue operations reaching stranded animals in Uttarakhand',
        type: 'Emergency Response'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png',
        caption: 'How to help flood victims Uttarakhand - volunteers rescue animals from floods',
        type: 'Flood Animal Rescue'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183014/images/animal-flood/animal8.png',
        caption: 'Disaster animal relief - emergency medical care for flood-affected animals',
        type: 'Medical Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183003/images/animal-flood/animal10.jpg',
        caption: 'Flood relief Uttarakhand - emergency shelters providing disaster rehabilitation',
        type: 'Emergency Shelter'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183004/images/animal-flood/animal11.jpg',
        caption: 'Emergency response India - communities supporting flood animal rescue operations',
        type: 'Community Rescue'
      }
    ],
    
    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '1,500+ animals',
        description: 'Rescued through emergency animal rescue India flood operations',
        timeline: 'Short-term'
      },
      {
        metric: '95% survival rate',
        description: 'Through immediate disaster animal relief and medical care',
        timeline: 'Medium-term'
      },
      {
        metric: '20 rescue operations',
        description: 'Flood relief Uttarakhand and Punjab emergency response operations',
        timeline: 'Long-term'
      },
      {
        metric: '500+ volunteers',
        description: 'Trained in flood animal rescue operations and disaster response',
        timeline: 'Medium-term'
      }
    ],
    
    timeline: '6 months',
    
    updates: [
      {
        date: '5 March 2024',
        title: 'Emergency Rescue Operations Begin',
        description: 'Launched immediate rescue operations in Uttarakhand, saving 200+ animals from rising floodwaters.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png'
      },
      {
        date: '8 March 2024',
        title: 'Medical Care Facility Setup',
        description: 'Established emergency medical care facilities for rescued animals with 24/7 veterinary support.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183014/images/animal-flood/animal8.png'
      },
      {
        date: '12 March 2024',
        title: 'Community Rescue Network',
        description: 'Trained 100+ community volunteers in emergency animal rescue techniques and safety protocols.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183004/images/animal-flood/animal11.jpg'
      }
    ],
    
    testimonials: [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'Veterinarian, Uttarakhand',
        quote: 'The Flood Animal Rescue program has been a lifeline for thousands of animals during the recent floods. Their rapid response and specialized rescue techniques have saved countless lives. This program shows that even in the darkest times, compassion can shine through.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Priya Sharma',
        role: 'Community Leader, Uttarakhand',
        quote: 'When the floods hit our village, we thought all was lost. But the rescue teams arrived and saved not just our animals, but our hope. They showed us that every life matters, even in the face of disaster.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],
    
    milestones: [
      { target: '₹1,12,500', achievement: 'Emergency Rescue Equipment & Teams', status: 'completed' },
      { target: '₹2,25,000', achievement: 'Medical Care Facilities & Veterinary Support', status: 'completed' },
      { target: '₹3,37,500', achievement: 'Community Training & Volunteer Network', status: 'in-progress' },
      { target: '₹4,05,000', achievement: 'Long-term Recovery & Relocation Programs', status: 'pending' },
      { target: '₹4,50,000', achievement: 'Disaster Preparedness & Future Response', status: 'pending' }
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'AnimalCare India',
    logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png',
    tagline: 'Every Life, Every Heartbeat',
    description: 'AnimalCare India is a dedicated animal welfare organization committed to protecting and caring for animals during natural disasters and emergencies. Through specialized rescue operations, emergency medical care, and disaster response coordination, we work tirelessly to save lives when every second counts.',
    vision: 'A world where no animal is left behind during natural disasters and emergencies.',
    mission: 'To provide rapid emergency response and rescue operations for animals affected by floods, natural disasters, and other emergencies through specialized teams and coordinated disaster response.',
    focus: 'Emergency Animal Rescue',
    founded: '2015',
    location: 'Uttarakhand, India',
    impact: '5,000+ animals rescued from disasters',
    certification: 'Section 8, 80G, FCRA',
    registrationNumber: 'UK/2015/ANIMAL/003',
    contact: {
      phone: '+91-9315982650',
      email: 'info@animalcareindia.org.in',
      website: 'www.animalcareindia.org.in',
      address: 'AnimalCare India, Dehradun, Uttarakhand - 248001',
      social: {
        facebook: '@animalcareindia.org.in',
        twitter: '@AnimalCareIndia',
        instagram: '@animalcareindia.org.in'
      }
    },
    achievements: [
      { icon: Award, text: '8+ years of emergency animal rescue experience' },
      { icon: MapPin, text: 'Active rescue operations in 15+ disaster-affected regions' },
      { icon: Trophy, text: 'Best Emergency Animal Rescue Award 2023' },
      { icon: Shield, text: 'ISO 9001:2015 certified for emergency response' }
    ],
    stats: {
      currentProjects: 6,
      totalBeneficiaries: '5,000+',
      transparency: 98,
      adminCosts: '5%',
      programSpend: '95%'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Flood Animal Rescue - Emergency Animal Rescue | Disaster Relief India"
        description="Flood Animal Rescue provides emergency animal rescue and disaster relief India. How to help flood victims in Uttarakhand? Support flood animal rescue operations, disaster rehabilitation, and emergency response India. Donate to rescue animals from floods and provide emergency medical care."
        keywords="Flood Animal Rescue, emergency animal rescue, disaster animal relief, rescue animals from floods, animal emergency response, disaster relief India, flood relief Uttarakhand, emergency response India, flood animal rescue, disaster rehabilitation, flood rescue operations, how to help flood victims in Uttarakhand, emergency animal rescue India, flood animal rescue operations, disaster animal relief programs"
        canonicalUrl="https://www.thegivingcircle.in/flood-animal-rescue-cause-details"
        ogImage="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png"
      />
      <ArticleSchema 
        title="Flood Animal Rescue - Emergency Animal Rescue & Disaster Relief Uttarakhand"
        description="Emergency animal rescue and disaster relief India. Supporting flood animal rescue operations in Uttarakhand, providing disaster rehabilitation and emergency medical care for rescued animals."
        image="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png"
        category="Disaster Relief"
        location="Uttarakhand, India"
        datePublished="2024-06-15"
        author="Animal Care India"
      />
      {/* Professional Header Section */}
      <div className="bg-gray-50 shadow-sm border-b mt-[80px] relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-2">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="font-medium text-xs sm:text-sm md:text-base">Back to Previous Page</span>
            </button>
            {id && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-2 sm:px-3 py-1">
                <span className="text-[10px] sm:text-xs md:text-sm text-blue-700 font-medium">
                  Cause ID: {id} (Development Mode)
                </span>
              </div>
            )}
          </div>
          
          {/* Page Title */}
          <div className="text-center mb-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight py-2 break-words">
            Flood Animal Rescue
          </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:py-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4 sm:mb-6">
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
                <img 
                  src={cause.image} 
                  alt={cause.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Trust Indicators Bar */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-3 md:gap-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <CheckCircle className="text-green-700" size={14} />
                  <span className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Verified Campaign</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Award className="text-green-700" size={14} />
                  <span className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Tax Deductible</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <TrendingUp className="text-green-700" size={14} />
                  <span className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Impact Tracked</span>
                </div>
              </div>
            </div>

            {/* Geographic Coverage */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-blue-600" size={18} />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Geographic Coverage</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Uttarakhand, India</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Dehradun, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Haridwar, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Rishikesh, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Mussoorie, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Nainital, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Kerala, India</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Kochi, Kerala</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Thiruvananthapuram, Kerala</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Assam, India</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Guwahati, Assam</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Bihar, India</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Patna, Bihar</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">West Bengal, India</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Kolkata, West Bengal</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Odisha, India</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Bhubaneswar, Odisha</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Andhra Pradesh, India</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Vijayawada, Andhra Pradesh</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Tamil Nadu, India</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Chennai, Tamil Nadu</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 break-words">
                <strong>Active in 20+ cities across 8 states</strong> - Emergency rescue operations for animals during natural disasters
              </p>
            </div>

            {/* Section 1: The Challenge */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <AlertTriangle className="text-black" size={18} />
                The Challenge
              </h2>
              
              <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words">
                  {cause.problemStatement}
                </p>
              </div>

              {/* Root Causes */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">Understanding the Root Causes</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      <strong className="text-gray-900">Natural disasters like floods create life-threatening situations for thousands of animals</strong>, with no escape routes or means of survival. 
                      Street dogs, cats, livestock, and wildlife become trapped in rising floodwaters, facing immediate danger of drowning, starvation, and injury.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      <strong className="text-gray-900">The absence of emergency animal rescue infrastructure</strong> means that when disasters strike, animals are often left to fend for themselves. 
                      Communities lack the resources, equipment, and training needed to rescue animals during floods and other natural disasters.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      Without intervention, the cycle of suffering continues, with animals facing not just immediate danger but long-term trauma and health issues from exposure to contaminated floodwaters.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png" 
                      alt="Animals trapped in floodwaters needing immediate rescue"
                      className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                      Animals trapped in floodwaters needing immediate rescue
                    </p>
                  </div>
                </div>
              </div>

              {/* Consequences */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words">The Cost of Inaction</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      <strong className="text-gray-900">Every minute without rescue means more lives lost to floodwaters.</strong> 
                      Animals continue to face drowning, starvation, and injury while communities struggle to cope with their own survival needs.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      The lack of emergency animal rescue leads to massive loss of life, spread of waterborne diseases, and long-term psychological trauma for both animals and communities.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      Society loses not just individual animals, but the entire ecosystem of compassion and care that binds communities together during times of crisis.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183014/images/animal-flood/animal8.png" 
                      alt="The importance of emergency animal rescue during disasters"
                      className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                      The importance of emergency animal rescue during disasters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: The Solution / How your support helps */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <Target className="text-black" size={18} />
                The Solution / How Your Support Helps
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center mb-4 sm:mb-6 md:mb-8">
                <div>
                  <div className="prose prose-lg text-gray-600 mb-3 sm:mb-4 md:mb-6">
                    <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words">
                      {cause.solution.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      <strong className="text-gray-900">Our comprehensive approach addresses every aspect of emergency animal rescue.</strong> 
                      We deploy specialized rescue teams with boats and water rescue equipment, providing immediate response to animals trapped in floodwaters.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      Through coordination with disaster management authorities and local communities, we establish emergency animal shelters and provide immediate medical care for rescued animals.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      We create long-term recovery and relocation programs, ensuring that rescued animals receive proper care and find safe homes, while building community resilience for future disasters.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183003/images/animal-flood/animal10.jpg" 
                    alt="Emergency rescue teams providing immediate aid to trapped animals"
                    className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                    Emergency rescue teams providing immediate aid to trapped animals
                  </p>
                </div>
              </div>
            </div>


            {/* Section 3: See the Action in Change */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <Camera className="text-black" size={18} />
                See the Action in Change
              </h2>
              
              <div className="mb-3 sm:mb-4 md:mb-6">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg break-words">
                  Every donation creates visible, measurable change in animal lives during emergencies. Our impact gallery showcases 
                  real moments of rescue and hope, from the first touch of a rescuer's hand to the joy of an animal reaching safety, 
                  from emergency medical care to community celebration of life.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {cause.impactGallery.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="relative h-40 sm:h-48 md:h-64">
                      <img 
                        src={item.image} 
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
                        {item.type}
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 md:p-6">
                      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            {/* Donation Card with Professional Design */}
            <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 lg:sticky lg:top-6">
              <div className="text-center mb-3 sm:mb-4 md:mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-green-700 rounded-full mb-2 sm:mb-3 md:mb-4 text-white">
                  <LifeBuoy size={18} />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">{cause.raisedAmount}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 break-words">raised of <span className="font-semibold">{cause.goalAmount}</span> goal</div>
              </div>
              
              <div className="relative mb-3 sm:mb-4 md:mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 md:h-3">
                  <div 
                    className="bg-green-700 h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-500 relative"
                    style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] sm:text-xs md:text-sm text-gray-600">
                  <span>0%</span>
                  <span className="font-semibold text-green-700">{cause.progressPercentage}%</span>
                  <span>100%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6 text-center">
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-gray-900">{cause.supporters}</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">Supporters</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-gray-900">{cause.daysLeft}</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">Days Left</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-gray-900">{cause.progressPercentage}%</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">Funded</div>
                </div>
              </div>
              
              <PrimaryButton className="w-full mb-2 sm:mb-3" size="lg">
                Support This Cause
              </PrimaryButton>
              
              <PrimaryButton 
                variant="secondary" 
                className="w-full" 
                icon={<Share2 size={14} />}
              >
                Share This Cause
              </PrimaryButton>

              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t text-center">
                <p className="text-[10px] sm:text-xs text-gray-500 break-words">
                  All donations are tax-deductible under Section 80G
                </p>
              </div>
            </div>

            {/* NGO Information Card with Professional Design */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-black p-3 sm:p-4 md:p-6 text-white">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                  <img 
                    src="/Animal care.jpg"
                    alt={ngoDetails.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg bg-white p-1 object-contain"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold break-words">{ngoDetails.name}</h3>
                    <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm break-words">{ngoDetails.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={12} />
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium">Verified NGO Partner</span>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6">
                <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 md:mb-6 leading-relaxed break-words">
                  {ngoDetails.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                  <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900">{ngoDetails.stats.transparency}%</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Transparency</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg border-2 border-purple-100">
                    <div className="text-sm sm:text-lg md:text-2xl font-bold text-green-700">{ngoDetails.stats.programSpend}</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Program Spend</div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6">
                  {ngoDetails.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <achievement.icon className="text-green-700 mt-0.5" size={12} />
                      <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 break-words">{achievement.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3 sm:pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base break-words">Get in Touch</h4>
                  <div className="space-y-1 sm:space-y-2 text-[10px] sm:text-xs md:text-sm">
                    <a href={`tel:${ngoDetails.contact.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors break-words">
                      <Phone size={10} />
                      <span>{ngoDetails.contact.phone}</span>
                    </a>
                    <a href={`mailto:${ngoDetails.contact.email}`} className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors break-words">
                      <Mail size={10} />
                      <span className="break-all">{ngoDetails.contact.email}</span>
                    </a>
                    <a href={`https://${ngoDetails.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors break-words">
                      <Globe size={10} />
                      <span>{ngoDetails.contact.website}</span>
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <a href="https://facebook.com/animalcareindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700 transition-colors">
                      <Facebook size={14} />
                    </a>
                    <a href="https://twitter.com/animalcareindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700 transition-colors">
                      <Twitter size={14} />
                    </a>
                    <a href="https://instagram.com/animalcareindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700 transition-colors">
                      <Instagram size={14} />
                    </a>
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

export default FloodAnimalRescueCauseDetailPage;
