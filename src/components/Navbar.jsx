import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
            Maulana Kevin Pradana
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
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
            {/* <li>
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-600'
                } hover:text-blue-600 transition`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${
                  isActive('/projects') ? 'text-blue-600 font-semibold' : 'text-gray-600'
                } hover:text-blue-600 transition`}
              >
                Projects
              </Link>
            </li> */}
            <li>
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-600'
                } hover:text-blue-600 transition`}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            {/* <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block py-2 ${
                  isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-600'
                } hover:text-blue-600 transition`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={`block py-2 ${
                  isActive('/projects') ? 'text-blue-600 font-semibold' : 'text-gray-600'
                } hover:text-blue-600 transition`}
              >
                Projects
              </Link>
            </li> */}
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block py-2 ${
                  isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-600'
                } hover:text-blue-600 transition`}
              >
                Resume
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
