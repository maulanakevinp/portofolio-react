export default function StackOverview() {
  const techs = [
    {
      title: "Frontend",
      stacks: ["React", "JavaScript", "HTML/CSS", "TailwindCSS", "Bootstrap", "jQuery"]
    },
    {
      title: "Backend",
      stacks: ["PHP", "Laravel"]
    },
    {
      title: "Database",
      stacks: ["MySQL", "SQL Server", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools",
      stacks: ["Git", "Docker", "CI/CD Pipelines", "REST API"]
    },
  ];
  return (
    <section className="w-full flex flex-col gap-6">
      <p className="text-teal-300 text-xs">-- STACK.OVERVIEW</p>
      <h1 className="text-white text-2xl font-bold">Tech Stack & Tools</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {techs.map(item => (
          <div className="border border-teal-700 p-6">
            <h4 className="text-white mb-3">{item.title}</h4>
            <div className="flex flex-wrap gap-1">
              {item.stacks.map(stack => (
                <span className="border border-teal-700 px-2 py-1 text-center flex items-center text-xs">{stack}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}