import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.png';
import { useState } from 'react';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    window.open('https://healblox-dashboard.onrender.com', '_blank', 'noopener,noreferrer');
  };


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
              {/* <span className="text-2xl font-bold text-primary">Healblox</span> */}
            </a>
          </div>

           {/* Desktop Menu */}

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-primary transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">Testimonials</a>
            <button 
              onClick={handleLogin}
              className="bg-primary text-dark px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              Login
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="relative z-50 p-2 text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div 
            className={`
              fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300
              ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div 
            className={`
              absolute top-0 right-0 w-64 h-screen bg-dark/95 md:hidden
              transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="flex flex-col pt-20 px-4">
              <a 
                href="#features" 
                className="py-3 text-gray-300 hover:text-primary transition-colors border-b border-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="py-3 text-gray-300 hover:text-primary transition-colors border-b border-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="py-3 text-gray-300 hover:text-primary transition-colors border-b border-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <button 
                onClick={() => {
                  handleLogin();
                  setIsMenuOpen(false);
                }}
                className="mt-4 bg-primary text-dark px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}