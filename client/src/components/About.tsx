export default function About() {
  const handleLearnMore = () => {
    // TODO: Implement learn more functionality
    console.log('Learn more about us clicked');
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="metallic-gradient">Carspain</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over a decade, Carspain has been the trusted source for premium automotive parts and accessories. 
              We specialize in providing high-quality components for all vehicle makes and models.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of automotive experts carefully curates every product in our catalog, ensuring that you receive 
              only the best parts for your vehicle. From performance upgrades to essential maintenance components, 
              we have everything you need to keep your car running at its peak.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-satisfaction">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>

            <button 
              className="chrome-button font-semibold py-3 px-8 rounded-lg"
              onClick={handleLearnMore}
              data-testid="button-learn-more"
            >
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop" 
                alt="Automotive workshop" 
                className="rounded-lg shadow-lg w-full h-56 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1515923162034-3c1b6c7c9a6c?q=80&w=800&auto=format&fit=crop" 
                alt="Mechanic working" 
                className="rounded-lg shadow-lg w-full h-56 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=800&auto=format&fit=crop" 
                alt="Engine bay" 
                className="rounded-lg shadow-lg w-full h-56 object-cover col-span-2" 
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">ISO 9001</div>
              <div className="text-sm">Certified Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
