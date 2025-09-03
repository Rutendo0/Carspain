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
    <nav className="fixed top-0 w-full z-50 bg-background/95 border-b border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-background/98">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 group">
              <h1 className="text-2xl bold-impact text-white tracking-tight group-hover:scale-105 transition-transform cursor-pointer">
                <i className="fas fa-wrench text-green-400 mr-2 group-hover:animate-pulse"></i>CARPARTS<span className="text-green-400">PRO</span>
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <button 
                onClick={() => scrollToSection('home')} 
                className="premium-text text-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase relative group"
                data-testid="nav-home"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('categories')} 
                className="premium-text text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase relative group"
                data-testid="nav-categories"
              >
                Parts
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="premium-text text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase relative group"
                data-testid="nav-about"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="premium-text text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase relative group"
                data-testid="nav-contact"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <button 
              className="chrome-button font-semibold py-3 px-8 rounded-xl uppercase tracking-wide text-sm" 
              onClick={handleShopRedirect}
              data-testid="button-shop-parts"
            >
              Get Quote
            </button>
          </div>

          <div className="md:hidden">
            <button 
              className="text-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 group" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl group-hover:scale-110 transition-transform`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95">
            <div className="px-2 pt-4 pb-4 space-y-2">
              <button 
                onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }} 
                className="block px-4 py-3 premium-text text-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => { scrollToSection('categories'); setIsMobileMenuOpen(false); }} 
                className="block px-4 py-3 premium-text text-muted-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide"
                data-testid="mobile-nav-categories"
              >
                Parts
              </button>
              <button 
                onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }} 
                className="block px-4 py-3 premium-text text-muted-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide"
                data-testid="mobile-nav-about"
              >
                Services
              </button>
              <button 
                onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} 
                className="block px-4 py-3 premium-text text-muted-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <button 
                className="chrome-button font-semibold py-3 px-6 rounded-xl mx-4 mt-4 uppercase tracking-wide text-sm" 
                onClick={handleShopRedirect}
                data-testid="mobile-button-shop-parts"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
