import { NGODetails } from '../types';

export const animalCareNGODetails: NGODetails = {
  id: '2',
  name: 'AnimalCare India',
  shortDescription: 'Dedicated to animal welfare, rescue operations, and emergency response for animals in need across India since 2015.',
  fullDescription: 'AnimalCare India is a comprehensive animal welfare organization committed to protecting and caring for animals during both normal times and emergencies. We work tirelessly to rescue, rehabilitate, and provide medical care to street animals, while also responding to natural disasters and emergency situations. Our programs include daily feeding initiatives, vaccination campaigns, sterilization programs, and emergency rescue operations during floods and other disasters. We believe that every animal deserves compassion, care, and protection, and we work to create a world where animals and humans can coexist harmoniously.',
  verified: true,
  logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg',
  heroImage: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183017/images/animal-protect/animal12.jpg',
  location: 'Delhi NCR, India',
  yearEstablished: 2015,
  registrationNumber: 'AC-2015-001',
  
  mission: 'To provide comprehensive care for animals through rescue operations, medical treatment, feeding programs, and emergency response during natural disasters.',
  
  vision: 'A world where every animal is safe, healthy, and treated with love and respect, with robust systems in place for their protection and welfare.',
  
  values: [
    'Compassion for All Animals',
    'Emergency Response Excellence', 
    'Community Engagement',
    'Medical Care Excellence',
    'Disaster Preparedness',
    'Transparency & Accountability'
  ],

  causes: [
    {
      id: 'animal-protection',
      name: 'Animal Protection & Welfare',
      description: 'Comprehensive animal welfare programs focusing on rescue, medical care, vaccination, and community education to ensure the safety and well-being of street animals and pets.',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183018/images/animal-protect/animal13.jpg',
      impactMetrics: [
        {
          label: 'Animals Rescued',
          value: '10,000',
          unit: '+',
          description: 'Animals rescued and provided with medical care'
        },
        {
          label: 'Vaccinations',
          value: '25,000',
          unit: '+',
          description: 'Animals vaccinated against rabies and other diseases'
        },
        {
          label: 'Sterilizations',
          value: '8,500',
          unit: '+',
          description: 'Animals sterilized to control population'
        },
        {
          label: 'Community Programs',
          value: '500',
          unit: '+',
          description: 'Awareness and education programs conducted'
        }
      ],
      beneficiaries: ['Street Dogs', 'Street Cats', 'Livestock', 'Wildlife', 'Community Members'],
      approach: 'Our comprehensive approach includes emergency rescue operations, medical treatment, vaccination campaigns, sterilization programs, and community education to create a sustainable ecosystem of animal welfare.',
      outcomes: [
        '90% reduction in rabies cases in target areas',
        '85% improvement in animal health indicators',
        '70% increase in community awareness about animal welfare',
        '95% success rate in animal rescue operations'
      ]
    },
    {
      id: 'emergency-rescue',
      name: 'Emergency Animal Rescue',
      description: 'Rapid response emergency rescue operations for animals trapped in natural disasters, floods, and other emergency situations, providing immediate medical care and safe shelter.',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183008/images/animal-flood/animal6.png',
      impactMetrics: [
        {
          label: 'Emergency Rescues',
          value: '5,000',
          unit: '+',
          description: 'Animals rescued during natural disasters'
        },
        {
          label: 'Disaster Response',
          value: '50',
          unit: '+',
          description: 'Emergency response operations conducted'
        },
        {
          label: 'Emergency Shelters',
          value: '25',
          unit: '',
          description: 'Temporary shelters established during disasters'
        },
        {
          label: 'Medical Emergencies',
          value: '3,000',
          unit: '+',
          description: 'Animals provided with emergency medical care'
        }
      ],
      beneficiaries: ['Flood-Affected Animals', 'Disaster Victims', 'Injured Animals', 'Stranded Animals', 'Emergency Communities'],
      approach: 'Our emergency response system includes specialized rescue teams, boats and water rescue equipment, emergency medical facilities, and coordination with disaster management authorities to ensure rapid response during crises.',
      outcomes: [
        '95% survival rate for rescued animals',
        '24-hour emergency response capability',
        '100% coordination with disaster management',
        'Zero animal casualties in covered areas'
      ]
    },
    {
      id: 'feeding-programs',
      name: 'Daily Feeding Programs',
      description: 'Systematic daily feeding programs ensuring no animal goes hungry through organized feeding stations, community engagement, and nutrition monitoring across urban and rural areas.',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183036/images/animals-bowl/animal1.jpg',
      impactMetrics: [
        {
          label: 'Daily Meals',
          value: '15,000',
          unit: '+',
          description: 'Animals fed daily with nutritious meals'
        },
        {
          label: 'Feeding Stations',
          value: '25',
          unit: '',
          description: 'Feeding stations established across cities'
        },
        {
          label: 'Community Volunteers',
          value: '500',
          unit: '+',
          description: 'Volunteers trained in feeding programs'
        },
        {
          label: 'Nutrition Support',
          value: '50,000',
          unit: '+',
          description: 'Animals provided with nutrition support'
        }
      ],
      beneficiaries: ['Street Animals', 'Community Members', 'Volunteers', 'Local Communities', 'Animal Lovers'],
      approach: 'Our feeding programs include establishing systematic feeding stations, training community volunteers, providing nutritious meals, and creating awareness about responsible animal feeding practices.',
      outcomes: [
        '90% reduction in hunger-related animal deaths',
        '85% improvement in animal health through nutrition',
        '80% increase in community participation',
        '95% success rate in feeding program sustainability'
      ]
    }
  ],

  impactMetrics: [
    {
      label: 'Total Animals Helped',
      value: '50,000',
      unit: '+',
      description: 'Animals rescued, treated, and cared for',
      icon: 'Users'
    },
    {
      label: 'Emergency Operations',
      value: '100',
      unit: '+',
      description: 'Emergency rescue operations conducted',
      icon: 'Shield'
    },
    {
      label: 'Community Programs',
      value: '1,000',
      unit: '+',
      description: 'Community awareness and education programs',
      icon: 'Handshake'
    },
    {
      label: 'Volunteers Trained',
      value: '2,000',
      unit: '+',
      description: 'Community volunteers trained in animal welfare',
      icon: 'Users'
    }
  ],

  timeline: [
    {
      year: 2015,
      title: 'AnimalCare India Founded',
      description: 'Established with the mission to provide comprehensive care for animals through rescue operations, medical treatment, and emergency response.',
      milestone: 'Organization Launch'
    },
    {
      year: 2017,
      title: 'Emergency Response Program',
      description: 'Launched specialized emergency rescue operations for animals during natural disasters and floods.',
      milestone: 'Emergency Response Capability'
    },
    {
      year: 2019,
      title: 'Daily Feeding Program',
      description: 'Established systematic daily feeding programs across multiple cities to ensure no animal goes hungry.',
      milestone: 'Feeding Program Launch'
    },
    {
      year: 2021,
      title: 'Community Impact Award',
      description: 'Recognized for significant community engagement and education programs in animal welfare.',
      milestone: 'Award Recognition'
    },
    {
      year: 2022,
      title: 'Excellence in Disaster Response',
      description: 'Awarded for exceptional emergency animal rescue operations during natural disasters.',
      milestone: 'Disaster Response Excellence'
    },
    {
      year: 2023,
      title: 'Best Animal Welfare Organization',
      description: 'Recognized for outstanding contribution to animal welfare and emergency response across India.',
      milestone: 'Industry Recognition'
    }
  ],

  // Achievements merged into awards below to match NGODetails type

  awards: [
    {
      title: 'Best Animal Welfare Organization',
      year: 2023,
      description: 'Recognized for outstanding contribution to animal welfare and emergency response',
      organization: 'National Animal Welfare Board'
    },
    {
      title: 'Excellence in Disaster Response',
      year: 2022,
      description: 'Awarded for exceptional emergency animal rescue operations during natural disasters',
      organization: 'Disaster Management Authority'
    },
    {
      title: 'Community Impact Award',
      year: 2021,
      description: 'Recognized for significant community engagement and education programs',
      organization: 'Social Impact Foundation'
    }
  ],

  partnerships: [
    {
      name: 'National Disaster Management Authority',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
      description: 'Partnership for emergency animal rescue operations during natural disasters'
    },
    {
      name: 'Animal Welfare Board of India',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
      description: 'Collaboration on animal welfare programs and policy advocacy'
    },
    {
      name: 'Local Veterinary Clinics',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
      description: 'Network of veterinary partners for medical care and treatment'
    }
  ],

  leadership: [
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Executive Officer',
      bio: 'Dr. Priya Sharma is a veterinarian with 15+ years of experience in animal welfare and emergency response. She has led numerous rescue operations and has been instrumental in developing innovative approaches to animal care during disasters.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      experience: '15+ years in animal welfare and emergency response',
      education: 'DVM from Delhi Veterinary College, PhD in Animal Welfare'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Head of Rescue Operations',
      bio: 'Expert in emergency animal rescue with 10+ years of experience in disaster response and water rescue operations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      experience: '10+ years in disaster response and water rescue operations',
      education: 'Masters in Disaster Management, Certified Rescue Specialist'
    },
    {
      name: 'Sunita Reddy',
      role: 'Medical Director',
      bio: 'Veterinarian specializing in emergency animal medicine and disaster response with extensive experience in field operations.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      experience: '12+ years in emergency animal medicine and disaster response',
      education: 'DVM from Mumbai Veterinary College, Specialization in Emergency Medicine'
    }
  ],
  

  contactInfo: {
    email: 'info@animalcareindia.org.in',
    phone: '+91-9315982650',
    website: 'www.animalcareindia.org.in',
    address: 'AnimalCare India, Sector 15, Gurugram, Haryana - 122001'
  },

  socialMedia: {
    facebook: '@animalcareindia.org.in',
    twitter: '@AnimalCareIndia',
    instagram: '@animalcareindia.org.in',
    linkedin: 'animalcare-india'
  },

  certifications: [
    'ISO 9001:2015 Quality Management System',
    'ISO 14001:2015 Environmental Management System',
    'ISO 45001:2018 Occupational Health and Safety Management',
    'Animal Welfare Board of India Registration',
    '12A Tax Exemption Certificate',
    '80G Tax Deduction Certificate'
  ],

  operatingStates: [
    'Delhi',
    'Haryana',
    'Uttar Pradesh',
    'Maharashtra',
    'Karnataka',
    'Tamil Nadu',
    'West Bengal',
    'Gujarat',
    'Rajasthan',
    'Punjab'
  ],

  totalBeneficiaries: '50,000+',

  annualReport: 'https://animalcareindia.org.in/annual-report-2023.pdf',

  financialTransparency: {
    programExpenses: '95%',
    adminExpenses: '3%',
    fundraisingExpenses: '2%',
    efficiencyRating: 'A+'
  },

  gallery: [
    {
      id: 'ac-1',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183019/images/animal-protect/animal14.jpg',
      title: 'Rescue & Medical Care',
      description: 'Volunteers providing medical care to rescued animals during field operations.',
      location: 'Delhi NCR',
      date: '2024',
      cause: 'Animal Protection & Welfare'
    },
    {
      id: 'ac-2',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183020/images/animal-protect/animal15.jpg',
      title: 'Vaccination Drive',
      description: 'Community vaccination campaign in progress for rabies prevention.',
      location: 'Delhi NCR',
      date: '2024',
      cause: 'Animal Protection & Welfare'
    },
    {
      id: 'ac-3',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183011/images/animal-flood/animal7.png',
      title: 'Flood Rescue Operations',
      description: 'Emergency rescue operations during flood relief with trained responders.',
      location: 'Assam',
      date: '2024',
      cause: 'Emergency Animal Rescue'
    },
    {
      id: 'ac-4',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183037/images/animals-bowl/animal2.jpg',
      title: 'Daily Feeding Program',
      description: 'Daily feeding ensuring no animal goes hungry across the city.',
      location: 'Mumbai',
      date: '2024',
      cause: 'Daily Feeding Programs'
    },
    {
      id: 'ac-5',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183022/images/animal-protect/animal16.jpg',
      title: 'Community Education',
      description: 'Awareness programs on humane animal care and community responsibility.',
      location: 'Gurugram',
      date: '2024',
      cause: 'Animal Protection & Welfare'
    },
    {
      id: 'ac-6',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183014/images/animal-flood/animal8.png',
      title: 'Emergency Medical Care',
      description: 'On-site emergency medical care for disaster-affected animals.',
      location: 'Bihar',
      date: '2024',
      cause: 'Emergency Animal Rescue'
    }
  ]
};

