import React from 'react';
import SectionHeader from './ui/SectionHeader';
import { ExternalLink } from 'lucide-react';

const References = () => {
  const referenceList = [
    {
      id: 1,
      author: 'Corke, P.',
      year: '2017',
      title: 'Robotics, Vision and Control: Fundamental Algorithms in MATLAB',
      publisher: 'Springer',
      link: '#'
    },
    {
      id: 2,
      author: 'MSC Software',
      title: 'Adams View Documentation',
      note: 'Available at:',
      link: 'https://www.mscsoftware.com/product/adams'
    },
    {
      id: 3,
      author: 'Denavit, J., & Hartenberg, R. S.',
      year: '1955',
      title: 'A kinematic notation for lower-pair mechanisms based on matrices',
      journal: 'Journal of Applied Mechanics',
      volume: '22(2)',
      pages: '215-221',
      link: '#'
    },
    {
      id: 4,
      author: 'Raspberry Pi',
      title: 'Official Reference Guide',
      note: 'Retrieved from',
      link: 'https://www.raspberrypi.com/documentation/'
    },
    {
      id: 5,
      author: 'Siciliano, B., & Khatib, O.',
      year: '2008',
      title: 'Springer Handbook of Robotics',
      publisher: 'Springer',
      link: '#'
    }
  ];

  return (
    <section id="references" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="References" 
          subtitle="Academic and technical resources that supported our project" 
        />
        
        <div className="mt-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-md">
          <ul className="space-y-6">
            {referenceList.map((ref) => (
              <li key={ref.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-700 text-sm font-medium">{ref.id}</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 leading-relaxed">
                      {ref.author} {ref.year && `(${ref.year})`}. <span className="italic">{ref.title}</span>. 
                      {ref.journal && ` ${ref.journal}`}{ref.volume && `, ${ref.volume}`}{ref.pages && `, ${ref.pages}`}.
                      {ref.publisher && ` ${ref.publisher}`}.
                      {ref.note && ` ${ref.note}`}
                    </p>
                    {ref.link && ref.link !== '#' && (
                      <a 
                        href={ref.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      >
                        Visit resource <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default References;