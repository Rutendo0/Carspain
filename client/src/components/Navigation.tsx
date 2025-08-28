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
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl bold-impact metallic-gradient tracking-tight">
                <i className="fas fa-car text-primary mr-3"></i>CARSPAIN
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <button 
                onClick={() => scrollToSection('home')} 
                className="premium-text text-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('categories')} 
                className="premium-text text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase"
                data-testid="nav-categories"
              >
                Discover
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="premium-text text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase"
                data-testid="nav-about"
              >
                Heritage
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="premium-text text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase"
                data-testid="nav-contact"
              >
                Connect
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <button 
              className="chrome-button font-semibold py-3 px-8 rounded-xl uppercase tracking-wide text-sm" 
              onClick={handleShopRedirect}
              data-testid="button-shop-parts"
            >
              Shop Parts
            </button>
          </div>

          <div className="md:hidden">
            <button 
              className="text-foreground hover:text-primary transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 glass-effect">
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
                Discover
              </button>
              <button 
                onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }} 
                className="block px-4 py-3 premium-text text-muted-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide"
                data-testid="mobile-nav-about"
              >
                Heritage
              </button>
              <button 
                onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} 
                className="block px-4 py-3 premium-text text-muted-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide"
                data-testid="mobile-nav-contact"
              >
                Connect
              </button>
              <button 
                className="chrome-button font-semibold py-3 px-6 rounded-xl mx-4 mt-4 uppercase tracking-wide text-sm" 
                onClick={handleShopRedirect}
                data-testid="mobile-button-shop-parts"
              >
                Shop Parts
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
