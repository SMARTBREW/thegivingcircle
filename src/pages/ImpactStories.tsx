import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Users, Calendar, Heart, Star, TrendingUp, Award, Target, Building2 } from 'lucide-react';
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
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  // Real-life inspired impact stories with impressive numbers
  const impactStories: ImpactStory[] = [
    {
      id: '1',
      title: 'Wings of Hope: Breaking Barriers Through Menstrual Health Education',
      description: 'A revolutionary initiative addressing period poverty and menstrual health inequality, empowering 1,200+ women and girls with education, dignity, and sustainable solutions.',
      fullStory: 'In communities across India, menstruation was forcing girls to drop out of school and women to miss work, perpetuating cycles of poverty and inequality. The Wings of Hope initiative by JWP has transformed this reality through comprehensive menstrual health education and sustainable product distribution. Starting in 2022, the program has reached 1,200+ women and girls across 30 communities, providing education about menstrual health, distributing reusable sanitary products, and training local women as health ambassadors. The program includes workshops on reproductive health, distribution of eco-friendly menstrual products, and community awareness campaigns. Today, 95% of beneficiary girls attend school regularly during menstruation (up from 35%), and 200+ women have been trained as health educators. The initiative has also created livelihood opportunities for 150+ women who manufacture and distribute the reusable products, generating an average monthly income of ₹6,500.',
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
      description: 'Volunteer-led rescues, on-ground treatment, and rehabilitation of Mumbai\'s street animals—turning distress calls into recovery stories every single day.',
      fullStory: 'On any given day, our Pawsitive Protectors team receives dozens of distress calls—an injured pup trapped under a vehicle, a dehydrated dog during peak summer, a mother with wounded paws. What began in 2021 as a small community effort is now a coordinated city-wide response with a 24/7 helpline, mobile vet vans, and a trained volunteer network. The program operates multiple feeding stations and shelters, where injured animals receive first-aid, IV fluids, and post-operative care. Our impact speaks volumes: 7,126 vaccinations administered, over 350 stray dogs fed daily in various locations and over 400 dogs every day in our shelters, 812 emergency rescues in 2025 alone, and over 400 dogs at any point of time in our shelters receiving care and rehabilitation. Over 200 residents have been trained as community responders, and countless animals have found forever homes through adoption drives. The photograph you see captures a typical field rescue—volunteers calming an anxious dog while a vet examines and prepares it for treatment. Each rescue is a promise: no animal gets left behind.',
      ngoName: 'Animal Care',
      location: 'Mumbai, Maharashtra',
      impactNumber: 2500,
      impactUnit: 'Animals Rescued',
      image: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1758183026/images/animal-protect/animal19.jpg',
      stats: [
        { label: 'Vaccinations', value: '7,126', icon: <CheckCircle className="w-5 h-5" /> },
        { label: 'Dogs Fed Daily', value: '350+', icon: <Heart className="w-5 h-5" /> },
        { label: 'Emergency Rescues (2025)', value: '812', icon: <Users className="w-5 h-5" /> },
        { label: 'Shelter Residents', value: '400+', icon: <MapPin className="w-5 h-5" /> }
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
      description: 'Emergency response and rehabilitation program that supported 3,000+ families during the devastating Uttarakhand floods.',
      fullStory: 'When unprecedented floods hit Uttarakhand in 2023, entire communities were displaced, homes destroyed, and livelihoods lost. The GUS disaster response team mobilized within 24 hours, launching the largest relief operation in the region. Over 90 days, the program provided emergency shelter, food, medical aid, and psychological support to 3,000+ affected families. The relief efforts included: distributing 50,000+ food packets, setting up 15 temporary shelters, providing medical treatment to 8,000+ people, and rescuing 500+ trapped individuals. The rehabilitation phase focused on rebuilding homes, restoring livelihoods, and strengthening disaster preparedness. Today, 95% of affected families have returned to stable housing, 80% have resumed their livelihoods, and all 25 affected villages have disaster management committees.',
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

  // Overall platform statistics
  const platformStats = [
    { label: 'Lives Impacted', value: '50,000+', description: 'Direct beneficiaries across all programs' },
    { label: 'Active NGOs', value: '25+', description: 'Verified partner organizations' },
    // { label: 'Cause Champions', value: '500+', description: 'Dedicated supporters making a difference' },
    { label: 'Funds Raised', value: '₹2.5 Cr+', description: 'Total impact funding generated' },
    // { label: 'Success Rate', value: '96%', description: 'Projects completed successfully' },
    // { label: 'Communities', value: '200+', description: 'Villages and localities served' }
  ];

  // Auto-rotate statistics
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % platformStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [platformStats.length]);

  return (
    <div className="min-h-screen">

      {/* Impact Stories Section */}
      <section className="py-8 sm:py-10 mt-[70px] md:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Stories That{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Inspire Change
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Behind every statistic is a human story of transformation, hope, and resilience.
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
              className={`w-full py-8 sm:py-10 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-10 md:gap-12 items-center`}>
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6">
                        <span className="bg-green-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center shadow-lg">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          Verified Impact
                        </span>
                      </div>
                      <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                          {story.category}
                        </span>
                      </div>
                      {/* Main Impact Number */}
                      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-3 md:p-4 shadow-lg">
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">{story.impactNumber.toLocaleString()}+</div>
                          <div className="text-xs sm:text-sm text-gray-600 font-medium">{story.impactUnit}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2">
                    {/* NGO Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-6">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                        <span className="text-lg sm:text-xl font-bold text-purple-600">{story.ngoName}</span>
                      </div>
                      <span className="text-gray-400 hidden sm:inline">•</span>
                      <span className="text-gray-500 flex items-center text-sm sm:text-base">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                        {story.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                      {story.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                      {story.description}
                    </p>

                    {/* Key Statistics - Inline Flow */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                      {story.stats.slice(0, 4).map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="flex justify-center mb-1 sm:mb-2 text-purple-600">
                            {stat.icon}
                          </div>
                          <div className="text-lg sm:text-xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="border-l-4 border-purple-500 pl-4 sm:pl-6 mb-6 sm:mb-8">
                      <div className="text-lg text-gray-700 italic mb-2 sm:mb-3 leading-relaxed">
                        "{story.testimonial.quote}"
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        <strong>{story.testimonial.author}</strong> - {story.testimonial.role}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 text-xs sm:text-sm text-gray-500 pt-3 sm:pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {story.dateCompleted}
                      </div>
                      <PrimaryButton 
                        onClick={() => setSelectedStory(selectedStory === story.id ? null : story.id)}
                        variant="secondary"
                        size="sm"
                        className="text-xs sm:text-sm"
                      >
                        {selectedStory === story.id ? 'Show Less' : 'Read Full Story'}
                      </PrimaryButton>
                    </div>

                    {/* Full Story - Expandable */}
                    {selectedStory === story.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200"
                      >
                        <p className="text-lg text-gray-600 leading-relaxed">
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