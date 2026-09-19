import Card from "../fragments/Card";

export default function StackOverview() {
  const techs = [
    {
      title: "Programming Languages",
      stacks: ["PHP", "JavaScript", "TypeScript", "Java", "Dart"]
    },
    {
      title: "Frameworks & Libraries",
      stacks: ["Laravel", "React", "TailwindCSS", "Codeigniter", "Bootstrap", "jQuery", "Flutter"]
    },
    {
      title: "Database",
      stacks: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "APIs & Integration",
      stacks: ["RESTful API"," SSO (SAML, Google SSO)", "WhatsApp API", "Payment Gateway"]
    },
  ];

  const others = {
    title: "Other & Tools",
    stacks: ["Docker", "Nginx", "Apache2", "cPanel", "aaPanel", "MinIO", "GitHub", "GitLab", "CI/CD Pipelines", "FrankenPHP", "Microservices Architecture", "Authentication & Authorization", "GIS (Leaflet.js)"]
  };


  return (
    <section className="w-full flex flex-col gap-6">
      <div className="flex flex-row items-center gap-3">
        <hr className="w-5 text-teal-300"/>
        <p className="text-teal-300 text-xs">STACK.OVERVIEW</p>
      </div>
      <h1 className="text-white text-2xl font-bold">Tech Stack & Tools</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {techs.map((item, key) => (
          <Card key={key}>
            <h4 className="text-white mb-3">{item.title}</h4>
            <div className="flex flex-wrap gap-1">
              {item.stacks.map((stack, index) => (
                <span key={index} className="border border-teal-700 px-2 py-1 text-center flex items-center text-xs">
                  {stack}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <Card>
        <h4 className="text-white mb-3">{others.title}</h4>
        <div className="flex flex-wrap gap-1">
          {others.stacks.map((stack, index) => (
            <span key={index} className="border border-teal-700 px-2 py-1 text-center flex items-center text-xs">
              {stack}
            </span>
          ))}
        </div>
      </Card>
    </section>
  )
}