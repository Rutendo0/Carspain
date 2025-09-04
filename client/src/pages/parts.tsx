import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Parts() {
  const parts = [
    { id: 1, name: 'Brake Pads', category: 'Brakes', desc: 'Ceramic, low dust, long life', price: '$49', icon: 'fas fa-car-brake' },
    { id: 2, name: 'Oil Filter', category: 'Engine', desc: 'OEM grade filtration', price: '$12', icon: 'fas fa-filter' },
    { id: 3, name: 'Spark Plugs', category: 'Engine', desc: 'Iridium performance', price: '$29', icon: 'fas fa-bolt' },
    { id: 4, name: 'Struts', category: 'Suspension', desc: 'Improved ride comfort', price: '$159', icon: 'fas fa-arrows-up-down' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <div className="inline-block bg-primary/15 text-primary px-5 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide mb-4">Shop Parts</div>
            <h1 className="text-4xl md:text-6xl bold-impact mb-3">Browse Our <span className="text-primary">Catalog</span></h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">Find high‑quality parts for your vehicle. Engine, brakes, suspension, electrical and more.</p>
          </header>

          {/* Part Finder with Make/Model/Year and categories */}
          <div className="glass-effect bg-card/60 border border-border/50 rounded-2xl p-4 md:p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input aria-label="Car make" placeholder="Make (e.g. Toyota)" className="rounded-xl bg-background/60 border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input aria-label="Car model" placeholder="Model (e.g. Corolla)" className="rounded-xl bg-background/60 border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input aria-label="Year" placeholder="Year (e.g. 2018)" className="rounded-xl bg-background/60 border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <button className="chrome-button rounded-xl py-3 text-base">Find Parts</button>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="px-3 py-1 rounded-full border text-green-700 border-green-200 bg-green-50">Engine</span>
              <span className="px-3 py-1 rounded-full border text-green-700 border-green-200 bg-green-50">Brakes</span>
              <span className="px-3 py-1 rounded-full border text-green-700 border-green-200 bg-green-50">Suspension</span>
              <span className="px-3 py-1 rounded-full border text-green-700 border-green-200 bg-green-50">Electrical</span>
              <span className="px-3 py-1 rounded-full border text-green-700 border-green-200 bg-green-50">Body</span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parts.map(p => (
              <div key={p.id} className="automotive-card rounded-2xl p-6">
                <div className="text-primary text-3xl mb-4"><i className={p.icon}></i></div>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{p.category} • {p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{p.price}</span>
                  <button className="chrome-button px-4 py-2 rounded-full text-sm">Get Quote</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}