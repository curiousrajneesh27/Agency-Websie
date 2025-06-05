import React from 'react';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  const products = [
    {
      title: 'Enterprise Resource Planning System',
      description: 'Comprehensive business management solution',
      details: 'Our flagship ERP system integrates all core business processes into a single, unified platform. It offers modules for financial management, inventory control, human resources, customer relationship management, and more. Built with scalability in mind, it can grow with your business needs.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Healthcare Management Platform',
      description: 'Digital solution for modern healthcare providers',
      details: 'This platform streamlines healthcare operations with patient management, appointment scheduling, electronic medical records, billing, and analytics. It complies with industry regulations and prioritizes data security and privacy.',
      technologies: ['Angular', 'Java Spring', 'MongoDB', 'Docker']
    },
    {
      title: 'E-commerce Microservices Architecture',
      description: 'Scalable backend for high-traffic online stores',
      details: 'Our e-commerce backend solution uses microservices architecture to handle high volumes of transactions with minimal downtime. It includes services for product catalog management, user accounts, order processing, payment integration, and analytics.',
      technologies: ['Microservices', 'Kubernetes', 'GraphQL', 'AWS']
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Data visualization for informed business decisions',
      details: 'This customizable dashboard provides real-time insights into business operations and performance metrics. It features interactive visualizations, custom report generation, and alerts for key performance indicators.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'Elasticsearch']
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-10">Our Products</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We've delivered innovative solutions across various industries, helping businesses transform their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              description={product.description}
              details={product.details}
              technologies={product.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;