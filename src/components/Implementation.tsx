import React from 'react';
import SectionHeader from './ui/SectionHeader';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Implementation: React.FC = () => {
  return (
    <section id="implementation" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Implementation"
          subtitle="Steps and techniques used to bring the project to life"
        />

        <div className="mt-12 space-y-8">
          {/* Process Steps */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Process:</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Ran the 4‑DOF arm model in Adams View to simulate movements.</li>
              <li>Tested the arm's reach and claw grasping in various scenarios.</li>
              <li>Reviewed simulation outputs for motion accuracy.</li>
              <li>Finalized the simulation data for documentation.</li>
            </ol>
          </div>

          {/* FFT Anomaly Detection */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Processed vibration data with DFT/FFT to detect anomalies:
            </h3>
            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Equation:</strong>
                <BlockMath
                  math={String.raw`X[k] = \sum_{n=0}^{N-1} x[n] e^{-j\frac{2\pi}{N}kn}`}
                />
                <p>
                  Computes the FFT of Z-axis data to transform time-domain samples into the frequency domain.
                </p>
              </li>

              <li>
                <strong>Equation:</strong>
                <BlockMath math={String.raw`f_k = \frac{k f_s}{N}`} />
                <p>Calculates the frequency bins for the FFT spectrum.</p>
              </li>

              <li>
                <strong>Equation:</strong>
                <BlockMath math={String.raw`\Delta t = \frac{1}{f_s}`} />
                <p>Sets the sampling interval for data collection timing.</p>
              </li>

              <li>
                <strong>Equation:</strong>
                <BlockMath
                  math={String.raw`|X[k]| = \sqrt{\operatorname{Re}(X[k])^2 + \operatorname{Im}(X[k])^2}`}
                />
                <p>Computes FFT magnitudes for plotting and anomaly detection.</p>
              </li>

              <li>
                <strong>Equation:</strong>
                <BlockMath
                  math={String.raw`\text{Peak Magnitude} = \max\bigl(|X[k]|\bigr) \quad \text{for } f_k > f_{\mathrm{threshold}}`}
                />
                <p>
                  Finds the maximum magnitude in filtered frequencies (above a threshold) to check for anomalies.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
