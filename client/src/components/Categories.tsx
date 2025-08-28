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
    <section id="categories" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Shop by <span className="metallic-gradient">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the perfect parts for your vehicle from our extensive catalog of premium automotive components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="automotive-card rounded-xl p-6 text-center cursor-pointer"
              onClick={() => handleCategoryClick(category.id)}
              data-testid={`category-card-${category.id}`}
            >
              <img 
                src={category.image}
                alt={category.alt}
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <div className="text-primary text-3xl mb-4">
                <i className={category.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="text-primary font-semibold">Shop Now →</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="chrome-button font-semibold py-3 px-8 rounded-lg text-lg"
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
