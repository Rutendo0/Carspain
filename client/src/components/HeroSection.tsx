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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black/60 backdrop-blur-sm rounded-3xl py-20 fade-in">
        {/* Professional tagline */}
        <div className="professional-subtitle text-lg mb-6 slide-up" style={{animationDelay: '0.2s'}}>
          PROFESSIONAL CAR PARTS SUPPLIER
        </div>
        
        <h1 className="text-4xl md:text-6xl bold-impact mb-8 leading-tight text-white slide-up" style={{animationDelay: '0.4s'}}>
          CARPARTS CORPORATE<br />
          <span className="metallic-gradient">SOLUTIONS</span>
        </h1>
        
        <p className="text-lg md:text-xl premium-text text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed slide-up" style={{animationDelay: '0.6s'}}>
          Leading corporate supplier of genuine OEM parts, professional-grade components, and premium automotive accessories. 
          Serving dealerships, repair shops, and fleet managers with reliable parts and exceptional service.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 slide-up" style={{animationDelay: '0.8s'}}>
          <button 
            className="chrome-button font-bold py-5 px-10 rounded-xl text-lg flex items-center gap-3 uppercase tracking-wide" 
            onClick={handleShopRedirect}
            data-testid="button-shop-now"
          >
            <i className="fas fa-shopping-cart"></i>
            VIEW PARTS CATALOG
          </button>
          
          <button 
            className="glass-effect text-foreground hover:bg-primary/20 font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 flex items-center gap-3 uppercase tracking-wide"
            onClick={handleWatchDemo}
            data-testid="button-watch-demo"
          >
            <i className="fas fa-play-circle text-primary"></i>
            CORPORATE SOLUTIONS
          </button>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto slide-up" style={{animationDelay: '1.0s'}}>
          <div className="text-center glass-effect p-6 rounded-2xl" data-testid="stat-parts">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15K+</div>
            <div className="stats-text uppercase tracking-wider">OEM Parts</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-2xl" data-testid="stat-brands">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">800+</div>
            <div className="stats-text uppercase tracking-wider">Global Brands</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-2xl" data-testid="stat-customers">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100K+</div>
            <div className="stats-text uppercase tracking-wider">Corporate Clients</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-2xl" data-testid="stat-support">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="stats-text uppercase tracking-wider">B2B Support</div>
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
