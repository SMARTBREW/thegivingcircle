import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Users, Calendar, Heart, TrendingUp, Award, Building2 } from 'lucide-react';
import PrimaryButton from '../components/ui/PrimaryButton';
import SEOHead from '../components/SEO/SEOHead';

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
  // useEffect removed in favor of SEOHead component

  // Real-life inspired impact stories with impressive numbers
  const impactStories: ImpactStory[] = [
    {
      id: '1',
      title: 'Wings of Hope: Breaking Barriers Through Menstrual Health Education',
      description: 'A women empowerment impact story - Fighting period poverty India and menstrual hygiene inequality. Help girls stay in school by supporting menstrual education and health with our community support platform.',
      fullStory: 'This women empowerment impact story began in communities across India, where menstruation was forcing girls to drop out of school. The Wings of Hope initiative addresses period poverty India through menstrual health education and reusable pad distribution. By supporting menstrual hygiene projects, we ensure dignity for 1,200+ women and girls. Our giving community has enabled this transformation through social giving and persistent giving support.',
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
      description: 'An animal welfare success story - Stray dog vaccination programs and emergency rescues. Help us save stray dogs from rabies and provide life-saving treatment through our animal welfare NGO India.',
      fullStory: 'This animal welfare success story showcases real change makers at work. Pawsitive Protectors runs intensive stray dog vaccination programs to support the Zero Rabies Deaths mission. From rabies prevention donation drives to emergency field rescues, we turn distress calls into verified impact stories. Each rescue is a promise: no animal gets left behind in our circle of support.',
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
      description: 'A disaster relief impact story - Emergency animal rescue India and flood victim support. Join our disaster relief operations to help flood victims in Uttarakhand rebuild their lives.',
      fullStory: 'This disaster relief impact story demonstrates real transformation in high-risk zones. When floods hit Uttarakhand, our team mobilized for emergency animal rescue India and humanitarian aid. By supporting flood relief Uttarakhand, you provide emergency shelter and nutrition. We collaborate with corporate partnership for disaster relief networks to scale our impact.',
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
      <SEOHead
        title="Impact Stories - Real Change by Cause Champions | The Giving Circle"
        description="Read inspiring impact stories from verified causes and Cause Champions across India. See how community giving creates real change in animal welfare, women empowerment, education, and disaster relief. Verified transformation stories with measurable impact."
        keywords="impact stories, causes to support, community causes, community giving, community support platform, give and help, giving circle, giving platform, social giving, support social causes, community care, act of kindness, helping the poor, ngo role, role of ngo"
        canonicalUrl="https://www.thegivingcircle.in/impact-stories"
      />
      {/* Impact Stories Section */}
      <section className="pt-18 pb-6 sm:pt-22 sm:pb-8 md:pt-24 md:pb-10 lg:pt-28 lg:pb-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mt-10 sm:mb-4 md:mb-6 break-words ">
              Impact Stories - Real Transformation Stories India
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed break-words">
              Discover verified success stories and inspiring social change stories from across India. Behind every statistic is a human story of community transformation, hope, and measurable social impact. These are real impact stories showcasing lives impacted through our giving platform, verified causes, and community support platform. See how our giving community creates change through social giving, community support, and giving to community initiatives that create lasting supported causes across the india community. We are Communities for Communities, fostering india care and support of community for all.
            </p>
          </motion.div>
        </div>

        {/* Stories - Natural Flow Layout */}
        <div className="space-y-0">
          {impactStories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`w-full py-6 sm:py-8 md:py-10 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              aria-label={`Impact Story: ${story.title}`}
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
            </motion.article>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ImpactStories;