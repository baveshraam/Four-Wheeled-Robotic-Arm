import React from 'react';
import { ArrowUp, Github, Twitter, Linkedin, Cpu } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Cpu size={32} className="text-blue-400" />
            <div className="ml-3">
              <h3 className="text-xl font-bold">Robotic Arm Project</h3>
              <p className="text-gray-400 text-sm">Advancing Robotics with Innovation</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-700 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-700 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-700 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © 2025 Four-Wheeled Movable Robotic Arm Project | All Rights Reserved
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors text-white py-2 px-4 rounded-lg"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;