export const sampleNGODetails: NGODetails = {
  id: '1',
  name: 'JWP (Janakalyan Welfare Program)',
  shortDescription: 'Empowering tribal communities through education, sustainable development, and cultural preservation across central India since 2008.',
  fullDescription: 'JWP is a dedicated organization working with indigenous communities in remote areas of central India where access to basic services is limited. We focus on tribal welfare, education, and sustainable livelihood development while preserving cultural heritage. Our programs emphasize community participation and traditional knowledge integration with contemporary development approaches, directly benefiting over 5,800 children and 240 tribal communities across Chhattisgarh and surrounding regions.',
  verified: true,
  logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183054/images/jwp/_DSC8339.jpg',
  heroImage: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183054/images/jwp/_DSC8339.jpg',
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
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183056/images/jwp/_DSC9767.jpg',
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
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183056/images/jwp/_DSC9767.jpg',
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
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183054/images/jwp/_DSC8339.jpg',
      title: 'Wings of Hope Celebration',
      description: 'Students and families celebrating educational achievements and community milestones at our Wings of Hope initiative.',
      location: 'Multiple States',
      date: 'March 2024',
      cause: 'Education for All'
    },
    {
      id: '2',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183056/images/jwp/_DSC9767.jpg',
      title: 'Student Success Showcase',
      description: 'A young student proudly displaying her educational achievements and learning materials in the classroom.',
      location: 'Community Centers',
      date: 'February 2024',
      cause: 'Education for All'
    },
    {
      id: '3',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183060/images/jwp/_MG_6955.jpg',
      title: 'Interactive Learning Session',
      description: 'Students actively participating in learning activities with microphones and presentation equipment.',
      location: 'Educational Centers',
      date: 'January 2024',
      cause: 'Education for All'
    },
    {
      id: '4',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183063/images/jwp/_MG_7015.jpg',
      title: 'Community Celebration',
      description: 'Community members celebrating educational achievements and program milestones together.',
      location: 'Rural Communities',
      date: 'December 2023',
      cause: 'Education for All'
    },
    {
      id: '5',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183065/images/jwp/_MG_8025.jpg',
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
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183050/images/jwp/20250910_110430.jpg',
      title: 'Special Educational Events',
      description: 'Special educational events and cultural programs promoting holistic student development.',
      location: 'Community Centers',
      date: 'September 2023',
      cause: 'Education for All'
    },
    {
      id: '8',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183051/images/jwp/WhatsApp_Image_2025-06-29_at_22.44.35_68c59220.jpg',
      title: 'Community Learning Environment',
      description: 'Students engaged in classroom learning activities with proper educational resources and support.',
      location: 'Educational Centers',
      date: 'August 2023',
      cause: 'Education for All'
    },
    {
      id: '9',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183052/images/jwp/WhatsApp_Image_2025-07-04_at_15.38.58_a93f5478.jpg',
      title: 'Health Education Workshop',
      description: 'Women learning about menstrual health and hygiene education through community workshops.',
      location: 'Community Centers',
      date: 'July 2023',
      cause: 'Healthcare & Nutrition'
    },
    {
      id: '10',
      type: 'image',
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183058/images/jwp/_DSC9857.jpg',
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
  id: '3',
  name: 'KHUSHII (Kids Help Foundation)',
  shortDescription: 'Empowering underprivileged children through education, nutrition, and holistic development across Delhi NCR since 2012.',
  fullDescription: 'KHUSHII is a dedicated organization working with underprivileged children and their families in Delhi NCR. We focus on providing quality education, nutrition, healthcare, and skill development programs to break the cycle of poverty. Our comprehensive approach includes community engagement, parent training, and sustainable development initiatives that directly benefit over 2,500 children and 1,000+ families across 25+ communities in Delhi NCR.',
  verified: true,
  logo: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183108/images/khushi/KHu-Web.jpg',
  heroImage: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg',
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
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg',
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
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183089/images/khushi/48.jpg',
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
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188369/images/khushi/cld-1758188331812-77.jpg-2200.webp',
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
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg', 
      title: 'Education for Every Child', 
      description: 'Children actively engaged in learning activities at our community learning centers, showcasing the impact of quality education programs.', 
      location: 'Delhi NCR', 
      date: 'March 2024', 
      cause: 'Education for Every Child' 
    },
    { 
      id: '2', 
      type: 'image', 
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183089/images/khushi/48.jpg', 
      title: 'Nutritional Support Program', 
      description: 'Children receiving nutritious meals and health education as part of our comprehensive nutrition and health program.', 
      location: 'Community Centers', 
      date: 'February 2024', 
      cause: 'Nutrition & Health' 
    },
    { 
      id: '3', 
      type: 'image', 
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758188369/images/khushi/cld-1758188331812-77.jpg-2200.webp', 
      title: 'Community Engagement', 
      description: 'Parents and community members participating in skill development workshops and awareness programs.', 
      location: 'Delhi Communities', 
      date: 'January 2024', 
      cause: 'Community Development' 
    },
    { 
      id: '4', 
      type: 'image', 
      url: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183108/images/khushi/KHu-Web.jpg', 
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
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183108/images/khushi/KHu-Web.jpg',
      experience: '15+ years in child development and community engagement',
      education: 'PhD in Education, Masters in Social Work'
    },
    {
      name: 'Priya Singh',
      role: 'Program Manager',
      bio: 'Specialist in nutrition programs and community development with 10+ years experience.',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183103/images/khushi/HomePageTop.jpg',
      experience: '10+ years in nutrition and community development',
      education: 'Masters in Nutrition, Bachelors in Social Work'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Education Coordinator',
      bio: 'Expert in teacher training and curriculum development for underprivileged communities.',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183089/images/khushi/48.jpg',
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