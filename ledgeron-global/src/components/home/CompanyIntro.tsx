'use client';

import { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';

export function CompanyIntro() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const content = contentRef.current;

    if (image) {
      image.style.opacity = '0';
      image.style.transform = 'translateY(20px)';
      setTimeout(() => {
        image.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        image.style.opacity = '1';
        image.style.transform = 'translateY(0)';
      }, 100);
    }

    if (content) {
      content.style.opacity = '0';
      content.style.transform = 'translateY(20px)';
      setTimeout(() => {
        content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div
            ref={imageRef}
            className="relative h-[500px] rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src="/images/office.jpg"
              alt="Modern Office Space"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPy0/ODMuRkVHSUhKU1NTW1xbMkVHS1NaWFr/2wBDAR0XFxocGhwnHx8nWkI8Qlpra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
          </div>

          {/* Right Column - Content */}
          <div
            ref={contentRef}
            className="max-w-xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6">
              About Us
            </span>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Your Trusted Partner in
              <span className="text-blue-600"> Business Success</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              With years of experience in business registration and compliance, we've helped hundreds
              of entrepreneurs turn their business dreams into reality. Our expert team ensures a
              smooth and hassle-free process from start to finish.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">10+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">100%</h3>
                <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/about"
                variant="primary"
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25"
              >
                Learn More
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="text-lg px-8 py-4 hover:bg-white dark:hover:bg-gray-800"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}