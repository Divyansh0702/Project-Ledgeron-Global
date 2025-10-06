import { HeroSection } from '@/components/home/HeroSection';
import { CompanyIntro } from '@/components/home/CompanyIntro';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <CompanyIntro />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
