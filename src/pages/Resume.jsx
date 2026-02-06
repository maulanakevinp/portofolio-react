import WorkExperience from "../data/WorkExperience";
import Skills from "../data/Skills";
import Education from "../data/Education";
import Certificate from "../data/Certificate";

export default function Resume() {

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div 
              className="w-56 h-56 mx-auto mb-8 rounded-full bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: "url('/img/avatars/512x512.jpg')" }}
            />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Fullstack / Software Engineer with 5+ years of experience in Laravel, ReactJS, microservices, SSO (SAML, Google SSO), and DevOps. Experienced in building enterprise systems for education, fintech, and government sectors. Familiar with Docker, CI/CD pipelines, Linux server administration, and API-driven architecture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Work Experience */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>
            <div className="space-y-8">
              {WorkExperience.map((exp, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <span className="text-gray-600 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Core Skills</h2>
            <div className="flex flex-col gap-4">
              {Skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 w-full">{skill.category}</h3>
                  <div className="flex flex-wrap gap-4">
                    {skill.skills.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex flex-col items-center w-20"
                      >
                        <img 
                          src={item.icon} 
                          alt={item.name} 
                          className="h-12 mb-2 filter group-hover:brightness-110 transition"
                        />
                        <span className="text-center text-sm text-gray-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Education</h2>
            <div className="space-y-6">
              {Education.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">{edu.school}</h3>
                      <p className="text-gray-600">{edu.major}</p>
                      <a 
                        href={edu.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition"
                      >
                        {edu.school}
                      </a>
                    </div>
                    <span className="text-gray-600 mt-2 md:mt-0">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Certifications</h2>
            <div className="space-y-6">
              {Certificate.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col md:flex-row md:justify-between md:items-start gap-6"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{cert.name}</h3>
                    <span
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      {cert.issuer}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
