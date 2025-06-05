import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Code className={`h-8 w-8 ${isScrolled ? 'text-teal-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              CODEAURA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'partners', 'services', 'products', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  isScrolled 
                    ? activeSection === section ? 'text-teal-600' : 'text-slate-700'
                    : activeSection === section ? 'text-teal-400' : 'text-white'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          <button
            className={`hidden md:block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isScrolled
                ? 'bg-teal-600 text-white hover:bg-teal-700'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            onClick={() => scrollToSection('contact')}
          >
            Schedule a Call
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '60px' }}
        >
          <div className="p-4 space-y-2">
            {['home', 'partners', 'services', 'products', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                  activeSection === section
                    ? 'bg-teal-50 text-teal-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button
              className="w-full mt-4 bg-teal-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-teal-700 transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;