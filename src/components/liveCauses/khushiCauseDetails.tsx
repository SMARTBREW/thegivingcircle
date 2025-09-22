import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Shield, Award, CheckCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Target, Users, TrendingUp, Trophy, Camera, AlertTriangle } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const KhushiCauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // KHUSHII cause data focused on education and child development
  const cause = {
    id: 2,
    title: 'Education for Every Child',
    subtitle: 'Ensuring quality education and holistic development for underprivileged children',
    organizer: 'KHUSHII',
    ngo: 'KHUSHII',
    location: 'Delhi & NCR, India',
    category: 'Education',
    goalAmount: '₹5,00,000',
    raisedAmount: '₹3,20,000',
    progressPercentage: 64,
    supporters: 189,

    daysLeft: 22,
    image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg',
    urgency: 'High',
    
    // Problem Statement
    problemStatement: 'In urban and rural areas across Delhi NCR, thousands of children from underprivileged backgrounds lack access to quality education, proper nutrition, and holistic development opportunities. Many children are forced to work instead of attending school, while others attend schools with inadequate infrastructure and resources.',
    
    // Root Causes
    rootCauses: [
      'Poverty forcing children into child labor instead of education',
      'Lack of quality schools in underserved communities',
      'Insufficient educational materials and infrastructure',
      'Limited access to nutrition and healthcare affecting learning',
      'Social barriers and discrimination preventing educational access'
    ],
    
    // Consequences if not addressed
    consequences: [
      'Perpetuation of intergenerational poverty cycles',
      'Increased child labor and exploitation',
      'Limited career opportunities and economic mobility',
      'Reduced community development and social progress',
      'Loss of human potential and talent in society'
    ],
    
    // Our Solution
    solution: {
      approach: 'Comprehensive child development through education, nutrition, healthcare, and community engagement programs.',
      components: [
        'Establish quality learning centers with proper infrastructure',
        'Provide nutritious meals and healthcare support',
        'Train teachers and implement innovative teaching methods',
        'Engage parents and communities in education advocacy',
        'Create safe and child-friendly learning environments'
      ]
    },
    
    // Beneficiaries
    beneficiaries: {
      primary: '500 children aged 3-18',
      secondary: '1,500+ family members',
      community: '8 urban and rural communities',
      longTerm: 'Entire neighborhood transformation'
    },
    
    // Impact Gallery
    impactGallery: [
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183089/images/khushi/48.jpg',
        caption: 'Children actively engaged in classroom learning with proper educational resources and materials',
        type: 'Active Learning'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188369/images/khushi/cld-1758188331812-77.jpg-2200.webp',
        caption: 'Students participating in interactive learning activities and group discussions',
        type: 'Interactive Education'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188362/images/khushi/cld-1758188325188-38.jpg-2200.webp',
        caption: 'Community celebration of educational achievements and student progress',
        type: 'Community Impact'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188360/images/khushi/cld-1758188322776-24.jpg-2200.webp',
        caption: 'Children receiving nutritious meals as part of our comprehensive development program',
        type: 'Nutrition Support'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183070/images/khushi/20.jpg',
        caption: 'Students showcasing their learning achievements and creative projects',
        type: 'Student Success'
      },
      {
        image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188367/images/khushi/cld-1758188329829-7.jpg-2200.webp',
        caption: 'Teachers and students working together in well-equipped learning environments',
        type: 'Quality Education'
      }
    ],
    
    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '500 children',
        description: 'Enrolled in quality education programs within 8 months',
        timeline: 'Short-term'
      },
      {
        metric: '85% improvement',
        description: 'In literacy and numeracy skills among beneficiaries',
        timeline: 'Medium-term'
      },
      {
        metric: '90% retention',
        description: 'Rate in formal schooling after program completion',
        timeline: 'Long-term'
      },
      {
        metric: '50% increase',
        description: 'In family income through parent skill development',
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
      {/* Professional Header Section */}
      <div className="bg-gray-50 shadow-sm border-b mt-[80px] relative z-10">
        <div className="container mx-auto px-6 py-2 sm:py-3">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 leading-tight py-2">
            Pads For Freedom
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

            {/* Geographic Coverage */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-blue-600 sm:w-5 sm:h-5" size={20} />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Geographic Coverage</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Delhi & NCR, India</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">New Delhi, Delhi</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Gurugram, Haryana</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Noida, Uttar Pradesh</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Faridabad, Haryana</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Ghaziabad, Uttar Pradesh</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Mumbai, Maharashtra</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Pune, Maharashtra</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Bangalore, Karnataka</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Chennai, Tamil Nadu</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Kolkata, West Bengal</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Hyderabad, Telangana</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Ahmedabad, Gujarat</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Jaipur, Rajasthan</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Lucknow, Uttar Pradesh</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Bhopal, Madhya Pradesh</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Bhubaneswar, Odisha</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Kochi, Kerala</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Chandigarh, Punjab</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Indore, Madhya Pradesh</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Active in 20+ cities across 12 states</strong> - Quality education and holistic development for underprivileged children
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
                      Poverty remains the primary barrier to education for millions of children in India. 
                      <strong className="text-gray-900"> Families struggling to meet basic needs are forced to send children to work instead of school</strong>, 
                      perpetuating cycles of illiteracy and economic disadvantage.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Even when schools exist, they often lack proper infrastructure, trained teachers, and learning materials. 
                      <strong className="text-gray-900"> Children from underprivileged backgrounds face discrimination and social barriers</strong> that prevent them from accessing quality education and realizing their potential.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Without intervention, these children grow into adults with limited opportunities, continuing the cycle of poverty and limiting their ability to contribute meaningfully to society.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758188365/images/khushi/cld-1758188327709-4.jpg-2200.webp" 
                      alt="Children in underserved communities seeking educational opportunities"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      Children in underserved communities seeking educational opportunities
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
                      <strong className="text-gray-900">Without quality education, children face a lifetime of limited opportunities.</strong> 
                      The lack of education perpetuates intergenerational poverty, where children grow up to face the same struggles as their parents, 
                      unable to break free from economic disadvantage.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Uneducated children are more vulnerable to exploitation, child labor, and early marriage. 
                      They lack the skills and knowledge needed to participate meaningfully in the modern economy, 
                      limiting their earning potential and quality of life.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Society loses immense human potential when children are denied education. 
                      Every uneducated child represents a missed opportunity for innovation, leadership, and positive community contribution.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183070/images/khushi/20.jpg" 
                      alt="The importance of education in breaking cycles of poverty"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      The importance of education in breaking cycles of poverty
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
                      <strong className="text-gray-900">Our holistic approach addresses every aspect of child development.</strong> 
                      We establish quality learning centers with proper infrastructure, trained teachers, and comprehensive educational resources 
                      that create nurturing environments where children can thrive.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Beyond education, we provide nutritious meals, healthcare support, and engage parents and communities in the learning process. 
                      Our programs focus on both academic excellence and character development, ensuring children grow into confident, capable individuals.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      We create pathways to formal education and career opportunities, breaking the cycle of poverty and empowering children 
                      to become leaders and change-makers in their communities.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dcdhhylin/image/upload/v1758183108/images/khushi/KHu-Web.jpg" 
                    alt="Students actively engaged in learning activities"
                    className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                    Students actively engaged in learning activities
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
                  Every donation creates visible, measurable change in children's lives. Our impact gallery showcases 
                  real moments of transformation, from the joy of a child receiving their first school uniform to 
                  the pride of parents attending their first literacy class.
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
                  <span className="text-lg sm:text-2xl">❤</span>
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
                  src="https://khushii.org/wp-content/uploads/2021/01/khushii-black-logo.png" 
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
                    <a href="https://facebook.com/khushii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <Facebook className="sm:w-5 sm:h-5" size={16} />
                    </a>
                    <a href="https://twitter.com/khushii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <Twitter className="sm:w-5 sm:h-5" size={16} />
                    </a>
                    <a href="https://instagram.com/khushii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors">
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

export default KhushiCauseDetailPage;
