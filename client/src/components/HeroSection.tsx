import carPartsBackground from '../assets/Car_parts_background_display_2a8f44a2.png';

export default function HeroSection() {
  const handleShopRedirect = () => {
    // TODO: Implement redirect to shop page
    console.log('Redirecting to shop page');
  };

  const handleWatchDemo = () => {
    // TODO: Implement demo video functionality
    console.log('Opening demo video');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mazda-inspired-bg">
      {/* Modern car engine background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={carPartsBackground} 
          alt="Professional car parts and automotive components display" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 fade-in">
        {/* Professional tagline */}
        <div className="inline-block bg-green-900/80 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6 slide-up" style={{animationDelay: '0.2s'}}>
          ✓ Professional Car Parts Supplier
        </div>
        
        <h1 className="text-5xl md:text-7xl bold-impact mb-8 leading-tight slide-up" style={{animationDelay: '0.4s'}}>
          <span className="text-white">PREMIUM</span><br />
          <span className="metallic-gradient text-6xl md:text-8xl">CAR PARTS</span><br />
          <span className="text-white text-4xl md:text-6xl">& AUTOMOTIVE SOLUTIONS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-12 max-w-5xl mx-auto leading-relaxed slide-up font-light" style={{animationDelay: '0.6s'}}>
          Trusted by over <strong className="text-green-400">10,000+ automotive professionals</strong> worldwide. We supply genuine OEM parts, performance components, and premium accessories with same-day shipping and lifetime warranty.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 slide-up" style={{animationDelay: '0.8s'}}>
          <button 
            className="chrome-button font-bold py-6 px-12 rounded-2xl text-xl flex items-center gap-3 uppercase tracking-wide shadow-2xl hover:shadow-green-500/20" 
            onClick={handleShopRedirect}
            data-testid="button-shop-now"
          >
            <i className="fas fa-search text-xl"></i>
            Browse Parts Catalog
          </button>
          
          <button 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold py-6 px-12 rounded-2xl text-xl transition-all duration-300 flex items-center gap-3 uppercase tracking-wide"
            onClick={handleWatchDemo}
            data-testid="button-watch-demo"
          >
            <i className="fas fa-phone text-xl"></i>
            Get Free Quote
          </button>
        </div>

        {/* Professional Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto slide-up" style={{animationDelay: '1.0s'}}>
          <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300" data-testid="stat-parts">
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-3">25K+</div>
            <div className="text-white text-sm font-semibold uppercase tracking-wider">Premium Parts<br />In Stock</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300" data-testid="stat-brands">
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-3">1200+</div>
            <div className="text-white text-sm font-semibold uppercase tracking-wider">Trusted<br />Brands</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300" data-testid="stat-customers">
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-3">50K+</div>
            <div className="text-white text-sm font-semibold uppercase tracking-wider">Happy<br />Customers</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300" data-testid="stat-support">
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-3">24/7</div>
            <div className="text-white text-sm font-semibold uppercase tracking-wider">Expert<br />Support</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center cursor-pointer group slide-up" style={{animationDelay: '1.2s'}} onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="text-gray-300 text-sm mb-2 premium-text group-hover:text-primary transition-colors">Explore Our Solutions</div>
          <div className="animate-bounce group-hover:animate-pulse">
            <i className="fas fa-chevron-down text-primary text-xl group-hover:scale-125 transition-transform"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
