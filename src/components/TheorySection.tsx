import React from 'react';
import SectionHeader from './ui/SectionHeader';
import TheoryCard from './TheoryCard';

const TheorySection = () => {
  const theoryItems = [
    {
      id: 1,
      title: 'Introduction',
      content: 'The Four-Wheeled Movable Robotic Arm project integrates a 4-degree-of-freedom (DOF) robotic arm with a differential drive mobile platform, designed for advanced object manipulation tasks. Built with lightweight materials and high-torque motors, the system excels in dynamic environments, supporting applications like pick-and-place operations, automated assembly, and research in mobile robotics. The wooden chassis ensures durability and weight efficiency, while the centrally mounted arm maintains balance during operations.',
      image: '/pic2.png', // Local image in public folder for id: 1
      imageAlt: 'Four-Wheeled Robotic Arm Overview'
    },
    {
      id: 2,
      title: 'Forward Kinematics',
      content: 'Forward kinematics maps joint angles to the end effector\'s position and orientation. For our 4-DOF arm, the Denavit-Hartenberg (DH) convention defines the kinematic chain. Each joint\'s transformation matrix, incorporating link length, twist, joint angle, and offset, is multiplied to compute the end effector\'s pose in 3D space. This enables precise workspace analysis and trajectory planning. For example, given joint angles θ1, θ2, θ3, and θ4, the position (x, y, z) is derived using matrix transformations, critical for tasks like object grasping.',
      image: '/pic3.png', // Local image in public folder for id: 2
      imageAlt: 'DH Parameters Diagram'
    },
    {
      id: 3,
      title: 'Inverse Kinematics',
      content: 'Inverse kinematics solves for joint angles given a desired end effector pose. This complex problem, often nonlinear, is addressed using geometric approaches for planar configurations and numerical methods (e.g., Jacobian-based solvers) for 3D tasks. Our system handles multiple solutions efficiently, ensuring accurate positioning for manipulation tasks. This is vital for adapting to varying object positions on the mobile platform, such as reaching for items at different heights or angles.',
      image: '/pic4.png', // Local image in public folder for id: 3
      imageAlt: 'Inverse Kinematics Solution'
    },
    {
      id: 4,
      title: 'Control Mechanisms',
      content: 'The control architecture employs an Raspberry Pi microcontroller to orchestrate the arm and mobile base. The arm\'s four servo motors, driven by a PCA9685 controller, provide precise joint control, while the L298N driver powers high-torque DC motors for the rear wheels. PID algorithms ensure smooth motion, and differential drive algorithms enable navigation (forward, backward, left, right). Vibration sensors, analyzed via Discrete Fourier Transform (DFT) and Fast Fourier Transform (FFT), support predictive maintenance by detecting mechanical anomalies.',
      image: '/pic5.png', // Local image in public folder for id: 4
      imageAlt: 'Control System Architecture'
    },
    {
      id: 5,
      title: 'Novelty Description',
      content: 'The project\'s innovation lies in its seamless integration of a 4-DOF robotic arm on a four-wheeled mobile base, enhanced by real-time vibration analysis for predictive maintenance. The lightweight wooden chassis, optimized weight distribution, and advanced control algorithms set it apart from conventional systems. The use of DFT/FFT for motor vibration analysis introduces a novel approach to ensuring system longevity, making the platform versatile and reliable for diverse robotic applications.',
      image: '/pic8.png', // Local image in public folder for id: 5
      imageAlt: 'Novelty Aspects'
    }
  ];

  return (
    <section id="theory" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Theoretical Foundations" 
          subtitle="Explore the engineering principles behind our four-wheeled robotic arm" 
        />
        
        <div className="mt-12 space-y-16">
          {theoryItems.map((item) => (
            <TheoryCard 
              key={item.id}
              title={item.title}
              content={item.content}
              image={item.image}
              imageAlt={item.imageAlt}
              isReversed={item.id % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheorySection;