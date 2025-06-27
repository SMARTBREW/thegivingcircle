import { NGODetails } from '../types';

export const sampleNGODetails: NGODetails = {
  id: '1',
  name: 'Smile Foundation',
  shortDescription: 'Transforming lives through comprehensive healthcare, education, and livelihood programs across India since 2002.',
  fullDescription: 'Smile Foundation is a national development organization directly benefiting over 1.5 million children and their families every year, through more than 400 welfare projects on education, healthcare, livelihood and women empowerment, spread across 2,000 villages and slums in 25 states of India. The organization is committed to creating sustainable change by empowering communities and building long-term partnerships with local stakeholders.',
  verified: true,
  logo: '/Smileshero.jpg',
  heroImage: '/Smileshero.jpg',
  location: 'New Delhi, India',
  yearEstablished: 2002,
  registrationNumber: 'S-15871/2002',
  
  mission: 'To work towards the welfare of underprivileged children, their families and communities through comprehensive programs in education, healthcare and livelihood development.',
  
  vision: 'A world where every child enjoys their fundamental right to balanced development, protection and participation in a life of dignity.',
  
  values: [
    'Transparency & Accountability',
    'Child-Centric Approach', 
    'Community Participation',
    'Innovation & Excellence',
    'Inclusivity & Diversity',
    'Sustainable Development'
  ],

  causes: [
    {
      id: 'education',
      name: 'Education for All',
      description: 'We believe education is the most powerful tool to break the cycle of poverty. Our comprehensive education programs ensure quality learning opportunities for underprivileged children through innovative teaching methods, infrastructure development, and community engagement.',
      image: '/Smileshero.jpg',
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
      image: '/Smileshero.jpg',
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
      url: '/Smileshero.jpg',
      title: 'Children Learning in Digital Classroom',
      description: 'Students engaged in interactive digital learning at our community education center in rural Rajasthan.',
      location: 'Rajasthan',
      date: 'March 2023',
      cause: 'Education for All'
    },
    {
      id: '2',
      type: 'image',
      url: '/Smileshero.jpg',
      title: 'Mobile Health Camp',
      description: 'Healthcare professionals conducting health checkups and immunizations in remote village.',
      location: 'Uttar Pradesh',
      date: 'February 2023',
      cause: 'Healthcare & Nutrition'
    },
    {
      id: '3',
      type: 'image',
      url: '/Smileshero.jpg',
      title: 'Women Empowerment Workshop',
      description: 'Local women participating in skill development and livelihood training program.',
      location: 'Bihar',
      date: 'January 2023',
      cause: 'Education for All'
    },
    {
      id: '4',
      type: 'video',
      url: '/video-placeholder.mp4',
      thumbnail: '/Smileshero.jpg',
      title: 'Community Transformation Story',
      description: 'Success story of a rural community that transformed through our integrated development approach.',
      location: 'Madhya Pradesh',
      date: 'December 2022',
      cause: 'Healthcare & Nutrition'
    },
    {
      id: '5',
      type: 'image',
      url: '/Smileshero.jpg',
      title: 'Nutrition Distribution Program',
      description: 'Children receiving nutritious meals and supplements to combat malnutrition.',
      location: 'Odisha',
      date: 'November 2022',
      cause: 'Healthcare & Nutrition'
    },
    {
      id: '6',
      type: 'image',
      url: '/Smileshero.jpg',
      title: 'Teacher Training Workshop',
      description: 'Educators learning innovative teaching methodologies and child psychology techniques.',
      location: 'Karnataka',
      date: 'October 2022',
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

// Additional NGO samples for demonstration
export const sampleNGOList: NGODetails[] = [
  sampleNGODetails,
  // Add more NGO samples here for a complete listing
]; 