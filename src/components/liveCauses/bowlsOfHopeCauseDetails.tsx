import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Shield, Award, CheckCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Target, Users, TrendingUp, Trophy, Camera, AlertTriangle, Heart, Utensils } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';

const BowlsOfHopeCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cause = {
    id: 4,
    title: 'Bowls of Hope',
    subtitle: 'Give life with each bowl - feed stray animals and support animal welfare India',
    organizer: 'AnimalCare India',
    ngo: 'AnimalCare India',
    location: 'Chennai, Mumbai, Tamil Nadu, Maharashtra',
    category: 'Animal Welfare India • Animal Nutrition',
    goalAmount: '₹7,80,000',
    raisedAmount: '₹6,20,000',
    progressPercentage: 79,
    supporters: 445,
    daysLeft: 18,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
    urgency: 'Critical',
    problemStatement: 'How to feed stray animals India? Thousands of hungry street animals struggle daily without animal feeding programs. Feed hungry animals India - they face starvation, malnutrition, and death without systematic animal nutrition support. Animal feeding programs Mumbai, Chennai, and across India are critically needed. Help feed street animals before it\'s too late.',
    
    rootCauses: [
      'Lack of organized animal feeding programs for stray animals',
      'Limited animal nutrition support and feeding initiatives',
      'Insufficient awareness about how to feed stray animals properly',
      'Absence of feeding stations and animal welfare infrastructure',
      'No systematic support animal feeding initiatives in communities'
    ],
  
    consequences: [
      'Feed hungry animals India or they continue starving and dying',
      'Increased mortality - thousands die without animal nutrition support',
      'Weak, disease-prone animals without animal feeding programs',
      'Human-animal conflicts when hungry street animals search for food',
      'Lost opportunity to support animal welfare and feed stray animals'
    ],
    
    solution: {
      approach: 'Bowls of Hope delivers comprehensive animal feeding programs India providing daily nutrition to feed stray animals through organized feeding stations, volunteer networks, and animal nutrition support initiatives.',
      components: [
        'Animal feeding programs Mumbai & Chennai - 25+ feeding stations daily',
        'Support animal nutrition programs with balanced, healthy meals',
        'How to feed stray animals India - community training and volunteer networks',
        'Help feed street animals through organized animal welfare infrastructure',
        'Support animal feeding initiatives with nutrition monitoring and care'
      ]
    },
    
    beneficiaries: {
      primary: '2,000+ street animals fed daily through animal nutrition programs',
      secondary: '10,000+ community members supporting animal welfare',
      community: '25+ feeding stations across Chennai and Mumbai',
      longTerm: 'Sustainable animal feeding programs feeding hungry animals across India'
    },
    
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
        caption: 'Animal feeding programs India - volunteers feed stray animals with nutritious meals daily',
        type: 'Daily Feeding'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183037/images/animals-bowl/animal2.jpg',
        caption: 'How to feed stray animals India - community members support animal nutrition programs',
        type: 'Community Feeding'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183039/images/animals-bowl/animal3.jpg',
        caption: 'Help feed street animals - dedicated volunteers support animal feeding initiatives',
        type: 'Volunteer Care'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183040/images/animals-bowl/animal4.jpg',
        caption: 'Animal feeding programs Mumbai & Chennai - feeding stations provide consistent nutrition',
        type: 'Feeding Stations'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183042/images/animals-bowl/animal5.jpg',
        caption: 'Feed hungry animals India through animal nutrition support and welfare programs',
        type: 'Animal Nutrition'
      }
    ],
    
    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '2,000+ animals',
        description: 'Fed daily through animal feeding programs with nutritious meals',
        timeline: 'Short-term'
      },
      {
        metric: '90% reduction',
        description: 'In starvation deaths through systematic animal nutrition support',
        timeline: 'Medium-term'
      },
      {
        metric: '25 feeding stations',
        description: 'Animal feeding programs Mumbai & Chennai providing consistent care',
        timeline: 'Long-term'
      },
      {
        metric: '500+ volunteers',
        description: 'Trained in how to feed stray animals and support animal welfare',
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
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Bowls of Hope - Animal Feeding Programs | Feed Stray Animals India"
        description="Bowls of Hope provides animal feeding programs and animal nutrition support India. How to feed stray animals India? Donate to support animal welfare and help feed street animals. Animal feeding programs Mumbai and Chennai providing nutritious meals to 2,000+ hungry animals daily. Support animal feeding initiatives."
        keywords="Bowls of Hope, animal feeding programs, feed stray animals, animal nutrition, support animal welfare, animal welfare India, feed animals India, street animal rescue, animal shelter support, support stray animals, how to feed stray animals India, animal feeding programs Mumbai, support animal nutrition programs, help feed street animals, feed hungry animals India, animal nutrition support India, support animal feeding initiatives"
        canonicalUrl="https://www.thegivingcircle.in/bowls-of-hope-cause-details"
        ogImage="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183042/images/animals-bowl/animal5.jpg"
      />
      <ArticleSchema 
        title="Bowls of Hope - Animal Feeding Programs India"
        description="Bowls of Hope provides animal feeding programs and animal nutrition support India. Feeding 2,000+ street animals daily with nutritious meals in Mumbai and Chennai."
        image="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183042/images/animals-bowl/animal5.jpg"
        category="Animal Welfare"
        location="Chennai, Tamil Nadu & Mumbai, Maharashtra"
        datePublished="2024-01-15"
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
            Bowls of Hope
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
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Chennai, Tamil Nadu</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Anna Nagar, Chennai</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">T. Nagar, Chennai</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Adyar, Chennai</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Velachery, Chennai</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Tambaram, Chennai</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Madurai, Tamil Nadu</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Coimbatore, Tamil Nadu</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Salem, Tamil Nadu</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Tiruchirappalli, Tamil Nadu</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Bangalore, Karnataka</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Hyderabad, Telangana</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Kochi, Kerala</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Mumbai, Maharashtra</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Pune, Maharashtra</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Delhi, NCR</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Kolkata, West Bengal</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Ahmedabad, Gujarat</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Jaipur, Rajasthan</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Lucknow, Uttar Pradesh</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 break-words">
                <strong>Active in 20+ cities across 8 states</strong> - Ensuring no animal goes hungry through comprehensive feeding programs
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
                      <strong className="text-gray-900">Chennai has one of the largest stray animal populations in India</strong>, with thousands of dogs, cats, and other animals struggling to find food and clean water daily. 
                      These animals face constant hunger, malnutrition, and dehydration, especially during extreme weather conditions.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      <strong className="text-gray-900">The absence of systematic feeding programs</strong> means that when animals are hungry, they often suffer without help. 
                      Communities lack awareness about animal nutrition needs, leading to inconsistent feeding and the spread of diseases due to malnutrition.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      Without intervention, the cycle of hunger continues, affecting both animal welfare and community harmony, while missing opportunities for the healing power of compassion.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183037/images/animals-bowl/animal2.jpg" 
                      alt="Stray animals in need of food and water"
                      className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                      Stray animals in need of food and water
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
                      <strong className="text-gray-900">Every day without food means more suffering for innocent animals.</strong> 
                      Stray animals continue to face starvation, malnutrition, and dehydration, while communities remain disconnected from the needs of their animal neighbors.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      The lack of systematic feeding programs leads to increased human-animal conflicts, weakened animal immune systems, and missed opportunities for community healing through compassion and care.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      Society loses the benefits of human-animal bonds, while animals continue to suffer in silence, unable to advocate for their basic needs.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183039/images/animals-bowl/animal3.jpg" 
                      alt="The importance of nutrition in animal welfare"
                      className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                      The importance of nutrition in animal welfare
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
                      <strong className="text-gray-900">Our comprehensive approach addresses every aspect of animal nutrition.</strong> 
                      We establish 25+ feeding stations across Chennai with daily meal distribution, providing nutritious food and clean water to thousands of street animals.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      Through community feeding programs and volunteer networks, we ensure consistent nutrition while creating awareness about responsible animal feeding and the importance of animal welfare.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      We implement nutrition monitoring and health tracking, ensuring that fed animals remain healthy and strong, while building a culture of compassion in the community.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183040/images/animals-bowl/animal4.jpg" 
                    alt="Volunteers providing daily nutrition to street animals"
                    className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                    Volunteers providing daily nutrition to street animals
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
                  real moments of transformation, from the joy of an animal receiving their first proper meal to 
                  the community coming together to ensure no animal goes hungry.
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
                  <Utensils size={18} />
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

export default BowlsOfHopeCauseDetailPage;
