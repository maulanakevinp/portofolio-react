import { Link } from "react-router-dom";
import Card from "../fragments/Card";
import { WorkExperience } from "../../data/WorkExperience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const CardExperience = ({item}) => {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <div
        className="flex flex-row justify-between cursor-pointer group"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="">
          <div className="flex flex-row items-center gap-3 mb-3">
            <p className="text-xs">{item.worktype}</p>
            <span className="border border-teal-700 px-2 py-1 flex items-center text-xs text-teal-300">
              {item.period}
            </span>
          </div>
          <Link
            to={item.url}
            target="_blank"
            title={`Go To ${item.company}`}
          >
            <h4 className="text-lg font-bold text-white hover:-translate-y-1 transition-all duration-200">
              {item.title} - {item.company}
            </h4>
          </Link>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className={`text-white ${open ? "rotate-180" : ""} group-hover:rotate-180 transition-all duration-200`} />
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="list-disc pl-5 marker:text-teal-300 text-sm">
            {item.tasks.map((task, index) => (
              <li key={index} className="mb-2 last:mb-0">
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default function ProfessionalJourney() {
  return (
    <section id="work-experiences" className="w-full flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center gap-3">
            <hr className="w-5 text-teal-300"/>
            <p className="text-teal-300 text-xs">PROFESSIONAL.JOURNEY</p>
          </div>
          <h1 className="text-white text-2xl font-bold">Work Expriences</h1>
        </div>
        <Link
          to="/work-experiences"
          className="px-8 py-4 border border-slate-500 text-white duration-200 hover:shadow-md hover:shadow-teal-700 hover:border-teal-300 hover:-translate-y-1.5 ease-out transition-all"
        >
          See All Work Experiences
        </Link>
      </div>
      {WorkExperience.slice(0,3).map((item, key) => (
        <CardExperience key={key} item={item} />
      ))}
    </section>
  )
}