
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Areas from '../components/Areas';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingContacts from '../components/FloatingContacts';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Areas />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingContacts />
    </div>
  );
};

export default Index;
