
import { useState } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <HowItWorks />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
