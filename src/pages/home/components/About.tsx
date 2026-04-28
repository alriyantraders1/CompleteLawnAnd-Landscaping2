export default function About() {
  return (
    <section id="about" className="w-full bg-[#F5F1EA] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <span className="text-green-700 text-xs uppercase tracking-widest font-semibold">Who We Are</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Locally Rooted,<br />
            <span className="italic font-light text-green-700">Professionally</span>{' '}
            Driven.
          </h2>
          <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-lg">
            Complete Lawn and Landscaping LLC is a family-owned business proudly serving Carnegie, Pennsylvania and the surrounding Pittsburgh area. We take pride in every yard we touch — from routine mowing to full landscaping transformations.
          </p>
          <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-lg">
            We believe your outdoor space should be something you're proud of. That's why we show up on time, communicate clearly, and deliver results that speak for themselves. Your property deserves the best care — and that's exactly what we bring.
          </p>

          {/* Stat Cards */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="bg-green-800 text-white rounded-2xl px-8 py-6 flex-1 min-w-[140px]">
              <div className="text-4xl font-extrabold">10+</div>
              <div className="text-green-300 text-sm mt-1">Years in Business</div>
            </div>
            <div className="bg-amber-100 text-gray-900 rounded-2xl px-8 py-6 flex-1 min-w-[140px]">
              <div className="text-4xl font-extrabold text-amber-700">500+</div>
              <div className="text-gray-600 text-sm mt-1">Happy Customers</div>
            </div>
            <div className="bg-green-100 text-gray-900 rounded-2xl px-8 py-6 flex-1 min-w-[140px]">
              <div className="text-4xl font-extrabold text-green-700">5★</div>
              <div className="text-gray-600 text-sm mt-1">Service Quality</div>
            </div>
          </div>

          {/* Hours */}
          <div className="mt-10 border-t border-gray-200 pt-8">
            <div className="flex items-center gap-2 text-green-800 font-semibold mb-4">
              <i className="ri-time-line text-lg"></i>
              <span>Business Hours</span>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
              {[
                { day: 'Monday', hours: '9:00 AM – 5:00 PM' },
                { day: 'Tuesday', hours: '9:00 AM – 5:00 PM' },
                { day: 'Wednesday', hours: '9:00 AM – 5:00 PM' },
                { day: 'Thursday', hours: '9:00 AM – 5:00 PM' },
                { day: 'Friday', hours: '9:00 AM – 5:00 PM' },
                { day: 'Saturday', hours: '9:00 AM – 5:00 PM' },
                { day: 'Sunday', hours: 'Closed' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between gap-4">
                  <span className="font-medium text-gray-700">{day}</span>
                  <span className={hours === 'Closed' ? 'text-red-400' : ''}>{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <div className="w-full h-[520px] rounded-2xl overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20landscaping%20crew%20working%20on%20a%20beautiful%20residential%20lawn%20in%20Pennsylvania%2C%20green%20grass%2C%20trimmed%20hedges%2C%20workers%20with%20equipment%2C%20sunny%20day%2C%20suburban%20neighborhood%2C%20clean%20and%20tidy%20yard%2C%20warm%20natural%20lighting%2C%20high%20quality%20photography&width=700&height=900&seq=about001&orientation=portrait"
              alt="Our landscaping team at work"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
                <i className="ri-map-pin-2-line text-green-700 text-xl"></i>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Carnegie, PA 15106</div>
                <div className="text-gray-500 text-xs">711 Cubbage St Apt 1B</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
