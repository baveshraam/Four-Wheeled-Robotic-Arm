import React from 'react';
import SectionHeader from './ui/SectionHeader';
import CodeBlock from './ui/CodeBlock';

const Questions = () => {
  return (
    <section id="questions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Theoretical and Programming Questions" 
          subtitle="Explore key concepts and implementation details" 
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Theoretical Questions</h3>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-700 mb-3">What role do DH parameters play in forward kinematics?</h4>
                <p className="text-gray-700 leading-relaxed">
                  DH parameters (link length, link twist, joint angle, joint offset) standardize the geometric description of a robotic arm's joints, enabling the construction of transformation matrices to compute the end effector's position and orientation in 3D space.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-700 mb-3">Why is inverse kinematics computationally intensive?</h4>
                <p className="text-gray-700 leading-relaxed">
                  Inverse kinematics involves solving nonlinear equations that may have multiple or no solutions, requiring iterative numerical methods, optimization, and handling of singularities, which increases computational complexity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-700 mb-3">How does differential drive enhance mobile robot navigation?</h4>
                <p className="text-gray-700 leading-relaxed">
                  Differential drive uses independent wheel speeds to enable precise turning and navigation, offering simplicity and maneuverability for the mobile base in confined or dynamic environments.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Programming Questions</h3>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-700 mb-3">Write a Python function for forward kinematics of a 4-DOF arm</h4>
                <CodeBlock language="python">
{`import numpy as np
def forward_kinematics(theta1, theta2, theta3, theta4, l1=10, l2=10, l3=10, l4=5):
    x = l1 * np.cos(theta1) + l2 * np.cos(theta1 + theta2) + \\
        l3 * np.cos(theta1 + theta2 + theta3) + \\
        l4 * np.cos(theta1 + theta2 + theta3 + theta4)
    y = l1 * np.sin(theta1) + l2 * np.sin(theta1 + theta2) + \\
        l3 * np.sin(theta1 + theta2 + theta3) + \\
        l4 * np.sin(theta1 + theta2 + theta3 + theta4)
    z = 0  # Planar motion assumption for simplicity
    return np.array([x, y, z])`}
                </CodeBlock>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;