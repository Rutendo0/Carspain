import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleShopRedirect = () => {
    // TODO: Implement redirect to shop page
    console.log('Redirecting to shop page');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold metallic-gradient">
                <i className="fas fa-car text-primary mr-2"></i>CARSPAIN
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('categories')} 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="nav-categories"
              >
                Categories
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <button 
              className="chrome-button font-semibold py-2 px-6 rounded-lg" 
              onClick={handleShopRedirect}
              data-testid="button-shop-parts"
            >
              Shop Car Parts
            </button>
          </div>

          <div className="md:hidden">
            <button 
              className="text-foreground hover:text-primary" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => { scrollToSection('categories'); setIsMobileMenuOpen(false); }} 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-categories"
              >
                Categories
              </button>
              <button 
                onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }} 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <button 
                className="chrome-button font-semibold py-2 px-6 rounded-lg mx-3 mt-2" 
                onClick={handleShopRedirect}
                data-testid="mobile-button-shop-parts"
              >
                Shop Car Parts
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
