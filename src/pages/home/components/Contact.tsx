import { useState, FormEvent } from 'react';

const CONTACT_FORM_URL = 'https://readdy.ai/api/form/d7oeug1us6nbnotnopvg';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
    try {
      const res = await fetch(CONTACT_FORM_URL, {
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
    <section id="contact" className="w-full bg-[#F5F1EA] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 text-xs uppercase tracking-widest font-semibold">Get In Touch</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            We'd Love to<br />Hear From You.
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
            Have a question or want to schedule a service? Reach out and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Contact Cards */}
            {[
              {
                icon: 'ri-phone-line',
                title: 'Phone',
                lines: ['412-452-2310'],
                href: 'tel:4124522310',
                color: 'bg-green-100 text-green-700',
              },
              {
                icon: 'ri-map-pin-2-line',
                title: 'Address',
                lines: ['711 Cubbage St Apt 1B', 'Carnegie, PA 15106'],
                href: 'https://maps.google.com/?q=711+Cubbage+St+Carnegie+PA+15106',
                color: 'bg-amber-100 text-amber-700',
              },
              {
                icon: 'ri-time-line',
                title: 'Business Hours',
                lines: ['Mon – Sat: 9:00 AM – 5:00 PM', 'Sunday: Closed'],
                href: '#',
                color: 'bg-green-100 text-green-700',
              },
            ].map(item => (
              <a
                key={item.title}
                href={item.href}
                rel="nofollow"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                className="flex items-start gap-5 bg-white rounded-2xl p-6 hover:bg-green-50 transition-colors duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl shrink-0 ${item.color}`}>
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{item.title}</div>
                  {item.lines.map(line => (
                    <div key={line} className="text-gray-500 text-sm">{line}</div>
                  ))}
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-52 w-full">
              <iframe
                title="Complete Lawn and Landscaping LLC Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.5!2d-80.0853!3d40.4082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f1b2e2e2e2e3%3A0x0!2s711+Cubbage+St%2C+Carnegie%2C+PA+15106!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
            <p className="text-gray-500 text-sm mb-8">We typically respond within 1 business day.</p>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
                  <i className="ri-check-line text-green-600 text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-500 text-sm">Thank you for reaching out. We'll be in touch soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-green-700 text-sm font-semibold underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                data-readdy-form
                id="contact-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      placeholder="John Smith"
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
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help you?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    placeholder="Tell us about your lawn care needs..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-green-500 transition-colors resize-none"
                  ></textarea>
                  <p className="text-gray-400 text-xs mt-1">Max 500 characters</p>
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
                    <><i className="ri-send-plane-line"></i> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
