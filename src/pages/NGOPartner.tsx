import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../components/ui/PrimaryButton';

interface NGOFormData {
  organizationName: string;
  email: string;
  contactPersonName: string;
  phoneNumber: string;
}

export const NGOPartner: React.FC = () => {
  const [formData, setFormData] = useState<NGOFormData>({
    organizationName: '',
    email: '',
    contactPersonName: '',
    phoneNumber: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('NGO Form submitted:', formData);
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br-gray-100" />

      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Form Card */}
        <motion.div 
          className="w-full max-w-2xl"
          variants={formVariants}
        >
          <motion.div 
            className="bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-200"
          >
            {/* Success Message */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
                >
                  Application Submitted{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Successfully!
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                >
                  Thank you for your interest in partnering with The Giving Circle. Our team will review your application and contact you within 48 hours.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                >
                  <button
                    onClick={() => window.location.href = '/'}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all font-semibold text-sm sm:text-base"
                  >
                    Return to Home
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm sm:text-base"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6"
                >
                  You'll receive confirmation details at <span className="font-medium">{formData.email}</span>
                </motion.p>
              </motion.div>
            ) : (
              // Original Form Content
              <>
                <div className="text-center mb-6 sm:mb-8 md:mb-10">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <img 
                      src="/Giving Circle logo.png" 
                      alt="Giving Circle Logo" 
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                    />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Join as{' '}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      NGO Partner
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">Connect with passionate champions who want to support your cause</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Organization Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Organization Name *</label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                      placeholder="Enter your organization name"
                      required
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                      placeholder="Enter your email address"
                      required
                    />
                  </motion.div>

                  {/* Contact Person Name and Phone Number in same row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                  >
                    <div>
                      <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Contact Person Name *</label>
                      <input
                        type="text"
                        name="contactPersonName"
                        value={formData.contactPersonName}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter contact person name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Statistics */}
                  <motion.div 
                    className="text-center text-gray-600 text-sm sm:text-base font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-purple-600 font-semibold">25</span> NGOs joined our platform in the last month
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="w-full"
                  >
                    <PrimaryButton
                      type="submit"
                      disabled={!formData.organizationName || !formData.email || !formData.contactPersonName || !formData.phoneNumber}
                      className="w-full"
                      size="lg"
                    >
                      Contact Us
                    </PrimaryButton>
                  </motion.div>

                  <motion.p
                    className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    By submitting this form, you agree to be contacted by our team regarding partnership opportunities.
                  </motion.p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};