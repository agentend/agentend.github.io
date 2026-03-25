import Hero from "@/components/landing/hero";
import ParadigmShift from "@/components/landing/paradigm-shift";
import CodeShowcase from "@/components/landing/code-showcase";
import HowItWorks from "@/components/landing/how-it-works";
import StatsBar from "@/components/landing/stats-bar";
import FeatureGrid from "@/components/landing/feature-grid";
import ArchitecturePreview from "@/components/landing/architecture-preview";
import InstallCta from "@/components/landing/install-cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ParadigmShift />
      <CodeShowcase />
      <HowItWorks />
      <StatsBar />
      <FeatureGrid />
      <ArchitecturePreview />
      <InstallCta />
    </main>
  );
}
