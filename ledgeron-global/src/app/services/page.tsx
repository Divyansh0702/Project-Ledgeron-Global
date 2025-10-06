import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
  const services = [
    {
      id: 'company-registration',
      title: 'Company Registration',
      description: 'Complete company registration service including documentation, submission, and follow-up.',
      features: [
        'Business name registration',
        'Company incorporation',
        'Tax registration',
        'Business license application',
        'Bank account setup assistance',
      ],
      icon: '/file.svg',
    },
    {
      id: 'business-compliance',
      title: 'Business Compliance',
      description: 'Ensure your business meets all regulatory requirements and stays compliant.',
      features: [
        'Annual compliance review',
        'Regulatory updates',
        'Compliance documentation',
        'Audit preparation',
        'Risk assessment',
      ],
      icon: '/window.svg',
    },
    {
      id: 'global-expansion',
      title: 'Global Expansion',
      description: 'Support for businesses looking to expand their operations internationally.',
      features: [
        'Market entry strategy',
        'International compliance',
        'Local partnership setup',
        'Cross-border transactions',
        'Global business consulting',
      ],
      icon: '/globe.svg',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Comprehensive business solutions tailored to your needs. From company
            registration to global expansion, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-blue-600 dark:text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant="primary"
                    className="text-lg px-8 py-4"
                  >
                    Get Started
                  </Button>
                </div>
                <div className="order-1 lg:order-2 relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}