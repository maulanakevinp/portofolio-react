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
      <p className="text-teal-300 text-xs">-- STACK.OVERVIEW</p>
      <h1 className="text-white text-2xl font-bold">Tech Stack & Tools</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {techs.map(item => (
          <Card item={item} />
        ))}
      </div>
      <Card item={others} />
    </section>
  )
}

const Card = ({item}) => (
  <div className="border border-teal-700 p-6 hover:bg-teal-700/30 hover:border-teal-300 duration-200 hover:shadow-teal-300 relative hover:-top-1">
    <h4 className="text-white mb-3">{item.title}</h4>
    <div className="flex flex-wrap gap-1">
      {item.stacks.map(stack => (
        <span className="border border-teal-700 px-2 py-1 text-center flex items-center text-xs">{stack}</span>
      ))}
    </div>
  </div>
)