import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Share2, Shield, Award, CheckCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Target, Users, TrendingUp, Trophy, Camera, AlertTriangle, Heart, Home } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const FloodReliefCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Set page title and meta tags for SEO
  useEffect(() => {
    document.title = 'Flood Relief Uttarakhand - Disaster Relief India | Emergency Response';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'How to help flood victims in Uttarakhand? Support disaster relief India through emergency response, flood relief operations, medical aid, and rehabilitation. Donate to verified causes providing shelter, food, and disaster relief to 2,000+ flood-affected families in Uttarakhand. Emergency response India for flood victims.');
    }
    
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Flood Relief Uttarakhand, disaster relief India, emergency response India, flood relief operations, disaster rehabilitation, emergency shelter, medical aid, how to help flood victims in Uttarakhand, flood-affected families, disaster relief programs, emergency response operations, infrastructure rebuilding, flood victims support, disaster relief Uttarakhand');
    }
  }, []);

  // Flood Relief Uttarakhand cause data
  const cause = {
    id: 6,
    title: 'Flood Relief in Uttarakhand',
    subtitle: 'How to help flood victims in Uttarakhand - Emergency disaster relief and rehabilitation',
    organizer: 'GUS Disaster Relief',
    ngo: 'GUS',
    location: 'Uttarakhand, India',
    category: 'Disaster Relief India • Emergency Response',
    goalAmount: '₹8,50,000',
    raisedAmount: '₹6,20,000',
    progressPercentage: 73,
    supporters: 267,
    daysLeft: 30,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
    urgency: 'Critical',
    
    // Problem Statement
    problemStatement: 'How to help flood victims in Uttarakhand? Devastating floods have destroyed homes, displaced 2,000+ families, and left communities without basic necessities in Uttarakhand. Disaster relief India is critical as flood-affected families need emergency shelter, food, clean water, and medical aid. Flood relief Uttarakhand operations are urgently required. Emergency response India must provide immediate disaster relief and long-term rehabilitation for flood victims.',
    
    // Root Causes
    rootCauses: [
      'Severe flooding destroying homes and infrastructure in Uttarakhand',
      'Families displaced without emergency shelter or basic necessities',
      'Limited disaster relief India resources for flood-affected areas',
      'Insufficient emergency response operations for flood victims',
      'Lack of disaster rehabilitation and rebuilding programs'
    ],
    
    // Consequences if not addressed
    consequences: [
      'Flood-affected families continue suffering without emergency shelter',
      '2,000+ families displaced without disaster relief support',
      'Health crisis without clean water and medical aid',
      'Economic devastation - livelihoods destroyed by floods',
      'Children miss education, trauma continues without rehabilitation'
    ],
    
    // Our Solution
    solution: {
      approach: 'Flood Relief Uttarakhand provides comprehensive disaster relief India through emergency response operations, immediate aid (shelter, food, medical care), and long-term disaster rehabilitation including infrastructure rebuilding and livelihood restoration.',
      components: [
        'Emergency shelter and temporary housing for 2,000+ flood-affected families',
        'Food distribution, clean water supply, and essential supplies',
        'Medical camps and healthcare services for flood victims',
        'Infrastructure rebuilding - homes, schools, community centers',
        'Livelihood restoration and disaster rehabilitation programs'
      ]
    },
    
    // Beneficiaries
    beneficiaries: {
      primary: '2,000+ flood-affected families receiving emergency aid',
      secondary: '10,000+ community members benefiting from relief',
      community: '25+ villages across flood-affected Uttarakhand',
      longTerm: 'Comprehensive disaster relief and community rebuilding'
    },
    
    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
        caption: 'Emergency response India - disaster relief operations reaching flood victims in Uttarakhand',
        type: 'Emergency Response'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
        caption: 'How to help flood victims Uttarakhand - emergency shelter for displaced families',
        type: 'Emergency Shelter'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
        caption: 'Flood relief Uttarakhand - food distribution and essential supplies for families',
        type: 'Food Distribution'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
        caption: 'Disaster relief India - medical camps providing healthcare to flood-affected communities',
        type: 'Medical Aid'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
        caption: 'Disaster rehabilitation - rebuilding homes and infrastructure in flood-affected villages',
        type: 'Infrastructure Rebuilding'
      }
    ],
    
    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '2,000+ families',
        description: 'Provided emergency shelter, food, and medical aid within 2 months',
        timeline: 'Short-term'
      },
      {
        metric: '500+ homes',
        description: 'Rebuilt through disaster rehabilitation and infrastructure programs',
        timeline: 'Medium-term'
      },
      {
        metric: '10,000+ people',
        description: 'Receiving clean water, medical care, and disaster relief support',
        timeline: 'Short-term'
      },
      {
        metric: '100% recovery',
        description: 'Complete disaster rehabilitation - livelihood restoration for communities',
        timeline: 'Long-term'
      }
    ],
    
    timeline: '18 months',
    
    updates: [
      {
        date: '15 March 2024',
        title: 'Emergency Relief Operations Launched',
        description: 'Deployed emergency response teams to flood-affected areas, providing immediate shelter and food to 500+ families.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg'
      },
      {
        date: '20 March 2024',
        title: 'Medical Camps Established',
        description: 'Set up medical camps serving 1,000+ flood victims with healthcare, medicines, and disease prevention.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg'
      },
      {
        date: '25 March 2024',
        title: 'Infrastructure Rebuilding Begins',
        description: 'Started rebuilding 100 homes and community infrastructure in flood-affected villages.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg'
      }
    ],
    
    testimonials: [
      {
        name: 'Sunita Devi',
        role: 'Flood Victim, Uttarakhand',
        quote: 'When the floods destroyed our home, we lost everything. The disaster relief team arrived within days, providing shelter, food, and hope. They are rebuilding our home and helping us restart our lives. This is how to truly help flood victims.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Ramesh Singh',
        role: 'Community Leader, Uttarakhand',
        quote: 'The flood relief operations saved our village. Emergency response was immediate - shelter, food, medical aid. Now they are rebuilding our homes and schools. This disaster rehabilitation program is giving us our future back.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],
    
    milestones: [
      { target: '₹2,12,500', achievement: 'Emergency Shelter & Food Distribution', status: 'completed' },
      { target: '₹4,25,000', achievement: 'Medical Camps & Clean Water Supply', status: 'completed' },
      { target: '₹6,37,500', achievement: 'Infrastructure Rebuilding Begins', status: 'in-progress' },
      { target: '₹7,65,000', achievement: 'Livelihood Restoration Programs', status: 'pending' },
      { target: '₹8,50,000', achievement: 'Complete Community Rehabilitation', status: 'pending' }
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'GUS Disaster Relief',
    logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
    tagline: 'Hope in Times of Crisis',
    description: 'GUS is a dedicated disaster relief organization committed to providing emergency response and rehabilitation support to communities affected by natural disasters. Through rapid emergency operations, comprehensive aid distribution, and long-term rebuilding programs, we restore hope and rebuild lives across India.',
    vision: 'A disaster-resilient India where every affected family receives immediate aid and comprehensive rehabilitation.',
    mission: 'To provide rapid emergency response, comprehensive disaster relief, and long-term rehabilitation for communities affected by floods and natural disasters.',
    focus: 'Disaster Relief & Emergency Response',
    founded: '2010',
    location: 'Uttarakhand, India',
    impact: '50,000+ disaster-affected families supported',
    certification: 'Section 8, 80G, FCRA',
    registrationNumber: 'UK/2010/DISASTER/001',
    contact: {
      phone: '+91-9876543210',
      email: 'info@gusdisasterrelief.org',
      website: 'www.gusdisasterrelief.org',
      address: 'GUS Disaster Relief, Dehradun, Uttarakhand - 248001',
      social: {
        facebook: '@GUSDisasterRelief',
        twitter: '@GUSRelief',
        instagram: '@gus_disaster_relief'
      }
    },
    achievements: [
      { icon: Award, text: '14+ years of disaster relief and emergency response' },
      { icon: MapPin, text: 'Active operations in 20+ disaster-affected regions across India' },
      { icon: Trophy, text: 'National Disaster Management Excellence Award 2023' },
      { icon: Shield, text: 'ISO 9001:2015 certified for emergency response operations' }
    ],
    stats: {
      currentProjects: 15,
      totalBeneficiaries: '50,000+',
      transparency: 96,
      adminCosts: '8%',
      programSpend: '92%'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Header Section */}
      <div className="bg-gray-50 shadow-sm border-b mt-[80px] relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between mb-2">
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
          
          {/* Page Title */}
          <div className="text-center mb-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight py-2">
              Flood Relief in Uttarakhand
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-14 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
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
              </div>
            </div>

            {/* Trust Indicators Bar */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-700 sm:w-5 sm:h-5" size={16} />
                  <span className="text-gray-600 font-medium text-sm sm:text-base">Verified Campaign</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-green-700 sm:w-5 sm:h-5" size={16} />
                  <span className="text-gray-600 font-medium text-sm sm:text-base">Tax Deductible</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-green-700 sm:w-5 sm:h-5" size={16} />
                  <span className="text-gray-600 font-medium text-sm sm:text-base">Impact Tracked</span>
                </div>
              </div>
            </div>

            {/* Geographic Coverage */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-blue-600 sm:w-5 sm:h-5" size={20} />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Geographic Coverage</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Uttarakhand, India</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Dehradun, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Haridwar, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Rishikesh, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Mussoorie, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Nainital, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Tehri Garhwal, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Chamoli, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Rudraprayag, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Pauri Garhwal, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Pithoragarh, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Almora, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Bageshwar, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Champawat, Uttarakhand</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Udham Singh Nagar, Uttarakhand</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Active in 25+ flood-affected villages across 13 districts</strong> - Emergency disaster relief and rehabilitation operations throughout Uttarakhand
              </p>
            </div>

            {/* Section 1: The Challenge */}
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <AlertTriangle className="text-black sm:w-6 sm:h-6" size={20} />
                The Challenge
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
                      <strong className="text-gray-900">Devastating floods have destroyed entire communities in Uttarakhand.</strong> 
                      Thousands of families lost their homes, possessions, and livelihoods in minutes. Climate change and extreme weather events are making floods more frequent and severe, overwhelming existing infrastructure and disaster preparedness systems.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      <strong className="text-gray-900">Emergency response India is critical</strong> - families are living in temporary shelters without basic necessities like food, clean water, or medical care. 
                      The lack of adequate disaster relief resources means communities struggle to cope with the immediate aftermath and long-term recovery needs.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Without intervention, the cycle of suffering continues, with families facing not just immediate danger but long-term economic devastation and psychological trauma from losing everything.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg" 
                      alt="Flood-affected families in Uttarakhand needing immediate disaster relief"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      Flood-affected families in Uttarakhand needing immediate disaster relief
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
                      <strong className="text-gray-900">Every day without comprehensive flood relief Uttarakhand operations means more suffering.</strong> 
                      Families continue living in temporary shelters, children miss education, and health crises emerge from lack of clean water and medical care.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      The lack of emergency disaster relief leads to massive economic devastation as livelihoods are destroyed and communities lose their ability to recover independently. 
                      Without proper rehabilitation, the psychological trauma and economic hardship persist for years.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Society loses not just homes and infrastructure, but the resilience and hope that binds communities together during times of crisis. 
                      This is why immediate and comprehensive disaster relief India is essential.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg" 
                      alt="The importance of emergency response for flood victims in Uttarakhand"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      The importance of emergency response for flood victims in Uttarakhand
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: The Solution / How your support helps */}
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="text-black sm:w-6 sm:h-6" size={20} />
                The Solution / How Your Support Helps
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
                      <strong className="text-gray-900">Our comprehensive approach addresses every aspect of disaster relief and recovery.</strong> 
                      We deploy emergency response teams within 24 hours, providing immediate shelter, food, clean water, and medical aid to 2,000+ flood-affected families.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Through coordination with local authorities and communities, we establish emergency shelters, medical camps, and food distribution centers. 
                      Our teams work around the clock to ensure every family receives the support they need.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Beyond immediate aid, we create long-term disaster rehabilitation programs - rebuilding homes, schools, and infrastructure while providing livelihood restoration and community resilience training. 
                      This is how to help flood victims in Uttarakhand effectively.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg" 
                    alt="Emergency response teams providing immediate disaster relief to flood victims"
                    className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                    Emergency response teams providing immediate disaster relief to flood victims
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: See the Action in Change */}
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Camera className="text-black sm:w-6 sm:h-6" size={20} />
                See the Action in Change
              </h2>
              
              <div className="mb-4 sm:mb-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Every donation creates visible, measurable change in the lives of flood-affected families. Our impact gallery showcases 
                  real moments of transformation, from emergency relief distribution to the rebuilding of homes, 
                  from emergency medical care to community celebration of recovery.
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
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-700 rounded-full mb-3 sm:mb-4 text-white">
                  <Home className="text-lg sm:text-2xl" size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{cause.raisedAmount}</div>
                <div className="text-sm sm:text-base text-gray-600">raised of <span className="font-semibold">{cause.goalAmount}</span> goal</div>
              </div>
              
              <div className="relative mb-4 sm:mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <div 
                    className="bg-green-700 h-2 sm:h-3 rounded-full transition-all duration-500 relative"
                    style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-600">
                  <span>0%</span>
                  <span className="font-semibold text-green-700">{cause.progressPercentage}%</span>
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
              
              <PrimaryButton 
                className="w-full mb-2 sm:mb-3" 
                size="lg"
                aria-label="Donate now to help flood victims in Uttarakhand through disaster relief India"
              >
                Help Flood Victims Now
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-white p-2 flex items-center justify-center">
                    <Home className="text-gray-800" />
                  </div>
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
                    <div className="text-lg sm:text-2xl font-bold text-green-700">{ngoDetails.stats.programSpend}</div>
                    <div className="text-xs text-gray-600">Program Spend</div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {ngoDetails.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <achievement.icon className="text-green-700 mt-0.5 sm:w-4 sm:h-4" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              
                <div className="border-t pt-3 sm:pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Get in Touch</h4>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <a href={`tel:${ngoDetails.contact.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors">
                      <Phone className="sm:w-3.5 sm:h-3.5" size={12} />
                      <span>{ngoDetails.contact.phone}</span>
                    </a>
                    <a href={`mailto:${ngoDetails.contact.email}`} className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors">
                      <Mail className="sm:w-3.5 sm:h-3.5" size={12} />
                      <span>{ngoDetails.contact.email}</span>
                    </a>
                    <a href={`https://${ngoDetails.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors">
                      <Globe className="sm:w-3.5 sm:h-3.5" size={12} />
                      <span>{ngoDetails.contact.website}</span>
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700 transition-colors">
                      <Facebook className="sm:w-5 sm:h-5" size={16} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700 transition-colors">
                      <Twitter className="sm:w-5 sm:h-5" size={16} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700 transition-colors">
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

export default FloodReliefCauseDetailPage;

