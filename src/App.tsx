import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Benefits from './components/Benefits';
import Applications from './components/Applications';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div style={{ backgroundColor: '#F5F1EB' }}>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Benefits />
        <Applications />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
