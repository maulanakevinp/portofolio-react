import { TechStacks } from "../../data/TechStacks";

export default function TechMarquee() {
  return (
    <div className="tech-marquee overflow-hidden">
      <div className="tech-marquee-track">
        {[0, 1].map((copy) => (
          <div
            className="flex shrink-0 gap-10"
            key={copy}
            aria-hidden={copy === 1}
          >
            {TechStacks.flatMap((tech) => tech.stacks).map((stack, index) => (
              <img
                key={`${copy}-${index}-${stack.name}`}
                src={stack.icon}
                className="h-10 w-auto shrink-0 ms-10"
                title={stack.name}
                alt={stack.name}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}