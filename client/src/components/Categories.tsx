export default function Categories() {
  const categories = [
    {
      id: 'engine-parts',
      name: 'Engine Parts',
      description: 'Performance engine components for maximum power and efficiency',
      icon: 'fas fa-cogs',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      alt: 'High-performance car engine components and parts'
    },
    {
      id: 'brakes',
      name: 'Brake Systems',
      description: 'Premium brake pads, rotors, and complete brake systems',
      icon: 'fas fa-circle-stop',
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      alt: 'Professional brake system components and rotors'
    },
    {
      id: 'suspension',
      name: 'Suspension',
      description: 'Advanced suspension components for smooth handling',
      icon: 'fas fa-arrows-up-down',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      alt: 'Advanced suspension system parts and shock absorbers'
    },
    {
      id: 'electrical',
      name: 'Electrical',
      description: 'Complete electrical systems and automotive electronics',
      icon: 'fas fa-bolt',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      alt: 'Automotive electrical components and wiring systems'
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    // TODO: Implement category navigation
    console.log('Navigating to category:', categoryId);
  };

  const handleViewAllCategories = () => {
    // TODO: Implement view all categories functionality
    console.log('Viewing all categories');
  };

  return (
    <section id="categories" className="py-24 bg-muted relative">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 w-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="premium-text text-primary text-lg mb-4 tracking-wider uppercase">
            Performance Categories
          </div>
          <h2 className="text-5xl md:text-6xl bold-impact mb-6">
            DISCOVER YOUR <span className="metallic-gradient">PASSION</span>
          </h2>
          <p className="text-xl premium-text text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Each component engineered to perfection. Every part designed to elevate your automotive experience 
            to extraordinary levels of performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="automotive-card rounded-2xl p-8 text-center cursor-pointer group overflow-hidden"
              onClick={() => handleCategoryClick(category.id)}
              data-testid={`category-card-${category.id}`}
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="text-primary text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                <i className={category.icon}></i>
              </div>
              
              <h3 className="text-2xl bold-impact mb-3 uppercase tracking-wide">{category.name}</h3>
              <p className="premium-text text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
              
              <div className="text-primary font-semibold uppercase tracking-wider text-sm group-hover:text-foreground transition-colors flex items-center justify-center gap-2">
                Explore <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            className="chrome-button font-bold py-4 px-10 rounded-xl text-lg uppercase tracking-wide"
            onClick={handleViewAllCategories}
            data-testid="button-view-all-categories"
          >
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
