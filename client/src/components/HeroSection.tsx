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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern car engine background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern car engine with detailed components and chrome finishes" 
          className="w-full h-full object-cover" 
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Premium <span className="metallic-gradient">Car Parts</span><br />
          For Every Vehicle
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover high-quality automotive parts and accessories from trusted brands. 
          Performance, reliability, and precision engineering for car enthusiasts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="chrome-button font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-3" 
            onClick={handleShopRedirect}
            data-testid="button-shop-now"
          >
            <i className="fas fa-shopping-cart"></i>
            Shop Car Parts Now
          </button>
          
          <button 
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center gap-3"
            onClick={handleWatchDemo}
            data-testid="button-watch-demo"
          >
            <i className="fas fa-play-circle"></i>
            Watch Demo
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center" data-testid="stat-parts">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-muted-foreground">Car Parts</div>
          </div>
          <div className="text-center" data-testid="stat-brands">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Brands</div>
          </div>
          <div className="text-center" data-testid="stat-customers">
            <div className="text-3xl font-bold text-primary">50K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center" data-testid="stat-support">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
