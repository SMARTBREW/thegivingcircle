import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Users, Shield, Coins, Camera, Award, MessageCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  icon: React.ReactNode;
  delay: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon, delay, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="border-b border-gray-200 py-6"
    >
      <motion.button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center text-white shadow-sm">
              <div className="w-5 h-5">
                {icon}
              </div>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-medium text-gray-800 pr-4 group-hover:text-gray-600 transition-colors duration-200">
            {question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-gray-600 transition-colors duration-200" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 pl-14">
              <p className="text-base text-gray-600 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      icon: <HelpCircle className="w-full h-full" />,
      question: "What defines a Giving Circle Champion and how can I participate?",
      answer: "A Giving Circle Champion is an individual committed to creating meaningful change through philanthropic advocacy. To become a Champion, complete our formal application process, detailing your professional background and areas of interest. Upon approval, you'll be connected with our verified non-profit partners to create sustainable impact across sectors including healthcare, education, social welfare, and environmental conservation."
    },
    {
      icon: <Shield className="w-full h-full" />,
      question: "How does The Giving Circle ensure proper stewardship of contributions?",
      answer: "We maintain rigorous due diligence protocols for all partner organizations, including comprehensive legal compliance verification, financial audit reviews, and regular impact assessments. Our governance structure implements ongoing monitoring through site evaluations, beneficiary feedback collection, and transparent reporting mechanisms. All initiatives are meticulously documented with photographic evidence, progress reports, and testimonials from beneficiaries."
    },
    {
      icon: <Coins className="w-full h-full" />,
      question: "What are Impact Certificates and what significance do they hold?",
      answer: "Impact Certificates are formal documentation of your tangible contributions to social change. Each certificate represents verifiable outcomes—such as educational scholarships funded, healthcare services provided, or environmental initiatives supported. These serve as authenticated records of your philanthropic legacy and can be shared with your personal or professional network as evidence of your commitment to social responsibility."
    },
    {
      icon: <Camera className="w-full h-full" />,
      question: "How is impact verification conducted for each initiative?",
      answer: "Each supported initiative undergoes a structured documentation process including baseline assessment, implementation monitoring, and outcome evaluation. Our field representatives collaborate with partner organizations to capture comprehensive evidence, including pre-implementation conditions, progress milestones, and final outcomes. This information undergoes verification by our impact assessment committee before being formalized in your impact records."
    },
    {
      icon: <Users className="w-full h-full" />,
      question: "May I designate specific causes or regions for my support?",
      answer: "Certainly. During your onboarding process, you'll have the opportunity to indicate your preferred focus areas from categories including healthcare accessibility, educational advancement, environmental sustainability, and community development. You may specify geographical preferences, organizational partnerships, or particular demographic groups you wish to support. These preferences guide our matching process."
    },
    {
      icon: <Award className="w-full h-full" />,
      question: "What follows the receipt of my Impact Certificate?",
      answer: "Your Impact Certificate becomes part of your philanthropic portfolio within The Giving Circle community. You'll receive periodic updates regarding the ongoing influence of your contribution, including detailed progress reports and outcome analyses. These certificates serve as a testament to your commitment to creating sustainable change and may be shared with your professional and personal networks."
    },
    {
      icon: <MessageCircle className="w-full h-full" />,
      question: "How can I remain engaged with The Giving Circle community?",
      answer: "You'll receive regular communications including quarterly progress reports, impact assessments, and community updates. Our Champions' Forum provides opportunities to connect with fellow philanthropists, exchange insights, and discover collaborative initiatives. The Giving Circle hosts periodic events, both virtual and in-person, to facilitate meaningful discussions and celebrate collective achievements in philanthropy."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Frequently Asked{' '}
            <span className="text-gray-700">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Essential information regarding The Giving Circle Champion program and creating verified philanthropic impact.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          className="mb-16 bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              icon={item.icon}
              delay={index * 0.1}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </motion.div>

        {/* Additional Questions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div 
            className="bg-white rounded-lg p-10 border border-gray-200 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Additional Inquiries
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our dedicated team is available to provide comprehensive information about The Giving Circle Champion program. Please reach out for personalized consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = 'mailto:support@thegivingcircle.org'}
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
              >
                Contact Our Team
              </button>
              <button
                onClick={() => window.location.href = '/champion-application'}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-all duration-200"
              >
                Begin Application Process
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;