import carPartsBackground from '../assets/Car_parts_background_display_2a8f44a2.png';

import { useLocation } from 'wouter';

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const handleShopRedirect = () => {
    setLocation('/parts');
  };

  const handleWatchDemo = () => {
    setLocation('/contact');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mazda-inspired-bg">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={carPartsBackground} 
          alt="Professional car parts and automotive components display" 
          className="w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-emerald-950/70 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28 md:py-32 fade-in">
        {/* Tagline */}
        <div className="inline-block bg-green-900/80 text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide mb-5 slide-up" style={{animationDelay: '0.2s'}}>
          ✓ Genuine OEM • Performance • Fast Shipping
        </div>
        
        {/* Headline simplified for clarity */}
        <h1 className="text-4xl md:text-6xl bold-impact mb-5 md:mb-6 leading-tight slide-up" style={{animationDelay: '0.35s'}}>
          <span className="text-white">Premium</span> <span className="metallic-gradient">Car Parts</span> Delivered Fast
        </h1>
        
        {/* Shorter supporting copy */}
        <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed slide-up font-light" style={{animationDelay: '0.45s'}}>
          Everything from engine and brakes to suspension and electrical. Trusted by workshops and enthusiasts alike.
        </p>

        {/* Part Finder - makes purpose instantly clear */}
        <div className="mx-auto max-w-4xl w-full slide-up" style={{animationDelay: '0.6s'}}>
          <div className="glass-effect bg-black/30 border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input
                aria-label="Car make"
                placeholder="Make (e.g. Toyota)"
                className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                aria-label="Car model"
                placeholder="Model (e.g. Corolla)"
                className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                aria-label="Year"
                placeholder="Year (e.g. 2018)"
                className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button 
                className="chrome-button w-full rounded-xl py-3 text-base md:text-lg"
                onClick={handleShopRedirect}
              >
                Find Parts
              </button>
            </div>
            {/* Quick links */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm text-white/80">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Engine</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Brakes</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Suspension</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Electrical</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Body</span>
            </div>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 md:mt-10 slide-up" style={{animationDelay: '0.75s'}}>
          <button 
            className="chrome-button font-bold py-4 px-8 rounded-2xl text-lg flex items-center gap-3 uppercase tracking-wide shadow-2xl hover:shadow-green-500/20" 
            onClick={handleShopRedirect}
            data-testid="button-shop-now"
          >
            <i className="fas fa-search text-lg"></i>
            Browse Catalog
          </button>
          
          <button 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 flex items-center gap-3 uppercase tracking-wide"
            onClick={handleWatchDemo}
            data-testid="button-watch-demo"
          >
            <i className="fas fa-phone text-lg"></i>
            Get Free Quote
          </button>
        </div>



        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center cursor-pointer group slide-up" style={{animationDelay: '1.05s'}} onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="text-gray-300 text-sm mb-2 premium-text group-hover:text-primary transition-colors">Browse Parts</div>
          <div className="animate-bounce group-hover:animate-pulse">
            <i className="fas fa-chevron-down text-primary text-xl group-hover:scale-125 transition-transform"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
