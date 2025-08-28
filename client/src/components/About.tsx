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
            <img 
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional automotive workshop with advanced tools and equipment" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
            
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">ISO 9001</div>
              <div className="text-sm">Certified Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
