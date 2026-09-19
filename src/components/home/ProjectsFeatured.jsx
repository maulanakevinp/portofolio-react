import { Link } from "react-router-dom";
import Card from "../fragments/Card";

export default function ProjectsFeatured() {
  const projects = [
    {
      tag: "PROJECT // 01",
      title: "UIII — Single Sign On (SSO)",
      desc: "A centralized authentication platform that unifies user access across UIII's internal and external applications through SAML and Google SSO.",
      tech: ["Laravel", "frankenPHP", "Vanilla JavaScript", "TailwindCSS", "Docker", "SAML", "MinIO", "SQL Server", "CI/CD Pipelines"],
      url: "https://sso.uiii.ac.id"
    },
    {
      tag: "PROJECT // 02",
      title: "UIII — Academic Information System (UAIS)",
      desc: "An academic information system for managing student data, course processes, and UIII's academic services in one integrated platform.",
      tech: ["Laravel", "frankenPHP", "React", "JavaScript", "TailwindCSS", "Docker", "SAML", "MinIO", "SQL Server", "WebSocket", "CI/CD Pipelines"],
      url: "https://uais.uiii.ac.id"
    },
    {
      tag: "PROJECT // 03",
      title: "UIII — Dormitory",
      desc: "A UIII dormitory management system for managing residents, rooms, service requests, and operational communication in one central platform.",
      tech: ["Laravel", "frankenPHP", "React", "TypeScript", "TailwindCSS", "Docker", "SAML", "MinIO", "SQL Server", "WebSocket", "CI/CD Pipelines"],
      url: "https://dormitory.uiii.ac.id"
    },
  ];

  return (
    <section id="projects" className="w-full flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center gap-3">
            <hr className="w-5 text-teal-300"/>
            <p className="text-teal-300 text-xs">PROJECTS.FEATURED</p>
          </div>
          <h1 className="text-white text-2xl font-bold">Some Recent Projects</h1>
        </div>
        {/* <Link
          to="/projects"
          className="px-8 py-4 border border-slate-500 text-white duration-200 hover:shadow-md hover:shadow-teal-700 hover:border-teal-300 hover:-translate-y-1.5 ease-out transition-all"
        >
          See All Projects
        </Link> */}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((item, key) => (
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
                <span key={index} className="border border-teal-700 px-2 py-1 text-center flex items-center text-xs">
                  {stack}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}