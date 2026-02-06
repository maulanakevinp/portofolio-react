export default function Home() {
  const skills = [
    {
      title: 'Mobile Optimized',
      description: 'Created using responsive design techniques to ensure optimal viewing and interaction experience across all devices, from desktops to mobile phones.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M40.5 40.5C40.2239 40.5 40 40.2761 40 40L40 12.5C40 12.2239 40.2239 12 40.5 12L55.5 12C55.7761 12 56 12.2239 56 12.5L56 40C56 40.2761 55.7761 40.5 55.5 40.5L40.5 40.5ZM36 40C36 42.4853 38.0147 44.5 40.5 44.5L55.5 44.5C57.9853 44.5 60 42.4853 60 40L60 12.5C60 10.0147 57.9853 8 55.5 8L40.5 8C38.0147 8 36 10.0147 36 12.5L36 40ZM46.125 36.875C46.125 35.8395 46.9645 35 48 35C49.0355 35 49.875 35.8395 49.875 36.875C49.875 37.9105 49.0355 38.75 48 38.75C46.9645 38.75 46.125 37.9105 46.125 36.875ZM10 22C9.46957 22 8.96086 22.2107 8.58579 22.5858C8.21071 22.9609 8 23.4696 8 24V42C8 42.5304 8.21071 43.0391 8.58579 43.4142C8.96086 43.7893 9.46957 44 10 44H24H30C31.1046 44 32 44.8954 32 46C32 47.1046 31.1046 48 30 48H26V52H30C31.1046 52 32 52.8954 32 54C32 55.1046 31.1046 56 30 56H24H18C16.8954 56 16 55.1046 16 54C16 52.8954 16.8954 52 18 52H22V48H10C8.4087 48 6.88258 47.3679 5.75736 46.2426C4.63214 45.1174 4 43.5913 4 42V24C4 22.4087 4.63214 20.8826 5.75736 19.7574C6.88258 18.6321 8.4087 18 10 18H30C31.1046 18 32 18.8954 32 20C32 21.1046 31.1046 22 30 22H10ZM40 50C40 48.8954 40.8954 48 42 48H54C55.1046 48 56 48.8954 56 50C56 51.1046 55.1046 52 54 52H42C40.8954 52 40 51.1046 40 50Z" fill="#007AFF"/>
        </svg>
      ),
    },
    {
      title: 'Progressive Web Application',
      description: 'Using a mobile-first approach, this means that websites developed with PWA will work on mobile devices without issues.',
      icon: (
        <svg height="58.16" width="154.98" xmlns="http://www.w3.org/2000/svg" viewBox="0 -1.7407421375734522 256 97.92674213757344">
          <g fill="none">
            <path d="M165.35 96.185L204.209 0h-25.761l-26.58 62.157L132.964 0h-19.802L92.868 62.157 78.555 33.833 65.603 73.66l13.15 22.526h25.353l18.34-55.741 17.486 55.741z" fill="#fb8c00"/>
            <path d="M24.393 63.166H40.22c4.795 0 9.064-.535 12.808-1.606l4.094-12.618 11.44-35.264a28.175 28.175 0 0 0-2.986-3.92C59.704 3.253 51.109 0 39.794 0H0v96.185h24.393zm20.95-41.038c2.295 2.31 3.442 5.402 3.442 9.276 0 3.903-1.01 6.998-3.027 9.286-2.212 2.542-6.285 3.813-12.219 3.813h-9.146v-25.84h9.214c5.53 0 9.442 1.155 11.737 3.465zm143.08 56.83l7.395-18.663h21.348l-10.131-28.31L219.707 0 256 96.185h-26.766l-6.201-17.227z" fill="#616161"/>
          </g>
        </svg>
      ),
    },
    {
      title: 'SEO-Friendly',
      description: 'You can make your website rank high on Google because it is specifically designed to be SEO-friendly.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.6074 5.30925C10.4138 4.50284 11.5075 4.0498 12.648 4.0498H38.4501C39.0203 4.0498 39.5672 4.27632 39.9704 4.67953L55.0204 19.7295C55.4236 20.1327 55.6501 20.6796 55.6501 21.2498V55.6499C55.6501 56.2145 55.5389 56.7737 55.3228 57.2954C55.1067 57.8171 54.79 58.2911 54.3907 58.6904C53.9914 59.0897 53.5174 59.4065 52.9957 59.6226C52.474 59.8387 51.9148 59.9499 51.3501 59.9499H12.648C11.5075 59.9499 10.4138 59.4969 9.6074 58.6904C8.80099 57.884 8.34796 56.7903 8.34796 55.6499V8.34981C8.34796 7.20938 8.801 6.11566 9.6074 5.30925ZM37.5595 8.34981L12.648 8.34981L12.648 55.6499L51.3501 55.6499V22.1404L37.5595 8.34981Z" fill="#007AFF"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M38.4501 4.0498C39.6375 4.0498 40.6001 5.01239 40.6001 6.19981V19.0998H53.5022C54.6896 19.0998 55.6522 20.0624 55.6522 21.2498C55.6522 22.4372 54.6896 23.3998 53.5022 23.3998H38.4501C37.2626 23.3998 36.3 22.4372 36.3 21.2498V6.19981C36.3 5.01239 37.2626 4.0498 38.4501 4.0498Z" fill="#007AFF"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M34.7241 41.1756C35.5638 40.336 36.9251 40.336 37.7647 41.1756L42.0647 45.4756C42.9043 46.3153 42.9043 47.6766 42.0647 48.5162C41.2251 49.3558 39.8638 49.3558 39.0241 48.5162L34.7241 44.2162C33.8845 43.3766 33.8845 42.0152 34.7241 41.1756Z" fill="#007AFF"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M30.9235 32.0002C27.955 32.0002 25.5485 34.4067 25.5485 37.3752C25.5485 40.3437 27.955 42.7502 30.9235 42.7502C33.892 42.7502 36.2985 40.3437 36.2985 37.3752C36.2985 34.4067 33.892 32.0002 30.9235 32.0002ZM21.2485 37.3752C21.2485 32.0318 25.5801 27.7002 30.9235 27.7002C36.2668 27.7002 40.5985 32.0318 40.5985 37.3752C40.5985 42.7186 36.2668 47.0502 30.9235 47.0502C25.5801 47.0502 21.2485 42.7186 21.2485 37.3752Z" fill="#007AFF"/>
        </svg>
      ),
    },
  ];

  const projects = [
    { img: '/img/projects/ERP.png', alt: 'ERP Project' },
    { img: '/img/projects/SumberGading.png', alt: 'Sumber Gading' },
    { img: '/img/projects/blackorangecctv.png', alt: 'Black Orange CCTV' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div 
              className="w-56 h-56 mx-auto mb-8 rounded-full bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: "url('/img/avatars/512x512.jpg')", backgroundPositionX: '-25px' }}
            />
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Maulana Kevin Pradana
              </h1>
              <p className="text-lg text-gray-600">
                Fullstack / Software Engineer with 5+ years of experience in Laravel, ReactJS, microservices, SSO (SAML, Google SSO), and DevOps. Experienced in building enterprise systems for education, fintech, and government sectors. Familiar with Docker, CI/CD pipelines, Linux server administration, and API-driven architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={project.img} 
                  alt={project.alt}
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold">Like what you see?</h3>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Special Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg p-8 card-hover">
                <div className="mb-6">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Build Your Own Website Today!
              </h3>
              <p className="text-lg text-gray-100">
                Discover more freedom to create, design, manage, and develop a website exactly the way you want. Ready to use right away!
              </p>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-4 shadow-2xl">
                <div className="bg-white rounded overflow-hidden">
                  <img 
                    src="/img/projects/ERP.png" 
                    alt="ERP System"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
