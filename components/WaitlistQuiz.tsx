'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()
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
      
      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Submission error:', error);
      // Still redirect to thank you page even if webhook fails
      router.push('/thank-you');
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
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Welcome to the exclusive waitlist</h3>
          <p className="text-base text-gray-400 mb-6">
            Thanks {formData.name}! Based on your answers, we'll craft the perfect learning experience to help you reach your {answers.mrr_goals?.[0]} MRR goal.
          </p>
          <div className="bg-white/5 rounded-md p-4 border border-white/10">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Your personalized path is ready</p>
            <p className="font-medium text-white">Check your email for exclusive early access</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-xs text-gray-500">{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-1">
            <div 
              className="bg-white/30 h-1 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            {currentStepData.question}
          </h2>
          <p className="text-sm text-gray-400">{currentStepData.subtitle}</p>
        </div>

        {/* Answer Options or Input */}
        {currentStepData.type === 'single' && currentStepData.answers ? (
          <div className="space-y-3">
            {currentStepData.answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswer(currentStepData.id, answer.id)}
                className={`
                  w-full p-4 text-left border rounded-md transition-all duration-200 hover:bg-white/10 hover:border-white/20
                  ${answers[currentStepData.id]?.includes(answer.id) 
                    ? 'border-white/30 bg-white/10 text-white' 
                    : 'border-white/10 bg-white/5 text-gray-300'
                  }
                `}
              >
                <span className="text-sm sm:text-base font-normal">{answer.text}</span>
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
              className={`w-full text-center text-base py-4 px-4 bg-white/5 border rounded-md text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all ${errors[currentStepData.id] ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/20'}`}
              onKeyPress={handleKeyPress}
              autoFocus
            />
            {errors[currentStepData.id] && (
              <p className="text-red-400 text-center text-sm">{errors[currentStepData.id]}</p>
            )}
            
            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className="w-full bg-white text-black font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                  Joining Waitlist...
                </>
              ) : currentStep === steps.length - 1 ? (
                'Join the Waitlist'
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