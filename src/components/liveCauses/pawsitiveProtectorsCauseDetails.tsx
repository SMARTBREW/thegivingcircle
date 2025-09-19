import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Shield, Award, CheckCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Target, Users, TrendingUp, Trophy, Camera, AlertTriangle, Heart, PawPrint } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const PawsitiveProtectorsCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Pawsitive Protectors cause data focused on animal welfare and protection
  const cause = {
    id: 3,
    title: 'Pawsitive Protectors',
    subtitle: 'Raising voice for the voiceless - comprehensive animal welfare and protection',
    organizer: 'AnimalCare India',
    ngo: 'AnimalCare India',
    location: 'Delhi NCR, Gurugram, Haryana',
    category: 'Animal Welfare',
    goalAmount: '₹8,00,000',
    raisedAmount: '₹4,50,000',
    progressPercentage: 56,
    supporters: 342,
    daysLeft: 18,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg',
    urgency: 'High',
    
    // Problem Statement
    problemStatement: 'Across India, millions of stray animals face daily struggles for survival, including lack of food, medical care, and protection from abuse. Street dogs, cats, and other animals endure harsh conditions, disease outbreaks, and human cruelty, while rescue organizations struggle with limited resources to provide comprehensive care.',
    
    // Root Causes
    rootCauses: [
      'Lack of systematic animal welfare infrastructure in urban areas',
      'Limited awareness about responsible pet ownership and animal rights',
      'Insufficient funding for animal rescue and medical care programs',
      'Absence of comprehensive vaccination and sterilization programs',
      'Social stigma and misconceptions about stray animals'
    ],
    
    // Consequences if not addressed
    consequences: [
      'Continued suffering of millions of stray animals',
      'Increased risk of rabies and other zoonotic diseases',
      'Overpopulation of stray animals leading to resource strain',
      'Loss of biodiversity and ecological balance',
      'Missed opportunities for human-animal bond and community healing'
    ],
    
    // Our Solution
    solution: {
      approach: 'Comprehensive animal welfare through rescue, medical care, vaccination, sterilization, and community education programs.',
      components: [
        'Emergency rescue and medical treatment for injured animals',
        'Mass vaccination campaigns to prevent disease outbreaks',
        'Sterilization programs to control population growth',
        'Community education on animal welfare and responsible ownership',
        'Establishment of safe shelters and adoption programs'
      ]
    },
    
    // Beneficiaries
    beneficiaries: {
      primary: '2,000+ stray animals',
      secondary: '5,000+ community members',
      community: '15+ neighborhoods across Delhi NCR',
      longTerm: 'Entire ecosystem of animal welfare'
    },
    
    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg',
        caption: 'Volunteers providing compassionate care and medical attention to rescued animals',
        type: 'Medical Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183018/images/animal-protect/animal13.jpg',
        caption: 'Anti-rabies vaccination campaign ensuring community health and animal welfare',
        type: 'Vaccination Drive'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183019/images/animal-protect/animal14.jpg',
        caption: 'Community members actively participating in animal welfare initiatives',
        type: 'Community Engagement'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183020/images/animal-protect/animal15.jpg',
        caption: 'Professional veterinary care being administered to animals in need',
        type: 'Veterinary Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183022/images/animal-protect/animal16.jpg',
        caption: 'Rescue operations bringing hope and healing to injured animals',
        type: 'Rescue Operations'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183023/images/animal-protect/animal17.jpg',
        caption: 'Community awareness campaigns promoting animal rights and welfare',
        type: 'Awareness Campaign'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183024/images/animal-protect/animal18.jpg',
        caption: 'Safe shelter environment providing comfort and care for rescued animals',
        type: 'Shelter Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183026/images/animal-protect/animal19.jpg',
        caption: 'Volunteers working together to create a better world for animals',
        type: 'Volunteer Work'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183027/images/animal-protect/animal20.jpg',
        caption: 'Educational programs teaching children about animal welfare and compassion',
        type: 'Education'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183028/images/animal-protect/animal21.jpg',
        caption: 'Adoption programs finding loving homes for rescued animals',
        type: 'Adoption'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183029/images/animal-protect/animal22.jpg',
        caption: 'Community feeding programs ensuring no animal goes hungry',
        type: 'Feeding Program'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183031/images/animal-protect/animal23.jpg',
        caption: 'Mobile veterinary services reaching animals in remote areas',
        type: 'Mobile Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183032/images/animal-protect/animal24.jpg',
        caption: 'Sterilization programs helping control animal population humanely',
        type: 'Sterilization'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183033/images/animal-protect/animal25.jpg',
        caption: 'Emergency response teams providing immediate care to animals in crisis',
        type: 'Emergency Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183034/images/animal-protect/animal26.jpg',
        caption: 'Community celebration of successful animal welfare achievements',
        type: 'Community Impact'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183035/images/animal-protect/animal27.jpg',
        caption: 'Long-term rehabilitation and care for animals with special needs',
        type: 'Rehabilitation'
      }
    ],
    
    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '2,000+ animals',
        description: 'Provided with medical care, vaccination, and sterilization within 12 months',
        timeline: 'Short-term'
      },
      {
        metric: '90% reduction',
        description: 'In rabies cases in target communities through vaccination programs',
        timeline: 'Medium-term'
      },
      {
        metric: '500+ adoptions',
        description: 'Successful adoptions of rescued animals into loving homes',
        timeline: 'Long-term'
      },
      {
        metric: '15,000+ people',
        description: 'Educated about animal welfare and responsible pet ownership',
        timeline: 'Medium-term'
      }
    ],
    
    timeline: '12 months',
    
    updates: [
      {
        date: '15 March 2024',
        title: 'Anti-Rabies Campaign Launch',
        description: 'Successfully launched comprehensive anti-rabies vaccination campaign across Delhi NCR, vaccinating 500+ stray dogs.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183018/images/animal-protect/animal13.jpg'
      },
      {
        date: '22 March 2024',
        title: 'Emergency Rescue Operations',
        description: 'Conducted 25+ emergency rescue operations, providing immediate medical care to injured animals.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183022/images/animal-protect/animal16.jpg'
      },
      {
        date: '28 March 2024',
        title: 'Community Education Program',
        description: 'Launched community education initiatives reaching 2,000+ residents about animal welfare and responsible pet ownership.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183027/images/animal-protect/animal20.jpg'
      }
    ],
    
    testimonials: [
      {
        name: 'Dr. Priya Sharma',
        role: 'Veterinarian, Gurugram',
        quote: 'AnimalCare India\'s work has transformed our community. The vaccination campaigns have significantly reduced rabies cases, and the rescue operations have saved countless lives. Their dedication to animal welfare is truly inspiring.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Rajesh Kumar',
        role: 'Community Leader, Delhi',
        quote: 'Before AnimalCare India came to our area, stray animals were suffering and the community was at risk. Now we have a systematic approach to animal welfare, and the community has learned to coexist peacefully with animals.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],
    
    milestones: [
      { target: '₹2,00,000', achievement: 'Emergency Rescue & Medical Care Setup', status: 'completed' },
      { target: '₹4,00,000', achievement: 'Anti-Rabies Vaccination Campaign', status: 'completed' },
      { target: '₹6,00,000', achievement: 'Sterilization & Population Control Program', status: 'in-progress' },
      { target: '₹7,50,000', achievement: 'Community Education & Awareness', status: 'pending' },
      { target: '₹8,00,000', achievement: 'Adoption Center & Long-term Care', status: 'pending' }
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'AnimalCare India',
    logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg',
    tagline: 'Every Life, Every Heartbeat',
    description: 'AnimalCare India is a dedicated animal welfare organization committed to protecting and caring for stray animals across India. Through comprehensive rescue operations, medical care, vaccination campaigns, and community education, we work tirelessly to create a world where every animal is treated with compassion and dignity.',
    vision: 'A world where every animal is safe, healthy, and treated with love and respect.',
    mission: 'To provide comprehensive care for stray animals through rescue, medical treatment, vaccination, sterilization, and community education programs.',
    focus: 'Animal Welfare & Protection',
    founded: '2015',
    location: 'Delhi NCR, India',
    impact: '10,000+ animals rescued and cared for',
    certification: 'Section 8, 80G, FCRA',
    registrationNumber: 'DL/2015/ANIMAL/001',
    contact: {
      phone: '+91-9315982650',
      email: 'info@animalcareindia.org.in',
      website: 'www.animalcareindia.org.in',
      address: 'AnimalCare India, Sector 15, Gurugram, Haryana - 122001',
      social: {
        facebook: '@animalcareindia.org.in',
        twitter: '@AnimalCareIndia',
        instagram: '@animalcareindia.org.in'
      }
    },
    achievements: [
      { icon: Award, text: '8+ years of dedicated service to animal welfare' },
      { icon: MapPin, text: 'Active presence in 15+ neighborhoods across Delhi NCR' },
      { icon: Trophy, text: 'Best Animal Welfare Organization Award 2023' },
      { icon: Shield, text: 'ISO 9001:2015 certified for quality animal care' }
    ],
    stats: {
      currentProjects: 12,
      totalBeneficiaries: '10,000+',
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
                      <strong className="text-gray-900">India has one of the largest stray animal populations in the world</strong>, with millions of dogs, cats, and other animals struggling to survive on the streets. 
                      These animals face daily challenges including lack of food, clean water, medical care, and protection from abuse and accidents.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      <strong className="text-gray-900">The absence of systematic animal welfare infrastructure</strong> means that when animals are injured or sick, they often suffer without help. 
                      Communities lack awareness about animal welfare, leading to neglect, abuse, and the spread of diseases like rabies.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Without intervention, the cycle of suffering continues, affecting both animal welfare and public health, while missing opportunities for the healing power of human-animal bonds.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183019/images/animal-protect/animal14.jpg" 
                      alt="Stray animals in need of care and protection"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      Stray animals in need of care and protection
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
                      <strong className="text-gray-900">Every day without intervention means more suffering for innocent animals.</strong> 
                      Stray animals continue to face hunger, disease, and abuse, while communities remain at risk from zoonotic diseases like rabies.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      The lack of systematic animal welfare programs leads to overpopulation, increased human-animal conflicts, and missed opportunities for community healing through compassion and care.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Society loses the benefits of human-animal bonds, while animals continue to suffer in silence, unable to advocate for themselves.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183020/images/animal-protect/animal15.jpg" 
                      alt="The importance of animal welfare in community health"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      The importance of animal welfare in community health
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
                      <strong className="text-gray-900">Our comprehensive approach addresses every aspect of animal welfare.</strong> 
                      We provide emergency rescue services for injured animals, comprehensive medical care, and vaccination programs to prevent disease outbreaks.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Through sterilization programs, we humanely control animal populations, while community education initiatives create awareness about responsible pet ownership and animal rights.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      We establish safe shelters and adoption programs, ensuring that rescued animals find loving homes and communities learn to coexist peacefully with animals.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183022/images/animal-protect/animal16.jpg" 
                    alt="Volunteers providing comprehensive animal care"
                    className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                    Volunteers providing comprehensive animal care
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
                    <strong className="text-gray-900">Our impact creates ripple effects that transform entire communities.</strong> 
                    While we directly serve 2,000+ stray animals with comprehensive care, vaccination, and medical treatment, 
                    the benefits extend far beyond these primary beneficiaries.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    Over 5,000 community members benefit from reduced disease risk, increased awareness about animal welfare, 
                    and the healing power of human-animal bonds. When communities learn to care for animals, 
                    they develop greater compassion and empathy.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Our work across 15+ neighborhoods creates a demonstration effect, inspiring other areas to prioritize 
                    animal welfare and showing that compassionate communities are stronger, healthier, and more connected.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183023/images/animal-protect/animal17.jpg" 
                    alt="Community members celebrating animal welfare achievements"
                    className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                    Community members celebrating animal welfare achievements
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
                  Every donation creates visible, measurable change in animal lives. Our impact gallery showcases 
                  real moments of transformation, from the rescue of an injured animal to the joy of a successful adoption, 
                  from vaccination campaigns to community education programs.
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
                  <PawPrint className="text-lg sm:text-2xl" size={20} />
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
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg"
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
                    <a href="https://facebook.com/animalcareindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <Facebook className="sm:w-5 sm:h-5" size={16} />
                    </a>
                    <a href="https://twitter.com/animalcareindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <Twitter className="sm:w-5 sm:h-5" size={16} />
                    </a>
                    <a href="https://instagram.com/animalcareindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors">
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

export default PawsitiveProtectorsCauseDetailPage;
