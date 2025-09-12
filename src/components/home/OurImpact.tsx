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
      value: '4',
      label: 'verified NGO partners (JWP, Animal Care, KHUSHII, GUS)',
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
            "The Giving Circle has transformed how we create impact together. By connecting passionate cause champions with our verified NGO partners (JWP, Animal Care, KHUSHII, and GUS), we've built a community where every contribution makes a meaningful difference. Together, we're not just funding causes - we're building lasting change."
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

      

        
      </div>
    </section>
  );
}; 