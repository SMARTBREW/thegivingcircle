import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  otp: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
  selectedNGO: string;
  selectedCauses: string[];
  agreeToTerms: boolean;
  isOTPSent: boolean;
  isOTPVerified: boolean;
}

interface NGO {
  id: string;
  name: string;
  causes: string[];
}

const CauseChampionOnboarding: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    otp: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    selectedNGO: '',
    selectedCauses: [],
    agreeToTerms: false,
    isOTPSent: false,
    isOTPVerified: false
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [otpCountdown, setOtpCountdown] = useState(0);

  const testimonials = [
    "Sarah raised ₹ 25,00,000 for education programs in rural villages",
    "Priya collected ₹ 15,00,000 for clean water initiatives in 15 days",
    "Ramesh raised ₹ 8,00,000 for animal rescue and rehabilitation",
    "Sunita gathered ₹ 20,00,000 for disaster relief efforts in 25 days"
  ];

  // Card images that rotate with testimonials
  const cardImages = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=80&h=80&fit=crop&crop=face"
  ];

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

  // States data (for India)
  const states = [
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'tamil-nadu', label: 'Tamil Nadu' },
    { value: 'telangana', label: 'Telangana' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'west-bengal', label: 'West Bengal' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'odisha', label: 'Odisha' },
    { value: 'assam', label: 'Assam' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'chhattisgarh', label: 'Chhattisgarh' },
    { value: 'jharkhand', label: 'Jharkhand' },
    { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
    { value: 'uttarakhand', label: 'Uttarakhand' },
    { value: 'goa', label: 'Goa' },
    { value: 'manipur', label: 'Manipur' },
    { value: 'meghalaya', label: 'Meghalaya' },
    { value: 'mizoram', label: 'Mizoram' },
    { value: 'nagaland', label: 'Nagaland' },
    { value: 'sikkim', label: 'Sikkim' },
    { value: 'tripura', label: 'Tripura' },
    { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
    { value: 'jammu-kashmir', label: 'Jammu & Kashmir' },
    { value: 'ladakh', label: 'Ladakh' },
    { value: 'chandigarh', label: 'Chandigarh' },
    { value: 'dadra-nagar-haveli', label: 'Dadra & Nagar Haveli' },
    { value: 'daman-diu', label: 'Daman & Diu' },
    { value: 'lakshadweep', label: 'Lakshadweep' },
    { value: 'puducherry', label: 'Puducherry' },
    { value: 'andaman-nicobar', label: 'Andaman & Nicobar Islands' }
  ];

  // NGO data with their associated causes
  const ngos: NGO[] = [
    {
      id: 'ngo1',
      name: 'Healthcare Heroes Foundation',
      causes: ['Medical Emergency', 'Healthcare Access', 'Child Healthcare', 'Mental Health']
    },
    {
      id: 'ngo2',
      name: 'Education For All Initiative',
      causes: ['Education', 'Child Healthcare', 'Mental Health']
    },
    {
      id: 'ngo3',
      name: 'Emergency Response Coalition',
      causes: ['Disaster Relief', 'Medical Emergency', 'Food Security']
    },
    {
      id: 'ngo4',
      name: 'Water Access Foundation',
      causes: ['Water Crisis', 'Disaster Relief']
    },
    {
      id: 'ngo5',
      name: 'Global Nutrition Network',
      causes: ['Food Security', 'Child Healthcare', 'Disaster Relief']
    },
    {
      id: 'ngo6',
      name: 'Mobile Health Alliance',
      causes: ['Healthcare Access', 'Medical Emergency', 'Child Healthcare']
    },
    {
      id: 'ngo7',
      name: 'Paws & Hearts Rescue',
      causes: ['Animal Welfare', 'Animal Rescue']
    },
    {
      id: 'ngo8',
      name: 'Rural Development Trust',
      causes: ['Education', 'Water Crisis', 'Food Security', 'Healthcare Access']
    }
  ];

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // OTP countdown timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (otpCountdown > 0) {
      interval = setInterval(() => {
        setOtpCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpCountdown]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Reset causes when NGO changes
    if (name === 'selectedNGO') {
      setFormData(prev => ({
        ...prev,
        selectedCauses: []
      }));
    }

    // Reset OTP verification when phone number changes
    if (name === 'phone') {
      setFormData(prev => ({
        ...prev,
        isOTPSent: false,
        isOTPVerified: false,
        otp: ''
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    if (name === 'selectedCauses') {
      setFormData(prev => ({
        ...prev,
        selectedCauses: checked 
          ? [...prev.selectedCauses, value]
          : prev.selectedCauses.filter(cause => cause !== value)
      }));
    } else if (name === 'agreeToTerms') {
      setFormData(prev => ({
        ...prev,
        agreeToTerms: checked
      }));
    }
  };

  const handleSendOTP = async () => {
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }

    try {
      // Simulate API call to send OTP
      console.log('Sending OTP to:', formData.phone);
      
      // In a real application, you would call your backend API here
      // const response = await fetch('/api/send-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ phone: formData.phone })
      // });

      setFormData(prev => ({ ...prev, isOTPSent: true }));
      setOtpCountdown(60); // 60 seconds countdown
      alert('OTP sent successfully to your mobile number!');
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOTP = async () => {
    if (!formData.otp || formData.otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }

    try {
      // Simulate API call to verify OTP
      console.log('Verifying OTP:', formData.otp);
      
      // In a real application, you would call your backend API here
      // const response = await fetch('/api/verify-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ phone: formData.phone, otp: formData.otp })
      // });

      // For demo purposes, accept any 6-digit OTP
      if (formData.otp === '123456' || formData.otp.length === 6) {
        setFormData(prev => ({ ...prev, isOTPVerified: true }));
        alert('OTP verified successfully!');
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP. Please try again.');
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for becoming a Cause Champion! We will contact you soon.');
  };

  const getSelectedNGOCauses = () => {
    const selectedNGO = ngos.find(ngo => ngo.id === formData.selectedNGO);
    return selectedNGO ? selectedNGO.causes : [];
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />

      <motion.div 
        className="relative z-10 flex flex-col lg:flex-row min-h-screen items-start justify-between px-4 sm:px-6 md:px-12 lg:px-20 pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 max-w-7xl mx-auto gap-8 sm:gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Content */}
        <motion.div 
          className="flex-1 max-w-2xl text-gray-800 text-center lg:text-left mt-20"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Become a Cause Champion & Make a Difference
          </motion.h1>

          <motion.div 
            className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 flex items-center gap-3 sm:gap-4 shadow-sm"
            variants={itemVariants}
          >
            <motion.div 
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden"
            >
              <motion.img
                key={currentTestimonial}
                src={cardImages[currentTestimonial]}
                alt="Success story"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <motion.div 
              className="text-xs sm:text-sm md:text-base font-medium leading-relaxed text-gray-700"
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {testimonials[currentTestimonial]}
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center lg:justify-start gap-2 mt-4 sm:mt-6"
            variants={itemVariants}
          >
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-purple-600 scale-125' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          className="w-full max-w-2xl mt-4 lg:mt-8"
          variants={formVariants}
        >
          <motion.div 
            className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-200"
          >
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex justify-center mb-4">
                <img 
                  src="/Giving Circle logo.png" 
                  alt="Giving Circle Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Join as a Cause Champion</h2>
              <p className="text-sm text-gray-600">Help us make a difference in communities that need it most</p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <motion.input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </motion.div>

              {/* Email and Phone in same row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <div className="flex gap-2">
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                      placeholder="Enter your phone"
                      disabled={formData.isOTPVerified}
                    />
                    {!formData.isOTPSent && !formData.isOTPVerified && (
                      <button
                        type="button"
                        onClick={handleSendOTP}
                        disabled={!formData.phone || formData.phone.length < 10}
                        className="px-4 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-medium transition-colors"
                      >
                        Get OTP
                      </button>
                    )}
                    {formData.isOTPVerified && (
                      <div className="flex items-center px-3 text-green-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {/* OTP Verification Section */}
                  {formData.isOTPSent && !formData.isOTPVerified && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-3"
                    >
                      <div className="flex gap-2">
                        <input
                          type="text"
                          name="otp"
                          value={formData.otp}
                          onChange={handleInputChange}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm"
                          placeholder="Enter 6-digit OTP"
                          maxLength={6}
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOTP}
                          disabled={!formData.otp || formData.otp.length !== 6}
                          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-medium transition-colors"
                        >
                          Verify
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-xs text-gray-500">OTP sent to {formData.phone}</p>
                        <div className="text-xs text-gray-500">
                          {otpCountdown > 0 ? (
                            <span>Resend in {otpCountdown}s</span>
                          ) : (
                            <button
                              type="button"
                              onClick={handleSendOTP}
                              className="text-purple-600 hover:text-purple-700 font-medium"
                            >
                              Resend OTP
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Country and State in same row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                  <motion.select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                  <motion.select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select state</option>
                    {states.map((state) => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </motion.select>
                </div>
              </motion.div>

              {/* City and Pincode in same row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <motion.input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                    placeholder="Enter your city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                  <motion.input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                    placeholder="Enter pincode"
                  />
                </div>
              </motion.div>

              {/* NGO Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">NGO You Want to Support *</label>
                <motion.select
                  name="selectedNGO"
                  value={formData.selectedNGO}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm sm:text-base"
                >
                  <option value="">Select NGO</option>
                  {ngos.map((ngo) => (
                    <option key={ngo.id} value={ngo.id}>
                      {ngo.name}
                    </option>
                  ))}
                </motion.select>
              </motion.div>

              {/* Causes Selection */}
              {formData.selectedNGO && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Causes You Want to Support *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                    {getSelectedNGOCauses().map((cause) => (
                  <motion.div
                        key={cause}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                      >
                        <input
                          type="checkbox"
                          name="selectedCauses"
                          value={cause}
                          checked={formData.selectedCauses.includes(cause)}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                        />
                        <label className="text-sm text-gray-700">{cause}</label>
                      </motion.div>
                    ))}
                  </div>
                  </motion.div>
                )}

              {/* Terms and Conditions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-start space-x-2"
              >
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2 mt-1"
                />
                <label className="text-sm text-gray-700 leading-relaxed">
                  I agree to support causes responsibly and follow the platform guidelines.
                </label>
              </motion.div>

              <motion.div 
                className="text-center text-gray-600 text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-green-600 font-semibold">156</span> people became Cause Champions in the last 2 days
              </motion.div>

              <motion.button
                onClick={handleSubmit}
                disabled={!formData.agreeToTerms || !formData.fullName || !formData.email || !formData.phone || !formData.isOTPVerified || !formData.country || !formData.state || !formData.city || !formData.pincode || !formData.selectedNGO || formData.selectedCauses.length === 0}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-md text-base font-semibold transition-colors disabled:cursor-not-allowed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                Become a Cause Champion
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CauseChampionOnboarding;