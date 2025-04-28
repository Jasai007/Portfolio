import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;