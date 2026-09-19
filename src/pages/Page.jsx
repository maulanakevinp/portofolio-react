import HeroSection from "../components/HeroSection";
import StackOverview from "../components/StackOverview";

export default function Page() {
  return (
    <div className="px-4 relative mx-auto max-w-7xl">
      <HeroSection />
      <StackOverview />
    </div>
  );
}
