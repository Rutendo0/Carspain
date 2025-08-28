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
    <section className="py-20 bg-gradient-to-r from-primary to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Luxury car details showcasing premium automotive engineering" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Upgrade Your Vehicle?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Browse our extensive catalog of premium car parts and accessories. 
          Find exactly what you need to enhance your vehicle's performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="bg-white text-primary font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3"
            onClick={handleStartShopping}
            data-testid="button-start-shopping"
          >
            <i className="fas fa-shopping-cart"></i>
            Start Shopping Now
          </button>
          
          <button 
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center gap-3"
            onClick={handleCallPhone}
            data-testid="button-call-phone"
          >
            <i className="fas fa-phone"></i>
            Call: (555) 123-4567
          </button>
        </div>
      </div>
    </section>
  );
}
