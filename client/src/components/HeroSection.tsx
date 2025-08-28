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
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Luxury sports car showcasing premium automotive engineering" 
          className="w-full h-full object-cover" 
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Professional tagline */}
        <div className="premium-text text-primary text-lg mb-4 tracking-wider uppercase">
          Premium Automotive Solutions
        </div>
        
        <h1 className="text-6xl md:text-8xl bold-impact mb-6 leading-tight">
          PROFESSIONAL GRADE<br />
          <span className="metallic-gradient">AUTOMOTIVE PARTS</span>
        </h1>
        
        <p className="text-xl md:text-2xl premium-text text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Leading supplier of high-performance automotive components and accessories. 
          Trusted by professionals and enthusiasts worldwide for quality, reliability, and exceptional service.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            className="chrome-button font-bold py-5 px-10 rounded-xl text-lg flex items-center gap-3 uppercase tracking-wide" 
            onClick={handleShopRedirect}
            data-testid="button-shop-now"
          >
            <i className="fas fa-shopping-cart"></i>
            Browse Catalog
          </button>
          
          <button 
            className="glass-effect text-foreground hover:bg-primary/20 font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 flex items-center gap-3 uppercase tracking-wide"
            onClick={handleWatchDemo}
            data-testid="button-watch-demo"
          >
            <i className="fas fa-play-circle text-primary"></i>
            Learn More
          </button>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center glass-effect p-6 rounded-2xl" data-testid="stat-parts">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15K+</div>
            <div className="text-muted-foreground premium-text uppercase tracking-wider text-sm">Premium Parts</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-2xl" data-testid="stat-brands">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">800+</div>
            <div className="text-muted-foreground premium-text uppercase tracking-wider text-sm">Trusted Brands</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-2xl" data-testid="stat-customers">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100K+</div>
            <div className="text-muted-foreground premium-text uppercase tracking-wider text-sm">Satisfied Drivers</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-2xl" data-testid="stat-support">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground premium-text uppercase tracking-wider text-sm">Expert Support</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-muted-foreground text-sm mb-2 premium-text">Explore Excellence</div>
          <div className="animate-bounce">
            <i className="fas fa-chevron-down text-primary text-xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
