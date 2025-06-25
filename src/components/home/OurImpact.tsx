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
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'Education',
      description: 'Empowering children through quality education and skill development programs.',
      position: { top: '25%', left: '32%' },
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      id: 'healthcare',
      icon: <Stethoscope className="w-5 h-5" />,
      title: 'Healthcare',
      description: 'Providing essential medical care and health services to underserved communities.',
      position: { top: '40%', left: '25%' },
      color: 'bg-red-500 hover:bg-red-600',
    },
    {
      id: 'water',
      icon: <Droplets className="w-5 h-5" />,
      title: 'Clean Water',
      description: 'Ensuring access to clean and safe drinking water for rural communities.',
      position: { top: '65%', left: '23%' },
      color: 'bg-cyan-500 hover:bg-cyan-600',
    },
    {
      id: 'shelter',
      icon: <Building2 className="w-5 h-5" />,
      title: 'Shelter & Housing',
      description: 'Building homes and providing safe shelter for homeless families.',
      position: { top: '40%', left: '55%' },
      color: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      id: 'women',
      icon: <Users className="w-5 h-5" />,
      title: 'Women Empowerment',
      description: 'Supporting women through skill training and entrepreneurship programs.',
      position: { top: '50%', left: '67%' },
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      id: 'environment',
      icon: <TreePine className="w-5 h-5" />,
      title: 'Environment',
      description: 'Protecting nature through tree plantation and conservation initiatives.',
      position: { top: '55%', left: '45%' },
      color: 'bg-green-500 hover:bg-green-600',
    },
  ];

  const impactStats: ImpactStat[] = [
    {
      value: '4,21,908',
      label: 'members contributing monthly',
      icon: <Users className="w-8 h-8" />,
      color: 'text-blue-600',
    },
    {
      value: '670+',
      label: 'children have been saved',
      icon: <Shield className="w-8 h-8" />,
      color: 'text-green-600',
    },
    {
      value: '₹25 million+',
      label: 'raised for patients',
      icon: <Heart className="w-8 h-8" />,
      color: 'text-red-600',
    },
    {
      value: '540',
      label: 'life-changing treatments funded',
      icon: <Stethoscope className="w-8 h-8" />,
      color: 'text-purple-600',
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
            "I was powerless against my daughter's cancer & I could not afford treatment. When I found out that kind strangers
            contributed Rs 31 lakh for her life-saving transplant, I cried tears of relief. Without them, I would have lost Zoya."
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 mt-2"
          >
            - Shanu (Mother of 5-year-old Zoya)
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
                src="/india.jpg"
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
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15 }}
                    className={`relative w-14 h-14 ${cause.color} text-white rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300 border-4 border-white`}
                    onMouseEnter={() => setHoveredCause(cause.id)}
                    onMouseLeave={() => setHoveredCause(null)}
                  >
                    <div className="relative z-10">
                      {cause.icon}
                    </div>
                    <div className="absolute inset-0 rounded-full animate-ping bg-white opacity-25" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent" />
                    
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
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${stat.color} mb-4 p-3 rounded-full bg-opacity-10`}>
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
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