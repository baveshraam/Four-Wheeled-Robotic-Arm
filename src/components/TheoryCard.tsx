import React from 'react';

interface TheoryCardProps {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  isReversed?: boolean;
}

const TheoryCard: React.FC<TheoryCardProps> = ({ 
  title, 
  content, 
  image, 
  imageAlt,
  isReversed = false 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      {!isReversed ? (
        <>
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{content}</p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 md:order-2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{content}</p>
          </div>
          <div className="md:w-1/2 md:order-1">
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TheoryCard;