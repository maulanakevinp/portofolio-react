import ScrollReveal from "../../components/layouts/ScrollReveal";
import Badge from "../../components/fragments/Badge";
import { WorkExperience } from "../../data/WorkExperience";
import { CardExperience } from "../../components/home/ProfessionalJourney";

export default function Page() {
  return (
    <div className="px-4 relative mx-auto max-w-7xl flex flex-col gap-16 mt-10">
        <section id="projects" className="w-full flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-6">
              <Badge text="MAULANA KEVIN PRADANA / DEV" />
              <h1 className="text-white text-4xl font-bold font-space-grotesk">Work Experiences</h1>
              <div className="flex flex-row items-center gap-3">
                <hr className="w-5 text-teal-300"/>
                <p className="text-teal-300 text-xs">PROFESSIONAL.JOURNEY</p>
              </div>
            </div>
          </div>
          {WorkExperience.map((item, key) => (
            <ScrollReveal key={key} className="page-reveal--third">
              <CardExperience key={key} item={item} />
            </ScrollReveal>
          ))}
        </section>
    </div>
  );
}
