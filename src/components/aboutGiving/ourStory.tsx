import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Shield } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const Value: React.FC<ValueProps> = ({ icon, title, description, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
  >
    <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function SimplifiedAboutPage() {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Transparency",
      description: "Every donation is tracked with complete visibility. We believe in radical transparency from donation to impact measurement.",
      color: "bg-blue-500",
      delay: 0.1
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Impact Focus",
      description: "We measure success by lives transformed, not funds raised. Every project demonstrates measurable, lasting change.",
      color: "bg-purple-500",
      delay: 0.2
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Community",
      description: "We believe in the power of collective action to create change that no individual could achieve alone.",
      color: "bg-green-500",
      delay: 0.3
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Excellence",
      description: "We hold ourselves to the highest standards, continuously improving our platform to serve better.",
      color: "bg-orange-500",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/Smileshero.jpg" 
            alt="Our Mission - Creating Verified Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 max-w-2xl mx-auto">
            Bridging the gap between good intentions and verified impact
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple question to a revolutionary platform transforming philanthropy
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Founded in 2023, we started with a simple question: "How can we make social impact 
                  more transparent and verifiable?" After witnessing countless well-intentioned donations 
                  disappear into organizational overhead, we knew there had to be a better way.
                </p>
                <p className="text-lg leading-relaxed">
                  Our breakthrough came when we realized that blockchain technology could create permanent, 
                  immutable records of impact stories. By partnering with verified NGOs and documenting 
                  every project from start to finish, we've created accountability in philanthropy.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, thousands of champions trust us to turn their compassion into verified change through our partnerships with JWP, Animal Care, KHUSHII, and GUS.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
}