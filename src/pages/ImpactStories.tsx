import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Users, Calendar, Heart, TrendingUp, Award, Building2 } from 'lucide-react';
import PrimaryButton from '../components/ui/PrimaryButton';

interface ImpactStory {
  id: string;
  title: string;
  description: string;
  fullStory: string;
  ngoName: string;
  location: string;
  impactNumber: number;
  impactUnit: string;
  image: string;
  stats: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  dateCompleted: string;
  category: string;
}

const ImpactStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  // Set page title and meta tags for SEO
  useEffect(() => {
    document.title = 'Impact Stories - Real Transformation Stories India | Verified Success Stories';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover inspiring impact stories and real transformation stories from across India. Read verified success stories of social change, community impact, and lives transformed through The Giving Circle. Social impact stories India showcasing women empowerment, animal welfare, disaster relief, and education transformation.');
    }
    
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Impact Stories, Social Change Stories, Success Stories, Community Impact, Verified Impact, Transformation Stories, Real Impact Stories, Success Stories India, Social impact stories, Verified impact stories, Community transformation, Measurable social impact, Impact statistics India, Lives impacted India, Social impact stories India, Real transformation stories, Verified success stories, Community impact stories, Stories of change India, Inspiring social impact stories, Real change makers India, Community transformation stories, Impactful success stories India, Women empowerment impact stories, Animal welfare success stories, Disaster relief impact stories, Education transformation stories, Healthcare impact stories');
    }
  }, []);

  // Real-life inspired impact stories with impressive numbers
  const impactStories: ImpactStory[] = [
    {
      id: '1',
      title: 'Wings of Hope: Breaking Barriers Through Menstrual Health Education',
      description: 'A women empowerment impact story - A revolutionary initiative addressing period poverty and menstrual health inequality, empowering 1,200+ women and girls with education, dignity, and sustainable solutions. A verified success story of social change.',
      fullStory: 'This women empowerment impact story began in communities across India, where menstruation was forcing girls to drop out of school and women to miss work, perpetuating cycles of poverty and inequality. The Wings of Hope initiative by JWP has created a verified transformation story through comprehensive menstrual health education and sustainable product distribution. Starting in 2022, this social impact story has reached 1,200+ women and girls across 30 communities, providing education about menstrual health, distributing reusable sanitary products, and training local women as health ambassadors. The program includes workshops on reproductive health, distribution of eco-friendly menstrual products, and community awareness campaigns. Today, 95% of beneficiary girls attend school regularly during menstruation (up from 35%), and 200+ women have been trained as health educators. This community transformation has also created livelihood opportunities for 150+ women who manufacture and distribute the reusable products, generating an average monthly income of ₹6,500. A true success story India demonstrating measurable social impact.',
      ngoName: 'JWP',
      location: 'Multiple States, India',
      impactNumber: 1200,
      impactUnit: 'Women & Girls Served',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183054/images/jwp/_DSC8339.jpg',
      stats: [
        { label: 'Women & Girls Reached', value: '1,200+', icon: <Users className="w-5 h-5" /> },
        { label: 'Communities Served', value: '30', icon: <MapPin className="w-5 h-5" /> },
        { label: 'Health Educators Trained', value: '200+', icon: <Award className="w-5 h-5" /> },
        { label: 'School Attendance Rate', value: '95%', icon: <TrendingUp className="w-5 h-5" /> }
      ],
      testimonial: {
        quote: "Before this program, I used to miss school every month and felt ashamed. Now I have dignity, knowledge, and I'm helping other girls in my community. Wings of Hope gave me my confidence back.",
        author: "Priya Sharma",
        role: "Program Participant & Health Educator"
      },
      dateCompleted: 'March 2024',
      category: 'Women Health'
    },
    {
      id: '2',
      title: 'Pawsitive Protectors: Saving Lives One Animal at a Time',
      description: 'An animal welfare success story - Volunteer-led rescues, on-ground treatment, and rehabilitation of Mumbai\'s street animals, turning distress calls into verified impact stories every single day. A real transformation story of community-driven animal care.',
      fullStory: 'This animal welfare success story showcases real change makers India at work. On any given day, our Pawsitive Protectors team receives dozens of distress calls—an injured pup trapped under a vehicle, a dehydrated dog during peak summer, a mother with wounded paws. What began in 2021 as a small community effort is now a verified impact story of coordinated city-wide response with a 24/7 helpline, mobile vet vans, and a trained volunteer network. The program operates multiple feeding stations and shelters, where injured animals receive first-aid, IV fluids, and post-operative care. Our measurable social impact speaks volumes: 7,126 vaccinations administered, over 350 stray dogs fed daily in various locations and over 400 dogs every day in our shelters, 812 emergency rescues in 2025 alone, and over 400 dogs at any point of time in our shelters receiving care and rehabilitation. Over 200 residents have been trained as community responders through this community transformation story, and countless animals have found forever homes through adoption drives. The photograph you see captures a typical field rescue—volunteers calming an anxious dog while a vet examines and prepares it for treatment. Each rescue is a promise: no animal gets left behind. A true social impact story India demonstrating lives impacted through verified community-driven change.',
      ngoName: 'Animal Care',
      location: 'Mumbai, Maharashtra',
      impactNumber: 100000,
      impactUnit: 'Animals Rescued',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183026/images/animal-protect/animal19.jpg',
      stats: [
        { label: 'Strays Vaccinated', value: '7,126', icon: <CheckCircle className="w-5 h-5" /> },
        { label: 'Caregivers vaccinated', value: '200+', icon: <Heart className="w-5 h-5" /> },
        { label: 'People Protected', value: '142,520', icon: <Users className="w-5 h-5" /> },
        { label: 'Shelter Residents', value: 'Delhi & NCR', icon: <MapPin className="w-5 h-5" /> }
      ],
      testimonial: {
        quote: "When we found Max with a broken leg, we thought we'd lost him. Thanks to Animal Care, he's now healthy and the most loved member of our family.",
        author: "Priya Sharma",
        role: "Pet Adopter"
      },
      dateCompleted: 'Ongoing since 2021',
      category: 'Animal Welfare'
    },
    {
      id: '4',
      title: 'Flood Relief Uttarakhand: Hope in the Face of Disaster',
      description: 'A disaster relief impact story - Emergency response and rehabilitation program that supported 3,000+ families during the devastating Uttarakhand floods. A verified success story of community impact and transformation.',
      fullStory: 'This disaster relief impact story demonstrates real transformation stories India when community action meets verified commitment. When unprecedented floods hit Uttarakhand in 2023, entire communities were displaced, homes destroyed, and livelihoods lost. The GUS disaster response team mobilized within 24 hours, launching the largest relief operation in the region and creating a social change story that would inspire thousands. Over 90 days, this verified impact program provided emergency shelter, food, medical aid, and psychological support to 3,000+ affected families. The relief efforts included: distributing 50,000+ food packets, setting up 15 temporary shelters, providing medical treatment to 8,000+ people, and rescuing 500+ trapped individuals. The rehabilitation phase focused on rebuilding homes, restoring livelihoods, and strengthening disaster preparedness, demonstrating measurable social impact. Today, 95% of affected families have returned to stable housing, 80% have resumed their livelihoods, and all 25 affected villages have disaster management committees. A powerful success story India showcasing lives impacted through community transformation and verified emergency response.',
      ngoName: 'GUS',
      location: 'Uttarakhand, India',
      impactNumber: 3000,
      impactUnit: 'Families Supported',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183109/images/Uttarakhand-rescue.jpg',
      stats: [
        { label: 'Families Rescued', value: '3,000+', icon: <Users className="w-5 h-5" /> },
        { label: 'Food Packets Distributed', value: '50,000+', icon: <Heart className="w-5 h-5" /> },
        { label: 'Medical Treatments', value: '8,000+', icon: <CheckCircle className="w-5 h-5" /> },
        { label: 'Homes Rebuilt', value: '450', icon: <Award className="w-5 h-5" /> }
      ],
      testimonial: {
        quote: "We lost everything in the floods, but GUS gave us hope. They didn't just help us survive, they helped us rebuild our lives stronger than before.",
        author: "Ram Singh Rawat",
        role: "Flood Survivor & Community Leader"
      },
      dateCompleted: 'January 2024',
      category: 'Disaster Relief'
    }
  ];

  // Overall platform statistics - Impact Stories India
  // const platformStats = [
  //   { label: 'Lives Impacted India', value: '50,000+', description: 'Direct beneficiaries creating verified impact stories' },
  //   { label: 'Verified Impact Stories', value: '25+', description: 'Real transformation stories from partner NGOs' },
  //   { label: 'Cause Champions', value: '500+', description: 'Real change makers India driving social impact' },
  //   { label: 'Community Impact', value: '₹2.5 Cr+', description: 'Measurable social impact funding generated' },
  //   { label: 'Success Stories', value: '96%', description: 'Verified success stories completed' },
  //   { label: 'Community Transformation', value: '200+', description: 'Villages with social change stories' }
  // ];

  return (
    <div className="min-h-screen">
      {/* Impact Stories Section */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 mt-8 sm:mt-10 sm:mb-4 md:mb-6 break-words">
              Impact Stories - Real Transformation Stories India
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed break-words">
              Discover verified success stories and inspiring social change stories from across India. Behind every statistic is a human story of community transformation, hope, and measurable social impact. These are real impact stories showcasing lives impacted India through verified causes and community-driven change.
            </p>
          </motion.div>
        </div>

        {/* Stories - Natural Flow Layout */}
        <div className="space-y-0">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`w-full py-6 sm:py-8 md:py-10 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center`}>
                  {/* Image Section */}
                  <div className="lg:w-1/2 w-full">
                    <div className="relative">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                      />
                      <div className="absolute top-2 sm:top-3 md:top-4 lg:top-6 left-2 sm:left-3 md:left-4 lg:left-6">
                        <span className="bg-green-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium flex items-center shadow-lg">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          Verified Impact
                        </span>
                      </div>
                      <div className="absolute top-2 sm:top-3 md:top-4 lg:top-6 right-2 sm:right-3 md:right-4 lg:right-6">
                        <span className="bg-green-700 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium break-words">
                          {story.category}
                        </span>
                      </div>
                      {/* Main Impact Number */}
                      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 left-2 sm:left-3 md:left-4 lg:left-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg">
                          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-700 break-words">{story.impactNumber.toLocaleString()}+</div>
                          <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium break-words">{story.impactUnit}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 w-full">
                    {/* NGO Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 sm:space-x-2 mb-3 sm:mb-4 md:mb-6">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-700" />
                        <span className="text-base sm:text-lg md:text-xl font-bold text-green-700 break-words">{story.ngoName}</span>
                      </div>
                      <span className="text-gray-400 hidden sm:inline">•</span>
                      <span className="text-gray-500 flex items-center text-xs sm:text-sm md:text-base break-words">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1" />
                        {story.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight break-words">
                      {story.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed break-words">
                      {story.description}
                    </p>

                    {/* Key Statistics - Inline Flow */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-6 md:mb-8">
                      {story.stats.slice(0, 4).map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="flex justify-center mb-1 sm:mb-2 text-green-700 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
                            {stat.icon}
                          </div>
                          <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-words">{stat.value}</div>
                          <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 break-words">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="border-l-4 border-green-700 pl-3 sm:pl-4 md:pl-6 mb-4 sm:mb-6 md:mb-8">
                      <div className="text-sm sm:text-base md:text-lg text-gray-700 italic mb-2 sm:mb-3 leading-relaxed break-words">
                        "{story.testimonial.quote}"
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 break-words">
                        <strong>{story.testimonial.author}</strong> - {story.testimonial.role}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-0 text-[10px] sm:text-xs md:text-sm text-gray-500 pt-3 sm:pt-4 border-t border-gray-200">
                      <div className="flex items-center break-words">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {story.dateCompleted}
                      </div>
                      <PrimaryButton 
                        onClick={() => setSelectedStory(selectedStory === story.id ? null : story.id)}
                        variant="secondary"
                        size="sm"
                        className="text-[10px] sm:text-xs md:text-sm w-full sm:w-auto"
                        aria-label={`Read full ${story.category.toLowerCase()} impact story - ${story.title}`}
                      >
                        {selectedStory === story.id ? 'Show Less' : 'Read Full Story'}
                      </PrimaryButton>
                    </div>

                    {/* Full Story - Expandable */}
                    {selectedStory === story.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-gray-200"
                      >
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed break-words">
                          {story.fullStory}
                        </p>
                      </motion.div>
                    )}
                  </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

    </div>
  );
};

export default ImpactStories;