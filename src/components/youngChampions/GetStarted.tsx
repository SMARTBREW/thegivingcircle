import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Target, Award, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: "Create Your Profile",
    description: "Tell us about your interests, academic goals, and preferred impact areas",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Choose Your Project",
    description: "Browse verified projects or create a custom one that fits your requirements",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BookOpen,
    title: "Start Your Journey",
    description: "Connect with NGOs, begin your project, and track your progress",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    title: "Document & Share",
    description: "Generate reports for your academic portfolio and university applications",
    color: "from-orange-500 to-red-500"
  }
];

const benefits = [
  "Free platform access",
  "Verified NGO partnerships",
  "Academic documentation tools",
  "Mentorship and guidance",
  "Impact tracking and reporting",
  "University application support"
];

export default function GetStarted() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make Your{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Impact?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of young changemakers who are transforming their communities 
            while building their academic portfolios.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">How to Get Started</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-black py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Your Impact Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="w-full border-2 border-white/30 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-300">
                Already have an account?{' '}
                <a href="#" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                  Sign in here
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">2,500+</div>
            <div className="text-gray-300">Active Students</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-300">Completed Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
