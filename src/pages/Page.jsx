import Education from "../components/home/Education";
import HeroSection from "../components/home/HeroSection";
import ProfessionalJourney from "../components/home/ProfessionalJourney";
import ProjectsFeatured from "../components/home/ProjectsFeatured";
import StackOverview from "../components/home/StackOverview";
import ScrollReveal from "../components/layouts/ScrollReveal";

export default function Page() {
  return (
    <div className="px-4 relative mx-auto max-w-7xl flex flex-col gap-16">
      <ScrollReveal className="page-reveal--first">
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal className="page-reveal--second">
        <StackOverview />
      </ScrollReveal>
      <ScrollReveal className="page-reveal--third">
        <ProjectsFeatured />
      </ScrollReveal>
      <ScrollReveal className="page-reveal--third">
        <ProfessionalJourney />
      </ScrollReveal>
      <ScrollReveal className="page-reveal--third">
        <Education />
      </ScrollReveal>
    </div>
  );
}
