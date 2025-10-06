'use client';

import { Button } from '../ui/Button';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const image = imageRef.current;

    if (content) {
      content.style.opacity = '0';
      content.style.transform = 'translateY(20px)';
      setTimeout(() => {
        content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 100);
    }

    if (image) {
      image.style.opacity = '0';
      image.style.transform = 'scale(0.9)';
      setTimeout(() => {
        image.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        image.style.opacity = '1';
        image.style.transform = 'scale(1)';
      }, 300);
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white dark:bg-gray-900 pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl" ref={contentRef}>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6">
              Business Registration Made Simple
            </span>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Your Trusted Partner in
              <span className="text-blue-600"> Business</span>
              <br />
              Registration
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We streamline the business registration process, making it easy for you to start your entrepreneurial journey. Expert guidance at every step.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
                className="text-lg px-8 py-4 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 dark:border-gray-800 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-1">500+</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Businesses Registered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-1">98%</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Success Rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-1">24/7</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Expert Support</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Animation */}
          <div
            ref={imageRef}
            className="relative h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <Image
                src="/images/hero-illustration.svg"
                alt="Business Registration"
                width={600}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}