import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Share2, Shield, Award, CheckCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Target, Users, TrendingUp, Trophy, Camera, AlertTriangle, Heart, PawPrint } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const PawsitiveProtectorsCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Set page title and meta tags for SEO
  useEffect(() => {
    document.title = 'Pawsitive Protectors - Animal Vaccination & Rabies Prevention | Donate Animal Welfare India';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Pawsitive Protectors provides animal welfare India through rabies prevention programs, stray dog vaccination, and street animal rescue. Where to donate for animal welfare India? Support our Zero Rabies Deaths by 2030 Mission. Donate to protect animals and communities across India.');
    }
    
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Pawsitive Protectors, animal vaccination, rabies prevention, stray dog vaccination, street animal rescue, animal welfare India, animal care NGO, rabies prevention India, protect animals, animal shelter support, street animal rescue Mumbai, where to donate for animal welfare India, rabies prevention programs India, stray dog vaccination programs, animal rescue and care India, zero rabies deaths mission India, animal welfare programs India, protect street animals India, stray animal care India');
    }
  }, []);

  // Pawsitive Protectors cause data focused on animal welfare and rabies prevention
  const cause = {
    id: 3,
    title: 'Pawsitive Protectors',
    subtitle: 'Fighting rabies together through free vaccinations - Zero Rabies Deaths by 2030 Mission',
    organizer: 'AnimalCare India',
    ngo: 'AnimalCare India',
    location: 'Delhi NCR, Mumbai, Gurugram, Haryana',
    category: 'Animal Welfare India • Rabies Prevention',
    goalAmount: '₹8,00,000',
    raisedAmount: '₹4,50,000',
    progressPercentage: 56,
    supporters: 342,
    daysLeft: 18,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg',
    urgency: 'High',
    
    // Problem Statement
    problemStatement: 'Rabies prevention India is critical as thousands die annually from rabies transmitted by unvaccinated street animals. Where to donate for animal welfare India? Stray dog vaccination programs are urgently needed. Street animal rescue Mumbai and across India faces challenges - millions of stray animals lack rabies prevention, medical care, and protection. Animal welfare India organizations struggle to reach all animals needing vaccination.',
    
    // Root Causes
    rootCauses: [
      'Lack of systematic stray dog vaccination programs',
      'Limited rabies prevention awareness in communities',
      'Insufficient funding for animal rescue and rabies vaccination',
      'Absence of comprehensive animal welfare infrastructure',
      'Fear and misconceptions about street animals preventing intervention'
    ],
    
    // Consequences if not addressed
    consequences: [
      'Continued rabies deaths - thousands die annually without rabies prevention India',
      'Unvaccinated stray animals spread disease to communities',
      'Street animals suffer without animal rescue and care India',
      'Overpopulation of stray animals without intervention',
      'Communities live in fear without stray dog vaccination programs'
    ],
    
    // Our Solution
    solution: {
      approach: 'Pawsitive Protectors delivers comprehensive animal welfare India through free rabies prevention, stray dog vaccination, street animal rescue, and community protection programs supporting Zero Rabies Deaths by 2030 Mission.',
      components: [
        'Free rabies vaccination programs for all street animals',
        'Emergency street animal rescue Mumbai and Delhi NCR operations',
        'Stray dog vaccination campaigns with collaring and deworming',
        'Animal welfare programs India including medical care and shelter',
        'Community education on rabies prevention and protecting street animals India'
      ]
    },
    
    // Beneficiaries
    beneficiaries: {
      primary: '5,000+ street animals receiving free rabies vaccination',
      secondary: '50,000+ community members protected from rabies',
      community: '25+ neighborhoods across Delhi NCR and Mumbai',
      longTerm: 'Zero Rabies Deaths by 2030 - protecting animals and humans'
    },
    
    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg',
        caption: 'Street animal rescue Mumbai - providing emergency medical care to injured stray animals',
        type: 'Animal Rescue'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183018/images/animal-protect/animal13.jpg',
        caption: 'Free rabies vaccination programs protecting communities - Zero Rabies Deaths by 2030 Mission',
        type: 'Rabies Prevention'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183019/images/animal-protect/animal14.jpg',
        caption: 'Community participating in animal welfare India and rabies prevention awareness programs',
        type: 'Community Engagement'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183020/images/animal-protect/animal15.jpg',
        caption: 'Stray dog vaccination programs providing free rabies shots and deworming',
        type: 'Stray Dog Vaccination'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183022/images/animal-protect/animal16.jpg',
        caption: 'Where to donate for animal welfare India - emergency street animal rescue operations',
        type: 'Emergency Rescue'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183023/images/animal-protect/animal17.jpg',
        caption: 'Protect street animals India through community education and awareness campaigns',
        type: 'Animal Protection'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183024/images/animal-protect/animal18.jpg',
        caption: 'Animal shelter support providing safe haven for rescued street animals',
        type: 'Shelter Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183026/images/animal-protect/animal19.jpg',
        caption: 'Animal welfare programs India powered by dedicated volunteers and donors',
        type: 'Volunteer Work'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183027/images/animal-protect/animal20.jpg',
        caption: 'Rabies prevention education teaching communities about animal welfare and safety',
        type: 'Education'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183028/images/animal-protect/animal21.jpg',
        caption: 'Animal rescue and care India - adoption programs finding loving homes',
        type: 'Adoption'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183029/images/animal-protect/animal22.jpg',
        caption: 'Stray animal care India including feeding programs for hungry street animals',
        type: 'Feeding Program'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183031/images/animal-protect/animal23.jpg',
        caption: 'Mobile stray dog vaccination units reaching remote areas for rabies prevention',
        type: 'Mobile Vaccination'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183032/images/animal-protect/animal24.jpg',
        caption: 'Animal welfare programs India include humane sterilization for population control',
        type: 'Sterilization'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183033/images/animal-protect/animal25.jpg',
        caption: 'Emergency street animal rescue providing immediate medical intervention',
        type: 'Emergency Response'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183034/images/animal-protect/animal26.jpg',
        caption: 'Communities celebrating success in protect animals mission and rabies prevention',
        type: 'Community Impact'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183035/images/animal-protect/animal27.jpg',
        caption: 'Long-term animal care NGO support for special needs street animals',
        type: 'Rehabilitation'
      }
    ],
    
    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '5,000+ animals',
        description: 'Receive free rabies vaccination, collaring, and deworming',
        timeline: 'Short-term'
      },
      {
        metric: 'Zero rabies deaths',
        description: 'In target communities through comprehensive rabies prevention India programs',
        timeline: 'Medium-term'
      },
      {
        metric: '1,000+ rescues',
        description: 'Street animal rescue operations providing emergency medical care',
        timeline: 'Long-term'
      },
      {
        metric: '50,000+ people',
        description: 'Educated about animal welfare India and rabies prevention',
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
    <div className="min-h-screen bg-gray-50">
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
            Pawsitive Protectors
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
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Delhi NCR, India</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Gurugram, Haryana</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Noida, Uttar Pradesh</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Faridabad, Haryana</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Ghaziabad, Uttar Pradesh</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">New Delhi, Delhi</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">South Delhi, Delhi</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">East Delhi, Delhi</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">West Delhi, Delhi</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">North Delhi, Delhi</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Mumbai, Maharashtra</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Pune, Maharashtra</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Bangalore, Karnataka</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Chennai, Tamil Nadu</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Kolkata, West Bengal</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Hyderabad, Telangana</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Ahmedabad, Gujarat</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Jaipur, Rajasthan</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Lucknow, Uttar Pradesh</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Bhopal, Madhya Pradesh</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 break-words">
                <strong>Active in 20+ cities across 8 states</strong> - Comprehensive animal welfare and protection programs
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
                      <strong className="text-gray-900">India has one of the largest stray animal populations in the world</strong>, with millions of dogs, cats, and other animals struggling to survive on the streets. 
                      These animals face daily challenges including lack of food, clean water, medical care, and protection from abuse and accidents.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      <strong className="text-gray-900">The absence of systematic animal welfare infrastructure</strong> means that when animals are injured or sick, they often suffer without help. 
                      Communities lack awareness about animal welfare, leading to neglect, abuse, and the spread of diseases like rabies.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      Without intervention, the cycle of suffering continues, affecting both animal welfare and public health, while missing opportunities for the healing power of human-animal bonds.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183019/images/animal-protect/animal14.jpg" 
                      alt="Stray animals in need of care and protection"
                      className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                      Stray animals in need of care and protection
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
                      <strong className="text-gray-900">Every day without intervention means more suffering for innocent animals.</strong> 
                      Stray animals continue to face hunger, disease, and abuse, while communities remain at risk from zoonotic diseases like rabies.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      The lack of systematic animal welfare programs leads to overpopulation, increased human-animal conflicts, and missed opportunities for community healing through compassion and care.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      Society loses the benefits of human-animal bonds, while animals continue to suffer in silence, unable to advocate for themselves.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183020/images/animal-protect/animal15.jpg" 
                      alt="The importance of animal welfare in community health"
                      className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                      The importance of animal welfare in community health
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
                      <strong className="text-gray-900">Our comprehensive approach addresses every aspect of animal welfare.</strong> 
                      We provide emergency rescue services for injured animals, comprehensive medical care, and vaccination programs to prevent disease outbreaks.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      Through sterilization programs, we humanely control animal populations, while community education initiatives create awareness about responsible pet ownership and animal rights.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      We establish safe shelters and adoption programs, ensuring that rescued animals find loving homes and communities learn to coexist peacefully with animals.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183022/images/animal-protect/animal16.jpg" 
                    alt="Volunteers providing comprehensive animal care"
                    className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                    Volunteers providing comprehensive animal care
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
                  Every donation creates visible, measurable change in animal lives. Our impact gallery showcases 
                  real moments of transformation, from the rescue of an injured animal to the joy of a successful adoption, 
                  from vaccination campaigns to community education programs.
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
                  <PawPrint size={18} />
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

export default PawsitiveProtectorsCauseDetailPage;
