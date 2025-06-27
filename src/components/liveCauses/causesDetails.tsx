import React from 'react';
import { ArrowLeft, Heart, Share2, Bookmark, Shield, Award, CheckCircle, AlertCircle, Phone, Mail, Globe, Facebook, Twitter, Instagram, MapPin, Clock, Target, Building2, User, Users, Calendar, TrendingUp, Briefcase, BookOpen, HeartHandshake, Star, Quote, Trophy, Camera, Image, Eye, AlertTriangle, HelpCircle } from 'lucide-react';

const CauseDetailPage = () => {
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
    image: 'https://khushi.org.in/images/sliders/48218_home1.jpg',
    urgency: 'High',
    
    // Problem Statement
    problemStatement: 'In Mumbai\'s slum communities, over 15,000 children aged 6-14 lack access to basic education due to poverty, inadequate infrastructure, and social barriers. Without immediate intervention, these children face a lifetime of limited opportunities.',
    
    // Root Causes
    rootCauses: [
      'Families prioritize immediate income over education',
      'Lack of nearby schools and educational infrastructure',
      'Inability to afford books, uniforms, and supplies',
      'Child labor to support family income',
      'Social stigma and discrimination'
    ],
    
    // Consequences if not addressed
    consequences: [
      'Perpetuation of intergenerational poverty',
      'Increased child labor and exploitation',
      'Higher crime rates in communities',
      'Loss of human potential and talent',
      'Widening social inequality gap'
    ],
    
    // Our Solution
    solution: {
      approach: 'Comprehensive educational intervention through community-based learning centers, direct support, and family engagement programs.',
      components: [
        'Establish mobile learning centers in slum areas',
        'Provide complete educational kits and meals',
        'Offer skill development for parents',
        'Create safe learning environments',
        'Bridge formal education pathways'
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
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop',
        caption: 'Children attending classes at our learning center in Dharavi',
        type: 'Before/After'
      },
      {
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop',
        caption: 'Distribution of educational materials and uniforms',
        type: 'Implementation'
      },
      {
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop',
        caption: 'Nutritious meal program ensuring regular attendance',
        type: 'Support Program'
      },
      {
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
        caption: 'Parent engagement and community awareness sessions',
        type: 'Community Impact'
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
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=150&h=100&fit=crop'
      },
      {
        date: '20 March 2024',
        title: 'Educational Kits Distribution Complete',
        description: '150 complete educational kits distributed including books, uniforms, and learning materials to enrolled children.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=150&h=100&fit=crop'
      },
      {
        date: '25 March 2024',
        title: 'Community Engagement Program Launched',
        description: 'Parent awareness sessions conducted reaching 200+ families about importance of education.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=150&h=100&fit=crop'
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

  const getUrgencyStyle = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'text-black bg-gray-100 border-gray-300';
      case 'High': return 'text-black bg-gray-100 border-gray-300';
      case 'Medium': return 'text-black bg-gray-100 border-gray-300';
      default: return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getMilestoneStatus = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-gray-100 text-black border-gray-300';
      case 'in-progress': return 'bg-gray-100 text-black border-gray-300';
      case 'pending': return 'bg-gray-100 text-gray-600 border-gray-300';
      default: return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header Section */}
      <div className="bg-white shadow-sm border-b mt-[100px]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/causes" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Causes</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="relative h-80 md:h-96">
                <img 
                  src={cause.image} 
                  alt={cause.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold border bg-white text-black border-gray-300`}>
                    {cause.urgency} Priority
                  </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {cause.category}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {cause.title}
                  </h1>
                  <p className="text-lg text-gray-200">
                    {cause.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators Bar */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-black-600" size={20} />
                  <span className="text-black font-medium">Verified Campaign</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-black-600" size={20} />
                  <span className="text-black font-medium">Tax Deductible</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-gradient-to-r from-blue-500 to-pink-500" size={20} />
                  <span className="text-black font-medium">Impact Tracked</span>
                </div>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="text-black" size={24} />
                The Problem We're Solving
              </h2>
              
              <div className="prose prose-lg text-gray-700 mb-8">
                <p className="leading-relaxed text-lg">
                  {cause.problemStatement}
                </p>
              </div>

              {/* Root Causes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Understanding the Root Causes</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The educational crisis in Mumbai's slum communities stems from a complex web of socio-economic challenges. 
                      <strong> Families living in extreme poverty are forced to prioritize immediate survival over long-term education</strong>, 
                      often sending children to work instead of school to supplement household income.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The lack of accessible educational infrastructure compounds this problem. Many slum areas have no nearby schools, 
                      forcing children to travel long distances through unsafe areas. Even when schools exist, 
                      <strong> the inability to afford basic educational materials like books, uniforms, and supplies</strong> creates 
                      insurmountable barriers for these families.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Social stigma and discrimination further marginalize these children, creating a cycle where education seems 
                      unattainable and irrelevant to their daily struggle for survival.
                    </p>
                  </div>
                  <div className="order-first lg:order-last">
                    <img 
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=400&fit=crop" 
                      alt="Children in slum area lacking educational access"
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                      Children in Mumbai slums face daily barriers to education
                    </p>
                  </div>
                </div>
              </div>

              {/* Consequences */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">The Cost of Inaction</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="https://images.yourstory.com/cs/5/98c65090592f11ea9f62339ce853ca75/file75ptcerlpvkjxg7p5sf-1487576594-1560334864-1591891563291.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75" 
                      alt="Child labor in urban areas"
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                      Without intervention, children face a lifetime of limited opportunities
                    </p>
                  </div>
                  <div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong className="text-red-700">Without immediate intervention, we face devastating long-term consequences.</strong> 
                        The perpetuation of intergenerational poverty becomes inevitable as uneducated children grow into adults 
                        with limited earning potential, passing the same struggles to their children.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Increased child labor and exploitation become normalized as families see no alternative path. 
                        Communities experience higher crime rates as youth with no educational prospects turn to 
                        destructive activities for survival and identity.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Most tragically, we lose immense human potential and talent. Behind every child denied education 
                        could be a future doctor, teacher, engineer, or leader who could transform not just their own life, 
                        but their entire community. The widening social inequality gap threatens the fabric of our society.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="text-black" size={24} />
                Our Comprehensive Solution
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <div className="prose prose-lg text-gray-700 mb-6">
                    <p className="leading-relaxed text-lg">
                      {cause.solution.approach}
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong className="text-green-700">Our innovative approach addresses every barrier to education.</strong> 
                      We establish mobile learning centers directly in slum areas, eliminating travel barriers and creating 
                      safe, accessible learning environments where children can thrive.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Beyond basic education, we provide complete support systems including nutritious meals that ensure 
                      regular attendance, comprehensive educational kits, and skill development programs for parents. 
                      This holistic approach addresses both immediate needs and long-term sustainability.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our program creates pathways to formal education, ensuring children can transition seamlessly 
                      into mainstream schooling with the foundation and confidence they need to succeed.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=400&fit=crop" 
                    alt="Children learning in community center"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center italic">
                    Community-based learning centers bring education directly to children
                  </p>
                </div>
              </div>
            </div>

            {/* Beneficiaries */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="text-black" size={24} />
                Transforming Lives at Every Level
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=400&fit=crop" 
                    alt="Children and families benefiting from education program"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center italic">
                    Our impact extends far beyond individual children to entire communities
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong className="text-black">Our impact creates ripple effects that transform entire communities.</strong> 
                    While we directly serve 250 children aged 6-14 with comprehensive educational support, the benefits 
                    extend far beyond these primary beneficiaries.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Over 1,000 family members experience improved quality of life as children gain education and parents 
                    access skill development programs. When children attend school regularly and parents learn new skills, 
                    household incomes increase by an average of 40%, breaking the cycle of poverty.
                  </p>
                <p className="text-gray-700 leading-relaxed">
                    Our work across 5 slum communities creates a demonstration effect, inspiring other areas to prioritize 
                    education and showing that change is possible. The long-term impact transforms the entire neighborhood 
                    ecosystem, creating communities where education is valued and accessible to all.
                </p>
                </div>
              </div>
            </div>

            {/* Impact Gallery */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Camera className="text-black" size={24} />
                See the Change in Action
              </h2>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Every donation creates visible, measurable change in children's lives. Our impact gallery showcases 
                  real moments of transformation, from the joy of a child receiving their first school uniform to 
                  the pride of parents attending their first literacy class.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cause.impactGallery.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="relative h-64">
                      <img 
                        src={item.image} 
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                        {item.type}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>



            {/* Testimonials Section */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Quote className="text-black" size={24} />
                Community Voices
              </h2>
              
              <div className="space-y-6">
                {cause.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 relative">
                    <Quote className="absolute top-4 right-4 text-gray-300" size={32} />
                    <div className="flex items-start gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-gray-700 italic mb-3 relative z-10">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-black">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Progress & Updates */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="text-gray-900" size={24} />
                Campaign Progress
              </h2>
              
              <div className="relative pl-10 mb-8">
                {/* Vertical connecting line */}
                <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-gray-200"></div>
                
                {cause.milestones.map((milestone, index) => (
                  <div key={index} className="relative mb-8 last:mb-0">
                    {/* Node circle with appropriate color */}
                    <div 
                      className={`absolute left-0 -translate-x-[11px] top-4 w-6 h-6 rounded-full border-2 flex items-center justify-center shadow ${
                        milestone.status === 'completed' ? 'bg-green-500 border-green-600' : 
                        milestone.status === 'in-progress' ? 'bg-blue-500 border-blue-600' : 
                        'bg-gray-300 border-gray-400'
                      }`}
                    >
                      {milestone.status === 'completed' && (
                        <CheckCircle className="text-white" size={14} />
                      )}
                      {milestone.status === 'in-progress' && (
                        <Clock className="text-white" size={14} />
                      )}
                      {milestone.status === 'pending' && (
                        <AlertCircle className="text-white" size={14} />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">{milestone.achievement}</h4>
                          <p className="text-sm flex items-center gap-1 text-gray-600">
                            <Target size={14} />
                            Target: <span className="font-medium">{milestone.target}</span>
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                          milestone.status === 'completed' ? 'bg-green-500' : 
                          milestone.status === 'in-progress' ? 'bg-blue-500' : 
                          'bg-gray-300'
                        }`}>
                          {milestone.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Updates</h3>
              <div className="space-y-4">
                {cause.updates.map((update, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={update.image} 
                      alt={update.title}
                      className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="text-gray-500" size={14} />
                        <span className="text-sm text-gray-500">{update.date}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{update.title}</h4>
                      <p className="text-gray-700 text-sm">{update.description}</p>
                </div>
                </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            {/* Donation Card with Professional Design */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mb-4 text-white">
                  <span className="text-2xl">❤</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{cause.raisedAmount}</div>
                <div className="text-gray-600">raised of <span className="font-semibold">{cause.goalAmount}</span> goal</div>
              </div>
              
              <div className="relative mb-6">
                <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                    className="bg-gradient-to-r from-blue-500 to-pink-500 h-3 rounded-full transition-all duration-500 relative"
                  style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>0%</span>
                  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">{cause.progressPercentage}%</span>
                  <span>100%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-gray-900">{cause.supporters}</div>
                  <div className="text-xs text-gray-600">Supporters</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-black">{cause.daysLeft}</div>
                  <div className="text-xs text-gray-600">Days Left</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-black">{cause.progressPercentage}%</div>
                  <div className="text-xs text-gray-600">Funded</div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl mb-3">
                Support This Cause
              </button>
              
              <button className="w-full bg-white text-gray-700 py-3 px-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Share2 size={18} />
                Share This Cause
              </button>

              <div className="mt-4 pt-4 border-t text-center">
                <p className="text-xs text-gray-500">
                  All donations are tax-deductible under Section 80G
                </p>
              </div>
            </div>

            {/* NGO Information Card with Professional Design */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-black p-6 text-white">
                <div className="flex items-center gap-4 mb-3">
                <img 
                  src="https://khushii.org/wp-content/uploads/2021/01/khushii-black-logo.png" 
                  alt={ngoDetails.name}
                    className="w-16 h-16 rounded-lg bg-white p-1 object-contain"
                />
                <div>
                    <h3 className="text-xl font-bold">{ngoDetails.name}</h3>
                    <p className="text-gray-300 text-sm">{ngoDetails.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={16} />
                  <span className="text-sm font-medium">Verified NGO Partner</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                {ngoDetails.description}
              </p>
              
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-black">{ngoDetails.stats.transparency}%</div>
                    <div className="text-xs text-gray-600">Transparency</div>
                </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg border-2 border-blue-100">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-black">{ngoDetails.stats.programSpend}</div>
                    <div className="text-xs text-gray-600">Program Spend</div>
                </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {ngoDetails.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <achievement.icon className="text-black mt-0.5" size={16} />
                      <span className="text-sm text-gray-700">{achievement.text}</span>
                </div>
                  ))}
              </div>
              
              <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Get in Touch</h4>
                <div className="space-y-2 text-sm">
                    <a href={`tel:${ngoDetails.contact.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <Phone size={14} />
                    <span>{ngoDetails.contact.phone}</span>
                    </a>
                    <a href={`mailto:${ngoDetails.contact.email}`} className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <Mail size={14} />
                    <span>{ngoDetails.contact.email}</span>
                    </a>
                    <a href={`https://${ngoDetails.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                      <Globe size={14} />
                      <span>{ngoDetails.contact.website}</span>
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-4">
                    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Instagram size={20} />
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