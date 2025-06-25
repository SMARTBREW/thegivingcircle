import { ChampionStory } from '../types';

/**
 * Sample Champion Story Data
 * This file contains example data structures that your backend should provide
 * for the ChampionStoryPage component.
 */

export const sampleChampionStory: ChampionStory = {
  id: '1',
  title: 'Empowering Rural Education Through Technology',
  organizer: 'Priya Sharma',
  organizerBio: 'Priya has been working in rural education for over 8 years. She has successfully organized 12 campaigns that have helped bring technology to over 50 schools in Maharashtra.',
  organizerAvatar: '/public/champions/priya-sharma.jpg', // Optional: can be null/undefined
  location: 'Pune, Maharashtra',
  category: 'Education',
  impact: '500 Students',
  successRate: '175%',
  supporters: 247,
  status: 'Campaign Successful',
  goalAmount: '₹10,00,000',
  raisedAmount: '₹17,50,000',
  startDate: 'January 15, 2024',
  completionDate: 'June 22, 2024',
  beneficiaryAge: undefined, // Optional field
  image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  storyContent: `
    <p>In the remote villages of Maharashtra, education was becoming increasingly challenging as traditional teaching methods struggled to engage students in an increasingly digital world. Priya Sharma, a passionate educator and social worker, recognized this gap and decided to take action.</p>
    
    <p>The "Empowering Rural Education Through Technology" campaign was born from Priya's vision to bridge the digital divide in rural education. The goal was to provide tablets, internet connectivity, and digital learning resources to 10 rural schools, directly impacting 500 students.</p>
    
    <p>What started as a modest goal of ₹10,00,000 became a movement that captured the hearts of 247 supporters across India. The overwhelming response exceeded all expectations, raising ₹17,50,000 - a remarkable 175% of the original target.</p>
    
    <p>Today, these 500 students have access to world-class digital education resources, online tutoring, and interactive learning platforms. The additional funds have been used to expand the program to 5 more schools, training 50 teachers in digital pedagogy, and creating a sustainable model for rural education transformation.</p>
    
    <p>The impact goes beyond numbers - students who previously struggled with traditional learning methods are now excelling, teachers feel empowered with new tools, and entire communities are witnessing the transformation of their children's future prospects.</p>
  `,
  milestones: [
    {
      date: 'Jan 15, 2024',
      title: 'Campaign Launch',
      description: 'Priya launched the campaign to bring digital education to rural Maharashtra schools',
      amount: '₹0',
      percentage: 0
    },
    {
      date: 'Feb 28, 2024',
      title: 'First School Equipped',
      description: 'Successfully equipped the first school with tablets and internet connectivity',
      amount: '₹2,50,000',
      percentage: 25
    },
    {
      date: 'Apr 15, 2024',
      title: 'Halfway Milestone',
      description: '5 schools equipped, 250 students now have access to digital learning',
      amount: '₹6,00,000',
      percentage: 60
    },
    {
      date: 'May 20, 2024',
      title: 'Goal Achieved',
      description: 'Reached the initial goal of ₹10,00,000 and equipped all 10 target schools',
      amount: '₹10,00,000',
      percentage: 100
    },
    {
      date: 'Jun 22, 2024',
      title: 'Beyond Expectations',
      description: 'Campaign exceeded 175%! Expanded to 15 schools and trained 50 teachers',
      amount: '₹17,50,000',
      percentage: 175
    }
  ],
  impactStats: [
    {
      icon: 'Users',
      label: 'Students Impacted',
      value: '500+',
      description: 'Direct beneficiaries'
    },
    {
      icon: 'Trophy',
      label: 'Success Rate',
      value: '175%',
      description: 'Goal exceeded'
    },
    {
      icon: 'Heart',
      label: 'Supporters',
      value: '247',
      description: 'Amazing contributors'
    },
    {
      icon: 'Globe',
      label: 'Schools Transformed',
      value: '15',
      description: 'Rural schools equipped'
    }
  ],
  updates: [
    {
      date: 'July 15, 2024',
      title: 'Student Success Stories',
      content: 'Students from equipped schools scored 40% higher in state exams compared to previous years. The digital learning initiative is showing remarkable results in student engagement and academic performance.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      date: 'June 30, 2024',
      title: 'Teacher Training Program Completed',
      content: 'Successfully completed training 50 teachers across 15 schools in digital pedagogy and modern teaching methods. Teachers report increased confidence and student engagement.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      date: 'June 22, 2024',
      title: 'Campaign Successfully Completed',
      content: 'Thanks to 247 incredible supporters, we not only met our goal but exceeded it by 75%! This success has enabled us to expand the program and create a lasting impact on rural education.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ],
  tags: ['Education', 'Technology', 'Rural Development', 'Digital Literacy', 'Maharashtra']
};

// Additional sample stories for different categories
export const sampleMedicalStory: ChampionStory = {
  id: '2',
  title: 'Bringing Healthcare to Remote Villages',
  organizer: 'Dr. Arjun Patel',
  organizerBio: 'Dr. Patel is a medical professional who has dedicated his career to rural healthcare. He has organized mobile medical camps that have served over 10,000 patients.',
  location: 'Udaipur, Rajasthan',
  category: 'Healthcare',
  impact: '2,000 Patients',
  successRate: '140%',
  supporters: 156,
  status: 'Ongoing Impact',
  goalAmount: '₹8,00,000',
  raisedAmount: '₹11,20,000',
  startDate: 'March 1, 2024',
  completionDate: 'August 15, 2024',
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  storyContent: '<p>Healthcare access in remote Rajasthan villages was limited, with the nearest hospital hours away...</p>',
  milestones: [
    {
      date: 'Mar 1, 2024',
      title: 'Mobile Clinic Launch',
      description: 'Started mobile medical camps in 10 remote villages',
      amount: '₹0',
      percentage: 0
    }
  ],
  impactStats: [
    {
      icon: 'Users',
      label: 'Patients Treated',
      value: '2,000+',
      description: 'Medical consultations'
    },
    {
      icon: 'Heart',
      label: 'Lives Saved',
      value: '50+',
      description: 'Critical interventions'
    }
  ],
  updates: [],
  tags: ['Healthcare', 'Rural', 'Medical Camps', 'Rajasthan']
};

export const sampleEnvironmentStory: ChampionStory = {
  id: '3',
  title: 'Clean Water for Coastal Communities',
  organizer: 'Kavitha Nair',
  organizerBio: 'Environmental engineer and activist working on sustainable water solutions for coastal communities in Kerala.',
  location: 'Kochi, Kerala',
  category: 'Environment',
  impact: '5 Villages',
  successRate: '200%',
  supporters: 89,
  status: 'Transformative Success',
  goalAmount: '₹15,00,000',
  raisedAmount: '₹30,00,000',
  startDate: 'February 10, 2024',
  completionDate: 'July 30, 2024',
  image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  storyContent: '<p>Coastal communities in Kerala faced severe water contamination issues due to saltwater intrusion...</p>',
  milestones: [
    {
      date: 'Feb 10, 2024',
      title: 'Project Initiated',
      description: 'Started water purification system installation in first village',
      amount: '₹0',
      percentage: 0
    }
  ],
  impactStats: [
    {
      icon: 'Users',
      label: 'Families Served',
      value: '300+',
      description: 'Clean water access'
    },
    {
      icon: 'Globe',
      label: 'Villages Covered',
      value: '5',
      description: 'Complete coverage'
    }
  ],
  updates: [],
  tags: ['Environment', 'Water', 'Sustainability', 'Kerala', 'Coastal']
};

// Additional sample stories for the browse champions page
export const sampleStory4: ChampionStory = {
  id: '4',
  title: 'Educational Infrastructure for Underprivileged Children',
  organizer: 'Prof. Amit Kumar',
  organizerBio: 'Professor Amit Kumar is an education policy researcher with 15+ years of experience in developing rural educational infrastructure. He has successfully established learning centers in over 20 villages.',
  location: 'Pune, Maharashtra',
  category: 'Education',
  impact: '500 Students',
  successRate: '200%',
  supporters: 312,
  status: 'Milestone Achieved',
  goalAmount: '₹5,00,000',
  raisedAmount: '₹10,00,000',
  startDate: 'January 10, 2024',
  completionDate: 'September 15, 2024',
  image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  storyContent: '<p>Educational inequality in rural Maharashtra villages prompted Prof. Amit Kumar to launch this comprehensive infrastructure development initiative...</p>',
  milestones: [
    {
      date: 'Jan 10, 2024',
      title: 'Project Initiation',
      description: 'Infrastructure assessment and community engagement began',
      amount: '₹0',
      percentage: 0
    },
    {
      date: 'Sep 15, 2024',
      title: 'Project Completion',
      description: 'All 5 learning centers operational with 500 students enrolled',
      amount: '₹10,00,000',
      percentage: 200
    }
  ],
  impactStats: [
    { icon: 'Users', label: 'Students Enrolled', value: '500+', description: 'Active learners' },
    { icon: 'Trophy', label: 'Success Rate', value: '200%', description: 'Target exceeded' },
    { icon: 'Heart', label: 'Community Support', value: '312', description: 'Local supporters' },
    { icon: 'Globe', label: 'Learning Centers', value: '5', description: 'Operational facilities' }
  ],
  updates: [],
  tags: ['Education', 'Infrastructure', 'Rural Development', 'Maharashtra']
};

export const sampleStory5: ChampionStory = {
  id: '5',
  title: 'Clean Water Access Initiative',
  organizer: 'Mrs. Sunita Reddy',
  organizerBio: 'Environmental engineer with specialization in water purification systems. Has implemented sustainable water solutions across 15 villages in Telangana.',
  location: 'Hyderabad, Telangana',
  category: 'Environment',
  impact: '2,000 Individuals',
  successRate: '175%',
  supporters: 256,
  status: 'Community Impact Achieved',
  goalAmount: '₹5,00,000',
  raisedAmount: '₹8,75,000',
  startDate: 'February 1, 2024',
  completionDate: 'August 30, 2024',
  image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  storyContent: '<p>Water scarcity and contamination issues in rural Telangana communities led Mrs. Sunita Reddy to develop this comprehensive clean water access program...</p>',
  milestones: [
    {
      date: 'Feb 1, 2024',
      title: 'Program Launch',
      description: 'Water quality assessment and community needs analysis',
      amount: '₹0',
      percentage: 0
    },
    {
      date: 'Aug 30, 2024',
      title: 'Full Implementation',
      description: 'Clean water access established for 2,000 individuals across 3 villages',
      amount: '₹8,75,000',
      percentage: 175
    }
  ],
  impactStats: [
    { icon: 'Users', label: 'Lives Improved', value: '2,000+', description: 'Clean water access' },
    { icon: 'Trophy', label: 'Success Rate', value: '175%', description: 'Exceeded expectations' },
    { icon: 'Heart', label: 'Supporters', value: '256', description: 'Community backing' },
    { icon: 'Globe', label: 'Villages Served', value: '3', description: 'Complete coverage' }
  ],
  updates: [],
  tags: ['Environment', 'Water', 'Sustainability', 'Telangana']
};

// Export all sample stories
export const sampleChampionStories: ChampionStory[] = [
  sampleChampionStory,
  sampleMedicalStory,
  sampleEnvironmentStory,
  sampleStory4,
  sampleStory5
]; 