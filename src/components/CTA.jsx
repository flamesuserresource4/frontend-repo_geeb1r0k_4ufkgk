export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Let's find your next home</h2>
            <p className="mt-4 text-white/70 max-w-xl">Share what you're looking for and our advisors will get back within 24 hours with tailored listings.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• Private tours and video walkthroughs</li>
              <li>• Mortgage and legal guidance</li>
              <li>• Neighborhood insights and comps</li>
            </ul>
          </div>
          <form className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/50 focus:outline-none" placeholder="Full name" />
              <input className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/50 focus:outline-none" placeholder="Email" />
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/50 focus:outline-none" placeholder="Budget (USD)" />
              <input className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/50 focus:outline-none" placeholder="Preferred location" />
            </div>
            <textarea className="mt-4 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 h-28 placeholder-white/50 focus:outline-none" placeholder="Tell us about your ideal property"></textarea>
            <button type="button" className="mt-6 w-full rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold hover:bg-slate-100 transition">Send inquiry</button>
            <p className="mt-3 text-xs text-white/60">By sending, you agree to our privacy policy.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
