
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-serene-gradient">
      {/* Abstract calming background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-150 transform translate-x-1/4">
          <path fill="#4FD1C5" d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,77.3,-43.8C85.1,-30.2,89.2,-15.1,88.4,-0.4C87.6,14.2,81.9,28.5,73.1,40.4C64.3,52.3,52.4,61.8,39,68.8C25.6,75.8,10.8,80.3,-3.8,86.9C-18.4,93.4,-36.8,102.1,-50.2,95.1C-63.6,88.1,-72.1,65.4,-77.8,45.8C-83.5,26.2,-86.3,9.6,-84.3,-6.2C-82.3,-22,-75.4,-37,-64.9,-48.5C-54.3,-60.1,-40.1,-68.1,-26.1,-75C-12,-81.9,1.9,-87.6,16.4,-86.3C30.9,-85,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-widest uppercase mb-6">
            Welcome to Serenity
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-8">
            Healing Minds.<br />
            <span className="italic text-teal-600 serif font-normal">Restoring Balance.</span><br />
            Helping You Breathe Again.
          </h1>
          <p className="text-xl text-slate-600 mb-4 leading-relaxed max-w-lg">
            A sanctuary for your mental well-being. Together, we navigate the storms of life with empathy, hope, and professional guidance.
          </p>
          <p className="text-teal-700 font-bold text-lg mb-10 flex items-center">
            <span className="bg-teal-100 px-3 py-1 rounded-lg">₹799/- per session</span>
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200/50 text-center">
              Book a Session
            </a>
            <a href="#about" className="px-8 py-4 bg-white text-slate-800 rounded-full font-semibold border border-slate-200 hover:border-teal-200 hover:bg-teal-50 transition-all text-center">
              Talk to Me
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${i + 10}/100`} alt="Testimonial" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 italic">Trusted by 500+ individuals for emotional support.</p>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-200 rounded-[3rem] rotate-3 transform"></div>
            <img 
              src="https://picsum.photos/seed/meditation/800/1000" 
              alt="Calm Counseling Space" 
              className="relative rounded-[3rem] shadow-2xl -rotate-3 transition-transform hover:rotate-0 duration-700 h-[600px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-sm font-medium text-slate-800 italic">"The first step towards healing is being heard."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
