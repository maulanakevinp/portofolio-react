import { Link } from "react-router-dom";
import Card from "../../components/fragments/Card";
import ScrollReveal from "../../components/layouts/ScrollReveal";
import { Projects } from "../../data/Projects";
import Badge from "../../components/fragments/Badge";

export default function Page() {
  return (
    <div className="px-4 relative mx-auto max-w-7xl flex flex-col gap-16 mt-10">
      <ScrollReveal className="page-reveal--third">
        <section id="projects" className="w-full flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-6">
              <Badge text="MAULANA KEVIN PRADANA / DEV" />
              <h1 className="text-white text-4xl font-bold font-space-grotesk">Projects</h1>
              <div className="flex flex-row items-center gap-3">
                <hr className="w-5 text-teal-300"/>
                <p className="text-teal-300 text-xs">PROJECTS.INDEX</p>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
            {Projects.map((item, key) => (
              <Card key={key}>
                <p className="text-xs mb-6">{item.tag}</p>
                <Link
                  to={item.url}
                  target="_blank"
                  title={`Go To ${item.title}`}
                >
                  <h4 className="text-lg font-bold text-white hover:-translate-y-1 transition-all duration-200 mb-6">{item.title}</h4>
                </Link>
                <p className="mb-5">{item.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {item.tech.map((stack, index) => (
                    <span key={index} className="border border-teal-700 px-2 py-1 text-center flex items-center text-xs text-teal-300">
                      {stack}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
