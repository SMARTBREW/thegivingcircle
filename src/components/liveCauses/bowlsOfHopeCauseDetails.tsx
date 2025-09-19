import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Shield, Award, CheckCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Target, Users, TrendingUp, Trophy, Camera, AlertTriangle, Heart, Utensils } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const BowlsOfHopeCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Bowls of Hope cause data focused on animal feeding and nutrition
  const cause = {
    id: 4,
    title: 'Bowls of Hope',
    subtitle: 'Ensuring no animal goes hungry - daily feeding program for street animals',
    organizer: 'AnimalCare India',
    ngo: 'AnimalCare India',
    location: 'Chennai, Tamil Nadu',
    category: 'Animal Welfare',
    goalAmount: '₹7,80,000',
    raisedAmount: '₹6,20,000',
    progressPercentage: 79,
    supporters: 445,
    daysLeft: 18,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
    urgency: 'Critical',
    
    // Problem Statement
    problemStatement: 'Every day, thousands of stray animals in Chennai struggle to find food and clean water. Street dogs, cats, and other animals face starvation, malnutrition, and dehydration, especially during harsh weather conditions. Many animals die from hunger-related illnesses, while others become weak and vulnerable to diseases and accidents.',
    
    // Root Causes
    rootCauses: [
      'Lack of systematic feeding programs for stray animals',
      'Limited access to clean water sources in urban areas',
      'Insufficient community awareness about animal nutrition needs',
      'Absence of organized feeding stations and water points',
      'Weather conditions affecting food availability and animal health'
    ],
    
    // Consequences if not addressed
    consequences: [
      'Continued starvation and malnutrition of thousands of street animals',
      'Increased mortality rates due to hunger-related illnesses',
      'Weakened immune systems making animals vulnerable to diseases',
      'Human-animal conflicts due to animals searching for food in residential areas',
      'Loss of community compassion and awareness about animal welfare'
    ],
    
    // Our Solution
    solution: {
      approach: 'Comprehensive daily feeding program providing nutritious meals and clean water to street animals through organized feeding stations and community engagement.',
      components: [
        'Establish 25+ feeding stations across Chennai with daily meal distribution',
        'Provide clean water sources and hydration points for animals',
        'Organize community feeding programs and volunteer networks',
        'Implement nutrition monitoring and health tracking for fed animals',
        'Create awareness campaigns about responsible animal feeding'
      ]
    },
    
    // Beneficiaries
    beneficiaries: {
      primary: '2,000+ street animals daily',
      secondary: '8,000+ community members',
      community: '25+ neighborhoods across Chennai',
      longTerm: 'Entire ecosystem of street animal welfare'
    },
    
    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
        caption: 'Volunteers providing fresh water and nutritious meals to street dogs at feeding stations',
        type: 'Daily Feeding'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183037/images/animals-bowl/animal2.jpg',
        caption: 'Community members actively participating in organized feeding programs for stray animals',
        type: 'Community Feeding'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183039/images/animals-bowl/animal3.jpg',
        caption: 'Dedicated volunteers ensuring no animal goes hungry through systematic feeding initiatives',
        type: 'Volunteer Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183040/images/animals-bowl/animal4.jpg',
        caption: 'Feeding stations providing consistent nutrition and clean water to street animals',
        type: 'Feeding Stations'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183042/images/animals-bowl/animal5.jpg',
        caption: 'Animals receiving proper nutrition and care through our comprehensive feeding program',
        type: 'Animal Nutrition'
      }
    ],
    
    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '2,000+ animals',
        description: 'Fed daily with nutritious meals and clean water within 6 months',
        timeline: 'Short-term'
      },
      {
        metric: '90% reduction',
        description: 'In hunger-related animal deaths in target areas',
        timeline: 'Medium-term'
      },
      {
        metric: '25 feeding stations',
        description: 'Established across Chennai for consistent animal care',
        timeline: 'Long-term'
      },
      {
        metric: '500+ volunteers',
        description: 'Trained and engaged in community feeding programs',
        timeline: 'Medium-term'
      }
    ],
    
    timeline: '12 months',
    
    updates: [
      {
        date: '10 March 2024',
        title: 'First Feeding Station Launch',
        description: 'Successfully launched our first feeding station in Chennai, serving 200+ animals daily with nutritious meals.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg'
      },
      {
        date: '15 March 2024',
        title: 'Community Volunteer Program',
        description: 'Recruited and trained 50+ community volunteers for daily feeding operations across 5 neighborhoods.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183037/images/animals-bowl/animal2.jpg'
      },
      {
        date: '20 March 2024',
        title: 'Water Source Installation',
        description: 'Installed clean water sources at 10 feeding stations, ensuring animals have access to fresh water.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183039/images/animals-bowl/animal3.jpg'
      }
    ],
    
    testimonials: [
      {
        name: 'Dr. Priya Menon',
        role: 'Veterinarian, Chennai',
        quote: 'The Bowls of Hope program has transformed our community. Street animals are healthier, happier, and the community has learned to care for them. This program shows that compassion can solve even the biggest challenges.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Rajesh Kumar',
        role: 'Community Leader, Chennai',
        quote: 'Before this program, we had many conflicts with stray animals. Now, with regular feeding, the animals are calmer and the community has learned to coexist peacefully. Bowls of Hope has brought harmony to our neighborhood.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],
    
    milestones: [
      { target: '₹1,95,000', achievement: 'First 5 Feeding Stations Setup', status: 'completed' },
      { target: '₹3,90,000', achievement: 'Community Volunteer Network', status: 'completed' },
      { target: '₹5,85,000', achievement: 'Water Sources & Nutrition Program', status: 'in-progress' },
      { target: '₹7,02,000', achievement: 'Expansion to 20+ Feeding Stations', status: 'pending' },
      { target: '₹7,80,000', achievement: 'Full Program Implementation & Monitoring', status: 'pending' }
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'AnimalCare India',
    logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
    tagline: 'Every Life, Every Heartbeat',
    description: 'AnimalCare India is a dedicated animal welfare organization committed to protecting and caring for stray animals across India. Through comprehensive feeding programs, medical care, and community education, we work tirelessly to ensure no animal goes hungry and every animal receives the care they deserve.',
    vision: 'A world where every animal has access to food, water, and compassionate care.',
    mission: 'To provide daily nutrition and care for street animals through organized feeding programs, community engagement, and sustainable welfare initiatives.',
    focus: 'Animal Nutrition & Feeding',
    founded: '2015',
    location: 'Chennai, Tamil Nadu',
    impact: '15,000+ animals fed daily',
    certification: 'Section 8, 80G, FCRA',
    registrationNumber: 'TN/2015/ANIMAL/002',
    contact: {
      phone: '+91-9315982650',
      email: 'info@animalcareindia.org.in',
      website: 'www.animalcareindia.org.in',
      address: 'AnimalCare India, Anna Nagar, Chennai, Tamil Nadu - 600040',
      social: {
        facebook: '@animalcareindia.org.in',
        twitter: '@AnimalCareIndia',
        instagram: '@animalcareindia.org.in'
      }
    },
    achievements: [
      { icon: Award, text: '8+ years of dedicated service to animal nutrition' },
      { icon: MapPin, text: 'Active feeding programs in 25+ neighborhoods across Chennai' },
      { icon: Trophy, text: 'Best Animal Feeding Program Award 2023' },
      { icon: Shield, text: 'ISO 9001:2015 certified for quality animal care' }
    ],
    stats: {
      currentProjects: 8,
      totalBeneficiaries: '15,000+',
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
                      <strong className="text-gray-900">Chennai has one of the largest stray animal populations in India</strong>, with thousands of dogs, cats, and other animals struggling to find food and clean water daily. 
                      These animals face constant hunger, malnutrition, and dehydration, especially during extreme weather conditions.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      <strong className="text-gray-900">The absence of systematic feeding programs</strong> means that when animals are hungry, they often suffer without help. 
                      Communities lack awareness about animal nutrition needs, leading to inconsistent feeding and the spread of diseases due to malnutrition.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Without intervention, the cycle of hunger continues, affecting both animal welfare and community harmony, while missing opportunities for the healing power of compassion.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183037/images/animals-bowl/animal2.jpg" 
                      alt="Stray animals in need of food and water"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      Stray animals in need of food and water
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
                      <strong className="text-gray-900">Every day without food means more suffering for innocent animals.</strong> 
                      Stray animals continue to face starvation, malnutrition, and dehydration, while communities remain disconnected from the needs of their animal neighbors.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      The lack of systematic feeding programs leads to increased human-animal conflicts, weakened animal immune systems, and missed opportunities for community healing through compassion and care.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Society loses the benefits of human-animal bonds, while animals continue to suffer in silence, unable to advocate for their basic needs.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183039/images/animals-bowl/animal3.jpg" 
                      alt="The importance of nutrition in animal welfare"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      The importance of nutrition in animal welfare
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
                      <strong className="text-gray-900">Our comprehensive approach addresses every aspect of animal nutrition.</strong> 
                      We establish 25+ feeding stations across Chennai with daily meal distribution, providing nutritious food and clean water to thousands of street animals.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Through community feeding programs and volunteer networks, we ensure consistent nutrition while creating awareness about responsible animal feeding and the importance of animal welfare.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      We implement nutrition monitoring and health tracking, ensuring that fed animals remain healthy and strong, while building a culture of compassion in the community.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183040/images/animals-bowl/animal4.jpg" 
                    alt="Volunteers providing daily nutrition to street animals"
                    className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                    Volunteers providing daily nutrition to street animals
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
                    While we directly serve 2,000+ street animals daily with nutritious meals and clean water, 
                    the benefits extend far beyond these primary beneficiaries.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    Over 8,000 community members benefit from reduced human-animal conflicts, increased awareness about animal welfare, 
                    and the healing power of compassion. When communities learn to care for animals, they develop greater empathy and understanding.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Our work across 25+ neighborhoods creates a demonstration effect, inspiring other areas to prioritize 
                    animal nutrition and showing that compassionate communities are stronger, healthier, and more connected.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183042/images/animals-bowl/animal5.jpg" 
                    alt="Community members celebrating successful feeding programs"
                    className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                    Community members celebrating successful feeding programs
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
                  real moments of transformation, from the joy of an animal receiving their first proper meal to 
                  the community coming together to ensure no animal goes hungry.
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
                  <Utensils className="text-lg sm:text-2xl" size={20} />
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
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg"
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

export default BowlsOfHopeCauseDetailPage;
