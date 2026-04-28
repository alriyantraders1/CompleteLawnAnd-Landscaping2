export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="https://readdy.ai/api/search-image?query=lush%20green%20freshly%20mowed%20lawn%20with%20golden%20hour%20sunlight%2C%20perfectly%20manicured%20grass%2C%20suburban%20backyard%2C%20warm%20afternoon%20light%20casting%20long%20shadows%20across%20the%20lawn%2C%20vibrant%20green%20color%2C%20peaceful%20and%20professional%20atmosphere%2C%20wide%20panoramic%20view&width=1920&height=1080&seq=hero001&orientation=landscape"
        alt="Beautiful lawn"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/70 via-green-900/50 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-start justify-center h-full pt-20">
        <span className="text-green-300 text-xs uppercase tracking-widest font-semibold mb-4">
          Carnegie, PA — Serving the Pittsburgh Area
        </span>
        <h1 className="text-white font-extrabold text-5xl md:text-7xl leading-tight mb-6 max-w-2xl">
          Your Lawn,<br />
          <span className="text-green-400">Done Right.</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Professional lawn care and landscaping tailored to your property. Reliable, local, and thorough — serving Carnegie and the greater Pittsburgh area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleScroll('#quote')}
            className="whitespace-nowrap bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            Get a Free Quote
            <span className="w-7 h-7 flex items-center justify-center bg-white/20 rounded-full">
              <i className="ri-arrow-right-line text-sm"></i>
            </span>
          </button>
          <a
            href="tel:4124522310"
            className="whitespace-nowrap border-2 border-white/70 text-white hover:bg-white hover:text-green-900 font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <i className="ri-phone-line"></i> 412-452-2310
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-16">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Lawns Serviced' },
            { value: '100%', label: 'Satisfaction Goal' },
          ].map(stat => (
            <div key={stat.label} className="text-white">
              <div className="text-3xl font-extrabold text-green-400">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <i className="ri-arrow-down-line text-white/50 text-lg"></i>
      </div>
    </section>
  );
}
