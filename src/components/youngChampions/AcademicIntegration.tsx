import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target, BookOpen, Globe } from 'lucide-react';

const academicBenefits = [
  {
    icon: BookOpen,
    title: "IB/CAS Requirements",
    description: "Fulfill Creativity, Activity, and Service requirements with verified impact projects",
    points: ["Service Learning", "Community Engagement", "Reflection Documentation", "Portfolio Development"]
  },
  {
    icon: Award,
    title: "University Applications",
    description: "Stand out in college applications with documented leadership and social impact experience",
    points: ["Leadership Development", "Global Perspective", "Community Service Hours", "Impact Documentation"]
  },
  {
    icon: Users,
    title: "Skill Development",
    description: "Build essential 21st-century skills through hands-on project management",
    points: ["Project Management", "Communication", "Problem Solving", "Cultural Awareness"]
  },
  {
    icon: Target,
    title: "Measurable Impact",
    description: "Track and document real-world impact for academic portfolios and applications",
    points: ["Impact Metrics", "Beneficiary Stories", "Before/After Documentation", "Quantitative Results"]
  }
];

const successStories = [
  {
    name: "Priya Sharma",
    school: "International School of Mumbai",
    project: "Digital Literacy for Rural Women",
    impact: "Trained 150 women in digital skills",
    achievement: "Accepted to Stanford University"
  },
  {
    name: "Arjun Patel",
    school: "Delhi International School",
    project: "Clean Water Initiative",
    impact: "Provided clean water to 500 families",
    achievement: "Won National Youth Award"
  },
  {
    name: "Sofia Chen",
    school: "Singapore International School",
    project: "Mental Health Awareness",
    impact: "Reached 1000+ students with mental health resources",
    achievement: "Featured in Times of India"
  }
];

export default function AcademicIntegration() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academic{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Integration
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your social impact projects into powerful academic assets. 
            Meet curriculum requirements while making a real difference.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {academicBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{story.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{story.school}</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="font-semibold text-blue-800">Project:</p>
                      <p className="text-blue-700">{story.project}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="font-semibold text-green-800">Impact:</p>
                      <p className="text-green-700">{story.impact}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="font-semibold text-purple-800">Achievement:</p>
                      <p className="text-purple-700">{story.achievement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Choose Project", desc: "Select from verified impact projects or create custom ones" },
              { step: "2", title: "Get Started", desc: "Connect with NGOs and begin your impact journey" },
              { step: "3", title: "Track Progress", desc: "Document your journey with our tracking tools" },
              { step: "4", title: "Document Impact", desc: "Generate reports for academic portfolios" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
