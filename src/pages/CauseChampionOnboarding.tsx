import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../components/ui/PrimaryButton';

interface FormData {
  fullName: string;
  email: string;
  country: string;
  city: string;
  selectedCause: string;
  selectedNGOs: string[];
  agreeToTerms: boolean;
  isSubmitted: boolean;
}

interface NGO {
  id: string;
  name: string;
  causes: string[];
  mainCauses: string[];
  description: string;
}

const CauseChampionOnboarding: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    country: '',
    city: '',
    selectedCause: '',
    selectedNGOs: [],
    agreeToTerms: false,
    isSubmitted: false
  });


  // Countries data
  const countries = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' },
    { value: 'france', label: 'France' },
    { value: 'japan', label: 'Japan' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'uae', label: 'United Arab Emirates' }
  ];
  // Main cause categories based on actual causes from browseCauses.tsx
  const mainCauses = [
    {
      id: 'women-empowerment',
      name: 'Women Empowerment',
      description: 'Supporting women through skill development, entrepreneurship, and empowerment programs'
    },
    {
      id: 'animal-welfare',
      name: 'Animal Welfare',
      description: 'Protecting and caring for animals, rescue operations, and animal feeding programs'
    },
    {
      id: 'women-health',
      name: 'Women Health',
      description: 'Providing menstrual hygiene education, health products, and healthcare for women'
    },
    {
      id: 'disaster-relief',
      name: 'Disaster Relief',
      description: 'Emergency response, flood relief, and rehabilitation support for affected communities'
    },
    {
      id: 'emergency-response',
      name: 'Emergency Response',
      description: 'Critical emergency services and rescue operations for animals and communities'
    }
  ];

  // NGO data with their associated main causes based on actual data
  const ngos: NGO[] = [
    {
      id: 'jwp',
      name: 'JWP',
      causes: ['Women Empowerment'],
      mainCauses: ['women-empowerment'],
      description: 'Supporting women empowerment through skill development and entrepreneurship programs'
    },
    {
      id: 'animalcare',
      name: 'Animal Care',
      causes: ['Animal Welfare', 'Emergency Response'],
      mainCauses: ['animal-welfare', 'emergency-response'],
      description: 'Rescuing, treating and rehabilitating street animals across India'
    },
    {
      id: 'khushii',
      name: 'KHUSHII',
      causes: ['Women Health'],
      mainCauses: ['women-health'],
      description: 'Empowering underprivileged women and girls through health and hygiene initiatives'
    },
    {
      id: 'gus',
      name: 'GUS',
      causes: ['Disaster Relief'],
      mainCauses: ['disaster-relief'],
      description: 'Providing disaster relief and emergency response in affected areas'
    }
  ];



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Reset NGOs when main cause changes
    if (name === 'selectedCause') {
      setFormData(prev => ({
        ...prev,
        selectedNGOs: []
      }));
    }

  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    if (name === 'selectedNGOs') {
      setFormData(prev => ({
        ...prev,
        selectedNGOs: checked 
          ? [...prev.selectedNGOs, value]
          : prev.selectedNGOs.filter(ngo => ngo !== value)
      }));
    } else if (name === 'agreeToTerms') {
      setFormData(prev => ({
        ...prev,
        agreeToTerms: checked
      }));
    }
  };


  const handleSubmit = () => {
    setFormData(prev => ({ ...prev, isSubmitted: true }));
  };

  const getFilteredNGOs = () => {
    if (!formData.selectedCause) return [];
    return ngos.filter(ngo => ngo.mainCauses.includes(formData.selectedCause));
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
                  Details Submitted Successfully!
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                >
                  Thank you for becoming a Cause Champion with us. Our executive will connect with you shortly to discuss your journey and next steps.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                >
                  <button
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                  >
                    Return to Home
                  </button>
                  <button
                    onClick={() => window.location.href = '/about-champion'}
                    className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
                  >
                    Learn More About Champions
                  </button>
                </motion.div>
                
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
                  alt="Giving Circle Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Join as a Cause Champion</h2>
              <p className="text-base text-gray-600">Help us make a difference in communities that need it most</p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-base font-medium text-gray-700 mb-2">Full Name *</label>
                <motion.input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-base"
                  placeholder="Enter your full name"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-base font-medium text-gray-700 mb-2">Email Address *</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-base"
                  placeholder="Enter your email"
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
                  <label className="block text-base font-medium text-gray-700 mb-2">Country *</label>
                  <motion.select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-base"
                  >
                    <option value="">Select country</option>
                    {countries.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </motion.select>
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">City *</label>
                  <motion.input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-base"
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
                <label className="block text-base font-medium text-gray-700 mb-2">Cause You Want to Support *</label>
                <motion.select
                  name="selectedCause"
                  value={formData.selectedCause}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-base"
                >
                  <option value="">Select a cause category</option>
                  {mainCauses.map((cause) => (
                    <option key={cause.id} value={cause.id}>
                      {cause.name}
                    </option>
                  ))}
                </motion.select>
                {formData.selectedCause && (
                  <p className="text-sm text-gray-500 mt-1">
                    {mainCauses.find(c => c.id === formData.selectedCause)?.description}
                  </p>
                )}
              </motion.div>

              {/* NGO Selection - Only show when cause is selected */}
              {formData.selectedCause && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-base font-medium text-gray-700 mb-3">NGOs You Want to Support *</label>
                  {getFilteredNGOs().length > 0 ? (
                    <div className="grid grid-cols-1 gap-3">
                      {getFilteredNGOs().map((ngo) => (
                        <motion.div
                          key={ngo.id}
                          className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-start space-x-3">
                            <input
                              type="checkbox"
                              name="selectedNGOs"
                              value={ngo.id}
                              checked={formData.selectedNGOs.includes(ngo.id)}
                              onChange={handleCheckboxChange}
                              className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2 mt-1"
                            />
                            <div className="flex-1">
                              <label className="text-base font-semibold text-gray-800 cursor-pointer">
                                {ngo.name}
                              </label>
                              <p className="text-sm text-gray-600 mt-1">{ngo.description}</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {ngo.causes.map((cause) => (
                                  <span
                                    key={cause}
                                    className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                                  >
                                    {cause}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base text-orange-600 bg-orange-50 p-3 rounded-lg border border-orange-200">
                      No NGOs available for this cause category at the moment.
                    </p>
                  )}
                </motion.div>
              )}


              {/* Terms and Conditions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-start space-x-2"
              >
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2 mt-1"
                />
                <label className="text-base text-gray-700 leading-relaxed">
                  I agree to support causes responsibly and follow the platform guidelines.
                </label>
              </motion.div>

              <motion.div 
                className="text-center text-gray-600 text-base font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-green-600 font-semibold">156</span> people became Cause Champions in the last 2 days
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="w-full"
              >
                <PrimaryButton
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms || !formData.fullName || !formData.email || !formData.country || !formData.city || !formData.selectedCause || formData.selectedNGOs.length === 0}
                  className="w-full"
                  size="lg"
                >
                  Become a Cause Champion
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