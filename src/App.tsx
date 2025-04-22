import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheorySection from './components/TheorySection';
import RoboticToolbox from './components/RoboticToolbox';
import Simulation from './components/Simulation';
import Questions from './components/Questions';
import References from './components/References';
import Contributors from './components/Contributors';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <TheorySection />
        <RoboticToolbox />
        <Simulation />
        <Questions />
        <References />
        <Contributors />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;