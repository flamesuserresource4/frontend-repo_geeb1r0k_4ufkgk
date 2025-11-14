import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
        <div className="max-w-2xl text-white">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest mb-6">Luxury Real Estate</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">Elevated living in the heart of the city</h1>
          <p className="mt-6 text-white/80 text-lg">Explore a curated selection of contemporary residences that blend architecture, comfort, and skyline views.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#listings" className="inline-flex justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow hover:shadow-md transition w-full sm:w-auto">Browse Listings</a>
            <a href="#contact" className="inline-flex justify-center rounded-full bg-white/10 text-white px-6 py-3 text-sm font-semibold border border-white/20 hover:bg-white/15 transition w-full sm:w-auto">Request a Tour</a>
          </div>
        </div>
      </div>
    </section>
  );
}
