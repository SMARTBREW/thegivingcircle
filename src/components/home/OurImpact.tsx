import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  GraduationCap, 
  Droplets, 
  Stethoscope, 
  Building2, 
  Users, 
  TreePine, 
  Shield,
  MapPin 
} from 'lucide-react';

interface CauseIcon {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  position: { top: string; left: string };
  color: string;
}

interface ImpactStat {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

export const OurImpact: React.FC = () => {
  const [hoveredCause, setHoveredCause] = useState<string | null>(null);

  const causeIcons: CauseIcon[] = [
    {
      id: 'education',
      icon: <GraduationCap />,
      title: 'Education',
      description: 'Empowering children through quality education and skill development programs.',
      position: { top: '25%', left: '32%' },
      color: 'bg-blue-500 text-white hover:bg-blue-600',
    },
    {
      id: 'healthcare',
      icon: <Stethoscope />,
      title: 'Healthcare',
      description: 'Providing essential medical care and health services to underserved communities.',
      position: { top: '40%', left: '25%' },
      color: 'bg-pink-500 text-white hover:bg-pink-600',
    },
    {
      id: 'water',
      icon: <Droplets />,
      title: 'Clean Water',
      description: 'Ensuring access to clean and safe drinking water for rural communities.',
      position: { top: '65%', left: '23%' },
      color: 'bg-cyan-500 text-white hover:bg-cyan-600',
    },
    {
      id: 'shelter',
      icon: <Building2 />,
      title: 'Shelter & Housing',
      description: 'Building homes and providing safe shelter for homeless families.',
      position: { top: '40%', left: '55%' },
      color: 'bg-orange-500 text-white hover:bg-orange-600',
    },
    {
      id: 'women',
      icon: <Users />,
      title: 'Women Empowerment',
      description: 'Supporting women through skill training and entrepreneurship programs.',
      position: { top: '50%', left: '67%' },
      color: 'bg-purple-500 text-white hover:bg-purple-600',
    },
    {
      id: 'environment',
      icon: <TreePine />,
      title: 'Environment',
      description: 'Protecting nature through tree plantation and conservation initiatives.',
      position: { top: '55%', left: '45%' },
      color: 'bg-green-500 text-white hover:bg-green-600',
    },
  ];

  const impactStats: ImpactStat[] = [
    {
      value: '15,000+',
      label: 'children educated annually',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'text-blue-500',
    },
    {
      value: '92%',
      label: 'of donations directly fund programs',
      icon: <Shield className="w-8 h-8" />,
      color: 'text-purple-500',
    },
    {
      value: '₹4.5 Cr+',
      label: 'raised through giving circles',
      icon: <Heart className="w-8 h-8" />,
      color: 'text-pink-500',
    },
    {
      value: '250+',
      label: 'active cause champions nationwide',
      icon: <Users className="w-8 h-8" />,
      color: 'text-green-500',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Impact
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            "The Giving Circle has transformed how we create impact together. By connecting passionate cause champions with dedicated supporters, we've built a community where every contribution makes a meaningful difference. Together, we're not just funding causes - we're building lasting change."
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 mt-2"
          >
            - The Giving Circle Community
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - India Map with Cause Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* India Map Image */}
              <img
                src="/india-removebg-preview.png"
                alt="India Map"
                className="w-full h-auto opacity-90"
              />
              
              {/* Cause Icons positioned on the map */}
              {causeIcons.map((cause, index) => (
                <div
                  key={cause.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ top: cause.position.top, left: cause.position.left }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative w-10 h-10 ${cause.color} text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 border-2 border-gray-300`}
                    onMouseEnter={() => setHoveredCause(cause.id)}
                    onMouseLeave={() => setHoveredCause(null)}
                  >
                    <div className="relative z-10">
                      {React.cloneElement(cause.icon as React.ReactElement, { className: "w-4 h-4" })}
                    </div>
                    
                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredCause === cause.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-2xl border border-gray-200 z-20 w-72"
                        >
                          <div className="flex items-center mb-2">
                            <MapPin className="w-4 h-4 text-gray-600 mr-2" />
                            <h4 className="font-semibold text-gray-900">{cause.title}</h4>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {cause.description}
                          </p>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Impact Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-gray-50">
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-black text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of monthly contributors providing urgent medical care.
          </p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contribute Monthly
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}; 