export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mike Rodriguez',
      title: 'Auto Mechanic',
      rating: 5,
      content: '"Carspain has been my go-to supplier for over 3 years. The quality is consistently excellent and delivery is always on time. Highly recommended!"'
    },
    {
      name: 'Sarah Johnson',
      title: 'Car Enthusiast',
      rating: 5,
      content: '"Amazing selection and competitive prices. The customer support team helped me find exactly what I needed for my project car. Outstanding service!"'
    },
    {
      name: 'David Chen',
      title: 'Performance Shop Owner',
      rating: 5,
      content: '"Professional grade parts at great prices. Carspain understands what performance enthusiasts need. They\'ve never let me down!"'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="metallic-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by thousands of automotive professionals and enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="automotive-card rounded-xl p-8"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-primary-foreground"></i>
                </div>
                <div>
                  <h4 className="font-semibold" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm" data-testid={`testimonial-title-${index}`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <div className="text-primary text-xl mb-4">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="text-muted-foreground" data-testid={`testimonial-content-${index}`}>
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
