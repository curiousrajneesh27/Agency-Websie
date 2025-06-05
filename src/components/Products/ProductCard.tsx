import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  details: string;
  technologies: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  details,
  technologies
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-md">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          aria-expanded={isExpanded}
          aria-controls={`details-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
          {isExpanded ? 
            <ChevronUp className="ml-1 h-4 w-4" /> : 
            <ChevronDown className="ml-1 h-4 w-4" />
          }
        </button>
        
        <div 
          id={`details-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className={`mt-4 text-slate-700 overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="mb-4">{details}</p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
            }}
            className="inline-block px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded hover:bg-teal-700 transition-colors"
          >
            Request Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;