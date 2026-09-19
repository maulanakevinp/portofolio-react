import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const roleText = "software_engineer.init()";

export default function HeroSection() {
  const [typedRole, setTypedRole] = useState("");

  useEffect(() => {
    let characterIndex = 0;
    let timeoutId;

    const typeNextCharacter = () => {
      if (characterIndex < roleText.length) {
        characterIndex += 1;
        setTypedRole(roleText.slice(0, characterIndex));
        timeoutId = window.setTimeout(typeNextCharacter, 85);
        return;
      }

      timeoutId = window.setTimeout(() => {
        characterIndex = 0;
        setTypedRole("");
        typeNextCharacter();
      }, 2200);
    };

    typeNextCharacter();

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="w-full flex flex-col md:flex-row gap-5">
      <div className="flex-1 flex flex-col gap-8 pt-10">
        <div className="flex">
          <div className=" flex flex-row items-center gap-3 border border-dashed border-teal-300 bg-teal-500/8 p-2">
            <span className="rounded-full size-2 bg-teal-300 animate-pulse" />
            <span className="text-xs text-teal-300 tracking-widest">STATUS: OPEN TO WORK</span>
          </div>
        </div>
        <p className="text-white text-7xl font-bold font-space-grotesk">Maulana Kevin Pradana</p>
        <div className="flex flex-row gap-2">
          <span>{">"}</span>
          <span className="text-teal-300" aria-label={roleText}>
            {typedRole}
            <span className="typing-cursor" aria-hidden="true" />
          </span>
        </div>
        <p className="text-lg max-w-2xl mx-auto">
          Software Engineer with 7+ years of experience in Laravel, ReactJS, microservices, SSO (SAML, Google SSO), and DevOps.
          Experienced in building enterprise systems for education, fintech, and government sectors. Familiar with Docker, CI/CD pipelines, Linux server administration, and API-driven architecture.
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <Link
            to="/projects"
            className="py-4 px-8 bg-sky-400 text-black text-center hover:shadow-sm hover:shadow-[#63d4fb] hover:bg-[#63d4fb] hover:border-sky-300 border duration-200"
          >
            See Projects
          </Link>
          <Link
            to="https://github.com/maulanakevinp"
            target="_blank"
            className="flex flex-row gap-3 items-center py-4 px-8 border bg-teal-300 border-teal-700 justify-center text-gray-700  hover:shadow-sm hover:shadow-teal-300 duration-200 hover:border-teal-300"
          >
            <img 
              src="/img/icons/github.svg"
              className="size-4"
            />
            <span>Github Profile</span>
          </Link>
        </div>
        <div className="flex flex-row">
          <span className="border border-teal-700 text-teal-300 px-2 py-1 text-sm text-center flex items-center">Laravel</span>
          <span className="border border-teal-700 text-teal-300 px-2 py-1 text-sm text-center flex items-center">SQL Server</span>
          <span className="border border-teal-700 text-teal-300 px-2 py-1 text-sm text-center flex items-center">REST API</span>
          <span className="border border-teal-700 text-teal-300 px-2 py-1 text-sm text-center flex items-center">React</span>
          <span className="border border-teal-700 text-teal-300 px-2 py-1 text-sm text-center flex items-center">Docker</span>
        </div>
      </div>
      <div className="flex-1 p-0 md:ps-40 md:pb-20">
        <svg viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg">
          <circle className="schem-ring" cx="200" cy="230" r="150"></circle>
          <circle className="schem-ring" cx="200" cy="230" r="110" 
            style={{
              animationDirection: "reverse", 
              animationDuration: "55s"
            }} 
          />

          <path className="schem-path" d="M 60 90 L 200 90 L 200 180"></path>
          <path className="schem-path" d="M 200 180 L 320 180 L 320 260"></path>
          <path className="schem-path" d="M 200 180 L 90 260 L 90 360"></path>
          <path className="schem-path dashed" d="M 320 260 L 240 340"></path>
          <path className="schem-path dashed" d="M 90 360 L 200 420"></path>
          <path className="schem-path dashed" d="M 240 340 L 200 420"></path>

          <line className="schem-crosshair-svg" x1="200" y1="70" x2="200" y2="110"></line>
          <line className="schem-crosshair-svg" x1="180" y1="90" x2="220" y2="90"></line>

          <circle className="schem-node n1" cx="200" cy="180" r="6"></circle>
          <circle className="schem-node n2" cx="320" cy="260" r="6"></circle>
          <circle className="schem-node n3" cx="90" cy="360" r="6"></circle>
          <circle className="schem-node n4" cx="240" cy="340" r="6"></circle>
          <circle className="schem-node n2" cx="200" cy="420" r="6"></circle>

          <text className="schem-label l1" x="60" y="80">CLIENT.UI</text>
          <text className="schem-label l2" x="330" y="255">API.GATEWAY</text>
          <text className="schem-label l3" x="12" y="365">AUTH.SERVICE</text>
          <text className="schem-label l4" x="250" y="335">DB.SCHEMA</text>
          <text className="schem-label l5" x="160" y="450">DEPLOY.CI/CD</text>
        </svg>
      </div>
    </section>
  )
}