const services = [
  {
    icon: 'ri-scissors-cut-line',
    title: 'Lawn Mowing',
    description: 'Regular mowing services to keep your grass at the perfect height. We handle all lawn sizes with precision and care.',
  },
  {
    icon: 'ri-plant-line',
    title: 'Landscaping Design',
    description: 'Transform your outdoor space with custom landscaping designs that enhance curb appeal and property value.',
  },
  {
    icon: 'ri-leaf-line',
    title: 'Seasonal Cleanup',
    description: 'Spring and fall cleanups to remove debris, leaves, and prepare your lawn for the changing seasons.',
  },
  {
    icon: 'ri-seedling-line',
    title: 'Mulching & Edging',
    description: 'Professional mulching and crisp edging to give your garden beds a clean, polished, and finished look.',
  },
  {
    icon: 'ri-drop-line',
    title: 'Fertilization & Weed Control',
    description: 'Keep your lawn healthy and weed-free with our targeted fertilization and weed control treatments.',
  },
  {
    icon: 'ri-tools-line',
    title: 'General Yard Maintenance',
    description: 'From trimming shrubs to blowing walkways, we handle all the details that make your yard look its best.',
  },
];

export default function Services() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="w-full bg-[#F8F8F6] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-green-700 text-xs uppercase tracking-widest font-semibold">What We Offer</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Services Built<br />for Your Property.
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm md:text-right">
            From routine maintenance to full landscape transformations — we've got your outdoor space covered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 group hover:bg-green-800 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 group-hover:bg-green-700 rounded-xl mb-6 transition-colors duration-300">
                <i className={`${service.icon} text-green-700 group-hover:text-white text-xl transition-colors duration-300`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-green-200 text-sm leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => handleScroll('#quote')}
            className="whitespace-nowrap bg-green-700 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
          >
            Request a Free Quote
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
