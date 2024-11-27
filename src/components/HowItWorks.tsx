import { Upload, Search, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Image',
    description: 'Simply upload your X-ray or CT scan image through our secure platform.'
  },
  {
    icon: Search,
    title: 'AI Analysis',
    description: 'Our advanced AI algorithms analyze the image for fractures and abnormalities.'
  },
  {
    icon: FileCheck,
    title: 'Get Results',
    description: 'Receive detailed analysis with fracture location, type, and treatment suggestions.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="md:text-xl text-sm text-gray-400 max-w-2xl mx-auto">
            Get started with our simple three-step process
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-primary/20 transform translate-y-4" />
              )}
              <div className="relative bg-dark p-6 rounded-xl border border-primary/20 z-10">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}