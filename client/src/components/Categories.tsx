export default function Categories() {
  const categories = [
    {
      id: 'engine-parts',
      name: 'Engine Components',
      description: 'Premium OEM and aftermarket engine parts including pistons, gaskets, timing chains, and performance upgrades for all vehicle makes.',
      icon: 'fas fa-cogs',
      price: 'Starting from $29',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      alt: 'High-performance car engine components and parts'
    },
    {
      id: 'brakes',
      name: 'Brake Systems',
      description: 'Complete brake solutions including pads, rotors, calipers, and hydraulic components. Same-day shipping available.',
      icon: 'fas fa-circle-stop',
      price: 'Starting from $45',
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      alt: 'Professional brake system components and rotors'
    },
    {
      id: 'suspension',
      name: 'Suspension & Steering',
      description: 'Advanced suspension components, shocks, struts, springs, and steering parts for optimal ride quality and handling.',
      icon: 'fas fa-arrows-up-down',
      price: 'Starting from $65',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      alt: 'Advanced suspension system parts and shock absorbers'
    },
    {
      id: 'electrical',
      name: 'Electrical Systems',
      description: 'Complete electrical solutions including starters, alternators, batteries, sensors, and diagnostic equipment.',
      icon: 'fas fa-bolt',
      price: 'Starting from $35',
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
    <section id="categories" className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 w-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide mb-8">
            ✓ Professional Grade Parts
          </div>
          <h2 className="text-6xl md:text-7xl bold-impact mb-8 text-gray-900 leading-tight">
            OUR <span className="text-green-600">SERVICES</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            Comprehensive automotive solutions for dealerships, repair shops, and fleet managers. 
            From genuine OEM parts to performance upgrades – we deliver quality that professionals trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="bg-white rounded-3xl p-8 text-left cursor-pointer group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 fade-in"
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
              onClick={() => handleCategoryClick(category.id)}
              data-testid={`category-card-${category.id}`}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {category.price}
                </div>
              </div>
              
              <div className="text-green-600 text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
                <i className={category.icon}></i>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">{category.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-green-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </div>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-12 rounded-2xl text-xl uppercase tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl"
            onClick={handleViewAllCategories}
            data-testid="button-view-all-categories"
          >
            Request Catalog
          </button>
          <p className="text-gray-500 mt-4 text-lg">Or call us at <a href="tel:+1-800-CARPARTS" className="text-green-600 font-semibold hover:underline">1-800-CARPARTS</a></p>
        </div>
      </div>
    </section>
  );
}
