export default function WhyChooseUs() {
  const features = [
    {
      icon: 'fas fa-medal',
      title: 'Premium Quality',
      description: 'Only the finest automotive parts from trusted manufacturers with rigorous quality control'
    },
    {
      icon: 'fas fa-shipping-fast',
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping with tracking, getting your parts to you when you need them'
    },
    {
      icon: 'fas fa-tools',
      title: 'Expert Support',
      description: 'Professional automotive technicians ready to help you find the right parts for your vehicle'
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 w-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="professional-subtitle text-lg mb-6">
            Industry Leadership
          </div>
          <h2 className="text-5xl md:text-6xl bold-impact mb-8 text-foreground">
            TRUSTED BY <span className="metallic-gradient">PROFESSIONALS</span>
          </h2>
          <p className="text-xl premium-text enhanced-text max-w-4xl mx-auto leading-relaxed">
            Over a decade of excellence in automotive parts distribution. Our commitment to quality, 
            service, and customer satisfaction has established us as a leader in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="automotive-card rounded-2xl p-10 text-center group"
              data-testid={`feature-card-${index}`}
            >
              <div className="text-primary text-5xl mb-8 transition-transform duration-300 group-hover:scale-110">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 uppercase tracking-wide text-foreground">{feature.title}</h3>
              <p className="premium-text text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
