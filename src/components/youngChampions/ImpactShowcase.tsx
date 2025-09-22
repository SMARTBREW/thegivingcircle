import { motion } from 'framer-motion';
import { TrendingUp, Users, Heart, Award, Target, Globe } from 'lucide-react';

const impactStats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Students Engaged",
    description: "Young changemakers making a difference",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    value: "₹50L+",
    label: "Funds Raised",
    description: "Direct impact on communities",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Target,
    value: "150+",
    label: "Projects Completed",
    description: "Verified impact initiatives",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Globe,
    value: "25+",
    label: "Cities Reached",
    description: "Pan-India impact network",
    color: "from-green-500 to-emerald-500"
  }
];

const featuredProjects = [
  {
    title: "Digital Literacy for Rural Women",
    category: "Education",
    impact: "Trained 500+ women in digital skills",
    location: "Maharashtra",
    students: "15 students from 3 IB schools",
    duration: "6 months",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Clean Water Initiative",
    category: "Environment",
    impact: "Provided clean water to 1000+ families",
    location: "Rajasthan",
    students: "12 students from 2 international schools",
    duration: "8 months",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Mental Health Awareness",
    category: "Healthcare",
    impact: "Reached 2000+ students with mental health resources",
    location: "Delhi NCR",
    students: "20 students from 4 schools",
    duration: "4 months",
    image: "/api/placeholder/400/300"
  }
];

const testimonials = [
  {
    name: "Ananya Singh",
    school: "Dhirubhai Ambani International School",
    quote: "This platform helped me fulfill my CAS requirements while making real impact. The documentation tools made it easy to track my progress.",
    project: "Education for Underprivileged Children",
    rating: 5
  },
  {
    name: "Rohan Mehta",
    school: "American School of Bombay",
    quote: "The mentorship and guidance I received helped me develop leadership skills that I'll use throughout my life.",
    project: "Environmental Conservation",
    rating: 5
  },
  {
    name: "Kavya Reddy",
    school: "International School of Bangalore",
    quote: "Working on real projects gave me a perspective I never had. It changed how I see the world and my role in it.",
    project: "Women's Empowerment",
    rating: 5
  }
];

export default function ImpactShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how young champions are creating measurable change across India
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            What Students Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.school}</div>
                    <div className="text-sm text-purple-600 font-semibold mt-1">{testimonial.project}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
