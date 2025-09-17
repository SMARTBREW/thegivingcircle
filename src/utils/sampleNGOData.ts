import { NGODetails } from '../types';

export const sampleNGODetails: NGODetails = {
  id: '1',
  name: 'JWP (Janakalyan Welfare Program)',
  shortDescription: 'Empowering tribal communities through education, sustainable development, and cultural preservation across central India since 2008.',
  fullDescription: 'JWP is a dedicated organization working with indigenous communities in remote areas of central India where access to basic services is limited. We focus on tribal welfare, education, and sustainable livelihood development while preserving cultural heritage. Our programs emphasize community participation and traditional knowledge integration with contemporary development approaches, directly benefiting over 5,800 children and 240 tribal communities across Chhattisgarh and surrounding regions.',
  verified: true,
  logo: '/images/jwp/_DSC8339.jpg',
  heroImage: '/images/jwp/_DSC8339.jpg',
  location: 'Chhattisgarh, India',
  yearEstablished: 2008,
  registrationNumber: 'JWP-2008-001',
  
  mission: 'To empower tribal communities through education, sustainable development, and cultural preservation while ensuring access to modern opportunities.',
  
  vision: 'A world where indigenous communities thrive with dignity, preserving their heritage while accessing quality education and sustainable livelihoods.',
  
  values: [
    'Cultural Preservation',
    'Community Empowerment', 
    'Educational Excellence',
    'Sustainable Development',
    'Inclusivity & Respect',
    'Transparency & Accountability'
  ],

  causes: [
    {
      id: 'education',
      name: 'Education for All',
      description: 'We believe education is the most powerful tool to break the cycle of poverty. Our comprehensive education programs ensure quality learning opportunities for underprivileged children through innovative teaching methods, infrastructure development, and community engagement.',
      image: '/images/jwp/_DSC9767.JPG',
      impactMetrics: [
        {
          label: 'Children Educated',
          value: '75,000',
          unit: '+',
          description: 'Students enrolled in our education programs'
        },
        {
          label: 'Schools Supported',
          value: '2,500',
          unit: '+',
          description: 'Educational institutions partnered with us'
        },
        {
          label: 'Teachers Trained',
          value: '15,000',
          unit: '+',
          description: 'Educators equipped with modern teaching methods'
        },
        {
          label: 'Learning Centers',
          value: '450',
          unit: '',
          description: 'Community learning centers established'
        }
      ],
      beneficiaries: ['Children (6-18 years)', 'Rural Communities', 'Urban Slum Children', 'Girl Children', 'Children with Disabilities'],
      approach: 'Our holistic approach includes establishing community learning centers, providing learning materials, training teachers, engaging parents, and creating child-friendly learning environments. We focus on both formal and non-formal education to ensure no child is left behind.',
      outcomes: [
        '95% improvement in learning outcomes',
        '80% increase in school enrollment',
        '70% reduction in dropout rates',
        'Enhanced digital literacy among students'
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Nutrition',
      description: 'Ensuring access to quality healthcare and nutrition for mothers and children through preventive care, treatment, health education, and community health programs that address malnutrition and preventable diseases.',
      image: '/images/jwp/_DSC9767.JPG',
      impactMetrics: [
        {
          label: 'Health Checkups',
          value: '125,000',
          unit: '+',
          description: 'Annual health screenings conducted'
        },
        {
          label: 'Immunizations',
          value: '50,000',
          unit: '+',
          description: 'Children immunized annually'
        },
        {
          label: 'Nutrition Support',
          value: '35,000',
          unit: '+',
          description: 'Children receiving nutrition supplements'
        },
        {
          label: 'Health Centers',
          value: '200',
          unit: '',
          description: 'Mobile and fixed health centers operated'
        }
      ],
      beneficiaries: ['Pregnant Women', 'Lactating Mothers', 'Children (0-5 years)', 'Adolescent Girls', 'Community Members'],
      approach: 'We implement community-based healthcare delivery through mobile health units, health camps, immunization drives, nutrition programs, and health awareness campaigns. Our trained community health workers ensure continuous support and monitoring.',
      outcomes: [
        '60% reduction in child mortality',
        '75% increase in institutional deliveries',
        '80% improvement in vaccination coverage',
        'Significant reduction in malnutrition rates'
      ]
    }
  ],

  leadership: [
    {
      name: 'Santanu Mishra',
      role: 'Executive Trustee & CEO',
      bio: 'A social entrepreneur with over 20 years of experience in development sector, leading Smile Foundation\'s mission to create sustainable social change.',
      image: undefined,
      experience: '20+ years in development sector',
      education: 'MBA from IIM Calcutta, B.Tech from IIT Delhi'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Head of Programs',
      bio: 'Leading program design and implementation with expertise in child development and community health initiatives.',
      image: 'https://directory.uthscsa.edu/sites/directory/files/sharma_priya.jpg',
      experience: '15+ years in program management',
      education: 'PhD in Social Work, Masters in Public Health'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director of Operations',
      bio: 'Overseeing operational excellence and ensuring effective program delivery across all geographic locations.',
      image: undefined,
      experience: '18+ years in non-profit operations',
      education: 'Masters in Development Studies, B.A. in Social Sciences'
    }
  ],

  timeline: [
    {
      year: 2002,
      title: 'Foundation Establishment',
      description: 'Smile Foundation was established with a vision to ensure every child\'s right to education, healthcare, and a life of dignity.',
      milestone: 'Registered as a non-profit organization and launched first education program',
      impact: [
        { label: 'Initial Projects', value: '5' },
        { label: 'Children Reached', value: '500' }
      ]
    },
    {
      year: 2005,
      title: 'Healthcare Initiative Launch',
      description: 'Expanded operations to include comprehensive healthcare services for mothers and children in rural areas.',
      milestone: 'Launched mobile health units and established first permanent health center',
      impact: [
        { label: 'Health Centers', value: '10' },
        { label: 'Health Beneficiaries', value: '5,000' }
      ]
    },
    {
      year: 2010,
      title: 'Technology Integration',
      description: 'Introduced digital learning platforms and technology-enabled education to bridge the digital divide.',
      milestone: 'Launched e-learning centers and digital literacy programs',
      impact: [
        { label: 'Digital Centers', value: '50' },
        { label: 'Students with Digital Access', value: '15,000' }
      ]
    },
    {
      year: 2015,
      title: 'National Expansion',
      description: 'Scaled operations to reach 20 states across India, establishing regional offices and partnerships.',
      milestone: 'Achieved presence in 20 states with 200+ active projects',
      impact: [
        { label: 'States Covered', value: '20' },
        { label: 'Active Projects', value: '200' }
      ]
    },
    {
      year: 2020,
      title: 'COVID-19 Response',
      description: 'Rapidly adapted programs to address pandemic challenges, providing emergency relief and continuing education.',
      milestone: 'Distributed relief materials and launched online education platform',
      impact: [
        { label: 'Families Supported', value: '100,000' },
        { label: 'Online Students', value: '50,000' }
      ]
    },
    {
      year: 2023,
      title: 'Sustainable Development Goals',
      description: 'Aligned all programs with UN SDGs and achieved significant milestones in child development and community empowerment.',
      milestone: 'Reached 1.5 million direct beneficiaries annually',
      impact: [
        { label: 'Annual Beneficiaries', value: '1.5M' },
        { label: 'Communities Transformed', value: '2,000' }
      ]
    }
  ],

  gallery: [
    {
      id: '1',
      type: 'image',
      url: '/images/jwp/_DSC8339.jpg',
      title: 'Wings of Hope Celebration',
      description: 'Students and families celebrating educational achievements and community milestones at our Wings of Hope initiative.',
      location: 'Multiple States',
      date: 'March 2024',
      cause: 'Education for All'
    },
    {
      id: '2',
      type: 'image',
      url: '/images/jwp/_DSC9767.JPG',
      title: 'Student Success Showcase',
      description: 'A young student proudly displaying her educational achievements and learning materials in the classroom.',
      location: 'Community Centers',
      date: 'February 2024',
      cause: 'Education for All'
    },
    {
      id: '3',
      type: 'image',
      url: '/images/jwp/_MG_6955.JPG',
      title: 'Interactive Learning Session',
      description: 'Students actively participating in learning activities with microphones and presentation equipment.',
      location: 'Educational Centers',
      date: 'January 2024',
      cause: 'Education for All'
    },
    {
      id: '4',
      type: 'image',
      url: '/images/jwp/_MG_7015.JPG',
      title: 'Community Celebration',
      description: 'Community members celebrating educational achievements and program milestones together.',
      location: 'Rural Communities',
      date: 'December 2023',
      cause: 'Education for All'
    },
    {
      id: '5',
      type: 'image',
      url: '/images/jwp/_MG_8025.JPG',
      title: 'Collaborative Learning',
      description: 'Students engaged in collaborative learning and peer interaction activities.',
      location: 'Learning Centers',
      date: 'November 2023',
      cause: 'Education for All'
    },
    {
      id: '6',
      type: 'image',
      url: '/images/jwp/20250909_100901.jpg',
      title: 'Daily Classroom Activities',
      description: 'Regular classroom activities demonstrating consistent student engagement and learning.',
      location: 'School Programs',
      date: 'October 2023',
      cause: 'Education for All'
    },
    {
      id: '7',
      type: 'image',
      url: '/images/jwp/20250910_110430.jpg',
      title: 'Special Educational Events',
      description: 'Special educational events and cultural programs promoting holistic student development.',
      location: 'Community Centers',
      date: 'September 2023',
      cause: 'Education for All'
    },
    {
      id: '8',
      type: 'image',
      url: '/images/jwp/WhatsApp Image 2025-06-29 at 22.44.35_68c59220.jpg',
      title: 'Community Learning Environment',
      description: 'Students engaged in classroom learning activities with proper educational resources and support.',
      location: 'Educational Centers',
      date: 'August 2023',
      cause: 'Education for All'
    },
    {
      id: '9',
      type: 'image',
      url: '/images/jwp/WhatsApp Image 2025-07-04 at 15.38.58_a93f5478.jpg',
      title: 'Health Education Workshop',
      description: 'Women learning about menstrual health and hygiene education through community workshops.',
      location: 'Community Centers',
      date: 'July 2023',
      cause: 'Healthcare & Nutrition'
    },
    {
      id: '10',
      type: 'image',
      url: '/images/jwp/_DSC9857.JPG',
      title: 'Active Learning Environment',
      description: 'Students actively engaged in learning activities with dedicated teachers and educational resources.',
      location: 'Learning Centers',
      date: 'June 2023',
      cause: 'Education for All'
    }
  ],

  impactMetrics: [
    {
      label: 'Children Impacted',
      value: '1.5M',
      unit: '+',
      description: 'Direct beneficiaries reached annually through all programs',
      icon: 'Users'
    },
    {
      label: 'Communities Served',
      value: '2,000',
      unit: '+',
      description: 'Villages and urban slums where we operate',
      icon: 'Globe'
    },
    {
      label: 'Projects Active',
      value: '400',
      unit: '+',
      description: 'Ongoing development projects across India',
      icon: 'Target'
    },
    {
      label: 'States Covered',
      value: '25',
      unit: '',
      description: 'Indian states with active programs',
      icon: 'Building'
    },
    {
      label: 'Years of Impact',
      value: '21',
      unit: '+',
      description: 'Years of dedicated service to communities',
      icon: 'Calendar'
    },
    {
      label: 'Lives Transformed',
      value: '10M',
      unit: '+',
      description: 'Total lives positively impacted since inception',
      icon: 'Heart'
    }
  ],

  awards: [
    {
      title: 'FICCI CSR Award',
      year: 2022,
      description: 'Recognized for excellence in Corporate Social Responsibility implementation',
      organization: 'Federation of Indian Chambers of Commerce'
    },
    {
      title: 'India NGO Award',
      year: 2021,
      description: 'Honored for outstanding contribution to child development and education',
      organization: 'Give India Foundation'
    },
    {
      title: 'UN Global Compact Recognition',
      year: 2020,
      description: 'Acknowledged for alignment with Sustainable Development Goals',
      organization: 'United Nations Global Compact'
    }
  ],

  partnerships: [
    {
      name: 'UNICEF India',
      logo: '/partnership-logo-1.png',
      description: 'Collaborative programs for child protection and development'
    },
    {
      name: 'Ministry of Education',
      logo: '/partnership-logo-2.png', 
      description: 'Government partnership for quality education initiatives'
    },
    {
      name: 'World Health Organization',
      logo: '/partnership-logo-3.png',
      description: 'Healthcare delivery and immunization programs'
    }
  ],

  contactInfo: {
    email: 'info@smilefoundation.org',
    phone: '+91-11-43123700',
    website: 'www.smilefoundation.org',
    address: 'Smile Foundation, 1st Floor, Saket Metro Station Complex, New Delhi - 110017'
  },

  socialMedia: {
    facebook: 'smilefoundationindia',
    twitter: 'smilefoundation',
    instagram: 'smilefoundationindia',
    linkedin: 'smile-foundation',
    youtube: 'smilefoundationindia'
  },

  certifications: [
    '12A Registration',
    '80G Tax Exemption',
    'FCRA Approval',
    'ISO 9001:2015 Certified',
    'NABH Accredited'
  ],

  operatingStates: [
    'Delhi', 'Uttar Pradesh', 'Bihar', 'Rajasthan', 'Madhya Pradesh',
    'Maharashtra', 'Karnataka', 'Tamil Nadu', 'West Bengal', 'Odisha',
    'Jharkhand', 'Chhattisgarh', 'Assam', 'Gujarat', 'Punjab'
  ],

  totalBeneficiaries: '1.5 Million+',
  annualReport: '/annual-report-2023.pdf',

  financialTransparency: {
    programExpenses: '85%',
    adminExpenses: '10%', 
    fundraisingExpenses: '5%',
    efficiencyRating: 'A+'
  }
};

// KHUSHII NGO Data
export const khushiNGODetails: NGODetails = {
  id: '2',
  name: 'KHUSHII (Kids Help Foundation)',
  shortDescription: 'Empowering underprivileged children through education, nutrition, and holistic development across Delhi NCR since 2012.',
  fullDescription: 'KHUSHII is a dedicated organization working with underprivileged children and their families in Delhi NCR. We focus on providing quality education, nutrition, healthcare, and skill development programs to break the cycle of poverty. Our comprehensive approach includes community engagement, parent training, and sustainable development initiatives that directly benefit over 2,500 children and 1,000+ families across 25+ communities in Delhi NCR.',
  verified: true,
  logo: '/images/khushi/KHu-Web.jpg',
  heroImage: '/images/khushi/HomePageTop.jpg',
  location: 'Delhi NCR, India',
  yearEstablished: 2012,
  registrationNumber: 'KHUSHII-2012-001',
  
  mission: 'To empower underprivileged children through quality education, nutrition, and holistic development while engaging communities for sustainable change.',
  
  vision: 'A world where every child has access to quality education, proper nutrition, and opportunities to reach their full potential.',
  
  values: [
    'Child-Centric Approach',
    'Community Empowerment', 
    'Educational Excellence',
    'Nutritional Security',
    'Inclusivity & Equality',
    'Transparency & Accountability'
  ],

  causes: [
    {
      id: 'education',
      name: 'Education for Every Child',
      description: 'We provide quality education to underprivileged children through learning centers, teacher training, and community engagement programs that ensure every child has access to learning opportunities.',
      image: '/images/khushi/HomePageTop.jpg',
      impactMetrics: [
        {
          label: 'Children Educated',
          value: '2,500',
          unit: '+',
          description: 'Students enrolled in our education programs'
        },
        {
          label: 'Learning Centers',
          value: '50',
          unit: '+',
          description: 'Educational centers established'
        },
        {
          label: 'Teachers Trained',
          value: '100',
          unit: '+',
          description: 'Local teachers trained in modern methods'
        },
        {
          label: 'Literacy Improvement',
          value: '85',
          unit: '%',
          description: 'Improvement in literacy rates'
        }
      ],
      beneficiaries: ['Underprivileged children aged 3-18', 'Children from migrant families', 'Street children and child laborers', 'Children with learning disabilities'],
      approach: 'We establish community learning centers with qualified teachers, provide free educational materials, conduct regular assessments, and engage parents in the education process through awareness programs and skill development workshops.',
      outcomes: ['90% of children now attend school regularly', '85% improvement in literacy rates', '100+ teachers trained in modern teaching methods', '50+ learning centers established across Delhi NCR']
    },
    {
      id: 'nutrition',
      name: 'Nutrition & Health',
      description: 'Our nutrition programs ensure children receive proper meals, healthcare support, and health education to support their physical and mental development.',
      image: '/images/khushi/48.jpg',
      impactMetrics: [
        {
          label: 'Children Fed',
          value: '2,500',
          unit: '+',
          description: 'Children receiving nutritious meals daily'
        },
        {
          label: 'Health Checkups',
          value: '5,000',
          unit: '+',
          description: 'Medical checkups conducted annually'
        },
        {
          label: 'Nutritional Recovery',
          value: '90',
          unit: '%',
          description: 'Children showing improved health indicators'
        }
      ],
      beneficiaries: ['Malnourished children', 'Children from food-insecure families', 'Children with health issues', 'Pregnant and lactating mothers'],
      approach: 'We provide daily nutritious meals, conduct regular health checkups, organize nutrition awareness workshops, and work with local healthcare providers to ensure comprehensive health support for children and families.',
      outcomes: ['90% of children show improved health indicators', '5,000+ health checkups conducted annually', 'Zero cases of severe malnutrition in our centers', '200+ families trained in nutrition and hygiene']
    },
    {
      id: 'community',
      name: 'Community Development',
      description: 'We engage parents and communities through skill development programs, awareness campaigns, and capacity building initiatives for sustainable impact.',
      image: '/images/khushi/77.jpg',
      impactMetrics: [
        {
          label: 'Families Reached',
          value: '1,000',
          unit: '+',
          description: 'Families engaged in our programs'
        },
        {
          label: 'Parents Trained',
          value: '200',
          unit: '+',
          description: 'Parents trained in skill development'
        },
        {
          label: 'Community Centers',
          value: '25',
          unit: '+',
          description: 'Communities with active programs'
        }
      ],
      beneficiaries: ['Parents and caregivers', 'Community leaders', 'Local women groups', 'Youth and adolescents'],
      approach: 'We conduct skill development workshops, organize community awareness programs, establish self-help groups, and provide micro-enterprise support to empower families and create sustainable livelihoods.',
      outcomes: ['200+ parents trained in various skills', '25+ self-help groups formed', '50+ micro-enterprises established', '1,000+ families actively engaged in community programs']
    }
  ],

  gallery: [
    { 
      id: '1', 
      type: 'image', 
      url: '/images/khushi/HomePageTop.jpg', 
      title: 'Education for Every Child', 
      description: 'Children actively engaged in learning activities at our community learning centers, showcasing the impact of quality education programs.', 
      location: 'Delhi NCR', 
      date: 'March 2024', 
      cause: 'Education for Every Child' 
    },
    { 
      id: '2', 
      type: 'image', 
      url: '/images/khushi/48.jpg', 
      title: 'Nutritional Support Program', 
      description: 'Children receiving nutritious meals and health education as part of our comprehensive nutrition and health program.', 
      location: 'Community Centers', 
      date: 'February 2024', 
      cause: 'Nutrition & Health' 
    },
    { 
      id: '3', 
      type: 'image', 
      url: '/images/khushi/77.jpg', 
      title: 'Community Engagement', 
      description: 'Parents and community members participating in skill development workshops and awareness programs.', 
      location: 'Delhi Communities', 
      date: 'January 2024', 
      cause: 'Community Development' 
    },
    { 
      id: '4', 
      type: 'image', 
      url: '/images/khushi/KHu-Web.jpg', 
      title: 'KHUSHII Learning Center', 
      description: 'Our flagship learning center providing quality education and holistic development opportunities for underprivileged children.', 
      location: 'Delhi NCR', 
      date: 'December 2023', 
      cause: 'Education for Every Child' 
    }
  ],

  leadership: [
    {
      name: 'Dr. Neeraj Sharma',
      role: 'Founder & Director',
      bio: 'Educationist with 15+ years experience in child development and community engagement.',
      image: '/images/khushi/KHu-Web.jpg',
      experience: '15+ years in child development and community engagement',
      education: 'PhD in Education, Masters in Social Work'
    },
    {
      name: 'Priya Singh',
      role: 'Program Manager',
      bio: 'Specialist in nutrition programs and community development with 10+ years experience.',
      image: '/images/khushi/HomePageTop.jpg',
      experience: '10+ years in nutrition and community development',
      education: 'Masters in Nutrition, Bachelors in Social Work'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Education Coordinator',
      bio: 'Expert in teacher training and curriculum development for underprivileged communities.',
      image: '/images/khushi/48.jpg',
      experience: '12+ years in education and teacher training',
      education: 'Masters in Education, B.Ed in Special Education'
    }
  ],

  timeline: [
    {
      year: 2012,
      title: 'KHUSHII Foundation Established',
      description: 'Founded with the vision to provide quality education and nutrition to underprivileged children in Delhi NCR.',
      milestone: 'Organization Launch',
      impact: [
        { label: 'Initial Reach', value: '50 children' },
        { label: 'Centers Opened', value: '2' }
      ]
    },
    {
      year: 2015,
      title: 'Expansion to Multiple Communities',
      description: 'Extended programs to 10+ communities across Delhi NCR, establishing learning centers and nutrition programs.',
      milestone: 'Geographic Expansion',
      impact: [
        { label: 'Children Reached', value: '500+' },
        { label: 'Communities', value: '10+' }
      ]
    },
    {
      year: 2018,
      title: 'Nutrition Program Launch',
      description: 'Launched comprehensive nutrition and health programs to address malnutrition among children.',
      milestone: 'Program Diversification',
      impact: [
        { label: 'Children Fed Daily', value: '1,000+' },
        { label: 'Health Checkups', value: '2,000+' }
      ]
    },
    {
      year: 2020,
      title: 'Digital Learning Initiative',
      description: 'Adapted to COVID-19 challenges by implementing digital learning solutions and remote education programs.',
      milestone: 'Digital Transformation',
      impact: [
        { label: 'Online Classes', value: '500+ children' },
        { label: 'Digital Devices', value: '200+' }
      ]
    },
    {
      year: 2023,
      title: 'Award Recognition',
      description: 'Received Best NGO for Child Education award from Delhi Government for outstanding contribution.',
      milestone: 'Recognition',
      impact: [
        { label: 'Total Children', value: '2,500+' },
        { label: 'Learning Centers', value: '50+' }
      ]
    }
  ],

  impactMetrics: [
    {
      label: 'Children Reached',
      value: '2,500',
      unit: '+',
      description: 'Total children enrolled in our programs',
      icon: '👶'
    },
    {
      label: 'Learning Centers',
      value: '50',
      unit: '+',
      description: 'Educational centers across Delhi NCR',
      icon: '🏫'
    },
    {
      label: 'Families Engaged',
      value: '1,000',
      unit: '+',
      description: 'Families actively participating in programs',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      label: 'Teachers Trained',
      value: '100',
      unit: '+',
      description: 'Local teachers trained in modern methods',
      icon: '👩‍🏫'
    }
  ],

  awards: [
    {
      title: 'Best NGO for Child Education',
      organization: 'Delhi Government',
      year: 2023,
      description: 'Recognized for outstanding contribution to child education and development'
    },
    {
      title: 'Excellence in Community Development',
      organization: 'NGO Federation of India',
      year: 2022,
      description: 'Awarded for innovative community engagement and development programs'
    },
    {
      title: 'Nutrition Champion Award',
      organization: 'Ministry of Women & Child Development',
      year: 2021,
      description: 'Recognized for exceptional work in child nutrition and health programs'
    }
  ],

  partnerships: [
    {
      name: 'Delhi Government',
      logo: '/images/khushi/KHu-Web.jpg',
      description: 'Collaborative partnership for education and nutrition programs'
    },
    {
      name: 'NGO Federation of India',
      logo: '/images/khushi/HomePageTop.jpg',
      description: 'Network partnership for capacity building and resource sharing'
    }
  ],

  contactInfo: {
    email: 'info@khushii.org',
    phone: '+91-11-12345678',
    website: 'www.khushii.org',
    address: 'Delhi NCR, India'
  },

  socialMedia: {
    facebook: 'https://facebook.com/khushii',
    twitter: 'https://twitter.com/khushii',
    instagram: 'https://instagram.com/khushii',
    linkedin: 'https://linkedin.com/company/khushii'
  },

  certifications: ['12A Certificate', '80G Certificate', 'FCRA Registration'],
  operatingStates: ['Delhi', 'Haryana', 'Uttar Pradesh'],
  totalBeneficiaries: '2,500+',

  financialTransparency: {
    programExpenses: '80%',
    adminExpenses: '15%', 
    fundraisingExpenses: '5%',
    efficiencyRating: 'A'
  }
};

// Additional NGO samples for demonstration
export const sampleNGOList: NGODetails[] = [
  sampleNGODetails,
  khushiNGODetails,
  // Add more NGO samples here for a complete listing
]; 