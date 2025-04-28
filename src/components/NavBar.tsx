import React from 'react';
import { Menu, X, FileText } from 'lucide-react';
import NavLink from './NavLink';

const NavBar: React.FC<{ isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#blogs">Blogs</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <FileText className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="#about" mobile>About</NavLink>
              <NavLink href="#skills" mobile>Skills</NavLink>
              <NavLink href="#projects" mobile>Projects</NavLink>
              <NavLink href="#blogs" mobile>Blogs</NavLink>
              <NavLink href="#contact" mobile>Contact</NavLink>
              <a 
                href="/resume.pdf"
                className="block px-3 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
