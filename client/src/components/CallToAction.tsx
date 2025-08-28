export default function CallToAction() {
  const handleStartShopping = () => {
    // TODO: Implement redirect to shop page
    console.log('Starting shopping');
  };

  const handleCallPhone = () => {
    // TODO: Implement phone call functionality
    window.location.href = 'tel:+15551234567';
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-red-600 to-red-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="High-performance sports car showcasing automotive excellence" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Abstract geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="premium-text text-white/90 text-lg mb-6 tracking-wider uppercase">
          Ready to Get Started?
        </div>
        
        <h2 className="text-5xl md:text-7xl bold-impact text-white mb-8 leading-tight">
          EXPERIENCE<br />
          PROFESSIONAL SERVICE
        </h2>
        
        <p className="text-xl md:text-2xl premium-text text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Partner with the leading automotive parts supplier. Our comprehensive catalog and expert support 
          ensure you get the right components for your specific requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            className="bg-white text-primary font-bold py-5 px-10 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 uppercase tracking-wide shadow-xl"
            onClick={handleStartShopping}
            data-testid="button-start-shopping"
          >
            <i className="fas fa-shopping-cart"></i>
            Shop Now
          </button>
          
          <button 
            className="glass-effect border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 flex items-center gap-3 uppercase tracking-wide"
            onClick={handleCallPhone}
            data-testid="button-call-phone"
          >
            <i className="fas fa-phone"></i>
            Contact Sales: (555) 123-4567
          </button>
        </div>
      </div>
    </section>
  );
}
