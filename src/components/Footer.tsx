import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-light text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">FrixAI Africa</h3>
            <p className="text-gray-400">
              Revolutionizing healthcare diagnostics with AI-powered solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 text-primary" />
                contact@FrixAIafrica.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-primary" />
                +234 800 123 4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2 text-primary" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Privacy & Terms</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Data Protection</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-dark mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FrixAI Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}