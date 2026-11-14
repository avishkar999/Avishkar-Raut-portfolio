import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProofStrip } from './components/ProofStrip';
import { Services } from './components/Services';
import { SkillsCertifications } from './components/SkillsCertifications';
import { Work } from './components/Work';

/**
 * Single-page portfolio for Avishkar Raut.
 * Sections follow the exact order: Nav, Hero, Proof Strip, About, Work, Services,
 * Skills & Certifications, Contact, Footer.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <About />
        <Work />
        <Services />
        <SkillsCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
