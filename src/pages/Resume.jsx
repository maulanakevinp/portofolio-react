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

          {/* Skills & Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
              <div className="flex flex-wrap gap-4">
                {Skills.map((skill, index) => (
                  <div key={index} className="group relative">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                      title={skill.name}
                    />
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <i className="text-2xl text-blue-600 ion-android-calendar"></i>
                  <span className="text-gray-700">08/05/1999</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="text-2xl text-blue-600 ion-person"></i>
                  <span className="text-gray-700">Maulana Kevin Pradana, S.Kom., MTA</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="text-2xl text-blue-600 ion-ios-telephone"></i>
                  <a href="https://wa.me/6282331571857" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    +62 823-3157-1857
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="text-2xl text-blue-600 ion-email"></i>
                  <a href="mailto:maulanakevinpradana@gmail.com" className="text-blue-600 hover:text-blue-800">
                    maulanakevinpradana@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="text-2xl text-blue-600 ion-ios-location"></i>
                  <span className="text-gray-700">Jember, East Java, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-20">
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
