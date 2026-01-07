
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span className="text-xl font-semibold serif tracking-tight text-slate-800">Serene Minds</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase">
          <a href="#about" className="text-slate-600 hover:text-teal-600 transition-colors">About</a>
          <a href="#who" className="text-slate-600 hover:text-teal-600 transition-colors">Counseling</a>
          <a href="#approach" className="text-slate-600 hover:text-teal-600 transition-colors">Approach</a>
          <a href="#location" className="text-slate-600 hover:text-teal-600 transition-colors">Location</a>
          <a href="#contact" className="px-5 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all transform hover:-translate-y-0.5 shadow-sm">Book a Session</a>
        </div>

        <button className="md:hidden text-slate-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
