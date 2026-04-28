const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Get a Quote', href: '#quote' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-green-900 text-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <img
            src="https://public.readdy.ai/ai/img_res/870681d6-4c46-4c3b-99e1-440b1f639f23.png"
            alt="Complete Lawn and Landscaping LLC"
            className="h-14 w-auto object-contain mb-4"
          />
          <p className="text-green-300 text-sm leading-relaxed max-w-xs">
            Professional lawn care and landscaping services in Carnegie, PA and the greater Pittsburgh area.
          </p>
          <a
            href="tel:4124522310"
            className="mt-5 inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-green-300 transition-colors cursor-pointer"
          >
            <i className="ri-phone-line"></i> 412-452-2310
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNav(link.href); }}
                  className="text-green-300 text-sm hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Contact Info</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <i className="ri-map-pin-2-line text-green-400 mt-0.5"></i>
              <span className="text-green-300 text-sm">711 Cubbage St Apt 1B<br />Carnegie, PA 15106</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="ri-phone-line text-green-400"></i>
              <a href="tel:4124522310" className="text-green-300 text-sm hover:text-white transition-colors cursor-pointer">412-452-2310</a>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-time-line text-green-400 mt-0.5"></i>
              <span className="text-green-300 text-sm">Mon – Sat: 9:00 AM – 5:00 PM<br />Sunday: Closed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-green-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-green-400 text-xs">
          &copy; {new Date().getFullYear()} Complete Lawn and Landscaping LLC. All rights reserved.
        </p>
        <p className="text-green-500 text-xs">Carnegie, PA · Serving the Pittsburgh Area</p>
      </div>
    </footer>
  );
}
