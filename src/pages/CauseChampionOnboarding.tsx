import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Target, Phone } from 'lucide-react';
import PrimaryButton from '../components/ui/PrimaryButton';
import { ApiClient } from '../utils/api';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Select from 'react-select';
import countries from 'world-countries';
import SEOHead from '../components/SEO/SEOHead';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  selectedCause: string;
  agreeToTerms: boolean;
  isSubmitted: boolean;
}

const CauseChampionOnboarding: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: 'in', // India ISO code
    city: '',
    selectedCause: '',
    agreeToTerms: false,
    isSubmitted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Set page title and meta tags for SEO
  useEffect(() => {
    document.title = 'Become a Cause Champion - Start Your Giving Circle | Join Cause Champions India';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Become a Cause Champion and start your giving circle today. Join Cause Champions India to support social causes, create impact campaigns, and make a difference. Learn how to become a cause champion, start a social cause, fundraise for social impact, and create your impact campaign. Guide to becoming a cause champion in India.');
    }
    
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Become a Cause Champion, Cause Champion Onboarding, Start Your Cause, Create Impact Campaign, Join Cause Champions, Champion Registration, Start Giving Circle, Start a cause campaign, Fundraise for social impact, Create impact stories, Cause champion onboarding, Community giving platform, How to become a cause champion in India, How to start a social cause, Guide to becoming a cause champion, Create your impact campaign, Start your giving journey, Volunteer for social causes, Make a difference in India, Start your impact journey, Become a change maker India');
    }
  }, []);

  // Generate a daily number between 10-80 that changes each day
  const getDailyNumber = () => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // YYYY-MM-DD format
    // Use date string as seed for consistent daily number
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
      hash = ((hash << 5) - hash) + dateString.charCodeAt(i);
      hash = hash & hash; // Convert to 32-bit integer
    }
    // Generate number between 10-80
    return Math.abs(hash % 71) + 10;
  };

  const dailyChampionCount = getDailyNumber();


  // Countries data for react-select using world-countries library
  const countryOptions = useMemo(() => {
    return countries
      .map(country => ({
        value: country.cca2.toLowerCase(),
        label: country.name.common,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);
  // Main cause categories
  const mainCauses = [
    {
      id: 'break-barriers-girls-education',
      name: "Break Barriers to Girls' Education"
    },
    {
      id: 'end-educational-inequality',
      name: 'End Educational Inequality for Children'
    },
    {
      id: 'end-unemployment-disabled',
      name: 'End Unemployment for Disabled Persons'
    },
    {
      id: 'ensure-safe-childbirth',
      name: 'Ensure Safe Childbirth & Infant Care'
    },
    {
      id: 'eradicate-hunger-children',
      name: 'Eradicate Hunger for Children'
    },
    {
      id: 'plant-trees-climate',
      name: 'Plant Trees to Combat Climate Change'
    },
    {
      id: 'prevent-disease-animal-vaccination',
      name: 'Prevent Disease Through Animal Vaccination'
    },
    {
      id: 'provide-education-food-orphans',
      name: 'Provide Education & Food for Orphans'
    },
    {
      id: 'rescue-heal-injured-animals',
      name: 'Rescue & Heal Injured Street Animals'
    },
    {
      id: 'shelter-abandoned-animals',
      name: 'Shelter Abandoned & Abused Animals'
    }
  ];




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    if (name === 'agreeToTerms') {
      setFormData(prev => ({
        ...prev,
        agreeToTerms: checked
      }));
    }
  };


  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await ApiClient.submitCauseChampionData({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber || '',
        country: formData.country,
        city: formData.city,
        selectedCause: formData.selectedCause,
      });

      if (result.success) {
        setFormData(prev => ({ ...prev, isSubmitted: true }));
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
      <SEOHead 
        title="Become a Cause Champion | Start Your Giving Circle - The Giving Circle"
        description="Become a Cause Champion and amplify your impact. Start your giving circle, rally your community, and support verified social causes India. Join India's most transparent community giving platform and create lasting change."
        keywords="become cause champion, start giving circle, cause champion program, community fundraising India, rally for cause, amplify social impact, cause champion registration, volunteer for causes India, lead social change, community giving leader"
        canonicalUrl="https://www.thegivingcircle.in/onboarding"
      />
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />

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
            {/* Success Message */}
            {formData.isSubmitted ? (
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
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                >
                  Cause Champion Registration Successful!
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                >
                  Welcome to Cause Champions India! Thank you for starting your giving circle with us. Our team will connect with you shortly to guide you through your impact journey and help you start your social cause campaign.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm text-gray-500 mt-6"
                >
                  You'll receive confirmation details at <span className="font-medium">{formData.email}</span>
                </motion.p>
              </motion.div>
            ) : (
              // Original Form Content
              <>
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex justify-center mb-4">
                <img 
                  src="/Giving Circle logo.png" 
                  alt="Become a Cause Champion - Start Your Giving Circle India" 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Become a Cause Champion - Start Your Giving Circle</h1>
              <p className="text-base text-gray-600">Join Cause Champions India to support social causes, fundraise for social impact, and create your impact campaign. Start your giving journey and make a difference in India.</p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                  <User className="w-5 h-5 text-green-600" />
                  Full Name *
                </label>
                <motion.input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                  placeholder="Enter your full name"
                  aria-label="Enter your full name for cause champion registration"
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
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                  placeholder="Enter your email"
                />
              </motion.div>

              {/* Phone Number */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <label className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                  <Phone className="w-5 h-5 text-green-600" />
                  Mobile Number *
                </label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={formData.phoneNumber}
                  onChange={(value) => setFormData(prev => ({ ...prev, phoneNumber: value || '' }))}
                  className="w-full"
                  placeholder="Enter your mobile number"
                  withCountryCallingCode
                />
              </motion.div>

              {/* Country and City in same row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                    <MapPin className="w-5 h-5 text-green-600" />
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
                        minHeight: '48px',
                        fontSize: '1rem',
                        '&:hover': {
                          borderColor: '#d1d5db',
                        },
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected ? '#15803d' : state.isFocused ? '#dcfce7' : 'white',
                        color: state.isSelected ? 'white' : '#374151',
                        fontSize: '1rem',
                        '&:hover': {
                          backgroundColor: state.isSelected ? '#15803d' : '#dcfce7',
                        },
                      }),
                      placeholder: (base) => ({
                        ...base,
                        color: '#9ca3af',
                        fontSize: '1rem',
                      }),
                      input: (base) => ({
                        ...base,
                        fontSize: '1rem',
                      }),
                      singleValue: (base) => ({
                        ...base,
                        fontSize: '1rem',
                        color: '#374151',
                      }),
                    }}
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    City *
                  </label>
                  <motion.input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                    placeholder="Enter your city"
                  />
                </div>
              </motion.div>

              {/* Cause Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Start Your Social Cause - Select Cause Category *
                </label>
                <motion.select
                  name="selectedCause"
                  value={formData.selectedCause}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                  aria-label="Select the social cause you want to support as a cause champion"
                >
                  <option value="">Select a cause category to start your impact campaign</option>
                  {mainCauses.map((cause) => (
                    <option key={cause.id} value={cause.id}>
                      {cause.name}
                    </option>
                  ))}
                </motion.select>
              </motion.div>


              {/* Terms and Conditions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start space-x-2"
              >
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-green-700 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
                />
                <label className="text-base text-gray-700 leading-relaxed">
                  I agree to support causes responsibly and follow the platform guidelines.
                </label>
              </motion.div>

              <motion.div 
                className="text-center text-gray-600 text-base font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-green-600 font-semibold">{dailyChampionCount}+</span> people joined Cause Champions India in the last 2 days to start their giving journey and make a difference.
              </motion.div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="w-full"
              >
                <PrimaryButton
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms || !formData.fullName || !formData.email || !formData.phoneNumber || !formData.country || !formData.city || !formData.selectedCause || isSubmitting}
                  className="w-full"
                  size="lg"
                  aria-label="Complete cause champion registration and start your giving circle"
                >
                  {isSubmitting ? 'Submitting...' : 'Start Your Giving Circle'}
                </PrimaryButton>
              </motion.div>
            </div>
            </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CauseChampionOnboarding;