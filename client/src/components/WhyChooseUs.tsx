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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="metallic-gradient">Carspain</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for premium automotive parts and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="automotive-card rounded-xl p-8 text-center"
              data-testid={`feature-card-${index}`}
            >
              <div className="text-primary text-4xl mb-6">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
