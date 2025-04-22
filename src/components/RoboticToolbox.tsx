import React from 'react';
import SectionHeader from './ui/SectionHeader';

const RoboticToolbox = () => {
  return (
    <section id="toolbox" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Introduction to Robotic Toolbox" 
          subtitle="Powerful software tools for robotic manipulator analysis and simulation" 
        />
        
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The Robotic Toolbox (available in Python and MATLAB) is a comprehensive suite for robotic manipulator analysis. It supports forward and inverse kinematics, dynamics, trajectory planning, and 3D visualization. In this project, the toolbox was instrumental in:
            </p>
            
            <ul className="space-y-3 list-disc pl-5">
              <li className="text-gray-700">
                Modeling the 4-DOF arm's kinematic structure using DH parameters.
              </li>
              <li className="text-gray-700">
                Simulating joint movements and end effector trajectories to test reach and grasping.
              </li>
              <li className="text-gray-700">
                Validating control algorithms for precision and stability before hardware deployment.
              </li>
              <li className="text-gray-700">
                Visualizing the arm's workspace and motion paths in a 3D environment.
              </li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              This tool accelerated development by enabling virtual prototyping and optimization, reducing hardware testing iterations.
            </p>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="/pic7.png" // Corrected path without extra quotes
                alt="Robotic Toolbox Simulation" 
                className="w-full rounded-md mb-4"
              />
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Key Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="text-sm text-gray-700">Rapid prototyping</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="text-sm text-gray-700">Parameter optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="text-sm text-gray-700">Visual verification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="text-sm text-gray-700">Error detection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticToolbox;