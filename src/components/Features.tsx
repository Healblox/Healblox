import { Brain, Clock, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Accurate Diagnosis',
    description: 'Advanced AI algorithms provide precise Medical issues detection and classification with over 95% accuracy.'
  },
  {
    icon: Clock,
    title: 'Rapid Analysis',
    description: 'Get detailed results in under 60 seconds, helping you make faster clinical decisions.'
  },
  {
    icon: Globe,
    title: 'African Context',
    description: 'Specifically trained and optimized for African healthcare environments and requirements.'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Built with privacy-first architecture, ensuring complete data protection and regulatory compliance.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-1 sm:py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-white mb-4">
            Advanced Features for Modern Healthcare
          </h2>
          <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto">
            Empowering healthcare providers with cutting-edge AI technology for precise medical diagnosis.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-dark-light p-6 rounded-xl border border-primary/20 hover:border-primary transition-colors">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}