const testimonials = [
  {
    name: 'Michael R.',
    location: 'Carnegie, PA',
    rating: 5,
    text: 'Absolutely love the work they did on my backyard. The lawn looks better than it ever has. Very professional and thorough — will definitely be calling them again this spring!',
    date: 'March 2024',
  },
  {
    name: 'Sandra T.',
    location: 'Pittsburgh, PA',
    rating: 5,
    text: 'They showed up on time, worked efficiently, and left the yard spotless. The edging and mulching around my flower beds was done perfectly. Highly recommend!',
    date: 'August 2023',
  },
  {
    name: 'James K.',
    location: 'Bethel Park, PA',
    rating: 5,
    text: 'Great local company. Fair pricing and quality work. My lawn has never looked this green and healthy. They really know what they\'re doing.',
    date: 'June 2023',
  },
  {
    name: 'Patricia L.',
    location: 'Mt. Lebanon, PA',
    rating: 4,
    text: 'Very happy with the seasonal cleanup they did. Leaves were gone, beds were cleaned out, and everything looked neat and tidy heading into winter. Good communication too.',
    date: 'November 2023',
  },
  {
    name: 'David M.',
    location: 'Carnegie, PA',
    rating: 5,
    text: 'I\'ve tried a few lawn services in the area and Complete Lawn is by far the best. They take pride in their work and it shows. My neighbors keep asking who does my lawn!',
    date: 'July 2023',
  },
  {
    name: 'Angela W.',
    location: 'Scott Township, PA',
    rating: 5,
    text: 'Responsive, reliable, and reasonably priced. They transformed my overgrown backyard into something I\'m actually proud of. Couldn\'t be happier with the results.',
    date: 'May 2024',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <i
          key={i}
          className={`${i <= rating ? 'ri-star-fill' : 'ri-star-line'} text-amber-400 text-sm`}
        ></i>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 text-xs uppercase tracking-widest font-semibold">What Clients Say</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Real Results,<br />Real Reviews.
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
            Don't just take our word for it — here's what our customers across the Pittsburgh area have to say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F8F8F6] rounded-2xl p-7 flex flex-col gap-4 hover:bg-green-50 transition-colors duration-300"
            >
              <StarRating rating={t.rating} />
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center bg-green-700 rounded-full shrink-0">
                  <span className="text-white font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location} · {t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <i className="ri-google-line text-green-700"></i>
            <span className="text-green-800 text-sm font-medium">Reviews sourced from Google &amp; local customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
