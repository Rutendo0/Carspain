export default function Footer() {
  const quickLinks = [
    { name: 'Shop All Parts', href: '#' },
    { name: 'Engine Parts', href: '#' },
    { name: 'Brake Systems', href: '#' },
    { name: 'Suspension', href: '#' },
    { name: 'Electrical', href: '#' }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-youtube', href: '#' }
  ];

  const handleLinkClick = (href: string) => {
    // TODO: Implement proper navigation
    console.log('Navigating to:', href);
  };

  return (
    <footer id="contact" className="bg-card py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold metallic-gradient mb-4">
              <i className="fas fa-car text-primary mr-2"></i>CARSPAIN
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your premier destination for high-quality automotive parts and accessories. 
              Serving car enthusiasts and professionals with excellence since 2010.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button 
                  key={index}
                  onClick={() => handleLinkClick(social.href)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`social-link-${index}`}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                    data-testid={`quick-link-${index}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <i className="fas fa-phone mr-2 text-primary"></i>
                <span data-testid="contact-phone">(555) 123-4567</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <i className="fas fa-envelope mr-2 text-primary"></i>
                <span data-testid="contact-email">info@carspain.com</span>
              </li>
              <li className="flex items-start text-muted-foreground">
                <i className="fas fa-map-marker-alt mr-2 text-primary mt-1"></i>
                <span data-testid="contact-address">
                  123 Auto Parts Blvd<br />
                  Madrid, Spain 28001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Carspain. All rights reserved. | 
            <button 
              onClick={() => handleLinkClick('#')}
              className="hover:text-primary transition-colors ml-1"
              data-testid="link-privacy"
            >
              Privacy Policy
            </button> | 
            <button 
              onClick={() => handleLinkClick('#')}
              className="hover:text-primary transition-colors ml-1"
              data-testid="link-terms"
            >
              Terms of Service
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
