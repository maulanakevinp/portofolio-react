export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row gap-5 py-20">
      <div className="flex-1 flex flex-col">
        <div 
          className="w-56 h-56 mb-8 rounded-full bg-cover bg-center shadow-2xl"
          style={{ backgroundImage: "url('/img/avatars/512x512.jpg')" }}
        />
        <p className="text-lg text-[#9db3d1] max-w-2xl mx-auto">
          Full Stack / Software Engineer with 7+ years of experience in Laravel, ReactJS, microservices, SSO (SAML, Google SSO), and DevOps.
          Experienced in building enterprise systems for education, fintech, and government sectors. Familiar with Docker, CI/CD pipelines, Linux server administration, and API-driven architecture.
        </p>
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