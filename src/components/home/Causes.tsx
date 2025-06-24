import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Droplets, TreePine, Users, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface CauseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
  impactCount: string;
}

const CauseCard: React.FC<CauseCardProps> = ({ icon, title, description, color, delay, impactCount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <motion.div
        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex flex-col items-center text-center h-full">
          <motion.div
            className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300`}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-8 h-8 text-white">
              {icon}
            </div>
          </motion.div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
            {description}
          </p>
          
          <div className="mt-auto">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg px-4 py-2 mb-3">
              <span className="text-primary-700 font-semibold text-sm">
                {impactCount} stories created
              </span>
            </div>
            
            <motion.div
              className="flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ x: 5 }}
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const CausesWeSupport: React.FC = () => {
  const causes = [
    {
      icon: <Heart className="w-full h-full" />,
      title: 'Healthcare',
      description: 'Supporting medical camps, treatments, and health awareness programs to ensure everyone has access to basic healthcare.',
      color: 'bg-red-500',
      impactCount: '1,247'
    },
    {
      icon: <GraduationCap className="w-full h-full" />,
      title: 'Education',
      description: 'Empowering communities through literacy programs, scholarships, and educational infrastructure development.',
      color: 'bg-blue-500',
      impactCount: '2,156'
    },
    {
      icon: <Droplets className="w-full h-full" />,
      title: 'Clean Water',
      description: 'Providing access to clean drinking water and sanitation facilities in underserved communities.',
      color: 'bg-cyan-500',
      impactCount: '834'
    },
    {
      icon: <TreePine className="w-full h-full" />,
      title: 'Environment',
      description: 'Protecting our planet through reforestation, waste management, and sustainable development initiatives.',
      color: 'bg-green-500',
      impactCount: '1,892'
    },
    {
      icon: <Users className="w-full h-full" />,
      title: 'Community Development',
      description: 'Building stronger communities through skill development, women empowerment, and social welfare programs.',
      color: 'bg-purple-500',
      impactCount: '956'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-800 mb-6">
            Causes We{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Support
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From healthcare to education, environment to community development - 
            discover the diverse range of causes where your support creates lasting impact.
          </p>
        </motion.div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {causes.slice(0, 4).map((cause, index) => (
            <CauseCard
              key={index}
              icon={cause.icon}
              title={cause.title}
              description={cause.description}
              color={cause.color}
              delay={index * 0.1}
              impactCount={cause.impactCount}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-indigo-600/20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Explore all the causes we support and find the one that resonates with your passion for change.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.location.href = '/causes'}
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>View All Causes</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/onboarding'}
                  className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  Become a Cause Champion
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Impact Statistics */}
        
      </div>
    </section>
  );
};