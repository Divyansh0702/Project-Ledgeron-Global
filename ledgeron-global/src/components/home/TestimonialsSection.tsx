'use client';

import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Startup Founder',
    image: '/images/testimonials/sarah.jpg',
    content: 'Ledgeron Global made the business registration process incredibly smooth. Their expert guidance saved us time and ensured everything was done correctly.',
    rating: 5
  },
  {
    name: 'Michael Patel',
    role: 'Small Business Owner',
    image: '/images/testimonials/michael.jpg',
    content: 'The team\'s knowledge of GST compliance is exceptional. They helped us set up proper systems and continue to provide valuable support.',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    role: 'E-commerce Entrepreneur',
    image: '/images/testimonials/emma.jpg',
    content: 'I highly recommend their services. The attention to detail and professional approach made the entire registration process stress-free.',
    rating: 5
  }
];

export function TestimonialsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const header = headerRef.current;
    const testimonialElements = testimonialRefs.current;

    if (header) {
      header.style.opacity = '0';
      header.style.transform = 'translateY(20px)';
      setTimeout(() => {
        header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
      }, 100);
    }

    testimonialElements.forEach((element, index) => {
      if (element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
          element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 300 + index * 100);
      }
    });
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            What Our Clients
            <span className="text-blue-600"> Say About Us</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about
            their experience working with Ledgeron Global.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              ref={el => { testimonialRefs.current[index] = el; }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}