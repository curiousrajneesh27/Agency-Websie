import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustedPartners from './components/TrustedPartners/TrustedPartners';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-slate-50 text-slate-800">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <TrustedPartners />
        <Services />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;