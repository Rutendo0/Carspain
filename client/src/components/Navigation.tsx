import { useState } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleShopRedirect = () => {
    // TODO: Implement redirect to shop page
    console.log('Redirecting to shop page');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/98 border-b border-primary/30 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 group">
              <Link href="/">
                <a className="text-2xl bold-impact text-white tracking-tight group-hover:scale-105 transition-transform cursor-pointer">
                  <i className="fas fa-wrench text-green-400 mr-2 group-hover:animate-pulse"></i>CAR<span className="text-green-400">SPAIN</span>
                </a>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <Link href="/">
                <a className="premium-text text-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase relative group" data-testid="nav-home">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="/parts">
                <a className="premium-text text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase relative group" data-testid="nav-categories">
                  Parts
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="/services">
                <a className="premium-text text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase relative group" data-testid="nav-services">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="/about">
                <a className="premium-text text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase relative group" data-testid="nav-about">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="/contact">
                <a className="premium-text text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase relative group" data-testid="nav-contact">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
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
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <a className="block px-4 py-3 premium-text text-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide" data-testid="mobile-nav-home">Home</a>
              </Link>
              <Link href="/parts" onClick={() => setIsMobileMenuOpen(false)}>
                <a className="block px-4 py-3 premium-text text-muted-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide" data-testid="mobile-nav-categories">Parts</a>
              </Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                <a className="block px-4 py-3 premium-text text-muted-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide" data-testid="mobile-nav-services">Services</a>
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <a className="block px-4 py-3 premium-text text-muted-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide" data-testid="mobile-nav-about">About</a>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <a className="block px-4 py-3 premium-text text-muted-foreground hover:text-primary transition-colors w-full text-left uppercase tracking-wide" data-testid="mobile-nav-contact">Contact</a>
              </Link>
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
