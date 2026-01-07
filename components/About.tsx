
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
              <img 
                src="https://picsum.photos/seed/counselor/800/800" 
                alt="Your Life Counselor" 
                className="rounded-3xl shadow-lg w-full max-w-md mx-auto"
              />
              <div className="absolute bottom-6 right-6 lg:-right-6 bg-teal-600 text-white p-8 rounded-2xl shadow-2xl max-w-xs">
                <h3 className="text-2xl font-bold mb-2 serif">12+ Years</h3>
                <p className="text-teal-100 text-sm">Of dedicated experience in clinical psychology and holistic counseling.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 serif italic">
              A Warm, Safe Space to Discover Your Inner Peace.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a professional Life and Mental Wellness Counselor dedicated to walking alongside you through the most challenging seasons of life. Whether you're navigating the complexities of deep-seated anxiety, career transitions, or the subtle weight of self-doubt, my role is to listen without judgment.
              </p>
              <p>
                My approach blends professional therapeutic techniques with a heart centered on empathy. I believe that every individual holds the power for self-restoration; my mission is to provide the guidance and tools to unlock that potential. 
              </p>
              <p>
                Together, we focus on listening to the unspoken, understanding the root causes of burnout, and gently guiding you back to a state of emotional harmony and resilient hope.
              </p>
            </div>
            <div className="mt-10 pt-10 border-t border-slate-100 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Confidentiality</h4>
                <p className="text-sm text-slate-500">Your stories are kept in a secure, private vault of trust.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Personalized</h4>
                <p className="text-sm text-slate-500">Every session is tailored to your unique emotional footprint.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
