import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      <div className="w-20 h-1 bg-blue-700 mx-auto my-4 rounded-full"></div>
      <p className="text-gray-600 text-lg">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;