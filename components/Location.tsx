
import React from 'react';

const Location: React.FC = () => {
  const mapUrl = "https://maps.app.goo.gl/ygLqU4gmDBUyxo4G7?g_st=aw";

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-serene-gradient rounded-[3rem] p-12 md:p-20 overflow-hidden relative shadow-inner">
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-teal-100/30 rounded-full blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-4 block">Visit the Sanctuary</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 serif italic mb-8 leading-tight">Gorewada, Manjidana, Indrayani Nagar Colony</h2>
              <p className="text-xl text-slate-600 mb-8 font-light italic">Nagpur, Maharashtra, India</p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">Accessible quiet neighborhood</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">In-person & Virtual options available</span>
                </div>
              </div>

              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-teal-700 rounded-full font-bold shadow-md hover:shadow-lg transition-all border border-teal-50"
              >
                <span>Get Directions on Google Maps</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl relative group">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-30 cursor-pointer flex items-center justify-center bg-teal-900/0 group-hover:bg-teal-900/20 transition-all duration-500">
                <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full font-bold text-teal-800 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                  Open Location
                </div>
              </a>
              <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/nagpur/1200/800" 
                alt="Office Location Preview" 
                className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-teal-900/10 z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
