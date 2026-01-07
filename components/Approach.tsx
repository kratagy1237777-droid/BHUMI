
import React from 'react';

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-teal-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-800/30 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold serif italic mb-8">A Holistic & Mindful Path to Recovery</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center flex-shrink-0 text-teal-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 serif">Safe, Judgment-Free Space</h4>
                  <p className="text-teal-100/70 leading-relaxed">A sanctuary where you can speak your truth without fear of bias or judgment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center flex-shrink-0 text-teal-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 serif">Confidential Conversations</h4>
                  <p className="text-teal-100/70 leading-relaxed">Absolute privacy is the cornerstone of our therapeutic relationship.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center flex-shrink-0 text-teal-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 serif">Mindful Guidance</h4>
                  <p className="text-teal-100/70 leading-relaxed">Using proven mindfulness techniques to anchor you in the present moment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-teal-600/20 rounded-[4rem] blur-2xl group-hover:bg-teal-600/30 transition-all duration-700"></div>
            <img 
              src="https://picsum.photos/seed/spa/800/600" 
              alt="Peaceful Environment" 
              className="relative rounded-[3rem] w-full object-cover shadow-2xl h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
