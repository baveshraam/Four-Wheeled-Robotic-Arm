import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToTheory = () => {
    const theorySection = document.querySelector('#theory');
    if (theorySection) {
      theorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Four-Wheeled Movable 
              <span className="text-blue-700 block mt-1">Robotic Arm</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Advancing Robotics with Mobility, Precision, and Innovation. A comprehensive project integrating 4-DOF robotic manipulation with differential drive mobility.
            </p>
            <button 
              onClick={scrollToTheory}
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition-colors text-white font-medium py-3 px-6 rounded-lg"
            >
              Explore the Project
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/pic1.jpg" // Path to the image in the public folder
              alt="Robotic Arm Showcase" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;