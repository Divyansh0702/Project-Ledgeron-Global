import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/images/team/john.jpg',
      bio: 'With over 15 years of experience in business consulting.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: '/images/team/sarah.jpg',
      bio: 'Expert in streamlining business processes and compliance.',
    },
    {
      name: 'Michael Chen',
      role: 'Legal Advisor',
      image: '/images/team/michael.jpg',
      bio: 'Specializes in business law and corporate regulations.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Ledgeron Global
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Your trusted partner in business success. We help entrepreneurs and businesses
            navigate the complexities of company registration and compliance.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2013, Ledgeron Global has been at the forefront of helping
                  businesses establish and grow their presence in the market.
                </p>
                <p>
                  What started as a small consultancy has grown into a comprehensive
                  business solutions provider, trusted by hundreds of entrepreneurs
                  and companies across the region.
                </p>
                <p>
                  Our commitment to excellence and customer satisfaction has earned
                  us recognition as one of the most reliable business registration
                  and compliance partners.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/office-team.jpg"
                alt="Ledgeron Global Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4 text-center">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}