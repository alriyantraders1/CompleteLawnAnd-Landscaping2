import { useState, FormEvent } from 'react';

const QUOTE_FORM_URL = 'https://readdy.ai/api/form/d7oeug1us6nbnotnopv0';

export default function Quote() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
    try {
      const res = await fetch(QUOTE_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="quote" className="relative w-full py-24 px-6 md:px-10 overflow-hidden">
      {/* Background */}
      <img
        src="https://readdy.ai/api/search-image?query=aerial%20view%20of%20perfectly%20manicured%20green%20lawn%20with%20geometric%20mowing%20patterns%2C%20lush%20grass%20texture%2C%20top%20down%20view%2C%20vibrant%20green%20color%2C%20clean%20and%20professional%20lawn%20care%20result%2C%20bright%20daylight%2C%20high%20resolution&width=1920&height=900&seq=quote001&orientation=landscape"
        alt="Lawn background"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-green-950/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <span className="text-green-400 text-xs uppercase tracking-widest font-semibold">Free Estimate</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready for a<br />Cleaner Lawn?
          </h2>
          <p className="mt-6 text-white/70 text-base leading-relaxed max-w-md">
            Fill out the form and we'll get back to you with a free, no-obligation quote. Serving Carnegie and surrounding Pittsburgh areas.
          </p>
          <div className="mt-10 flex flex-col gap-5">
            {[
              { icon: 'ri-phone-line', label: 'Call Us', value: '412-452-2310', href: 'tel:4124522310' },
              { icon: 'ri-map-pin-2-line', label: 'Our Location', value: '711 Cubbage St Apt 1B, Carnegie, PA 15106', href: '#' },
              { icon: 'ri-time-line', label: 'Hours', value: 'Mon–Sat: 9:00 AM – 5:00 PM', href: '#' },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-green-700/50 rounded-full shrink-0">
                  <i className={`${item.icon} text-green-300 text-base`}></i>
                </div>
                <div>
                  <div className="text-green-400 text-xs font-semibold uppercase tracking-wide">{item.label}</div>
                  <a href={item.href} className="text-white text-sm mt-0.5 block hover:text-green-300 transition-colors cursor-pointer">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-3xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
          <p className="text-gray-500 text-sm mb-8">We'll respond within 1 business day.</p>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
                <i className="ri-check-line text-green-600 text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Quote Request Sent!</h4>
              <p className="text-gray-500 text-sm">We'll be in touch shortly with your free estimate.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-green-700 text-sm font-semibold underline cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              data-readdy-form
              id="quote-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="John"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Smith"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(412) 000-0000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed</label>
                <select
                  name="service"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-green-500 transition-colors bg-white cursor-pointer"
                >
                  <option value="">Select a service...</option>
                  <option value="Lawn Mowing">Lawn Mowing</option>
                  <option value="Landscaping Design">Landscaping Design</option>
                  <option value="Seasonal Cleanup">Seasonal Cleanup</option>
                  <option value="Mulching & Edging">Mulching &amp; Edging</option>
                  <option value="Fertilization & Weed Control">Fertilization &amp; Weed Control</option>
                  <option value="General Yard Maintenance">General Yard Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Property Address</label>
                <input
                  type="text"
                  name="property_address"
                  placeholder="123 Main St, Carnegie, PA"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Details</label>
                <textarea
                  name="message"
                  rows={3}
                  maxLength={500}
                  placeholder="Tell us more about your lawn or project..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-green-500 transition-colors resize-none"
                ></textarea>
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="whitespace-nowrap w-full bg-green-700 hover:bg-green-600 disabled:bg-green-400 text-white font-bold py-4 rounded-xl text-base transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <><i className="ri-loader-4-line animate-spin"></i> Sending...</>
                ) : (
                  <><i className="ri-send-plane-line"></i> Request My Free Quote</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
