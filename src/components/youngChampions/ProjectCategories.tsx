import { motion } from 'framer-motion';
import { Heart, BookOpen, Globe, Shield, TreePine, Users } from 'lucide-react';

const projectCategories = [
  {
    icon: Heart,
    title: "Healthcare & Wellness",
    description: "Support medical camps, health awareness, and wellness programs",
    projects: ["Medical Aid", "Mental Health", "Nutrition Programs"],
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-500"
  },
  {
    icon: BookOpen,
    title: "Education & Learning",
    description: "Empower communities through education and skill development",
    projects: ["Digital Literacy", "Scholarship Programs", "Library Development"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    icon: Globe,
    title: "Environment & Climate",
    description: "Protect our planet through sustainable initiatives",
    projects: ["Clean Energy", "Waste Management", "Biodiversity Conservation"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-500"
  },
  {
    icon: Shield,
    title: "Social Justice",
    description: "Fight for equality and human rights",
    projects: ["Gender Equality", "Child Rights", "Community Safety"],
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    icon: TreePine,
    title: "Rural Development",
    description: "Transform rural communities through sustainable development",
    projects: ["Water Access", "Agricultural Support", "Infrastructure"],
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500"
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    description: "Support young people in reaching their potential",
    projects: ["Leadership Training", "Career Guidance", "Entrepreneurship"],
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-500"
  }
];

export default function ProjectCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Impact Area
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a cause that aligns with your interests and academic goals. 
            Each category offers multiple project opportunities for meaningful impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`${category.bgColor} rounded-2xl p-8 h-full border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Popular Projects:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.projects.map((project, projectIndex) => (
                      <span
                        key={projectIndex}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className={`w-full bg-gradient-to-r ${category.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Explore Projects
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
