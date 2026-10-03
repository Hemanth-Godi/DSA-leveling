import { HeroSection } from '../components/dashboard/HeroSection';
import { HowItWorks } from '../components/dashboard/HowItWorks';
import { FeaturesSection } from '../components/dashboard/FeaturesSection';
import { JourneySection } from '../components/dashboard/JourneySection';
import { RanksSection } from '../components/dashboard/RanksSection';
import { RewardsSection } from '../components/dashboard/RewardsSection';
import { FinalCta } from '../components/dashboard/FinalCta';

export default function Landing() {
  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <JourneySection />
        <RanksSection />
        <RewardsSection />
        <FinalCta />
      </main>
    </div>
  );
}