import React from 'react';
import SectionHeader from './ui/SectionHeader';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contributors = () => {
  const contributors = [
    {
      id: 1,
      name: 'Akshay Sundar T S',
      rollNumber: 'CB.SC.U4AIE23004'
    },
    {
      id: 2,
      name: 'Bavesh Raam S',
      rollNumber: 'CB.SC.U4AIE23016'
    },
    {
      id: 3,
      name: 'Kavin Chakravarthy',
      rollNumber: 'CB.SC.U4AIE23036'
    },
    {
      id: 4,
      name: 'Prem Kumar',
      rollNumber: 'CB.SC.U4AIE23052'
    }
  ];

  return (
    <section id="contributors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Contributors" 
          subtitle="Meet the team behind this innovative project" 
        />
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contributors.map((contributor) => (
            <div 
              key={contributor.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              
              
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{contributor.name}</h3>
                
                <p className="text-gray-500 text-xs mt-1">{contributor.rollNumber}</p>
                
                
                <div className="mt-4 flex space-x-3">
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                    <Linkedin size={18} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors;