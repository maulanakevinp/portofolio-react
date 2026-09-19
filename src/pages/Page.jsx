import HeroSection from "../components/home/HeroSection";
import ProjectsFeatured from "../components/home/ProjectsFeatured";
import StackOverview from "../components/home/StackOverview";

export default function Page() {
  return (
    <div className="px-4 relative mx-auto max-w-7xl flex flex-col gap-16">
      <HeroSection />
      <StackOverview />
      <ProjectsFeatured />
    </div>
  );
}
