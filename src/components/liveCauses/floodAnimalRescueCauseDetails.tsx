import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Shield, Award, CheckCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Target, Users, TrendingUp, Trophy, Camera, AlertTriangle, Heart, LifeBuoy } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const FloodAnimalRescueCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Flood Animal Rescue cause data focused on emergency animal rescue during floods
  const cause = {
    id: 5,
    title: 'Flood Animal Rescue',
    subtitle: 'Emergency rescue operations for animals trapped in floodwaters and natural disasters',
    organizer: 'AnimalCare India',
    ngo: 'AnimalCare India',
    location: 'Uttarakhand, India',
    category: 'Emergency Response',
    goalAmount: '₹4,50,000',
    raisedAmount: '₹2,80,000',
    progressPercentage: 62,
    supporters: 189,
    daysLeft: 15,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png',
    urgency: 'Critical',
    
    // Problem Statement
    problemStatement: 'During floods and natural disasters, thousands of animals are left stranded, trapped, and in immediate danger. Street dogs, cats, livestock, and wildlife face drowning, starvation, and injury as floodwaters rise rapidly. These animals have no means of escape and are completely dependent on human intervention for survival during these critical moments.',
    
    // Root Causes
    rootCauses: [
      'Lack of emergency animal rescue infrastructure during natural disasters',
      'Limited resources and equipment for water-based animal rescue operations',
      'Absence of coordinated emergency response plans for animal welfare',
      'Insufficient training and preparation for disaster animal rescue',
      'Limited awareness about animal rescue needs during floods'
    ],
    
    // Consequences if not addressed
    consequences: [
      'Massive loss of animal lives during flood disasters',
      'Increased suffering and trauma for trapped animals',
      'Spread of waterborne diseases among surviving animals',
      'Loss of livestock affecting rural communities economically',
      'Long-term psychological trauma for both animals and rescuers'
    ],
    
    // Our Solution
    solution: {
      approach: 'Rapid emergency response system providing immediate rescue operations for animals trapped in floodwaters through specialized rescue teams, equipment, and coordination with disaster management authorities.',
      components: [
        'Deploy specialized rescue teams with boats and water rescue equipment',
        'Establish emergency animal shelters and medical care facilities',
        'Coordinate with disaster management authorities and local communities',
        'Provide immediate medical care and rehabilitation for rescued animals',
        'Create long-term recovery and relocation programs for affected animals'
      ]
    },
    
    // Beneficiaries
    beneficiaries: {
      primary: '1,500+ animals rescued',
      secondary: '5,000+ community members',
      community: '15+ flood-affected villages',
      longTerm: 'Entire disaster response ecosystem'
    },
    
    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png',
        caption: 'Rescue teams wading through floodwaters to reach stranded animals in affected areas',
        type: 'Emergency Response'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png',
        caption: 'Volunteers carrying rescued animals to safety through challenging flood conditions',
        type: 'Animal Rescue'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183014/images/animal-flood/animal8.png',
        caption: 'Emergency medical care being provided to animals rescued from floodwaters',
        type: 'Medical Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183003/images/animal-flood/animal10.jpg',
        caption: 'Temporary shelters providing safe haven for rescued animals during flood recovery',
        type: 'Emergency Shelter'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183004/images/animal-flood/animal11.jpg',
        caption: 'Community members and rescue teams working together to save animals in distress',
        type: 'Community Rescue'
      }
    ],
    
    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '1,500+ animals',
        description: 'Rescued from floodwaters and natural disasters within 3 months',
        timeline: 'Short-term'
      },
      {
        metric: '95% survival rate',
        description: 'For animals rescued and provided with immediate medical care',
        timeline: 'Medium-term'
      },
      {
        metric: '20 rescue operations',
        description: 'Conducted across flood-affected regions with specialized teams',
        timeline: 'Long-term'
      },
      {
        metric: '500+ volunteers',
        description: 'Trained in emergency animal rescue and disaster response',
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
    <div className="min-h-screen bg-white">
      {/* Professional Header Section */}
      <div className="bg-white shadow-sm border-b mt-[100px]">
        <div className="container mx-auto px-6 py-8 sm:py-10 md:py-12 lg:py-14">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Previous Page</span>
            </button>
            {id && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1">
                <span className="text-sm text-blue-700 font-medium">
                  Cause ID: {id} (Development Mode)
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4 sm:mb-6">
              <div className="relative h-64 sm:h-80 md:h-96">
                <img 
                  src={cause.image} 
                  alt={cause.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border bg-white text-black border-gray-300`}>
                      {cause.urgency} Priority
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      {cause.category}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 text-white">
                    {cause.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                    {cause.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators Bar */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-purple-600 sm:w-5 sm:h-5" size={16} />
                  <span className="text-gray-600 font-medium text-sm sm:text-base">Verified Campaign</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-purple-600 sm:w-5 sm:h-5" size={16} />
                  <span className="text-gray-600 font-medium text-sm sm:text-base">Tax Deductible</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-purple-600 sm:w-5 sm:h-5" size={16} />
                  <span className="text-gray-600 font-medium text-sm sm:text-base">Impact Tracked</span>
                </div>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <AlertTriangle className="text-black sm:w-6 sm:h-6" size={20} />
                The Problem We're Solving
              </h2>
              
              <div className="prose prose-lg text-gray-600 mb-6 sm:mb-8">
                <p className="leading-relaxed text-lg">
                  {cause.problemStatement}
                </p>
              </div>

              {/* Root Causes */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Understanding the Root Causes</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      <strong className="text-gray-900">Natural disasters like floods create life-threatening situations for thousands of animals</strong>, with no escape routes or means of survival. 
                      Street dogs, cats, livestock, and wildlife become trapped in rising floodwaters, facing immediate danger of drowning, starvation, and injury.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      <strong className="text-gray-900">The absence of emergency animal rescue infrastructure</strong> means that when disasters strike, animals are often left to fend for themselves. 
                      Communities lack the resources, equipment, and training needed to rescue animals during floods and other natural disasters.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Without intervention, the cycle of suffering continues, with animals facing not just immediate danger but long-term trauma and health issues from exposure to contaminated floodwaters.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png" 
                      alt="Animals trapped in floodwaters needing immediate rescue"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      Animals trapped in floodwaters needing immediate rescue
                    </p>
                  </div>
                </div>
              </div>

              {/* Consequences */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">The Cost of Inaction</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      <strong className="text-gray-900">Every minute without rescue means more lives lost to floodwaters.</strong> 
                      Animals continue to face drowning, starvation, and injury while communities struggle to cope with their own survival needs.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      The lack of emergency animal rescue leads to massive loss of life, spread of waterborne diseases, and long-term psychological trauma for both animals and communities.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Society loses not just individual animals, but the entire ecosystem of compassion and care that binds communities together during times of crisis.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183014/images/animal-flood/animal8.png" 
                      alt="The importance of emergency animal rescue during disasters"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      The importance of emergency animal rescue during disasters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="text-black sm:w-6 sm:h-6" size={20} />
                Our Comprehensive Solution
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
                <div>
                  <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6">
                    <p className="leading-relaxed text-lg">
                      {cause.solution.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      <strong className="text-gray-900">Our comprehensive approach addresses every aspect of emergency animal rescue.</strong> 
                      We deploy specialized rescue teams with boats and water rescue equipment, providing immediate response to animals trapped in floodwaters.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Through coordination with disaster management authorities and local communities, we establish emergency animal shelters and provide immediate medical care for rescued animals.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      We create long-term recovery and relocation programs, ensuring that rescued animals receive proper care and find safe homes, while building community resilience for future disasters.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183003/images/animal-flood/animal10.jpg" 
                    alt="Emergency rescue teams providing immediate aid to trapped animals"
                    className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                    Emergency rescue teams providing immediate aid to trapped animals
                  </p>
                </div>
              </div>
            </div>

            {/* Beneficiaries */}
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Users className="text-black sm:w-6 sm:h-6" size={20} />
                Transforming Lives at Every Level
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    <strong className="text-gray-900">Our impact creates ripple effects that transform entire communities during disasters.</strong> 
                    While we directly rescue 1,500+ animals from floodwaters and natural disasters, 
                    the benefits extend far beyond these primary beneficiaries.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    Over 5,000 community members benefit from reduced trauma, increased safety, and the healing power of compassion during crisis. 
                    When communities see animals being rescued, they find hope and strength to face their own challenges.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Our work across 15+ flood-affected villages creates a demonstration effect, inspiring other areas to prioritize 
                    animal welfare during disasters and showing that compassion can thrive even in the darkest times.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183004/images/animal-flood/animal11.jpg" 
                    alt="Community members celebrating successful rescue operations"
                    className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                    Community members celebrating successful rescue operations
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Gallery */}
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Camera className="text-black sm:w-6 sm:h-6" size={20} />
                See the Change in Action
              </h2>
              
              <div className="mb-4 sm:mb-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Every donation creates visible, measurable change in animal lives during emergencies. Our impact gallery showcases 
                  real moments of rescue and hope, from the first touch of a rescuer's hand to the joy of an animal reaching safety, 
                  from emergency medical care to community celebration of life.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {cause.impactGallery.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="relative h-48 sm:h-64">
                      <img 
                        src={item.image} 
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        {item.type}
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            {/* Donation Card with Professional Design */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 top-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-3 sm:mb-4 text-white">
                  <LifeBuoy className="text-lg sm:text-2xl" size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{cause.raisedAmount}</div>
                <div className="text-sm sm:text-base text-gray-600">raised of <span className="font-semibold">{cause.goalAmount}</span> goal</div>
              </div>
              
              <div className="relative mb-4 sm:mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 sm:h-3 rounded-full transition-all duration-500 relative"
                    style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-600">
                  <span>0%</span>
                  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">{cause.progressPercentage}%</span>
                  <span>100%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 text-center">
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                  <div className="text-sm sm:text-lg font-bold text-gray-900">{cause.supporters}</div>
                  <div className="text-xs text-gray-600">Supporters</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                  <div className="text-sm sm:text-lg font-bold text-gray-900">{cause.daysLeft}</div>
                  <div className="text-xs text-gray-600">Days Left</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                  <div className="text-sm sm:text-lg font-bold text-gray-900">{cause.progressPercentage}%</div>
                  <div className="text-xs text-gray-600">Funded</div>
                </div>
              </div>
              
              <PrimaryButton className="w-full mb-2 sm:mb-3" size="lg">
                Support This Cause
              </PrimaryButton>
              
              <PrimaryButton 
                variant="secondary" 
                className="w-full" 
                icon={<Share2 className="sm:w-4 sm:h-4" size={16} />}
              >
                Share This Cause
              </PrimaryButton>

              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t text-center">
                <p className="text-xs text-gray-500">
                  All donations are tax-deductible under Section 80G
                </p>
              </div>
            </div>

            {/* NGO Information Card with Professional Design */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-black p-4 sm:p-6 text-white">
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png" 
                    alt={ngoDetails.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-white p-1 object-contain"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">{ngoDetails.name}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">{ngoDetails.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400 sm:w-4 sm:h-4" size={14} />
                  <span className="text-xs sm:text-sm font-medium">Verified NGO Partner</span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                  {ngoDetails.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">{ngoDetails.stats.transparency}%</div>
                    <div className="text-xs text-gray-600">Transparency</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg border-2 border-purple-100">
                    <div className="text-lg sm:text-2xl font-bold text-purple-600">{ngoDetails.stats.programSpend}</div>
                    <div className="text-xs text-gray-600">Program Spend</div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {ngoDetails.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <achievement.icon className="text-purple-600 mt-0.5 sm:w-4 sm:h-4" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">{achievement.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3 sm:pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Get in Touch</h4>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <a href={`tel:${ngoDetails.contact.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                      <Phone className="sm:w-3.5 sm:h-3.5" size={12} />
                      <span>{ngoDetails.contact.phone}</span>
                    </a>
                    <a href={`mailto:${ngoDetails.contact.email}`} className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                      <Mail className="sm:w-3.5 sm:h-3.5" size={12} />
                      <span>{ngoDetails.contact.email}</span>
                    </a>
                    <a href={`https://${ngoDetails.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                      <Globe className="sm:w-3.5 sm:h-3.5" size={12} />
                      <span>{ngoDetails.contact.website}</span>
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <Facebook className="sm:w-5 sm:h-5" size={16} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <Twitter className="sm:w-5 sm:h-5" size={16} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <Instagram className="sm:w-5 sm:h-5" size={16} />
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
