
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
