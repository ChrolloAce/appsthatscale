'use client'

import React, { useState } from 'react'

interface WaitlistQuizProps {
  className?: string;
}

const WaitlistQuiz: React.FC<WaitlistQuizProps> = ({ className = '' }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const steps = [
    {
      id: 'name',
      question: 'What\'s your name?',
      subtitle: 'We\'d love to know what to call you',
      placeholder: 'Enter your full name',
      type: 'text' as const
    },
    {
      id: 'email',
      question: 'What\'s your email address?',
      subtitle: 'We\'ll send you exclusive updates and early access',
      placeholder: 'Enter your email address',
      type: 'email' as const
    },
    {
      id: 'phone',
      question: 'What\'s your phone number?',
      subtitle: 'For important updates and priority access (optional)',
      placeholder: 'Enter your phone number',
      type: 'tel' as const
    }
  ];

  const validateStep = (stepIndex: number): boolean => {
    const step = steps[stepIndex];
    const value = formData[step.id as keyof typeof formData];
    
    setErrors({});
    
    if (step.id === 'name' && !value.trim()) {
      setErrors({ [step.id]: 'Please enter your name' });
      return false;
    }
    
    if (step.id === 'email') {
      if (!value.trim()) {
        setErrors({ [step.id]: 'Please enter your email address' });
        return false;
      }
      if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors({ [step.id]: 'Please enter a valid email address' });
        return false;
      }
    }
    
    // Phone is optional, so no validation needed
    return true;
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Store form data
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      localStorage.setItem('waitlistFormData', JSON.stringify(submissionData));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsCompleted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;
  const currentStepData = steps[currentStep];

  if (isCompleted) {
    return (
      <div className={`max-w-2xl mx-auto ${className}`}>
        <div className="card card-spacious text-center bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the exclusive waitlist! 🎉</h3>
          <p className="text-lg text-gray-600 mb-6">
            Thanks {formData.name}! You'll be among the first to know when we launch Apps That Scale.
          </p>
          <div className="bg-white rounded-xl p-4 border border-green-200">
            <p className="text-sm text-gray-500 mb-2">🎯 You're all set!</p>
            <p className="font-semibold text-gray-800">Check your email for exclusive early access</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="card card-spacious">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {currentStepData.question}
          </h2>
          <p className="text-lg text-gray-600">{currentStepData.subtitle}</p>
        </div>

        {/* Input */}
        <div className="space-y-6">
          <input
            type={currentStepData.type}
            value={formData[currentStepData.id as keyof typeof formData]}
            onChange={(e) => handleInputChange(currentStepData.id as keyof typeof formData, e.target.value)}
            placeholder={currentStepData.placeholder}
            className={`input w-full text-center text-lg py-4 ${errors[currentStepData.id] ? 'border-red-300 focus:border-red-500' : ''}`}
            onKeyPress={handleKeyPress}
            autoFocus
          />
          {errors[currentStepData.id] && (
            <p className="text-red-600 text-center text-sm">{errors[currentStepData.id]}</p>
          )}
          
          <button
            onClick={handleNext}
            disabled={isSubmitting}
            className="btn btn-primary btn-lg w-full"
          >
            {isSubmitting ? (
              <>
                <div className="spinner mr-2"></div>
                Joining Waitlist...
              </>
            ) : currentStep === steps.length - 1 ? (
              'Join the Waitlist 🚀'
            ) : (
              'Continue →'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitlistQuiz 