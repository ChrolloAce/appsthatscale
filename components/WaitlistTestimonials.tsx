'use client'

import React from 'react'

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

interface WaitlistTestimonialsProps {
  className?: string;
}

const WaitlistTestimonials: React.FC<WaitlistTestimonialsProps> = ({ className = '' }) => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Senior Developer',
      company: 'TechCorp',
      content: 'Finally, a course that teaches real-world scaling patterns. The beta content I\'ve seen is incredible!',
      avatar: 'SC',
      rating: 5
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Engineering Manager',
      company: 'StartupXYZ',
      content: 'I\'ve been waiting for something like this. The approach to architecture and scalability is exactly what our team needs.',
      avatar: 'MR',
      rating: 5
    },
    {
      id: '3',
      name: 'Emily Johnson',
      role: 'Full Stack Engineer',
      company: 'InnovateLab',
      content: 'The preview materials showed me patterns I wish I knew years ago. Can\'t wait for the full launch!',
      avatar: 'EJ',
      rating: 5
    },
    {
      id: '4',
      name: 'David Kim',
      role: 'Lead Architect',
      company: 'ScaleCo',
      content: 'Having built systems at scale myself, I can say this content is spot-on. Highly recommend joining the waitlist.',
      avatar: 'DK',
      rating: 5
    },
    {
      id: '5',
      name: 'Lisa Park',
      role: 'CTO',
      company: 'GrowthTech',
      content: 'My entire team is on the waitlist. This is exactly the kind of practical, actionable content we need.',
      avatar: 'LP',
      rating: 5
    },
    {
      id: '6',
      name: 'Alex Thompson',
      role: 'Software Engineer',
      company: 'NextGen',
      content: 'The beta access gave me confidence to tackle our scaling challenges. Production-ready knowledge that works.',
      avatar: 'AT',
      rating: 5
    }
  ];

  const generateGradient = (index: number): string => {
    const gradients = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-green-400 to-green-600',
      'from-orange-400 to-orange-600',
      'from-pink-400 to-pink-600',
      'from-indigo-400 to-indigo-600'
    ];
    return gradients[index % gradients.length];
  };

  const renderStars = (rating: number): JSX.Element => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by 2,847+ Developers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join engineers from top companies who are already on the waitlist
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          {['Google', 'Microsoft', 'Meta', 'Netflix', 'Stripe', 'Airbnb'].map((company) => (
            <div key={company} className="text-lg font-semibold text-gray-400">
              {company}
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="card card-comfortable hover:transform hover:scale-105">
              {/* Rating */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${generateGradient(index)} flex items-center justify-center text-white font-semibold mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2,847+</div>
            <div className="text-gray-600">Developers on Waitlist</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Companies Represented</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Beta Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistTestimonials 