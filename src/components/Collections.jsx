import { Building2, Trees, House, Warehouse } from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Skyline Residences",
    desc: "Penthouse and high-rise homes with panoramic city views.",
  },
  {
    icon: House,
    title: "Town & Garden",
    desc: "Charming townhouses surrounded by lush courtyards.",
  },
  {
    icon: Trees,
    title: "Retreat Villas",
    desc: "Private villas merging indoor elegance with outdoor serenity.",
  },
  {
    icon: Warehouse,
    title: "Loft Studios",
    desc: "Industrial-chic spaces crafted for modern creatives.",
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Collections</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">A curated portfolio of architectural styles to suit every lifestyle — from sky-high penthouses to tranquil garden villas.</p>
          </div>
          <a href="#listings" className="hidden sm:inline-flex rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold hover:bg-black transition">See all</a>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow group-hover:scale-105 transition">
                <item.icon />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-slate-900/70 group-hover:text-slate-900">Explore →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
