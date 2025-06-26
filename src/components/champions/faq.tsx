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
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
              <div className="w-5 h-5">
                {icon}
              </div>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4 group-hover:text-purple-600 transition-colors duration-200">
            {question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-purple-600 transition-colors duration-200" />
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
      question: "What is an Impact Champion and how do I become one?",
      answer: "An Impact Champion is someone who creates meaningful change through our platform. Simply sign up with your mobile number, tell us about causes you care about, and start your journey. You'll be matched with verified NGO partners to create real impact in areas like education, healthcare, environment, and social welfare."
    },
    {
      icon: <Shield className="w-full h-full" />,
      question: "How do you verify NGO partners and ensure my donations are used properly?",
      answer: "All our NGO partners undergo rigorous verification including legal compliance checks, financial audits, and impact assessments. We maintain ongoing monitoring through regular site visits, beneficiary feedback, and transparent reporting. Every project is documented with photos, videos, and beneficiary testimonials before being converted to your impact NFT."
    },
    {
      icon: <Coins className="w-full h-full" />,
      question: "What are Impact NFTs and why should I care about them?",
      answer: "Impact NFTs are unique digital certificates that permanently document your real-world impact. Unlike regular NFTs, these represent verified social change - like a child's education funded, trees planted, or meals provided. They serve as permanent proof of your contribution and can be shared, displayed, or kept as a meaningful digital legacy."
    },
    {
      icon: <Camera className="w-full h-full" />,
      question: "How is my impact documented and verified?",
      answer: "Every project is thoroughly documented through multiple touchpoints: pre-project planning photos, during-execution videos, post-completion impact assessments, and direct beneficiary testimonials. Our field teams work with NGO partners to capture authentic stories, which are then verified by our impact team before being minted as your NFT."
    },
    {
      icon: <Users className="w-full h-full" />,
      question: "Can I choose which specific projects or causes to support?",
      answer: "Absolutely! During onboarding, you'll select your preferred causes from categories like education, healthcare, environment, women empowerment, and more. You can also choose specific projects, geographical areas, or even work directly with particular NGO partners. Your preferences guide how we match you with impactful opportunities."
    },
    {
      icon: <Award className="w-full h-full" />,
      question: "What happens after I receive my Impact NFT?",
      answer: "Your Impact NFT becomes part of your permanent digital impact portfolio. You can share it on social media, display it in digital galleries, or keep it as a personal reminder of your contribution. You'll also receive ongoing updates about the long-term effects of your support, creating a lasting connection to the change you've helped create."
    },
    {
      icon: <MessageCircle className="w-full h-full" />,
      question: "How can I stay updated on my impact and connect with other champions?",
      answer: "You'll receive regular updates through our platform including progress reports, beneficiary stories, and community highlights. Join our Champion community to connect with like-minded changemakers, share experiences, and discover new opportunities for impact. We also host virtual and in-person events to celebrate collective achievements."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about becoming an Impact Champion and creating verified change.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mb-20">
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
        </div>

        {/* Still Have Questions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div 
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-100"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team is here to help you understand how you can create meaningful impact. Get personalized answers to your questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = 'mailto:support@impactchampions.com'}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Contact Support
              </button>
              <button
                onClick={() => window.location.href = '/onboarding'}
                className="border-2 border-purple-200 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-200"
              >
                Start Your Journey
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};