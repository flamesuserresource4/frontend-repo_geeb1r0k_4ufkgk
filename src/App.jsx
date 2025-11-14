import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Listings from './components/Listings';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Listings />
        <CTA />
      </main>
      <footer className="bg-black text-white/70">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Flames Realty. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#listings" className="hover:text-white">Listings</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
