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
  answers: QuizAnswer[];
  type: 'single' | 'multiple' | 'email';
}

interface WaitlistQuizProps {
  className?: string;
}

const WaitlistQuiz: React.FC<WaitlistQuizProps> = ({ className = '' }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const quizSteps: QuizStep[] = [
    {
      id: 'experience',
      question: 'What\'s your current development experience?',
      subtitle: 'Help us tailor the perfect learning path for you',
      type: 'single',
      answers: [
        { id: 'beginner', text: '🌱 Just starting out (0-1 years)', icon: '🌱' },
        { id: 'intermediate', text: '🚀 Getting confident (1-3 years)', icon: '🚀' },
        { id: 'advanced', text: '💪 Pretty experienced (3-5 years)', icon: '💪' },
        { id: 'expert', text: '🎯 Senior level (5+ years)', icon: '🎯' }
      ]
    },
    {
      id: 'goals',
      question: 'What are you most interested in learning?',
      subtitle: 'Select all that apply - we cover it all!',
      type: 'multiple',
      answers: [
        { id: 'architecture', text: '🏗️ System Architecture & Design', icon: '🏗️' },
        { id: 'scaling', text: '📈 Scaling Applications', icon: '📈' },
        { id: 'performance', text: '⚡ Performance Optimization', icon: '⚡' },
        { id: 'deployment', text: '🚀 Deployment & DevOps', icon: '🚀' },
        { id: 'databases', text: '🗄️ Database Design', icon: '🗄️' },
        { id: 'apis', text: '🔗 API Development', icon: '🔗' }
      ]
    },
    {
      id: 'challenges',
      question: 'What\'s your biggest challenge right now?',
      subtitle: 'We\'ll make sure to address this in your personalized content',
      type: 'single',
      answers: [
        { id: 'overwhelmed', text: '😵 Too many technologies to learn', icon: '😵' },
        { id: 'production', text: '🔥 Making apps production-ready', icon: '🔥' },
        { id: 'scaling', text: '📊 Handling growth and scaling', icon: '📊' },
        { id: 'best-practices', text: '✨ Learning industry best practices', icon: '✨' },
        { id: 'career', text: '🎯 Advancing my career', icon: '🎯' }
      ]
    },
    {
      id: 'email',
      question: 'Almost there! What\'s your email?',
      subtitle: 'We\'ll send you exclusive early access and personalized recommendations',
      type: 'email',
      answers: []
    }
  ];

  const handleAnswer = (stepId: string, answerId: string) => {
    const step = quizSteps[currentStep];
    
    if (step.type === 'single') {
      setAnswers(prev => ({ ...prev, [stepId]: [answerId] }));
      // Auto advance for single choice
      setTimeout(() => {
        if (currentStep < quizSteps.length - 1) {
          setCurrentStep(prev => prev + 1);
        }
      }, 500);
    } else if (step.type === 'multiple') {
      setAnswers(prev => {
        const currentAnswers = prev[stepId] || [];
        const newAnswers = currentAnswers.includes(answerId)
          ? currentAnswers.filter(id => id !== answerId)
          : [...currentAnswers, answerId];
        return { ...prev, [stepId]: newAnswers };
      });
    }
  };

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleEmailSubmit = async () => {
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Store quiz results and email
      const quizData = {
        email,
        answers,
        timestamp: new Date().toISOString()
      };
      
      localStorage.setItem('waitlistQuizData', JSON.stringify(quizData));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsCompleted(true);
    } catch (error) {
      console.error('Quiz submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentStepData = quizSteps[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

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
            Based on your answers, we've crafted the perfect learning experience for you. 
            You'll be among the first to know when we launch!
          </p>
          <div className="bg-white rounded-xl p-4 border border-green-200">
            <p className="text-sm text-gray-500 mb-2">🎯 Your personalized path is ready</p>
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
            <span className="text-sm text-gray-500">Step {currentStep + 1} of {quizSteps.length}</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {currentStepData.question}
          </h2>
          {currentStepData.subtitle && (
            <p className="text-lg text-gray-600">{currentStepData.subtitle}</p>
          )}
        </div>

        {/* Answers */}
        {currentStepData.type === 'email' ? (
          <div className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="input w-full text-center text-lg py-4"
              onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
            />
            <button
              onClick={handleEmailSubmit}
              disabled={isSubmitting || !email.trim()}
              className="btn btn-primary btn-lg w-full"
            >
              {isSubmitting ? (
                <>
                  <div className="spinner mr-2"></div>
                  Joining Waitlist...
                </>
              ) : (
                'Join the Waitlist 🚀'
              )}
            </button>
          </div>
        ) : (
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
            
            {currentStepData.type === 'multiple' && answers[currentStepData.id]?.length > 0 && (
              <button
                onClick={handleNext}
                className="btn btn-primary btn-lg w-full mt-6"
              >
                Continue →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistQuiz 