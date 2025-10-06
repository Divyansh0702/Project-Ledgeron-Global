'use client';

import { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import {
  FileText,
  Building2,
  Scale,
  Landmark,
  Calculator,
  BadgeCheck
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Company Registration',
    description: 'Quick and hassle-free company registration process with expert guidance.'
  },
  {
    icon: Building2,
    title: 'Business Licensing',
    description: 'Obtain all necessary licenses and permits for your business operations.'
  },
  {
    icon: Scale,
    title: 'Legal Compliance',
    description: 'Ensure your business meets all legal and regulatory requirements.'
  },
  {
    icon: Landmark,
    title: 'Corporate Secretarial',
    description: 'Professional corporate secretarial services for your business needs.'
  },
  {
    icon: Calculator,
    title: 'Tax Registration',
    description: 'Complete tax registration and compliance services for your business.'
  },
  {
    icon: BadgeCheck,
    title: 'Trademark Registration',
    description: 'Protect your brand with our trademark registration services.'
  }
];

export function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const servicesContainer = servicesRef.current;

    if (header) {
      header.style.opacity = '0';
      header.style.transform = 'translateY(20px)';
      setTimeout(() => {
        header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
      }, 100);
    }

    if (servicesContainer) {
      const serviceElements = servicesContainer.children;
      Array.from(serviceElements).forEach((element, index) => {
        const el = element as HTMLElement;
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 200 + index * 100);
      });
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of services to help you start and grow your business with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          ref={servicesRef}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
              >
                <div className="inline-block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <Button
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  variant="secondary"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Learn More →
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            href="/services"
            variant="outline"
            className="text-lg px-8 py-4 border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}