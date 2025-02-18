import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Background from './Background';
import WaitlistForm from './WaitlistForm';

const ConnectedNode = () => (
  <div className="relative w-12 h-12 bg-dark-light rounded-lg border border-dark-light/50 shadow-lg">
    <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-lg" />
    <div className="absolute inset-0 animate-pulse-slow bg-gradient-radial from-primary/10 via-transparent to-transparent" />
  </div>
);

const ConnectionLine = ({ className }: { className?: string }) => (
  <div className={`absolute h-0.5 bg-gradient-to-r from-primary/20 to-primary/5 ${className}`} />
);

export default function Hero() {

  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section id="hero" >
    <div className="relative min-h-screen bg-dark overflow-hidden pt-16">
      {/* Animated background */}
      <Background />

      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,148,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,255,148,0.05)_0%,transparent_25%,transparent_75%,rgba(0,255,148,0.05)_100%)] animate-spin-slow" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* Connected nodes with animations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`absolute ${getNodePosition(i)}`}>
            <ConnectedNode />
          </div>
        ))}
        {[...Array(4)].map((_, i) => (
          <ConnectionLine
            key={i}
            className={`${getLinePosition(i)} animate-pulse-slow`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
        {/* Central icon */}
        {/* <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-md rounded-xl animate-pulse-slow" />
          <div className="relative bg-dark-light border-2 border-primary/30 rounded-xl p-3 mt-5">
            <div className="text-primary text-2xl font-bold">Healblox</div>
          </div>
          <div className="absolute -inset-4 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-pulse-slow" />
        </div> */}

        {/* Heading */}
        <h1 className="text-3xl md:text-7xl font-bold text-white text-center mb-4 tracking-tight">
          Medical Diagnosis with AI
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Precise, fast, and designed for African healthcare.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <button className="group relative"  onClick={() => setIsWaitlistOpen(true)}>
            <div className="absolute -inset-1 bg-primary/30 blur-sm rounded-xl group-hover:bg-primary/40 transition-colors" />
            <div className="relative bg-primary text-dark px-8 py-3 rounded-xl font-semibold inline-flex items-center space-x-2">
              <span>Get Early Access</span>
              <ExternalLink size={18} />
            </div>
          </button>
        </div>

        {/* Bottom text */}
        <p className="text-gray-400 text-center mb-8">
          Join the Revolution Now
        </p>

        {/* Platform buttons */}
        <div className="flex justify-center items-center md:space-x-4 space-x-2">
          {['Xray\nMRI', 'Symptom\nChecker', 'Analysis\n Report'].map((text, i) => (
            <button
              key={i}
              className="group relative px-6 py-4 sm:min-w-[170px] min-w-[110px]"
            >
              <div className="absolute inset-0 bg-dark-light border border-primary/20 rounded-xl" />
              <div className="relative text-gray-400 text-sm whitespace-pre-line">
                {text}
              </div>
              <ExternalLink size={16} className="absolute top-2 right-2 text-primary/40" />
            </button>
          ))}
        </div>
      </div>
    </div>
    {/* Waitlist Form */}
    <WaitlistForm 
      isOpen={isWaitlistOpen} 
      onClose={() => setIsWaitlistOpen(false)} 
    />
    </section>
  );
}

function getNodePosition(index: number): string {
  const positions = [
    'top-1/4 left-1/4 -translate-x-1/2',
    'top-1/4 right-1/4 translate-x-1/2',
    'bottom-1/4 left-1/4 -translate-x-1/2',
    'bottom-1/4 right-1/4 translate-x-1/2'
  ];
  return positions[index] || '';
}

function getLinePosition(index: number): string {
  const positions = [
    'top-1/3 left-1/3 w-32 rotate-45',
    'top-1/3 right-1/3 w-32 -rotate-45',
    'bottom-1/3 left-1/3 w-32 -rotate-45',
    'bottom-1/3 right-1/3 w-32 rotate-45'
  ];
  return positions[index] || '';
}