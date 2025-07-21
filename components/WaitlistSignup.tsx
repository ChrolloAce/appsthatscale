import React from 'react'

interface WaitlistSignupState {
  email: string;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string;
  subscriberCount: number;
}

interface WaitlistSignupProps {
  className?: string;
}

export default class WaitlistSignup extends React.Component<WaitlistSignupProps, WaitlistSignupState> {
  constructor(props: WaitlistSignupProps) {
    super(props);
    this.state = {
      email: '',
      isSubmitting: false,
      isSubmitted: false,
      error: '',
      subscriberCount: 2847 // Initial count - you can make this dynamic
    };
  }

  validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ 
      email: e.target.value, 
      error: '' 
    });
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { email } = this.state;
    
    if (!email.trim()) {
      this.setState({ error: 'Please enter your email address' });
      return;
    }

    if (!this.validateEmail(email)) {
      this.setState({ error: 'Please enter a valid email address' });
      return;
    }

    this.setState({ isSubmitting: true, error: '' });

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store in localStorage as backup
      const existingEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
      if (!existingEmails.includes(email)) {
        existingEmails.push(email);
        localStorage.setItem('waitlistEmails', JSON.stringify(existingEmails));
      }

      this.setState({ 
        isSubmitted: true,
        subscriberCount: this.state.subscriberCount + 1
      });

      // Reset form after success animation
      setTimeout(() => {
        this.setState({ 
          email: '',
          isSubmitting: false 
        });
      }, 2000);

    } catch (error) {
      this.setState({ 
        error: 'Something went wrong. Please try again.',
        isSubmitting: false 
      });
    }
  };

  render() {
    const { email, isSubmitting, isSubmitted, error, subscriberCount } = this.state;
    const { className = '' } = this.props;

    if (isSubmitted) {
      return (
        <div className={`max-w-md mx-auto ${className}`}>
          <div className="card card-comfortable text-center bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">You're In! 🎉</h3>
            <p className="text-gray-600 mb-4">
              Welcome to the waitlist! You'll be among the first to know when we launch.
            </p>
            <p className="text-sm text-gray-500">
              Check your email for confirmation and exclusive updates.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className={`max-w-md mx-auto ${className}`}>
        <div className="card card-comfortable">
          {/* Social Proof */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-xs font-semibold text-white"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                +{subscriberCount.toLocaleString()} others
              </span>
            </div>
            <p className="text-sm text-gray-500">Join the community of builders</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={this.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={this.handleEmailChange}
                placeholder="Enter your email address"
                className={`input w-full text-center ${error ? 'border-red-300 focus:border-red-500' : ''}`}
                disabled={isSubmitting}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-lg w-full relative overflow-hidden"
            >
              {isSubmitting ? (
                <>
                  <div className="spinner mr-2"></div>
                  Joining Waitlist...
                </>
              ) : (
                'Join the Waitlist'
              )}
            </button>
          </form>

          {/* Trust Indicators */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>No Spam</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
} 