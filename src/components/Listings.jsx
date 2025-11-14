const listings = [
  {
    id: 1,
    title: "Penthouse 88B - Skyline Tower",
    location: "Midtown, New York",
    price: "$6,950,000",
    beds: 3,
    baths: 3.5,
    area: "2,400 sq ft",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Garden Villa - The Verdant",
    location: "Beverly Hills, Los Angeles",
    price: "$4,200,000",
    beds: 4,
    baths: 4,
    area: "3,150 sq ft",
    image: "https://images.unsplash.com/photo-1682746705332-b204722d3164?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYXJib3IlMjBMb2Z0JTIwLSUyMFBpZXIlMjBEaXN0cmljdHxlbnwwfDB8fHwxNzYzMTMxNjQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Harbor Loft - Pier District",
    location: "San Francisco, California",
    price: "$2,480,000",
    beds: 2,
    baths: 2,
    area: "1,650 sq ft",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop"
  },
];

export default function Listings() {
  return (
    <section id="listings" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Featured Listings</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">Discover our handpicked properties crafted for refined urban living.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold hover:bg-black transition">Get in touch</a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((home) => (
            <article key={home.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="relative h-56 w-full overflow-hidden">
                <img src={home.image} alt={home.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 text-slate-900 text-xs font-semibold px-3 py-1">{home.price}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{home.title}</h3>
                <p className="mt-1 text-slate-600">{home.location}</p>
                <div className="mt-4 flex items-center gap-4 text-slate-700 text-sm">
                  <span>{home.beds} Beds</span>
                  <span>•</span>
                  <span>{home.baths} Baths</span>
                  <span>•</span>
                  <span>{home.area}</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <a href="#contact" className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-black transition">Request Info</a>
                  <a href="#" className="text-slate-900/70 font-semibold hover:text-slate-900">Details →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
