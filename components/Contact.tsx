
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNum = '7066576237';
    const text = `Hello Serene Minds! I'd like to book a session (₹799/-).\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNum}?text=${encodedText}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-teal-600 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold serif italic mb-6">Reach Out</h2>
              <p className="text-teal-50 mb-8 opacity-80 leading-relaxed">
                "Healing takes courage, and we all have courage, even if we have to dig a little to find it."
              </p>
              <div className="bg-teal-700/50 p-4 rounded-xl border border-teal-500/30 mb-6">
                <p className="text-xs uppercase tracking-widest font-bold mb-1 opacity-70">Session Fee</p>
                <p className="text-2xl font-bold serif">₹799/-</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 opacity-70" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                <span className="text-sm">hello@sereneminds.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 opacity-70" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                <span className="text-sm">7066576237</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-2 serif">Book Your First Session</h3>
            <p className="text-slate-500 mb-8 italic">Your message will be sent directly to my personal WhatsApp for a quick response.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-teal-200 focus:ring-4 focus:ring-teal-100 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-teal-200 focus:ring-4 focus:ring-teal-100 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">How can I help you?</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Tell me a bit about what's on your mind..." 
                  className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-teal-200 focus:ring-4 focus:ring-teal-100 transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-teal-600 text-white rounded-2xl font-bold shadow-xl shadow-teal-200/50 hover:bg-teal-700 hover:-translate-y-1 transition-all flex items-center justify-center space-x-2">
                <span>Book via WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.623 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </button>
              <p className="text-center text-xs text-slate-400">
                I usually respond within 24 hours. Looking forward to speaking with you.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
