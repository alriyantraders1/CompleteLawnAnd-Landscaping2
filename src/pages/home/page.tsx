import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Quote from './components/Quote';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Quote />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
