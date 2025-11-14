import { Menu, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-full bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10 border border-white/20 shadow-lg">
          <div className="flex items-center gap-3 pl-5">
            <div className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center text-gray-900 font-bold">F</div>
            <span className="hidden sm:block text-white/90 font-medium tracking-wide">Flames Realty</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-white/90">
            <a href="#collections" className="hover:text-white transition">Collections</a>
            <a href="#listings" className="hover:text-white transition">Listings</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center pr-2 sm:pr-3 md:pr-5 gap-2">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition">
              <Phone size={16} /> Book a viewing
            </a>
            <button className="md:hidden p-3 text-white/90">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
