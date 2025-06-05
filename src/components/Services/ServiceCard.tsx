import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  details,
  delay 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      style={{ 
        opacity: 0,
        animation: `fadeInUp 0.6s ease-out ${delay}s forwards` 
      }}
    >
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          {isExpanded ? 
            <ChevronUp className="ml-1 h-4 w-4" /> : 
            <ChevronDown className="ml-1 h-4 w-4" />
          }
        </button>
        
        <div 
          className={`mt-4 text-slate-700 overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;