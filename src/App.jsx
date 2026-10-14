import { useState } from 'react';
import OfferBar from './components/OfferBar';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollIndicator from './components/ScrollIndicator';
import FitCheck from './components/FitCheck';
import ContactSection from './components/ContactSection';
import ChatWidget from './components/ChatWidget';

export default function App() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', place: '' });

  const goToForm = (projectType) => {
    if (projectType) setValues((v) => ({ ...v, place: projectType }));
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <OfferBar />
      <Header />
      <main>
        <Hero />
        <FitCheck />
        <ContactSection values={values} setValues={setValues} />
      </main>
      <footer className="footer">&copy; {new Date().getFullYear()} Loom Interiors. All rights reserved.</footer>
      <ScrollIndicator />
      <ChatWidget onContinue={goToForm} />
    </>
  );
}
