import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      quote: 'Working with this team was a game-changer for our business. They delivered our project on time and exceeded our expectations with their attention to detail and innovative solutions.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder, Startup Innovations',
      quote: 'Their team\'s expertise in software development helped us launch our product six weeks ahead of schedule. The quality of their work is exceptional, and their communication was clear throughout the project.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Emily Chang',
      role: 'Product Manager, Enterprise Solutions',
      quote: 'The mobile application they developed for us has received outstanding feedback from our users. Their team\'s ability to translate our requirements into a polished product was impressive.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'David Wilson',
      role: 'CEO, Global Retail Inc.',
      quote: 'Their strategic consulting services helped us identify key areas for digital transformation. The solutions they implemented have increased our operational efficiency by over 40%.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard 
                    name={testimonial.name}
                    role={testimonial.role}
                    quote={testimonial.quote}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-teal-600' : 'bg-slate-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md text-slate-700 hover:text-teal-600 transition-colors md:block hidden"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md text-slate-700 hover:text-teal-600 transition-colors md:block hidden"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;