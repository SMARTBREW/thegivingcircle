import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Building2, Mail, User, Phone, Send, MapPin } from 'lucide-react';
import PrimaryButton from '../components/ui/PrimaryButton';
import { ApiClient } from '../utils/api';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Select from 'react-select';
import countries from 'world-countries';

interface NGOFormData {
  organizationName: string;
  email: string;
  contactPersonName: string;
  phoneNumber: string;
  country: string;
}

export const NGOPartner: React.FC = () => {
  const [formData, setFormData] = useState<NGOFormData>({
    organizationName: '',
    email: '',
    contactPersonName: '',
    phoneNumber: '',
    country: 'in' // India ISO code
  });

  // Countries data for react-select using world-countries library
  const countryOptions = useMemo(() => {
    return countries
      .map(country => ({
        value: country.cca2.toLowerCase(),
        label: country.name.common,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string>('');

  // Generate a daily number between 1-5 that changes each day
  const getDailyPartnerCount = () => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // YYYY-MM-DD format
    // Use date string as seed for consistent daily number
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
      hash = ((hash << 5) - hash) + dateString.charCodeAt(i);
      hash = hash & hash; // Convert to 32-bit integer
    }
    // Generate number between 1-5
    return Math.abs(hash % 5) + 1;
  };

  const dailyPartnerCount = getDailyPartnerCount();

  // Set page title and meta tags for SEO
  useEffect(() => {
    document.title = 'Become Partner - Join Verified Partner Network India | NGO Partnership';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Become a partner with The Giving Circle - Join our verified partner platform India. Partner registration for NGOs to collaborate with verified partners and connect with Cause Champions. Learn how to become partner India, explore partnership benefits, and join our trusted partner network. Partner onboarding process for verified partners India.');
    }
    
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Become Partner, Partnership, Partner with Giving Circle, Partner Registration, Verified Partner Platform, Collaboration, Join as Partner, Partner Onboarding, Verified Partners India, Trusted partners, Partner transparency India, Partner verification platform, How to become partner India, Partner with social impact platform, Partner registration process, Verified partner platform India, Join verified partner network, Partnership benefits, Collaborate with verified partners, Partner onboarding process, Join partner network India');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountryChange = (selectedOption: any) => {
    setFormData(prev => ({
      ...prev,
      country: selectedOption ? selectedOption.value : ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await ApiClient.submitNGOApplication({
        organizationName: formData.organizationName,
        email: formData.email,
        contactPersonName: formData.contactPersonName,
        phoneNumber: formData.phoneNumber,
        country: formData.country,
      });

      if (result.success) {
        setSubmittedEmail(formData.email);
        setIsSubmitted(true);
        // Reset form
        setFormData({
          organizationName: '',
          email: '',
          contactPersonName: '',
          phoneNumber: '',
          country: 'in',
        });
      } else {
        setError(result.message || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br-gray-100" />

      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12"
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
            className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200"
          >
            {/* Form Content */}
            <>
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                  <img 
                    src="/Giving Circle logo.png" 
                    alt="Giving Circle Logo - Verified Partner Platform India" 
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>

                {!isSubmitted && (
                  <div className="text-center mb-4 sm:mb-6 md:mb-8">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 break-words">Become Partner - Join Verified Partner Network India</h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed break-words">Partner with Giving Circle to connect with passionate Cause Champions. Join as partner in our verified partner platform India and collaborate with verified partners. Start your partner registration today.</p>
                  </div>
                )}

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-4 sm:p-6 md:p-8 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <div className="text-green-600 text-4xl sm:text-5xl mb-3 sm:mb-4">✓</div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">Success!</h2>
                    <p className="text-sm sm:text-base text-gray-600 break-words">
                      Thank you for your interest in partnering with The Giving Circle. Our team will reach out to you asap.
                    </p>
                  </motion.div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
                  {/* Organization Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700 mb-2">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-sm sm:text-base"
                      placeholder="Enter your NGO organization name"
                      required
                      aria-label="Enter your NGO organization name for partner registration"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-sm sm:text-base"
                      placeholder="Enter your email address"
                      required
                    />
                  </motion.div>

                  {/* Contact Person Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      name="contactPersonName"
                      value={formData.contactPersonName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-sm sm:text-base"
                      placeholder="Enter contact person name"
                      required
                    />
                  </motion.div>

                  {/* Phone Number */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      Phone Number *
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="IN"
                      value={formData.phoneNumber}
                      onChange={(value) => setFormData(prev => ({ ...prev, phoneNumber: value || '' }))}
                      className="w-full"
                      placeholder="Enter phone number"
                      withCountryCallingCode
                    />
                  </motion.div>

                  {/* Country */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      Country *
                    </label>
                    <Select
                      options={countryOptions}
                      value={countryOptions.find(option => option.value === formData.country)}
                      onChange={handleCountryChange}
                      isSearchable
                      placeholder="Select country"
                      className="react-select-container"
                      classNamePrefix="react-select"
                      styles={{
                        control: (base) => ({
                          ...base,
                          borderColor: '#d1d5db',
                          borderRadius: '0.5rem',
                          padding: '0.25rem',
                          minHeight: '44px',
                          fontSize: '0.875rem',
                          '@media (min-width: 640px)': {
                            minHeight: '48px',
                            fontSize: '1rem',
                          },
                          '&:hover': {
                            borderColor: '#d1d5db',
                          },
                        }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isSelected ? '#15803d' : state.isFocused ? '#dcfce7' : 'white',
                          color: state.isSelected ? 'white' : '#374151',
                          fontSize: '0.875rem',
                          '@media (min-width: 640px)': {
                            fontSize: '1rem',
                          },
                          '&:hover': {
                            backgroundColor: state.isSelected ? '#15803d' : '#dcfce7',
                          },
                        }),
                        placeholder: (base) => ({
                          ...base,
                          color: '#9ca3af',
                          fontSize: '0.875rem',
                          '@media (min-width: 640px)': {
                            fontSize: '1rem',
                          },
                        }),
                        input: (base) => ({
                          ...base,
                          fontSize: '0.875rem',
                          '@media (min-width: 640px)': {
                            fontSize: '1rem',
                          },
                        }),
                        singleValue: (base) => ({
                          ...base,
                          fontSize: '0.875rem',
                          '@media (min-width: 640px)': {
                            fontSize: '1rem',
                          },
                          color: '#374151',
                        }),
                      }}
                    />
                  </motion.div>

                  {/* Statistics */}
                  <motion.div 
                    className="text-center text-gray-600 text-sm sm:text-base font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-green-600 font-semibold">{dailyPartnerCount}+</span> Verified Partners India joined our trusted partner network in the last month. <span className="block mt-2 text-xs sm:text-sm break-words">Join verified partner platform India and become partner today!</span>
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
                      disabled={!formData.organizationName || !formData.email || !formData.contactPersonName || !formData.phoneNumber || !formData.country || isSubmitting}
                      className="w-full text-sm sm:text-base"
                      size="lg"
                      icon={isSubmitting ? <Send className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" /> : <Send className="w-3 h-3 sm:w-4 sm:h-4" />}
                      aria-label="Submit partner registration to become partner with verified partner platform India"
                    >
                      {isSubmitting ? 'Submitting...' : 'Start Partner Registration'}
                    </PrimaryButton>
                  </motion.div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-full p-2 sm:p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs sm:text-sm break-words"
                    >
                      {error}
                    </motion.div>
                  )}

                 
                </form>
                )}
            </>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};