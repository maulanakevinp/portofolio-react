import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full backdrop-blur border-b border-teal-700">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="w-full flex justify-between items-center py-4">
          <div className='flex flex-row items-center gap-3'>
            <div className="box-border size-5 border border-sky-300 relative rotate-45 flex items-center justify-center">
              <div className="size-3 bg-teal-300"/>
            </div>
            <Link to="/" className="font-bold text-white transition">
              Maulana Kevin Pradana — Software Engineer
            </Link>
            <span className="text-teal-300 text-xs">/dev</span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden text-white hover:text-white/90 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'text-teal-300 font-semibold' : 'text-white'
                } hover:text-teal-300 duration-100 group flex flex-row gap-2`}
              >
                <span className={`group-hover:block hidden`}>//</span> Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${
                  isActive('/projects') ? 'text-teal-300 font-semibold' : 'text-white'
                } hover:text-teal-300 duration-100 group flex flex-row gap-2`}
              >
                <span className={`group-hover:block hidden`}>//</span> Projects
              </Link>
            </li>
            <li>
              <Link
                to="/storage/CV - Maulana Kevin Pradana.pdf"
                target='_blank'
                className={`text-white hover:text-teal-300 duration-100 group flex flex-row gap-2`}
              >
                <span className={`group-hover:block hidden`}>//</span> CV
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block py-2 ${
                  isActive('/') ? 'text-teal-300 font-semibold' : 'text-white'
                } hover:text-teal-300 transition`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={`block py-2 ${
                  isActive('/projects') ? 'text-teal-300 font-semibold' : 'text-white'
                } hover:text-teal-300 transition`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/storage/CV - Maulana Kevin Pradana.pdf"
                target='_blank'
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-white hover:text-teal-300 transition`}
              >
                CV
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
