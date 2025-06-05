import React from 'react';
import { Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        <div className="absolute inset-0 opacity-20">
          {/* Grid pattern for background */}
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWMTZoMnY2em0tNiA2aC00di00aDR2NHptMC02aC00di00aDR2NHptNiAwaDR2LTRoLTR2NHptLTYtNmgtNFY2aDR2NnpttbLTYgNmgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 animate-fadeIn">
          Transforming Ideas into Scalable Digital Solutions — We build what your business deserves.
        </h1>
        <div className="mt-8">
          <button 
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white text-base sm:text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Floating Mail Icon */}
      <a 
        href="mailto:youragencyemail@gmail.com" 
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white text-teal-600 p-3 rounded-full shadow-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-110 active:scale-95 z-50"
        aria-label="Contact us via email"
      >
        <Mail className="h-6 w-6" />
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-1 h-8 bg-white/30 rounded-full relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-white animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;