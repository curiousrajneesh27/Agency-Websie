import React from 'react';
import { 
  Code, 
  Linkedin,
  Instagram, 
  Mail, 
  MessageCircle 
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-teal-400" />
              <span className="ml-2 text-xl font-bold">CODEAURA</span>
            </div>
            <p className="text-slate-400 mb-6">
              Transforming ideas into scalable digital solutions. We build what your business deserves.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/codeaura-technologies/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/itscodeaura_agency?igsh=amd4Y3h5cWk4bnJ3" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Company</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Mission</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Connect With Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-3" />
                <a href="mailto:youragencyemail@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors">
                  codeauratechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-5 w-5 text-teal-400 mr-3" />
                <a href="https://wa.me/9565245755" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                  +91 9565245755 
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Codeaura Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;