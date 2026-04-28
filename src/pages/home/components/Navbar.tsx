import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Get a Quote', href: '#quote' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" onClick={e => { e.preventDefault(); handleNav('#home'); }} className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://public.readdy.ai/ai/img_res/870681d6-4c46-4c3b-99e1-440b1f639f23.png"
            alt="Complete Lawn and Landscaping LLC Logo"
            className="h-12 w-auto object-contain"
          />
          <span className={`hidden lg:block font-bold text-sm leading-tight transition-colors duration-300 ${scrolled ? 'text-green-900' : 'text-white'}`}>
            Complete Lawn &<br />Landscaping LLC
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNav(link.href); }}
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap hover:text-green-500 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:4124522310"
            className={`whitespace-nowrap text-sm font-semibold px-5 py-2 rounded-full border-2 transition-all duration-300 cursor-pointer ${
              scrolled
                ? 'border-green-700 text-green-700 hover:bg-green-700 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-green-900'
            }`}
          >
            <i className="ri-phone-line mr-1"></i> 412-452-2310
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-2xl cursor-pointer transition-colors duration-300 ${scrolled ? 'text-green-900' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNav(link.href); }}
              className="text-gray-700 font-medium text-sm cursor-pointer hover:text-green-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:4124522310"
            className="text-sm font-semibold text-green-700 border border-green-700 rounded-full px-4 py-2 text-center cursor-pointer"
          >
            <i className="ri-phone-line mr-1"></i> 412-452-2310
          </a>
        </div>
      )}
    </header>
  );
}
