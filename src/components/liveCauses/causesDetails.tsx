import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Shield, Award, CheckCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Target, Users, TrendingUp, Trophy, Camera, AlertTriangle } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const CauseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // DYNAMIC IMPLEMENTATION ROADMAP:
  // Current: Static cause data for demonstration
  // Future: Fetch cause data based on ID parameter from API
  // Example: const cause = await fetchCauseById(id);
  // This will enable each NGO's program areas to show their specific cause details
  
  // Sample cause data focused on the cause itself
  const cause = {
    id: 1,
    title: 'Emergency Education Support for Slum Children',
    subtitle: 'Breaking the cycle of poverty through quality education',
    organizer: 'KHUSHII',
    ngo: 'KHUSHII',
    location: 'Mumbai, Maharashtra',
    category: 'Education',
    goalAmount: '₹4,50,000',
    raisedAmount: '₹2,80,000',
    progressPercentage: 62,
    supporters: 143,

    daysLeft: 18,
    image: '/images/jwp/_DSC8339.jpg',
    urgency: 'High',
    
    // Problem Statement
    problemStatement: 'In underserved communities across India, thousands of children lack access to quality education and proper school infrastructure. Many students attend schools without adequate resources, proper uniforms, or learning materials, creating barriers to their educational success and future opportunities.',
    
    // Root Causes
    rootCauses: [
      'Insufficient school infrastructure and learning resources',
      'Lack of proper uniforms and educational materials',
      'Limited access to quality teaching and learning tools',
      'Inadequate support for students with special needs',
      'Community barriers to educational advancement'
    ],
    
    // Consequences if not addressed
    consequences: [
      'Students continue to struggle with inadequate learning resources',
      'Limited educational opportunities for future generations',
      'Reduced community development and economic growth',
      'Loss of potential leaders and skilled professionals',
      'Persistent educational inequality across communities'
    ],
    
    // Our Solution
    solution: {
      approach: 'Comprehensive educational support through school infrastructure development, resource provision, and community engagement programs.',
      components: [
        'Provide proper school uniforms and educational materials',
        'Establish well-equipped learning centers and classrooms',
        'Train teachers and support staff for better education delivery',
        'Create safe and conducive learning environments',
        'Support students with scholarships and educational resources'
      ]
    },
    
    // Beneficiaries
    beneficiaries: {
      primary: '250 children aged 6-14',
      secondary: '1,000+ family members',
      community: '5 slum communities',
      longTerm: 'Entire neighborhood ecosystem'
    },
    
    // Impact Gallery
    impactGallery: [
      {
        image: '/images/jwp/_DSC9767.JPG',
        caption: 'A young student proudly displays her educational materials and achievements in the classroom',
        type: 'Student Success'
      },
      {
        image: '/images/jwp/_MG_6955.JPG',
        caption: 'Students actively participating in learning activities with microphones and presentation equipment',
        type: 'Active Learning'
      },
      {
        image: '/images/jwp/_MG_7015.JPG',
        caption: 'Community members celebrating educational achievements and program milestones together',
        type: 'Community Celebration'
      },
      {
        image: '/images/jwp/_MG_8025.JPG',
        caption: 'Students engaged in collaborative learning and peer interaction activities',
        type: 'Collaborative Learning'
      },
      {
        image: '/images/jwp/20250909_100901.jpg',
        caption: 'Regular classroom activities demonstrating consistent student engagement and learning',
        type: 'Daily Activities'
      },
      {
        image: '/images/jwp/20250910_110430.jpg',
        caption: 'Special educational events and cultural programs promoting holistic student development',
        type: 'Special Events'
      }
    ],
    
    // Expected Outcomes
    expectedOutcomes: [
      {
        metric: '250 children',
        description: 'Enrolled in formal education within 6 months',
        timeline: 'Short-term'
      },
      {
        metric: '80% improvement',
        description: 'In literacy and numeracy skills',
        timeline: 'Medium-term'
      },
      {
        metric: '95% retention',
        description: 'Rate in formal schooling after program completion',
        timeline: 'Long-term'
      },
      {
        metric: '40% increase',
        description: 'In family income through parent skill programs',
        timeline: 'Medium-term'
      }
    ],
    
    timeline: '6 months',
    
    updates: [
      {
        date: '15 March 2024',
        title: 'First Learning Center Operational',
        description: 'Successfully established our first learning center in Dharavi, serving 75 children with basic education and meals.',
        image: '/images/jwp/_MG_6955.JPG'
      },
      {
        date: '20 March 2024',
        title: 'Educational Kits Distribution Complete',
        description: '150 complete educational kits distributed including books, uniforms, and learning materials to enrolled children.',
        image: '/images/jwp/_DSC9767.JPG'
      },
      {
        date: '25 March 2024',
        title: 'Community Engagement Program Launched',
        description: 'Parent awareness sessions conducted reaching 200+ families about importance of education.',
        image: '/images/jwp/_MG_7015.JPG'
      }
    ],
    
    testimonials: [
      {
        name: 'Sunita Devi',
        role: 'Parent, Dharavi Community',
        quote: 'My two children now attend the learning center daily. They have books, uniforms, and most importantly, hope for a better future. This program has changed our entire family.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
      },
      {
        name: 'Ravi Kumar',
        role: 'Community Leader, Kurla',
        quote: 'Before this program, children in our area had no educational opportunities. Now we see them learning, growing, and dreaming of becoming doctors and teachers.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    ],
    
    milestones: [
      { target: '₹1,00,000', achievement: 'First Learning Center Setup', status: 'completed' },
      { target: '₹2,00,000', achievement: 'Educational Materials & Meal Program', status: 'completed' },
      { target: '₹3,00,000', achievement: 'Second Learning Center & Community Programs', status: 'in-progress' },
      { target: '₹4,00,000', achievement: 'Sustainability Fund & Teacher Training', status: 'pending' },
      { target: '₹4,50,000', achievement: 'Third Center & Long-term Impact Tracking', status: 'pending' }
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
    location: 'Mumbai, Maharashtra',
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
                      Many schools in underserved communities face significant challenges in providing quality education. 
                      <strong className="text-gray-900"> Students often lack access to proper learning materials, adequate classroom resources, and consistent educational support</strong>, 
                      which hinders their ability to reach their full academic potential.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      The classroom environment plays a crucial role in student success. When schools lack proper infrastructure, 
                      learning materials, and trained teachers, students struggle to engage effectively with their studies. 
                      <strong className="text-gray-900"> Without adequate resources and support, even motivated students find it difficult to excel academically</strong>.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      These educational gaps create long-term challenges for students, limiting their opportunities for higher education 
                      and future career prospects, ultimately affecting their ability to contribute meaningfully to their communities.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="/images/jwp/WhatsApp Image 2025-06-29 at 22.44.35_68c59220.jpg" 
                      alt="Students engaged in classroom learning activities with proper educational resources"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      Students engaged in classroom learning activities with proper educational resources
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
                      <strong className="text-gray-900">Without comprehensive educational and health support, communities face significant challenges.</strong> 
                      Students continue to struggle with inadequate learning resources, while health education gaps, 
                      particularly around menstrual health, create additional barriers to education and empowerment.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Limited access to proper health education and resources affects students' ability to attend school regularly. 
                      Many girls miss school due to lack of menstrual health support, while boys and girls alike 
                      lack essential health knowledge that impacts their overall development.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      The combination of educational and health challenges creates a cycle where students cannot reach their full potential. 
                      Without proper support, we miss the opportunity to develop future leaders, healthcare workers, 
                      and community advocates who could transform their communities through knowledge and empowerment.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/images/jwp/WhatsApp Image 2025-07-04 at 15.38.58_a93f5478.jpg" 
                      alt="Women learning about menstrual health and hygiene education"
                      className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                      Women learning about menstrual health and hygiene education
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
                      <strong className="text-gray-900">Our comprehensive approach transforms schools into thriving learning environments.</strong> 
                      We provide proper school uniforms, educational materials, and infrastructure improvements that create 
                      professional, welcoming spaces where students feel proud to learn and grow.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Through our JWP (Joint Women Program) initiatives, we ensure students have access to quality education 
                      with proper resources, trained teachers, and supportive learning environments. We focus on both 
                      academic excellence and holistic development, including health education and life skills.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Our programs create a sense of pride and belonging among students, as evidenced by their 
                      enthusiastic participation and the visible improvements in school infrastructure and student engagement.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="/images/jwp/_DSC9857.JPG" 
                    alt="Students actively engaged in learning activities"
                    className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                    Students actively engaged in learning activities
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
                    <strong className="text-gray-900">Our "Wings of Hope" initiative celebrates the achievements of students and families.</strong> 
                    Through our comprehensive educational programs, we directly impact hundreds of students who now have access 
                    to quality education, proper resources, and the support they need to succeed.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    Students proudly display their certificates and achievements, symbolizing their educational progress and 
                    newfound confidence. Families celebrate these milestones together, creating a culture of academic 
                    achievement and community pride that extends far beyond individual students.
                  </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Our programs create lasting change by empowering students to become leaders in their communities. 
                    The visible celebrations and achievements inspire other families to prioritize education, creating 
                    a ripple effect that transforms entire neighborhoods and builds a foundation for future success.
                </p>
                </div>
                <div>
                  <img 
                    src="/images/jwp/_DSC8339.jpg" 
                    alt="Students and families celebrating educational achievements"
                    className="w-full h-48 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                    Students and families celebrating educational achievements
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

export default CauseDetailPage;