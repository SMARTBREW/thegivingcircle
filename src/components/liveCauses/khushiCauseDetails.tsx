import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Shield, Award, CheckCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Target, Users, TrendingUp, Trophy, Camera, AlertTriangle } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';

const KhushiCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // KHUSHII cause data focused on Wings of Hope - menstrual health education
  const cause = {
    id: 2,
    title: 'Wings of Hope',
    subtitle: 'Breaking period poverty through menstrual health education and women empowerment India',
    organizer: 'KHUSHII',
    ngo: 'KHUSHII',
    location: 'Delhi & NCR, India',
    category: 'Women Empowerment • Girls Education',
    goalAmount: '₹5,00,000',
    raisedAmount: '₹3,20,000',
    progressPercentage: 64,
    supporters: 189,

    daysLeft: 22,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg',
    urgency: 'High',
    
    // Problem Statement
    problemStatement: 'Period poverty India forces thousands of girls to miss school every month when they start menstruating. Lack of menstrual health education, social stigma around menstruation, and no access to affordable sanitary products create a massive barrier to girls education support. Many girls drop out of school permanently due to period-related shame and inadequate hygiene facilities.',
    
    // Root Causes
    rootCauses: [
      'Period poverty preventing access to sanitary products',
      'Breaking menstrual taboos - deep-rooted social stigma',
      'Lack of menstrual hygiene education in schools',
      'Inadequate sanitation facilities for girls in schools',
      'Cultural barriers preventing open discussion about menstruation'
    ],
    
    // Consequences if not addressed
    consequences: [
      'Girls missing 5+ days of school monthly - leading to dropouts',
      'Perpetuation of period stigma and women\'s health issues',
      'Lost educational opportunities affecting future careers',
      'Continued cycle of period poverty across generations',
      'Mental health impact from shame and isolation during menstruation'
    ],
    
    // Our Solution
    solution: {
      approach: 'Wings of Hope provides comprehensive menstrual health education, period poverty solutions India, and women empowerment through education programs.',
      components: [
        'Menstrual hygiene education and awareness programs in schools',
        'Distribution of reusable sanitary products to underprivileged girls',
        'Breaking menstrual taboos through community engagement',
        'Training women health ambassadors for peer support',
        'Creating safe, dignified sanitation facilities for girls'
      ]
    },
    
    // Beneficiaries
    beneficiaries: {
      primary: '2,000+ adolescent girls and women',
      secondary: '8,000+ family members benefiting',
      community: '50+ schools across Delhi NCR',
      longTerm: 'Breaking period stigma for entire communities'
    },
    
    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183089/images/khushi/48.jpg',
        caption: 'Girls receiving menstrual health education and learning about period hygiene in school workshops',
        type: 'Health Education'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188369/images/khushi/cld-1758188331812-77.jpg-2200.webp',
        caption: 'Distribution of reusable sanitary products helping girls stay in school during menstruation',
        type: 'Period Poverty Solution'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188362/images/khushi/cld-1758188325188-38.jpg-2200.webp',
        caption: 'Community sessions breaking menstrual taboos and promoting women health awareness',
        type: 'Breaking Stigma'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188360/images/khushi/cld-1758188322776-24.jpg-2200.webp',
        caption: 'Women health ambassadors trained to support girls with menstrual hygiene guidance',
        type: 'Peer Support'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183070/images/khushi/20.jpg',
        caption: 'Girls confidently attending school without fear of period-related shame or stigma',
        type: 'Educational Impact'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188367/images/khushi/cld-1758188329829-7.jpg-2200.webp',
        caption: 'Support girls education through menstrual hygiene awareness and empowerment programs',
        type: 'Girls Empowerment'
      }
    ],
    
    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '2,000+ girls',
        description: 'Receive menstrual health education and reusable sanitary products',
        timeline: 'Short-term'
      },
      {
        metric: '95% attendance',
        description: 'School attendance for girls during menstruation periods',
        timeline: 'Medium-term'
      },
      {
        metric: '80% reduction',
        description: 'In school dropout rates due to period-related issues',
        timeline: 'Long-term'
      },
      {
        metric: '50+ schools',
        description: 'Implementing comprehensive menstrual hygiene awareness programs',
        timeline: 'Medium-term'
      }
    ],
    
    timeline: '8 months',
    
    updates: [
      {
        date: '20 March 2024',
        title: 'First Learning Center Inaugurated',
        description: 'Successfully established our first learning center in Delhi, serving 100 children with quality education and meals.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183089/images/khushi/48.jpg'
      },
      {
        date: '25 March 2024',
        title: 'Educational Materials Distribution',
        description: 'Distributed complete educational kits including books, stationery, and learning materials to 200 enrolled children.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183094/images/khushi/77.jpg'
      },
      {
        date: '30 March 2024',
        title: 'Community Engagement Program',
        description: 'Conducted parent awareness sessions reaching 300+ families about the importance of education.',
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183100/images/khushi/38.jpg'
      }
    ],
    
    testimonials: [
      {
        name: 'Priya Sharma',
        role: 'Parent, Delhi Community',
        quote: 'My daughter now attends the KHUSHII learning center daily. She has gained confidence, improved her reading skills, and dreams of becoming a teacher. This program has transformed our family\'s future.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Rajesh Kumar',
        role: 'Community Leader, NCR',
        quote: 'KHUSHII has brought hope to our community. Children who never had access to quality education are now learning, growing, and aspiring for better futures. The impact is visible in every family.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],
    
    milestones: [
      { target: '₹1,25,000', achievement: 'First Learning Center Setup', status: 'completed' },
      { target: '₹2,50,000', achievement: 'Educational Materials & Nutrition Program', status: 'completed' },
      { target: '₹3,75,000', achievement: 'Second Learning Center & Teacher Training', status: 'in-progress' },
      { target: '₹4,50,000', achievement: 'Community Programs & Parent Engagement', status: 'pending' },
      { target: '₹5,00,000', achievement: 'Third Center & Long-term Impact Assessment', status: 'pending' }
    ]
  };

  // NGO details
  const ngoDetails = {
    name: 'KHUSHII',
    logo: 'https://khushii.org/wp-content/uploads/2021/01/khushii-black-logo.png',
    tagline: 'Spreading Happiness Through Education',
    description: 'KHUSHII is a nationally recognized non-profit organization dedicated to empowering underprivileged children through holistic education, healthcare, and development programs. With a legacy of transforming lives across India, we believe in creating sustainable change through community-driven initiatives.',
    vision: 'A world where every child has access to quality education and the opportunity to realize their full potential.',
    mission: 'To empower underprivileged children through innovative educational programs, healthcare initiatives, and community development.',
    focus: 'Child Development & Education',
    founded: '2008',
    location: 'Delhi & NCR, India',
    impact: '50,000+ children impacted',
    certification: 'Section 8, 80G, FCRA',
    registrationNumber: 'MH/2008/NPO/1234',
    contact: {
      phone: '+91-9876543210',
      email: 'info@khushii.org',
      website: 'www.khushii.org',
      address: '123, Hope Street, Andheri West, Mumbai - 400058',
      social: {
        facebook: '@KhushiiNGO',
        twitter: '@KhushiiOrg',
        instagram: '@khushii_official'
      }
    },
    achievements: [
      { icon: Award, text: '15+ years of dedicated service to underprivileged communities' },
      { icon: MapPin, text: 'Active presence in 12 states across India' },
      { icon: Trophy, text: 'National CSR Excellence Award 2023' },
      { icon: Shield, text: 'ISO 9001:2015 certified organization' }
    ],
    stats: {
    currentProjects: 25,
    totalBeneficiaries: '50,000+',
      transparency: 95,
      adminCosts: '8%',
      programSpend: '92%'
    }
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Wings of Hope - Menstrual Health Education | Support Girls Education India"
        description="Wings of Hope tackles period poverty India through menstrual health education and women empowerment programs. Support girls education by breaking menstrual taboos and providing reusable sanitary products. Help girls stay in school through menstrual hygiene awareness India."
        keywords="Wings of Hope, menstrual health education, period poverty, period poverty solutions India, girls education support, women health programs, women empowerment India, menstrual hygiene education, breaking menstrual taboos, reusable sanitary products, school attendance for girls, education for underprivileged, menstrual health programs for girls India, how to support girls education India, women health education programs, breaking period stigma India, menstrual hygiene awareness India, women empowerment through education"
        canonicalUrl="https://www.thegivingcircle.in/khushi-cause-details"
        ogImage="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg"
      />
      <ArticleSchema 
        title="Wings of Hope - Menstrual Health Education & Women Empowerment India"
        description="Wings of Hope tackles period poverty India through menstrual health education and women empowerment programs. Breaking menstrual taboos, providing reusable sanitary products, and helping girls stay in school."
        image="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg"
        category="Women Empowerment"
        location="Delhi & NCR, India"
        datePublished="2024-01-15"
        author="KHUSHII"
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
            Wings of Hope - Menstrual Health Education
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
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Delhi & NCR, India</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">New Delhi, Delhi</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Gurugram, Haryana</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Noida, Uttar Pradesh</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Faridabad, Haryana</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Ghaziabad, Uttar Pradesh</span>
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
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Bhubaneswar, Odisha</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Kochi, Kerala</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Chandigarh, Punjab</span>
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">Indore, Madhya Pradesh</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 break-words">
                <strong>Active in 20+ cities across 12 states</strong> - Menstrual health education programs and period poverty solutions for girls across India
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
                      Period poverty India affects millions of girls who lack access to affordable sanitary products. 
                      <strong className="text-gray-900"> When menstruation begins, girls miss 5+ days of school each month</strong>, 
                      falling behind in their studies and eventually dropping out due to shame and inadequate hygiene facilities.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      Breaking menstrual taboos is essential but challenging. 
                      <strong className="text-gray-900"> Deep cultural stigma prevents open discussion about menstruation</strong>, leaving girls unprepared and ashamed when their periods start. Schools lack proper sanitation facilities and menstrual hygiene education programs.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      Without menstrual health education and support, girls' education suffers permanently. How to support girls education India starts with addressing period poverty and breaking the silence around menstruation.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758188365/images/khushi/cld-1758188327709-4.jpg-2200.webp" 
                      alt="Children in underserved communities seeking educational opportunities"
                      className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                      Children in underserved communities seeking educational opportunities
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
                      <strong className="text-gray-900">Without period poverty solutions, girls lose critical educational opportunities.</strong> 
                      Missing school during menstruation creates learning gaps that compound over time. Many girls never catch up and drop out permanently, 
                      perpetuating cycles of limited opportunities and women empowerment India challenges.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      Period stigma India creates mental health burdens. Girls experience shame, isolation, and anxiety about menstruation. 
                      Without women health education programs, they lack information about their bodies and hygiene, 
                      leading to health complications and reduced confidence.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      Society loses when girls' potential is limited by period poverty. 
                      Every girl who drops out due to menstruation-related issues represents lost talent, leadership, and community contribution. Breaking period stigma India benefits everyone.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183070/images/khushi/20.jpg" 
                      alt="The importance of education in breaking cycles of poverty"
                      className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                      The importance of education in breaking cycles of poverty
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
                      <strong className="text-gray-900">Wings of Hope tackles period poverty through comprehensive menstrual health education.</strong> 
                      We provide menstrual hygiene awareness India programs in schools, distribute reusable sanitary products to underprivileged girls, 
                      and create safe, dignified sanitation facilities that support girls staying in school.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                      Breaking menstrual taboos requires community engagement. We train women health ambassadors who provide peer support and education. 
                      Our women health education programs address both the practical needs (period products) and social barriers (stigma, shame) that prevent girls from attending school during menstruation.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      Through women empowerment through education, we create lasting change. Girls learn about their bodies with dignity, families understand the importance of menstrual health, and schools become supportive environments for all students.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183108/images/khushi/KHu-Web.jpg" 
                    alt="Students actively engaged in learning activities"
                    className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-2 text-center italic break-words">
                    Students actively engaged in learning activities
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
                  Every donation creates visible change through our period poverty solutions India. Our impact gallery showcases 
                  real moments of transformation - girls confidently staying in school during menstruation, women health ambassadors 
                  leading community education, and families breaking menstrual taboos through open, supportive conversations.
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
                  <span className="text-base sm:text-lg md:text-2xl">❤</span>
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
              
              <PrimaryButton className="w-full mb-2 sm:mb-3" size="lg" aria-label="Donate to Wings of Hope menstrual health education and support girls education India">
                Support Girls Education
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
                  src="https://khushii.org/wp-content/uploads/2021/01/khushii-black-logo.png" 
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
                    <a href="https://facebook.com/khushii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700 transition-colors">
                      <Facebook size={14} />
                    </a>
                    <a href="https://twitter.com/khushii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700 transition-colors">
                      <Twitter size={14} />
                    </a>
                    <a href="https://instagram.com/khushii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700 transition-colors">
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

export default KhushiCauseDetailPage;
