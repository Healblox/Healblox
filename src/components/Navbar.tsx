import { Menu } from 'lucide-react';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-dark/80 backdrop-blur-sm z-50 border-b border-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* <div className="flex items-center">
            <a href="#hero" className="text-gray-300 hover:text-primary transition-colors"><span className="text-2xl font-bold text-primary">Healblox </span></a>
          </div> */}
           <div className="flex items-center">
            <a href="/" className="text-gray-300 hover:text-primary transition-colors">
              <img src={Logo} alt="Healblox Logo" className="h-10 w-auto" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-primary transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">Testimonials</a>
            <button className="bg-primary text-dark px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              Login
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}