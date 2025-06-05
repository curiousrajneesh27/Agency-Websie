import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  Code, 
  Smartphone, 
  HeadphonesIcon, 
  BarChart3, 
  ShieldCheck 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-teal-600" />,
      title: 'Software Development',
      description: 'Custom solutions tailored to your unique business requirements',
      details: 'We specialize in building scalable, maintainable software solutions using modern technologies and best practices. Our development process ensures high-quality code that meets your business objectives.'
    },
    {
      icon: <Smartphone className="h-10 w-10 text-teal-600" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps for iOS and Android',
      details: 'Our mobile development team creates engaging, high-performance applications that provide exceptional user experiences across all mobile platforms.'
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-teal-600" />,
      title: 'IT Consulting',
      description: 'Strategic technology guidance for optimal business outcomes',
      details: 'We provide expert advice on technology strategies, infrastructure planning, and digital transformation initiatives to help your business stay competitive in the digital landscape.'
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-teal-600" />,
      title: 'Business Strategy',
      description: 'Data-driven insights to drive growth and innovation',
      details: 'Our strategic consulting services help you identify opportunities, overcome challenges, and create roadmaps for sustainable business growth.'
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-teal-600" />,
      title: 'Cyber Security',
      description: 'Robust protection for your digital assets and data',
      details: 'We implement comprehensive security measures to protect your systems, applications, and data from threats and vulnerabilities.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-5">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We deliver exceptional digital solutions that help businesses thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;