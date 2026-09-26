import { FinalCta } from '../components/dashboard/FinalCta';
import { FeaturesSection } from '../components/dashboard/FeaturesSection';
import { HeroSection } from '../components/dashboard/HeroSection';
import { HowItWorks } from '../components/dashboard/HowItWorks';
import { JourneySection } from '../components/dashboard/JourneySection';
import { LandingHeader } from '../components/dashboard/LandingHeader';
import { RanksSection } from '../components/dashboard/RanksSection';
import { RewardsSection } from '../components/dashboard/RewardsSection';

export default function Dashboard() {
  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      <LandingHeader />
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
