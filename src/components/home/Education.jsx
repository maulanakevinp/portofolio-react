import { Link } from "react-router-dom";
import Card from "../fragments/Card";
import { Education as dataEducation } from "../../data/Education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const CardEducation = ({item}) => {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <div
        className="flex flex-row justify-between cursor-pointer group"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="flex flex-row gap-3">
          <div className="p-3 border border-sky-900 flex items-center justify-center">
            <FontAwesomeIcon icon={faGraduationCap} className="text-teal-300"/>
          </div>
          <div className="flex-1">
            <div className="flex flex-row items-center gap-3 mb-3">
              <span className="border border-teal-700 px-2 py-1 flex items-center text-xs text-teal-300">
                {item.period}
              </span>
            </div>
            <Link
              to={item.url}
              target="_blank"
              title={`Go To ${item.school}`}
            >
              <h4 className="text-lg font-bold text-white hover:-translate-y-1 transition-all duration-200">
                {item.major} - {item.school}
              </h4>
            </Link>
          </div>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className={`text-white ${open ? "-rotate-180" : ""} transition-all duration-200`} />
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="list-disc pl-5 marker:text-teal-300 text-sm">
            <li className="mb-2 last:mb-0">
              Completed studies with <b>GPA {item.gpa}</b>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default function Education() {
  return (
    <section id="work-experiences" className="w-full flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-2xl font-bold">Education</h1>
        </div>
      </div>
      {dataEducation.slice(0,3).map((item, key) => (
        <CardEducation key={key} item={item} />
      ))}
    </section>
  )
}