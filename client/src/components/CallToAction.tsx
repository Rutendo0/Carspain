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
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="High-performance sports car showcasing automotive excellence" 
          className="w-full h-full object-cover" 
        />
      </div>
      

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-lg mb-8 font-medium tracking-widest uppercase text-white/90">
          Ready to Get Started?
        </div>
        
        <h2 className="text-4xl md:text-6xl bold-impact text-white mb-6 leading-tight">
          EXPERIENCE PROFESSIONAL SERVICE
        </h2>
        
        <p className="text-lg md:text-xl premium-text text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Partner with the leading automotive parts supplier. Our comprehensive catalog and expert support ensure you get the right components for your specific requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up" style={{animationDelay: '0.4s'}}>
          <button 
            className="bg-white text-primary font-bold py-5 px-10 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 uppercase tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 group"
            onClick={handleStartShopping}
            data-testid="button-start-shopping"
          >
            <i className="fas fa-shopping-cart group-hover:animate-pulse"></i>
            Shop Now
          </button>
          
          <button 
            className="border-2 border-white/80 text-white hover:bg-white hover:text-primary font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 flex items-center gap-3 uppercase tracking-wide hover:scale-105 group"
            onClick={handleCallPhone}
            data-testid="button-call-phone"
          >
            <i className="fas fa-phone group-hover:animate-bounce"></i>
            Contact Sales: (555) 123-4567
          </button>
        </div>
      </div>
    </section>
  );
}
