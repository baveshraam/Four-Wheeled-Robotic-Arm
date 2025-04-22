import React, { useRef, useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import { Play } from 'lucide-react';

const Simulation = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="simulation" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Simulation of the Manipulator" 
          subtitle="Visualizing the robotic arm's performance in a virtual environment" 
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              The 4-DOF robotic arm and mobile base were simulated in Adams View, a multibody dynamics software. The simulation process included:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-700 text-sm font-semibold">1</span>
                </div>
                <p className="text-gray-700">
                  Detailed modeling of joints, links, and the claw end effector to reflect real-world dynamics.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-700 text-sm font-semibold">2</span>
                </div>
                <p className="text-gray-700">
                  Testing arm movements for grasping, lifting, and rotation under various conditions.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-700 text-sm font-semibold">3</span>
                </div>
                <p className="text-gray-700">
                  Analyzing mobile base stability under different loads and terrains.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-700 text-sm font-semibold">4</span>
                </div>
                <p className="text-gray-700">
                  Prototyping Raspberry pi -based control systems for servo motor coordination (PCA9685) and DC motor navigation (L298N).
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-700 text-sm font-semibold">5</span>
                </div>
                <p className="text-gray-700">
                  Simulating vibration data using DFT/FFT to predict wear and maintenance needs.
                </p>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              The simulation validated the system's design and control strategies, ensuring robust performance. The video demonstrates the arm's capabilities in a virtual environment.
            </p>
          </div>

          <div className="space-y-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video bg-gray-100">
              <video
                ref={videoRef}
                src="/arm_simulation.mp4"
                controls
                className="w-full h-full object-cover"
                poster="/arm_simulation_thumbnail.jpg"
              >
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button
                    onClick={handlePlay}
                    className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Play size={28} className="text-blue-700 ml-1" />
                  </button>
                </div>
              )}
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Simulation Results</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded shadow">
                  <p className="text-sm font-medium text-gray-800">Maximum Reach</p>
                  <p className="text-lg font-bold text-blue-700">42.5 cm</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="text-sm font-medium text-gray-800">Load Capacity</p>
                  <p className="text-lg font-bold text-blue-700">250 g</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="text-sm font-medium text-gray-800">Motor Efficiency</p>
                  <p className="text-lg font-bold text-blue-700">87%</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="text-sm font-medium text-gray-800">Battery Life</p>
                  <p className="text-lg font-bold text-blue-700">2.5 hrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulation;