import React, { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistForm({ isOpen, onClose }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_d12eu5k', // Replace with your EmailJS service ID
        'template_nl7wl28', // Replace with your EmailJS template ID
        {
          to_email: 'healbloxafrica@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: `New waitlist signup from ${formData.name} (${formData.email})`,
        },
        'mmMZMh2irmUDCy3wU' // Replace with your EmailJS public key
      );

      toast.success('Successfully joined the waitlist!');
      setFormData({ name: '', email: '' });
      onClose();
    } catch (error) {
      toast.error('Failed to join waitlist. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-0">
      <Toaster position="top-center" />
      <div className="relative bg-dark-light border border-primary/20 rounded-xl w-full max-w-[90%] sm:max-w-md">
        {/* Close button - Increased touch target for mobile */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-dark-light border border-primary/20 rounded-full text-gray-400 hover:text-white hover:bg-dark-light/80 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Join the Waitlist</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary/50 text-base"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary/50 text-base"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full group relative mt-6"
            >
              <div className="absolute -inset-1 bg-primary/30 blur-sm rounded-xl group-hover:bg-primary/40 transition-colors" />
              <div className="relative bg-primary text-dark px-8 py-3 rounded-xl font-semibold text-center text-base sm:text-lg">
                {loading ? 'Joining...' : 'Join Waitlist'}
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}