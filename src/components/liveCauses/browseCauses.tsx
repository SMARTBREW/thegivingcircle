import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, User, MapPin, Heart, Clock, Target, Building2, Calendar, Users, Shield, CheckCircle, Award, Star } from 'lucide-react';

type Cause = {
  id: number;
  title: string;
  organizer: string;
  ngo: string;
  location: string;
  category: string;
  goalAmount: string;
  raisedAmount: string;
  progressPercentage: number;
  supporters: number;
  daysLeft: number;
  image: string;
  urgency: string;
  description: string;
  beneficiaries: string;
  timeline: string;
  updates: string[];
};

const LiveCausesPage = () => {
  const [selectedNGO, setSelectedNGO] = useState('All NGOs');
  const [selectedFilter, setSelectedFilter] = useState('Most Urgent');
  const [visibleCauses, setVisibleCauses] = useState(9);
  const [currentSlide, setCurrentSlide] = useState(0);

  const ngos = [
    'All NGOs',
    'KHUSHII',
    'JWP',
    'Animal Care',
    'KOKAN',
    'Mamta HIMC'
  ];

  const ngoShowcase = [
    {
      name: 'KHUSHII',
      image: 'https://analyticsindiamag.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg',
      description: 'Empowering underprivileged children through education and healthcare initiatives',
      focus: 'Child Development & Education'
    },
    {
      name: 'JWP',
      image: 'https://theunitedindian.com/images/NGO-25-04-24-E-blog3.webp',
      description: 'Supporting women empowerment through skill development and entrepreneurship programs',
      focus: 'Women Empowerment & Skills'
    },
    {
      name: 'Animal Care',
      image: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-4u70uaphr0u0pts0lbk5t9j3n6-20170728010817.Medi.jpeg',
      description: 'Rescuing, treating and rehabilitating street animals across India',
      focus: 'Animal Welfare & Rescue'
    },
    {
      name: 'KOKAN',
      image: 'https://serudsindia.org/wp-content/uploads/2020/10/Donate-to-SERUDS-Joy-Home-Orphanage-in-Kurnool-AP.jpg',
      description: 'Supporting orphanages and child welfare through meal programs and care',
      focus: 'Child Welfare & Nutrition'
    },
    {
      name: 'Mamta HIMC',
      image: 'https://un-ngo.org/wp-content/uploads/2024/01/6.jpg',
      description: 'Providing quality healthcare services to rural and urban communities',
      focus: 'Healthcare & Medical Aid'
    }
  ];

  const causes = [
    // KHUSHII causes (Priority 1)
    {
      id: 1,
      title: 'Sikhshantra Plus - Advanced Education Program',
      organizer: 'Priya Sharma',
      ngo: 'KHUSHII',
      location: 'Mumbai, Maharashtra',
      category: 'Education',
      goalAmount: '₹8,50,000',
      raisedAmount: '₹5,20,000',
      progressPercentage: 61,
      supporters: 245,
      daysLeft: 22,
      image: 'https://analyticsindiamag.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg',
      urgency: 'High',
      description: 'Advanced education program providing comprehensive learning resources and skill development for underprivileged children. Focuses on digital literacy, life skills, and academic excellence.',
      beneficiaries: '500 students',
      timeline: '12 months',
      updates: [
        'Digital learning centers established',
        '300 students enrolled',
        'Teacher training programs ongoing'
      ]
    },
    {
      id: 2,
      title: 'Pads for Freedom - Menstrual Hygiene Initiative',
      organizer: 'Dr. Meera Singh',
      ngo: 'KHUSHII',
      location: 'Delhi, India',
      category: 'Women Health',
      goalAmount: '₹3,50,000',
      raisedAmount: '₹2,80,000',
      progressPercentage: 80,
      supporters: 189,
      daysLeft: 15,
      image: 'https://theunitedindian.com/images/NGO-25-04-24-E-blog3.webp',
      urgency: 'High',
      description: 'Providing free sanitary pads and menstrual hygiene education to girls and women in rural and urban slum areas to ensure dignity and continued education.',
      beneficiaries: '2000 girls and women',
      timeline: '6 months',
      updates: [
        '1500 pad kits distributed',
        '50 awareness sessions conducted',
        'School dropout prevention program active'
      ]
    },
    {
      id: 3,
      title: 'Student Support - Poonam\'s Education Journey',
      organizer: 'Rajesh Kumar',
      ngo: 'KHUSHII',
      location: 'Bangalore, Karnataka',
      category: 'Individual Support',
      goalAmount: '₹1,20,000',
      raisedAmount: '₹95,000',
      progressPercentage: 79,
      supporters: 67,
      daysLeft: 18,
      image: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-4u70uaphr0u0pts0lbk5t9j3n6-20170728010817.Medi.jpeg',
      urgency: 'Medium',
      description: 'Supporting Poonam\'s higher education dreams by covering tuition fees, books, and living expenses for her engineering studies.',
      beneficiaries: '1 student - Poonam',
      timeline: '4 years',
      updates: [
        'First semester fees paid',
        'Books and supplies provided',
        'Mentorship program started'
      ]
    },
    {
      id: 4,
      title: 'Student Support - Nikita\'s Medical Studies',
      organizer: 'Dr. Sunita Reddy',
      ngo: 'KHUSHII',
      location: 'Chennai, Tamil Nadu',
      category: 'Individual Support',
      goalAmount: '₹2,50,000',
      raisedAmount: '₹1,80,000',
      progressPercentage: 72,
      supporters: 98,
      daysLeft: 25,
      image: 'https://serudsindia.org/wp-content/uploads/2020/10/Donate-to-SERUDS-Joy-Home-Orphanage-in-Kurnool-AP.jpg',
      urgency: 'High',
      description: 'Supporting Nikita\'s medical education to help her become a doctor and serve underprivileged communities.',
      beneficiaries: '1 student - Nikita',
      timeline: '5 years',
      updates: [
        'Medical college admission secured',
        'First year fees partially paid',
        'Study materials provided'
      ]
    },
    {
      id: 5,
      title: 'Student Support - Aarti\'s Academic Journey',
      organizer: 'Rajesh Kumar',
      ngo: 'KHUSHII',
      location: 'Pune, Maharashtra',
      category: 'Individual Support',
      goalAmount: '₹1,50,000',
      raisedAmount: '₹1,10,000',
      progressPercentage: 73,
      supporters: 78,
      daysLeft: 20,
      image: 'https://un-ngo.org/wp-content/uploads/2024/01/6.jpg',
      urgency: 'Medium',
      description: 'Supporting Aarti\'s higher education by covering tuition fees, books, and living expenses for her commerce studies.',
      beneficiaries: '1 student - Aarti',
      timeline: '3 years',
      updates: [
        'College admission secured',
        'First year fees paid',
        'Study materials provided'
      ]
    },
    {
      id: 6,
      title: 'Student Support - Shivangi\'s Future Dreams',
      organizer: 'Dr. Meera Singh',
      ngo: 'KHUSHII',
      location: 'Jaipur, Rajasthan',
      category: 'Individual Support',
      goalAmount: '₹1,80,000',
      raisedAmount: '₹1,25,000',
      progressPercentage: 69,
      supporters: 92,
      daysLeft: 25,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop',
      urgency: 'High',
      description: 'Supporting Shivangi\'s education in computer science to help her build a career in technology.',
      beneficiaries: '1 student - Shivangi',
      timeline: '4 years',
      updates: [
        'Computer science program enrollment',
        'Laptop provided for studies',
        'Coding bootcamp participation'
      ]
    },
    {
      id: 7,
      title: 'Swatantra Shikshaantra - Independent Learning Initiative',
      organizer: 'Priya Sharma',
      ngo: 'KHUSHII',
      location: 'Kolkata, West Bengal',
      category: 'Education',
      goalAmount: '₹6,80,000',
      raisedAmount: '₹4,50,000',
      progressPercentage: 66,
      supporters: 234,
      daysLeft: 35,
      image: 'https://analyticsindiamag.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg',
      urgency: 'High',
      description: 'Independent learning program focusing on self-reliant education methods and skill development for underprivileged children.',
      beneficiaries: '400 students',
      timeline: '15 months',
      updates: [
        'Self-learning modules developed',
        '250 students enrolled',
        'Community learning centers established'
      ]
    },
    {
      id: 8,
      title: 'Student Support - Jyoti\'s Engineering Aspirations',
      organizer: 'Dr. Vikram Nair',
      ngo: 'KHUSHII',
      location: 'Lucknow, Uttar Pradesh',
      category: 'Individual Support',
      goalAmount: '₹2,20,000',
      raisedAmount: '₹1,65,000',
      progressPercentage: 75,
      supporters: 105,
      daysLeft: 18,
      image: 'https://theunitedindian.com/images/NGO-25-04-24-E-blog3.webp',
      urgency: 'High',
      description: 'Supporting Jyoti\'s mechanical engineering education and helping her achieve her dreams in the technical field.',
      beneficiaries: '1 student - Jyoti',
      timeline: '4 years',
      updates: [
        'Engineering entrance exam cleared',
        'College fees for first semester paid',
        'Technical workshop participation'
      ]
    },
    {
      id: 9,
      title: 'Student Support - Iram\'s Medical Dreams',
      organizer: 'Dr. Sunita Reddy',
      ngo: 'KHUSHII',
      location: 'Bhopal, Madhya Pradesh',
      category: 'Individual Support',
      goalAmount: '₹2,80,000',
      raisedAmount: '₹1,95,000',
      progressPercentage: 70,
      supporters: 128,
      daysLeft: 22,
      image: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-4u70uaphr0u0pts0lbk5t9j3n6-20170728010817.Medi.jpeg',
      urgency: 'Critical',
      description: 'Supporting Iram\'s medical education to help her become a doctor and serve in rural healthcare.',
      beneficiaries: '1 student - Iram',
      timeline: '5 years',
      updates: [
        'Medical college admission confirmed',
        'First year textbooks provided',
        'Mentorship program enrollment'
      ]
    },
    {
      id: 10,
      title: 'Helpindiaheal - Community Health Initiative',
      organizer: 'Dr. Pooja Reddy',
      ngo: 'KHUSHII',
      location: 'Hyderabad, Telangana',
      category: 'Healthcare',
      goalAmount: '₹12,00,000',
      raisedAmount: '₹8,40,000',
      progressPercentage: 70,
      supporters: 456,
      daysLeft: 30,
      image: 'https://serudsindia.org/wp-content/uploads/2020/10/Donate-to-SERUDS-Joy-Home-Orphanage-in-Kurnool-AP.jpg',
      urgency: 'Critical',
      description: 'Comprehensive healthcare program providing medical checkups, treatments, and health education to underserved communities across India.',
      beneficiaries: '5000+ community members',
      timeline: '18 months',
      updates: [
        '2000 health checkups completed',
        '15 health camps organized',
        'Community health workers trained'
      ]
    },

    // JWP causes (Priority 2)
    {
      id: 11,
      title: 'Mission-392 - Rural Development Project',
      organizer: 'Kavya Joshi',
      ngo: 'JWP',
      location: 'Uttar Pradesh, India',
      category: 'Rural Development',
      goalAmount: '₹15,00,000',
      raisedAmount: '₹11,20,000',
      progressPercentage: 75,
      supporters: 567,
      daysLeft: 35,
      image: 'https://un-ngo.org/wp-content/uploads/2024/01/6.jpg',
      urgency: 'High',
      description: 'Comprehensive rural development initiative focusing on infrastructure, education, and livelihood opportunities in 392 villages.',
      beneficiaries: '50,000 rural families',
      timeline: '24 months',
      updates: [
        '150 villages covered',
        'Water supply projects initiated',
        'Skill training centers established'
      ]
    },
    {
      id: 12,
      title: 'Student Support - Nazia\'s Engineering Dreams',
      organizer: 'Meera Singh',
      ngo: 'JWP',
      location: 'Bangalore, Karnataka',
      category: 'Individual Support',
      goalAmount: '₹1,80,000',
      raisedAmount: '₹1,35,000',
      progressPercentage: 75,
      supporters: 89,
      daysLeft: 20,
      image: 'https://analyticsindiamag.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg',
      urgency: 'Medium',
      description: 'Supporting Nazia\'s engineering education and helping her achieve her dreams of becoming a software engineer.',
      beneficiaries: '1 student - Nazia',
      timeline: '4 years',
      updates: [
        'Engineering college admission confirmed',
        'First semester fees paid',
        'Laptop and study materials provided'
      ]
    },
    {
      id: 13,
      title: 'Student Support - Khushboo\'s Medical Journey',
      organizer: 'Dr. Rajesh Kumar',
      ngo: 'JWP',
      location: 'Delhi, India',
      category: 'Individual Support',
      goalAmount: '₹2,40,000',
      raisedAmount: '₹1,75,000',
      progressPercentage: 73,
      supporters: 112,
      daysLeft: 24,
      image: 'https://theunitedindian.com/images/NGO-25-04-24-E-blog3.webp',
      urgency: 'High',
      description: 'Supporting Khushboo\'s medical education to help her become a healthcare professional and serve underprivileged communities.',
      beneficiaries: '1 student - Khushboo',
      timeline: '5 years',
      updates: [
        'Medical entrance exam cleared',
        'First semester fees covered',
        'Medical textbooks provided'
      ]
    },
    {
      id: 14,
      title: 'Single Mom Support - Uttarakhand Initiative',
      organizer: 'Prashant Koli',
      ngo: 'JWP',
      location: 'Uttarakhand, India',
      category: 'Women Support',
      goalAmount: '₹4,20,000',
      raisedAmount: '₹3,15,000',
      progressPercentage: 75,
      supporters: 156,
      daysLeft: 22,
      image: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-4u70uaphr0u0pts0lbk5t9j3n6-20170728010817.Medi.jpeg',
      urgency: 'High',
      description: 'Supporting single mothers in Uttarakhand with livelihood training, childcare assistance, and financial support.',
      beneficiaries: '150 single mothers',
      timeline: '12 months',
      updates: [
        '100 mothers enrolled',
        'Skill training programs started',
        'Childcare centers established'
      ]
    },
    {
      id: 15,
      title: 'Uttarakhand Support - Sagar\'s Education',
      organizer: 'Sagar Patil',
      ngo: 'JWP',
      location: 'Uttarakhand, India',
      category: 'Individual Support',
      goalAmount: '₹1,60,000',
      raisedAmount: '₹1,20,000',
      progressPercentage: 75,
      supporters: 85,
      daysLeft: 28,
      image: 'https://serudsindia.org/wp-content/uploads/2020/10/Donate-to-SERUDS-Joy-Home-Orphanage-in-Kurnool-AP.jpg',
      urgency: 'Medium',
      description: 'Supporting Sagar\'s higher education and skill development in Uttarakhand region.',
      beneficiaries: '1 student - Sagar',
      timeline: '3 years',
      updates: [
        'College enrollment completed',
        'Study materials provided',
        'Mentorship program active'
      ]
    },
    {
      id: 16,
      title: 'Uttarakhand Support - Vandana\'s Future',
      organizer: 'Kavya Joshi',
      ngo: 'JWP',
      location: 'Uttarakhand, India',
      category: 'Individual Support',
      goalAmount: '₹1,40,000',
      raisedAmount: '₹1,05,000',
      progressPercentage: 75,
      supporters: 76,
      daysLeft: 32,
      image: 'https://un-ngo.org/wp-content/uploads/2024/01/6.jpg',
      urgency: 'Medium',
      description: 'Supporting Vandana\'s educational journey and skill development in Uttarakhand.',
      beneficiaries: '1 student - Vandana',
      timeline: '3 years',
      updates: [
        'Vocational training started',
        'Learning materials provided',
        'Career counseling sessions ongoing'
      ]
    },
    {
      id: 17,
      title: 'Wings of Hope - Women Empowerment Program',
      organizer: 'Meera Singh',
      ngo: 'JWP',
      location: 'Uttarakhand, India',
      category: 'Women Empowerment',
      goalAmount: '₹6,50,000',
      raisedAmount: '₹4,80,000',
      progressPercentage: 74,
      supporters: 234,
      daysLeft: 28,
      image: 'https://analyticsindiamag.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg',
      urgency: 'High',
      description: 'Empowering women through skill development, entrepreneurship training, and financial literacy programs across Uttarakhand.',
      beneficiaries: '1000 women',
      timeline: '15 months',
      updates: [
        '500 women enrolled',
        '50 self-help groups formed',
        '200 micro-enterprises started'
      ]
    },

    // Animal Care causes (Priority 3)
    {
      id: 18,
      title: 'Bowls of Hope - Street Animal Feeding Program',
      organizer: 'Dr. Sunita Reddy',
      ngo: 'Animal Care',
      location: 'Chennai, Tamil Nadu',
      category: 'Animal Welfare',
      goalAmount: '₹7,80,000',
      raisedAmount: '₹6,20,000',
      progressPercentage: 79,
      supporters: 445,
      daysLeft: 18,
      image: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-4u70uaphr0u0pts0lbk5t9j3n6-20170728010817.Medi.jpeg',
      urgency: 'Critical',
      description: 'Daily feeding program for street dogs and cats across Chennai, providing nutritious meals and basic veterinary care.',
      beneficiaries: '2000+ street animals',
      timeline: '12 months',
      updates: [
        '1500 animals fed daily',
        '25 feeding stations established',
        '100 animals vaccinated'
      ]
    },

    // KOKAN causes (Priority 4)
    {
      id: 19,
      title: 'Orphanage Meal Program - Nutritious Future',
      organizer: 'Ravi Gupta',
      ngo: 'KOKAN',
      location: 'Ratnagiri, Maharashtra',
      category: 'Child Welfare',
      goalAmount: '₹5,60,000',
      raisedAmount: '₹3,90,000',
      progressPercentage: 70,
      supporters: 267,
      daysLeft: 25,
      image: 'https://serudsindia.org/wp-content/uploads/2020/10/Donate-to-SERUDS-Joy-Home-Orphanage-in-Kurnool-AP.jpg',
      urgency: 'High',
      description: 'Providing nutritious daily meals to orphaned children, ensuring their healthy growth and development.',
      beneficiaries: '200 orphaned children',
      timeline: '12 months',
      updates: [
        '3 orphanages covered',
        '150 children receiving daily meals',
        'Nutrition monitoring program active'
      ]
    },

    // Mamta HIMC causes (Priority 5)
    {
      id: 20,
      title: 'Generic Healthcare Support Program',
      organizer: 'Dr. Pooja Reddy',
      ngo: 'Mamta HIMC',
      location: 'Hyderabad, Telangana',
      category: 'Healthcare',
      goalAmount: '₹9,50,000',
      raisedAmount: '₹6,80,000',
      progressPercentage: 72,
      supporters: 389,
      daysLeft: 30,
      image: 'https://un-ngo.org/wp-content/uploads/2024/01/6.jpg',
      urgency: 'Medium',
      description: 'General healthcare support program providing medical assistance, medicines, and health checkups to underprivileged communities.',
      beneficiaries: '3000+ patients',
      timeline: '18 months',
      updates: [
        '1500 patients treated',
        '20 health camps organized',
        'Medicine distribution ongoing'
      ]
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ngoShowcase.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'text-red-700 bg-red-100 border border-red-200';
      case 'High': return 'text-orange-700 bg-orange-100 border border-orange-200';
      case 'Medium': return 'text-yellow-700 bg-yellow-100 border border-yellow-200';
      default: return 'text-gray-700 bg-gray-100 border border-gray-200';
    }
  };

  const filteredCauses = selectedNGO === 'All NGOs' 
    ? causes 
    : causes.filter(cause => cause.ngo === selectedNGO);

  const visibleCausesList = filteredCauses.slice(0, visibleCauses);

  const loadMore = () => {
    setVisibleCauses(prev => Math.min(prev + 6, filteredCauses.length));
  };

  // Function to handle navigation to cause details page
  const handleViewDetails = () => {
    // Simulate navigation - in a real app, you would use React Router
    window.location.href = `/causes-details`;
  };

  // Handle card click (entire card becomes clickable)
  const handleCardClick = () => {
    handleViewDetails();
  };

  // Handle donate button click (prevent card click when clicking donate)
  const handleDonateClick = (e: React.MouseEvent, causeId: number) => {
    e.stopPropagation();
    // Handle donation logic here
    console.log('Donate clicked for cause:', causeId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Hero Section with NGO Showcase */}
      <div className="relative text-white overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        
        {/* Sliding NGO Background Images */}
        <div className="absolute inset-0">
          {ngoShowcase.map((ngo, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                backgroundImage: `url(${ngo.image})`,
              }}
            />
          ))}
          {/* Professional overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-4xl">

            
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight animate-fade-in text-white drop-shadow-lg">
              Transforming Lives Through Verified Causes
            </h1>
            
            <p className="text-lg lg:text-xl mb-10 leading-relaxed animate-fade-in-delay text-gray-100 drop-shadow-md max-w-2xl">
              Join <span className="font-semibold text-white">1,23,456+ verified donors</span> creating measurable social impact through rigorously monitored initiatives across India.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mb-8 animate-fade-in-delay">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="text-green-400" size={18} />
                  <span className="font-semibold text-sm">100% Verified</span>
                </div>
                <p className="text-xs text-gray-300">Rigorous NGO verification</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="text-blue-400" size={18} />
                  <span className="font-semibold text-sm">₹89+ Crores</span>
                </div>
                <p className="text-xs text-gray-300">Successfully allocated</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="text-purple-400" size={18} />
                  <span className="font-semibold text-sm">5M+ Lives</span>
                </div>
                <p className="text-xs text-gray-300">Positively impacted</p>
              </div>
            </div>
            

          </div>

          {/* Enhanced NGO Info Card */}
          <div className="absolute bottom-12 right-8 bg-white bg-opacity-98 rounded-xl p-6 max-w-md animate-fade-in-delay border-l-4 border-blue-600 shadow-xl backdrop-blur-md">
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden border-2 border-blue-100 shadow-md">
                <img 
                  src={ngoShowcase[currentSlide].image} 
                  alt={ngoShowcase[currentSlide].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-800 text-lg">{ngoShowcase[currentSlide].name}</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white" title="Verified Partner"></div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle size={12} />
                    Verified
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1">
                    <Building2 size={12} />
                    Registered NGO
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full flex items-center gap-1">
                    <Award size={12} />
                    Certified
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg mb-3 border border-blue-100">
              <p className="text-blue-800 font-semibold text-sm">{ngoShowcase[currentSlide].focus}</p>
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed mb-4">{ngoShowcase[currentSlide].description}</p>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-2 text-center rounded border border-gray-200">
                <div className="text-blue-700 font-bold text-sm">95%</div>
                <div className="text-xs text-gray-600">Fund Usage</div>
              </div>
              <div className="bg-gray-50 p-2 text-center rounded border border-gray-200">
                <div className="text-blue-700 font-bold text-sm">4.9/5</div>
                <div className="text-xs text-gray-600">Trust Score</div>
              </div>
              <div className="bg-gray-50 p-2 text-center rounded border border-gray-200">
                <div className="text-blue-700 font-bold text-sm">5+ Yrs</div>
                <div className="text-xs text-gray-600">Experience</div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {ngoShowcase.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Professional Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-blue-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">Verified NGO Partners</h3>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {ngos.map((ngo) => (
                  <button
                    key={ngo}
                    onClick={() => {
                      setSelectedNGO(ngo);
                      setVisibleCauses(9);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                      selectedNGO === ngo
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {ngo}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-blue-600" size={16} />
                  <span className="font-semibold text-blue-800 text-sm">Impact Guarantee</span>
                </div>
                <p className="text-blue-700 text-xs leading-relaxed">All partner NGOs undergo quarterly audits and maintain transparent fund allocation reporting.</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Professional Search and Filters */}
            <div className="mb-8 bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Verified Causes</h2>
              
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by cause title, NGO partner, or location..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Professional Filters */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="text-gray-700 font-medium">Viewing causes from</span>
                
                <select 
                  value={selectedNGO}
                  onChange={(e) => {
                    setSelectedNGO(e.target.value);
                    setVisibleCauses(9);
                  }}
                  className="border border-gray-300 text-gray-700 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  {ngos.map(ngo => (
                    <option key={ngo} value={ngo}>{ngo}</option>
                  ))}
                </select>
                
                <span className="text-gray-700 font-medium">sorted by</span>
                
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="border border-gray-300 text-gray-700 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  <option>Most Urgent</option>
                  <option>Highest Goal</option>
                  <option>Most Supporters</option>
                  <option>Ending Soon</option>
                  <option>Recently Added</option>
                </select>

                <button className="text-blue-600 ml-auto hover:text-blue-800 transition-colors font-medium">
                  Reset All Filters
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <div className="text-gray-600">
                Displaying <span className="font-semibold">{Math.min(visibleCauses, filteredCauses.length)}</span> of <span className="font-semibold">{filteredCauses.length}</span> verified active causes
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All causes verified & monitored</span>
              </div>
            </div>

            {/* Professional Cause Cards - 3x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {visibleCausesList.map((cause, index) => (
                <div
                  key={cause.id}
                  onClick={handleCardClick}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={cause.image} 
                      alt={cause.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(cause.urgency)}`}>
                          {cause.urgency} Priority
                        </span>
                        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                          <CheckCircle size={14} className="text-green-600" />
                          <span className="text-xs font-medium text-green-700">Verified</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 font-medium">
                        <Clock size={12} />
                        {cause.daysLeft} days left
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {cause.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Building2 size={14} className="text-blue-600" />
                        <span className="font-medium">{cause.ngo}</span>
                        <span className="text-green-600">•</span>
                        <span className="text-green-600 text-xs">Verified</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User size={14} />
                        <span className="font-medium">{cause.organizer}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} />
                        <span>{cause.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Target size={14} />
                        <span>{cause.beneficiaries} • {cause.timeline}</span>
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-2xl font-bold text-gray-800">{cause.raisedAmount}</span>
                          <span className="text-sm text-gray-600 ml-2">raised</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-medium text-gray-600">{cause.progressPercentage}% of {cause.goalAmount}</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-1">
                          <Heart size={14} className="text-red-500" />
                          <span className="font-medium">{cause.supporters} donors</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-500" />
                          <span className="font-medium">Impact Score: {Math.floor(85 + Math.random() * 15)}</span>
                        </div>
                      </div>
                    </div>
                    
                                        <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Status</span>
                        <span className="font-medium text-green-600">Active • Verified</span>
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDonateClick(e, cause.id);
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-sm font-medium transition-all"
                      >
                        Contribute Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCauses < filteredCauses.length && (
              <div className="text-center mb-8">
                <button 
                  onClick={loadMore}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
                >
                  Load More Causes
                </button>
              </div>
            )}



            {/* Trust Footer */}
            <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="text-blue-600" size={24} />
                <h3 className="text-lg font-semibold text-gray-800">Verified Impact Guarantee</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Every cause listed undergoes rigorous verification through our multi-stage screening process.
                All fund allocations are monitored with quarterly impact assessments and third-party audits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium border border-blue-600 hover:border-blue-800 px-6 py-3 rounded-lg transition-colors">
                  Learn about our verification process →
                </button>
                
                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Start a Verified Cause
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>



      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LiveCausesPage;