import { HeroSection } from '../component/HeroSection';
import { FeaturesSection } from '../component/FeaturesSection';
import { PopularHotelsSection } from '../component/PopularHotelsSection';
import { CTASection } from '../component/CTASection';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <FeaturesSection />
      <PopularHotelsSection />
      <CTASection />
    </div>
  );
}

export const Component = Home;
