import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  fundsUse: string;
  hospitalStatus: string;
}

const Hero: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    fundsUse: '',
    hospitalStatus: ''
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    "Dhiraj (Aarohi's father) raised ₹ 25,00,000 for Aarohi's Cancer Treatment in Just 20 days",
    "Priya collected ₹ 15,00,000 for her mother's heart surgery in 15 days",
    "Ramesh raised ₹ 8,00,000 for his son's kidney transplant in 12 days",
    "Sunita gathered ₹ 20,00,000 for cancer treatment in 25 days"
  ];

  // Card images that rotate with testimonials
  const cardImages = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=80&h=80&fit=crop&crop=face"
  ];

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop')"
        }}
      />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-600/90" />

      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-72 h-72 bg-white/5 rounded-full -top-24 -right-24"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-48 h-48 bg-white/5 rounded-full -bottom-12 -left-12"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-36 h-36 bg-white/5 rounded-full top-1/2 left-1/10"
          variants={floatingVariants}
          animate="animate"
        />
      </div>

      <motion.div 
        className="relative z-10 flex flex-col lg:flex-row min-h-screen items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 max-w-7xl mx-auto gap-8 sm:gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Content */}
        <motion.div 
          className="flex-1 max-w-2xl text-white text-center lg:text-left"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8 text-shadow-lg"
            variants={itemVariants}
          >
            Start a FREE Medical Fundraiser & Raise Funds for Medical Treatments
          </motion.h1>
          
          <motion.div 
            className="inline-flex items-center bg-white/15 backdrop-blur-sm border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 md:mb-10"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl sm:text-3xl font-bold text-purple-200 mr-2">0%</span>
            <span className="font-medium text-sm sm:text-base">platform fees*</span>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex-shrink-0 overflow-hidden"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
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
              className="text-xs sm:text-sm md:text-base font-medium leading-relaxed"
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
                  index === currentTestimonial ? 'bg-purple-200 scale-125' : 'bg-white/40'
                }`}
                onClick={() => setCurrentTestimonial(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          className="w-full max-w-sm sm:max-w-md"
          variants={formVariants}
        >
          <motion.div 
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[80vh] overflow-y-auto"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-center mb-6 sm:mb-8">
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-xl sm:text-2xl">🩺</span>
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Need Money Urgently?</h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-600 mb-2">Name *</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-sm sm:text-base"
                  placeholder="Enter your full name"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-600 mb-2">Email Address *</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-sm sm:text-base"
                  placeholder="Enter your email address"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-600 mb-2">Your Mobile Number *</label>
                <div className="flex gap-2 sm:gap-3">
                  <div className="flex items-center px-2 sm:px-3 py-2 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-xl min-w-16 sm:min-w-20">
                    <span className="text-sm sm:text-lg mr-1 sm:mr-2">🇮🇳</span>
                    <span className="text-xs sm:text-sm font-medium">+91</span>
                    <span className="ml-1 text-gray-400 text-xs">▼</span>
                  </div>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-sm sm:text-base"
                    placeholder="Enter mobile number"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-600 mb-2">What will the funds be used for? *</label>
                <motion.select
                  name="fundsUse"
                  value={formData.fundsUse}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 appearance-none cursor-pointer text-sm sm:text-base"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Select purpose</option>
                  <option value="cancer">Cancer Treatment</option>
                  <option value="surgery">Surgery</option>
                  <option value="emergency">Medical Emergency</option>
                  <option value="chronic">Chronic Disease</option>
                  <option value="other">Other</option>
                </motion.select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-600 mb-2">Hospitalisation status *</label>
                <motion.select
                  name="hospitalStatus"
                  value={formData.hospitalStatus}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 appearance-none cursor-pointer text-sm sm:text-base"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Select status</option>
                  <option value="admitted">Currently Admitted</option>
                  <option value="planned">Treatment Planned</option>
                  <option value="ongoing">Ongoing Treatment</option>
                  <option value="discharged">Recently Discharged</option>
                </motion.select>
              </motion.div>

              <motion.div 
                className="text-center text-purple-600 text-sm font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                189 People started a fundraiser in last 2 days
              </motion.div>

              <motion.button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-base sm:text-lg font-semibold tracking-wide shadow-lg"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                START A FUNDRAISER
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;