import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Upload, FileText, Building2, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';

interface NGOFormData {
  organizationName: string;
  registrationNumber: string;
  contactPersonName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  description: string;
  causesSupported: string[];
  panCard: FileList;
  aadhaarCard: FileList;
  certificate12A: FileList;
  certificate80G: FileList;
  profileLogo: FileList;
}

export const NGOPartner: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<NGOFormData>();

  const causes = [
    'Education',
    'Healthcare',
    'Women Empowerment',
    'Child Welfare',
    'Environment',
    'Rural Development',
    'Skill Development',
    'Elderly Care',
    'Clean Water',
    'Sanitation',
  ];

  const onSubmit = async (data: NGOFormData) => {
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      
      // Add text fields
      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'panCard' && key !== 'aadhaarCard' && key !== 'certificate12A' && key !== 'certificate80G' && key !== 'profileLogo') {
          if (Array.isArray(value)) {
            formData.append(key, value.join(','));
          } else {
            formData.append(key, value as string);
          }
        }
      });

      // Add files
      if (data.panCard?.[0]) formData.append('panCard', data.panCard[0]);
      if (data.aadhaarCard?.[0]) formData.append('aadhaarCard', data.aadhaarCard[0]);
      if (data.certificate12A?.[0]) formData.append('certificate12A', data.certificate12A[0]);
      if (data.certificate80G?.[0]) formData.append('certificate80G', data.certificate80G[0]);
      if (data.profileLogo?.[0]) formData.append('profileLogo', data.profileLogo[0]);

      // Submit to API
      await fetch('https://app.smartbro.in/api/ngo/apply', {
        method: 'POST',
        body: formData,
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit NGO application:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card>
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Application Submitted!
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for your interest in partnering with The Giving Circle. 
                  Our team will review your application and contact you within 48 hours.
                </p>

                <div className="bg-gradient-to-r from-primary-50 to-burgundy-50 rounded-2xl p-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                  <div className="text-left space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">1</div>
                      <div>
                        <div className="font-medium text-gray-900">Document Verification</div>
                        <div className="text-sm text-gray-600">We'll verify all submitted documents</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
                      <div>
                        <div className="font-medium text-gray-900">Virtual Interview</div>
                        <div className="text-sm text-gray-600">Schedule a call to discuss your work</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
                      <div>
                        <div className="font-medium text-gray-900">Partnership Onboarding</div>
                        <div className="text-sm text-gray-600">Get access to our platform and start connecting with champions</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button onClick={() => window.location.href = '/'}>
                  Return to Homepage
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Become an{' '}
            <span className="bg-gradient-to-r from-primary-500 to-burgundy-500 bg-clip-text text-transparent">
              NGO Partner
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our network of verified NGOs and connect with passionate champions 
            who want to support your impactful work.
          </p>
        </motion.div>

        <Card>
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Organization Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 mr-2 text-primary-600" />
                  Organization Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Organization Name"
                    placeholder="Your NGO name"
                    {...register('organizationName', { 
                      required: 'Organization name is required' 
                    })}
                    error={errors.organizationName?.message}
                  />
                  
                  <Input
                    label="Registration Number"
                    placeholder="Government registration number"
                    {...register('registrationNumber', { 
                      required: 'Registration number is required' 
                    })}
                    error={errors.registrationNumber?.message}
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Description
                  </label>
                  <textarea
                    {...register('description', { 
                      required: 'Please describe your organization' 
                    })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-200"
                    placeholder="Describe your mission, vision, and key activities..."
                  />
                  {errors.description && (
                    <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address
                  </label>
                  <textarea
                    {...register('address', { 
                      required: 'Address is required' 
                    })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-200"
                    placeholder="Complete address with pin code..."
                  />
                  {errors.address && (
                    <p className="mt-2 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-primary-600" />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input
                    label="Contact Person Name"
                    placeholder="Primary contact name"
                    {...register('contactPersonName', { 
                      required: 'Contact person name is required' 
                    })}
                    error={errors.contactPersonName?.message}
                  />
                  
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="contact@yourngo.org"
                    leftIcon={<Mail className="w-5 h-5" />}
                    {...register('contactEmail', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email'
                      }
                    })}
                    error={errors.contactEmail?.message}
                  />
                  
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="Contact phone number"
                    leftIcon={<Phone className="w-5 h-5" />}
                    {...register('contactPhone', { 
                      required: 'Phone number is required' 
                    })}
                    error={errors.contactPhone?.message}
                  />
                </div>
              </div>

              {/* Causes Supported */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Causes You Support
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {causes.map((cause) => (
                    <label
                      key={cause}
                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        value={cause}
                        {...register('causesSupported', { 
                          required: 'Please select at least one cause' 
                        })}
                        className="text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{cause}</span>
                    </label>
                  ))}
                </div>
                {errors.causesSupported && (
                  <p className="mt-2 text-sm text-red-600">{errors.causesSupported.message}</p>
                )}
              </div>

              {/* Document Upload */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-primary-600" />
                  Required Documents
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PAN Card
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        {...register('panCard', { 
                          required: 'PAN Card is required' 
                        })}
                        className="hidden"
                        id="panCard"
                      />
                      <label
                        htmlFor="panCard"
                        className="text-sm text-gray-600 cursor-pointer hover:text-primary-600"
                      >
                        Click to upload PAN Card
                      </label>
                    </div>
                    {errors.panCard && (
                      <p className="mt-2 text-sm text-red-600">{errors.panCard.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      12A Certificate
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        {...register('certificate12A', { 
                          required: '12A Certificate is required' 
                        })}
                        className="hidden"
                        id="certificate12A"
                      />
                      <label
                        htmlFor="certificate12A"
                        className="text-sm text-gray-600 cursor-pointer hover:text-primary-600"
                      >
                        Click to upload 12A Certificate
                      </label>
                    </div>
                    {errors.certificate12A && (
                      <p className="mt-2 text-sm text-red-600">{errors.certificate12A.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      80G Certificate
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        {...register('certificate80G', { 
                          required: '80G Certificate is required' 
                        })}
                        className="hidden"
                        id="certificate80G"
                      />
                      <label
                        htmlFor="certificate80G"
                        className="text-sm text-gray-600 cursor-pointer hover:text-primary-600"
                      >
                        Click to upload 80G Certificate
                      </label>
                    </div>
                    {errors.certificate80G && (
                      <p className="mt-2 text-sm text-red-600">{errors.certificate80G.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Logo
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        {...register('profileLogo', { 
                          required: 'Organization logo is required' 
                        })}
                        className="hidden"
                        id="profileLogo"
                      />
                      <label
                        htmlFor="profileLogo"
                        className="text-sm text-gray-600 cursor-pointer hover:text-primary-600"
                      >
                        Click to upload Logo
                      </label>
                    </div>
                    {errors.profileLogo && (
                      <p className="mt-2 text-sm text-red-600">{errors.profileLogo.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                  loading={isLoading}
                >
                  Submit Application
                </Button>
                
                <p className="text-sm text-gray-500 mt-4">
                  By submitting this application, you agree to our terms and conditions. 
                  We'll review your application and contact you within 48 hours.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};