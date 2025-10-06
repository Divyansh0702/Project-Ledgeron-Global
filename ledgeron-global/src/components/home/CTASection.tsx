'use client';

import { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';

export function CTASection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;

    if (content) {
      content.style.opacity = '0';
      content.style.transform = 'translateY(20px)';
      setTimeout(() => {
        content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

      <div className="container mx-auto px-4 relative">
        <div
          ref={contentRef}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Tag */}
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6">
            Get Started Today
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Ready to Start Your
            <span className="text-blue-600"> Business Journey</span>?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            Join hundreds of successful entrepreneurs who trusted us with their business registration.
            Our expert team is ready to guide you every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button
              href="/contact"
              variant="primary"
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25"
            >
              Get Started Now
            </Button>
            <Button
              href="/services"
              variant="outline"
              className="text-lg px-8 py-4 hover:bg-white dark:hover:bg-gray-800"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-75">
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}