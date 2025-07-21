'use client'

import React, { useState } from 'react'

interface QuizAnswer {
  id: string;
  text: string;
  icon?: string;
}

interface QuizStep {
  id: string;
  question: string;
  subtitle?: string;
  answers?: QuizAnswer[];
  type: 'single' | 'multiple' | 'text' | 'email' | 'tel';
  placeholder?: string;
}

interface WaitlistQuizProps {
  className?: string;
}

const WaitlistQuiz: React.FC<WaitlistQuizProps> = ({ className = '' }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const steps: QuizStep[] = [
    {
      id: 'experience',
      question: 'What\'s your current development experience?',
      subtitle: 'Help us understand your background',
      type: 'single',
      answers: [
        { id: 'beginner', text: '🌱 Just starting out (0-1 years)', icon: '🌱' },
        { id: 'intermediate', text: '🚀 Getting confident (1-3 years)', icon: '🚀' },
        { id: 'advanced', text: '💪 Pretty experienced (3-5 years)', icon: '💪' },
        { id: 'expert', text: '🎯 Senior level (5+ years)', icon: '🎯' }
      ]
    },
    {
      id: 'mrr_goals',
      question: 'What\'s your MRR goal?',
      subtitle: 'What monthly recurring revenue are you aiming for?',
      type: 'single',
      answers: [
        { id: 'just_starting', text: '💭 Just starting - no revenue yet', icon: '💭' },
        { id: '1k', text: '🎯 $1K - $5K per month', icon: '🎯' },
        { id: '5k', text: '🚀 $5K - $10K per month', icon: '🚀' },
        { id: '10k', text: '💰 $10K - $50K per month', icon: '💰' },
        { id: '50k_plus', text: '🏆 $50K+ per month', icon: '🏆' }
      ]
    },
    {
      id: 'launched_before',
      question: 'Have you ever launched an app before?',
      subtitle: 'Tell us about your launch experience',
      type: 'single',
      answers: [
        { id: 'never', text: '🔰 Never launched anything', icon: '🔰' },
        { id: 'side_projects', text: '🛠️ Built side projects, no launches', icon: '🛠️' },
        { id: 'failed_launches', text: '💔 Launched but didn\'t succeed', icon: '💔' },
        { id: 'some_success', text: '📈 Had some successful launches', icon: '📈' },
        { id: 'very_successful', text: '🏆 Multiple successful apps', icon: '🏆' }
      ]
    },
    {
      id: 'biggest_struggle',
      question: 'What do you struggle with the most?',
      subtitle: 'We\'ll focus on helping you overcome this',
      type: 'single',
      answers: [
        { id: 'marketing', text: '📢 Marketing - Getting users & visibility', icon: '📢' },
        { id: 'scaling', text: '📊 Scaling - Handling growth & performance', icon: '📊' },
        { id: 'development', text: '💻 Development - Building the product', icon: '💻' },
        { id: 'idea_phase', text: '💡 Idea Phase - Knowing what to build', icon: '💡' }
      ]
    },
    {
      id: 'name',
      question: 'What\'s your name?',
      subtitle: 'We\'d love to know what to call you',
      type: 'text',
      placeholder: 'Enter your full name'
    },
    {
      id: 'email',
      question: 'What\'s your email address?',
      subtitle: 'We\'ll send you exclusive updates and early access',
      type: 'email',
      placeholder: 'Enter your email address'
    },
    {
      id: 'phone',
      question: 'What\'s your phone number?',
      subtitle: 'For priority access and important updates (optional)',
      type: 'tel',
      placeholder: 'Enter your phone number'
    }
  ];

  const handleAnswer = (stepId: string, answerId: string) => {
    const step = steps[currentStep];
    
    if (step.type === 'single') {
      setAnswers(prev => ({ ...prev, [stepId]: [answerId] }));
      // Auto advance for single choice
      setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        }
      }, 500);
    }
  };

  const validateStep = (stepIndex: number): boolean => {
    const step = steps[stepIndex];
    setErrors({});
    
    if (step.type === 'text') {
      const value = formData.name;
      if (!value.trim()) {
        setErrors({ [step.id]: 'Please enter your name' });
        return false;
      }
    }
    
    if (step.type === 'email') {
      const value = formData.email;
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
    if (errors[steps[currentStep].id]) {
      setErrors(prev => ({ ...prev, [steps[currentStep].id]: '' }));
    }
  };

  const handleNext = () => {
    const step = steps[currentStep];
    
    if (step.type === 'text' || step.type === 'email' || step.type === 'tel') {
      if (step.type === 'tel' || validateStep(currentStep)) {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          handleSubmit();
        }
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Prepare data for webhook
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        experience: answers.experience?.[0] || '',
        mrr_goals: answers.mrr_goals?.[0] || '',
        launched_before: answers.launched_before?.[0] || '',
        biggest_struggle: answers.biggest_struggle?.[0] || '',
        timestamp: new Date().toISOString(),
        source: 'waitlist_quiz'
      };
      
      // Store locally as backup
      localStorage.setItem('waitlistQuizData', JSON.stringify(submissionData));
      
      // Send to webhook
      const webhookResponse = await fetch('https://services.leadconnectorhq.com/hooks/UO5kYRYrGcKO34PaG0iE/webhook-trigger/2841fad6-e9bb-415c-8593-c5cf7d9cfc69', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      console.log('Webhook response:', webhookResponse.status);
      
      setIsCompleted(true);
    } catch (error) {
      console.error('Submission error:', error);
      // Still show success to user even if webhook fails
      setIsCompleted(true);
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
            Thanks {formData.name}! Based on your answers, we'll craft the perfect learning experience to help you reach your {answers.mrr_goals?.[0]} MRR goal.
          </p>
          <div className="bg-white rounded-xl p-4 border border-green-200">
            <p className="text-sm text-gray-500 mb-2">🎯 Your personalized path is ready!</p>
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

        {/* Answer Options or Input */}
        {currentStepData.type === 'single' && currentStepData.answers ? (
          <div className="space-y-4">
            {currentStepData.answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswer(currentStepData.id, answer.id)}
                className={`
                  w-full p-4 text-left border-2 rounded-xl transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 
                  ${answers[currentStepData.id]?.includes(answer.id) 
                    ? 'border-blue-500 bg-blue-50 text-blue-900' 
                    : 'border-gray-200 bg-white text-gray-700'
                  }
                `}
              >
                <span className="text-lg font-medium">{answer.text}</span>
              </button>
            ))}
          </div>
        ) : (
          /* Input Fields */
          <div className="space-y-6">
            <input
              type={currentStepData.type}
              value={currentStepData.id === 'name' ? formData.name : 
                     currentStepData.id === 'email' ? formData.email : formData.phone}
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
        )}
      </div>
    </div>
  );
};

export default WaitlistQuiz 