import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Mail, User, Phone, Send } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format email body with organized structure and icons
    const emailBody = `🏢 New NGO Partnership Inquiry

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 ORGANIZATION DETAILS

🏛️ Organization Name: ${formData.organizationName}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT INFORMATION

📧 Email: ${formData.email}
👨‍💼 Contact Person: ${formData.contactPersonName}
📞 Phone Number: ${formData.phoneNumber}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    // Create mailto link
    const subject = encodeURIComponent('New NGO Partnership Inquiry - The Giving Circle');
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:hello@thegivingcircle.in?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset submitting state after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
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
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12"
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
            className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-200"
          >
            {/* Form Content */}
            <>
                <div className="text-center mb-6 sm:mb-8">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/Giving Circle logo.png" 
                      alt="Giving Circle Logo" 
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Join as NGO Partner</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">Connect with passionate champions who want to support your cause</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Organization Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                      <Building2 className="w-5 h-5 text-green-600" />
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
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
                    <label className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                      <Mail className="w-5 h-5 text-green-600" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                      placeholder="Enter your email address"
                      required
                    />
                  </motion.div>

                  {/* Contact Person Name and Phone Number in same row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div>
                      <label className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                        <User className="w-5 h-5 text-green-600" />
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        name="contactPersonName"
                        value={formData.contactPersonName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                        placeholder="Enter contact person name"
                        required
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                        <Phone className="w-5 h-5 text-green-600" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Statistics */}
                  <motion.div 
                    className="text-center text-gray-600 text-base font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-green-600 font-semibold">25</span> NGOs joined our platform in the last month
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
                      disabled={!formData.organizationName || !formData.email || !formData.contactPersonName || !formData.phoneNumber || isSubmitting}
                      className="w-full"
                      size="lg"
                      icon={isSubmitting ? <Send className="w-4 h-4 animate-pulse" /> : <Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Opening Email...' : 'Contact Us'}
                    </PrimaryButton>
                  </motion.div>

                  <motion.p
                    className="text-sm text-gray-500 text-center mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    By clicking "Contact Us", your email client will open with a pre-filled message. Please review and send the email to complete your partnership inquiry.
                  </motion.p>
                </form>
            </>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};