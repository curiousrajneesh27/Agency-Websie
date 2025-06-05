import { ChevronRight } from 'lucide-react';

const TrustedPartners: React.FC = () => {
  const partners = [
    { name: 'Company 1', logo: '/Ayush Realtors.jpg' },
    { name: 'Company 2', logo: '/Dentist.png' },
    { name: 'Company 3', logo: '/R D Group.png' },
    { name: 'Company 4', logo: '/voltsec_io_logo.jpg' },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Trusted by innovative teams & leading brands
        </h2>

        <div className="overflow-hidden">
          <div className="flex space-x-12 justify-center flex-wrap">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-32 h-20 my-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-26 h-28 object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Work With Us
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;