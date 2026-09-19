import { TechStacks } from "../../data/TechStacks";
import Card from "../fragments/Card";

export default function StackOverview() {
  return (
    <section id="tech" className="w-full flex flex-col gap-6">
      <div className="flex flex-row items-center gap-3">
        <hr className="w-5 text-teal-300"/>
        <p className="text-teal-300 text-xs">STACK.OVERVIEW</p>
      </div>
      <h1 className="text-white text-2xl font-bold">Tech Stack & Tools</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {TechStacks.filter(f => f.category != "Others & Tools").map((item, key) => (
          <Card key={key}>
            <h4 className="text-white mb-3">{item.category}</h4>
            <div className="flex flex-wrap gap-2">
              {item.stacks.map((stack, index) => (
                <span key={index} className="border border-teal-700 px-2 py-1 text-center flex items-center text-teal-300 text-sm">
                  {stack.name}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <Card>
        <h4 className="text-white mb-3">Others & Tools</h4>
        <div className="flex flex-wrap gap-2">
          {TechStacks.find(f => f.category == "Others & Tools").stacks.map((stack, index) => (
            <span key={index} className="border border-teal-700 px-2 py-1 text-center flex items-center text-teal-300 text-sm">
              {stack.name}
            </span>
          ))}
        </div>
      </Card>
    </section>
  )
}