import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, User, MapPin, Heart, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { ApiClient, validatePhoneNumber } from '../utils/api';
import { OnboardingData } from '../types';

type OnboardingStep = 'phone' | 'otp' | 'details' | 'success';

export const CauseChampionOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('phone');
  const [isLoading, setIsLoading] = useState(false);
  const [onboardingData, setOnboardingData] = useState<Partial<OnboardingData>>({});

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<OnboardingData>();

  const phoneNumber = watch('phoneNumber');
  const otp = watch('otp');

  const handlePhoneSubmit = async (data: { phoneNumber: string }) => {
    if (!validatePhoneNumber(data.phoneNumber)) {
      return;
    }

    setIsLoading(true);
    try {
      await ApiClient.sendOTP(data.phoneNumber);
      setOnboardingData(prev => ({ ...prev, phoneNumber: data.phoneNumber }));
      setCurrentStep('otp');
    } catch (error) {
      console.error('Failed to send OTP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPVerify = async (data: { otp: string }) => {
    setIsLoading(true);
    try {
      await ApiClient.verifyOTP(onboardingData.phoneNumber!, data.otp);
      setOnboardingData(prev => ({ ...prev, otp: data.otp }));
      setCurrentStep('details');
    } catch (error) {
      console.error('OTP verification failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDetailsSubmit = async (data: OnboardingData) => {
    setIsLoading(true);
    try {
      const completeData = { ...onboardingData, ...data };
      await ApiClient.submitCauseChampionData(completeData);
      setCurrentStep('success');
    } catch (error) {
      console.error('Failed to submit data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const causes = [
    'Education for All',
    'Women Empowerment',
    'Child Healthcare',
    'Clean Water Access',
    'Skill Development',
    'Elderly Care',
    'Environmental Protection',
    'Rural Development',
  ];

  const steps = [
    { id: 'phone', title: 'Phone Verification', completed: currentStep !== 'phone' },
    { id: 'otp', title: 'OTP Verification', completed: ['details', 'success'].includes(currentStep) },
    { id: 'details', title: 'Your Details', completed: currentStep === 'success' },
    { id: 'success', title: 'Welcome!', completed: false },
  ];

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                step.completed
                  ? 'bg-green-500 text-white'
                  : currentStep === step.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {step.completed ? <CheckCircle className="w-5 h-5" /> : index + 1}
              </div>
              <span className="text-xs text-gray-600 mt-2 text-center">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-200 ${
                steps[index + 1].completed || currentStep === steps[index + 1].id
                  ? 'bg-primary-500'
                  : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderPhoneStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
          Let's Get Started
        </h2>
        <p className="text-gray-600">
          Enter your mobile number to begin your journey as a Cause Champion
        </p>
      </div>

      <form onSubmit={handleSubmit(handlePhoneSubmit)} className="space-y-6">
        <Input
          label="Mobile Number"
          type="tel"
          placeholder="Enter your 10-digit mobile number"
          leftIcon={<Phone className="w-5 h-5" />}
          {...register('phoneNumber', {
            required: 'Mobile number is required',
            validate: value => validatePhoneNumber(value) || 'Please enter a valid 10-digit mobile number'
          })}
          error={errors.phoneNumber?.message}
        />

        <Button
          type="submit"
          className="w-full"
          size="lg"
          loading={isLoading}
          disabled={!phoneNumber || !!errors.phoneNumber}
        >
          Send OTP
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </form>
    </motion.div>
  );

  const renderOTPStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
          Verify Your Number
        </h2>
        <p className="text-gray-600">
          We've sent a 6-digit code to <strong>{onboardingData.phoneNumber}</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit(handleOTPVerify)} className="space-y-6">
        <Input
          label="Enter OTP"
          type="text"
          placeholder="6-digit code"
          maxLength={6}
          {...register('otp', {
            required: 'OTP is required',
            minLength: { value: 6, message: 'OTP must be 6 digits' }
          })}
          error={errors.otp?.message}
        />

        <div className="flex space-x-4">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => setCurrentStep('phone')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            type="submit"
            className="flex-1"
            loading={isLoading}
            disabled={!otp || otp.length < 6}
          >
            Verify OTP
          </Button>
        </div>
      </form>
    </motion.div>
  );

  const renderDetailsStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
          Tell Us About Yourself
        </h2>
        <p className="text-gray-600">
          Help us understand your interests so we can connect you with the right causes
        </p>
      </div>

      <form onSubmit={handleSubmit(handleDetailsSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="Your full name"
            leftIcon={<User className="w-5 h-5" />}
            {...register('name', { required: 'Name is required' })}
            error={errors.name?.message}
          />

          <Input
            label="City"
            placeholder="Your city"
            leftIcon={<MapPin className="w-5 h-5" />}
            {...register('city', { required: 'City is required' })}
            error={errors.city?.message}
          />
        </div>

        <Input
          label="State"
          placeholder="Your state"
          leftIcon={<MapPin className="w-5 h-5" />}
          {...register('state', { required: 'State is required' })}
          error={errors.state?.message}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Which cause do you care about most?
          </label>
          <div className="grid grid-cols-2 gap-3">
            {causes.map((cause) => (
              <label
                key={cause}
                className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                  type="radio"
                  value={cause}
                  {...register('causeInterest', { required: 'Please select a cause' })}
                  className="text-primary-500 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{cause}</span>
              </label>
            ))}
          </div>
          {errors.causeInterest && (
            <p className="mt-2 text-sm text-red-600">{errors.causeInterest.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Why do you care about this cause?
          </label>
          <textarea
            {...register('whyICare', { required: 'Please tell us why this cause matters to you' })}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-200"
            placeholder="Share your story or motivation..."
          />
          {errors.whyICare && (
            <p className="mt-2 text-sm text-red-600">{errors.whyICare.message}</p>
          )}
        </div>

        <div className="flex space-x-4">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => setCurrentStep('otp')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            type="submit"
            className="flex-1"
            loading={isLoading}
          >
            Complete Registration
          </Button>
        </div>
      </form>
    </motion.div>
  );

  const renderSuccessStep = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6"
    >
      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-12 h-12 text-white" />
      </div>
      
      <div>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
          Welcome to The Giving Circle!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          You're now a Cause Champion. We'll connect with you shortly to discuss how you can make a real impact.
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary-50 to-burgundy-50 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
        <ul className="text-left text-gray-600 space-y-2">
          <li>• Our team will call you within 24 hours</li>
          <li>• We'll match you with verified NGOs working on your chosen cause</li>
          <li>• You'll receive regular updates and impact stories</li>
          <li>• Your contributions will be documented and verified as NFTs</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => window.location.href = '/nft-wall'}
        >
          Explore Impact Stories
        </Button>
        <Button
          className="flex-1"
          onClick={() => window.location.href = '/'}
        >
          Return Home
        </Button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="overflow-hidden">
          <CardContent className="p-8 md:p-12">
            {renderProgressBar()}
            
            {currentStep === 'phone' && renderPhoneStep()}
            {currentStep === 'otp' && renderOTPStep()}
            {currentStep === 'details' && renderDetailsStep()}
            {currentStep === 'success' && renderSuccessStep()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};