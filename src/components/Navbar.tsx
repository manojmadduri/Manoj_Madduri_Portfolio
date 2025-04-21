
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', exact: true },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Experience', href: isHomePage ? '#experience' : '/#experience' },
    { name: 'Projects', href: isHomePage ? '#projects' : '/#projects' },
    { name: 'Research', href: isHomePage ? '#research' : '/#research' },
    { name: 'Resume', href: isHomePage ? '#resume' : '/#resume' },
    { name: 'Blog', href: '/blog', exact: true },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
    { name: 'AI', href: '/ai-assistant', exact: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-background/80 dark:bg-navy/90 backdrop-blur-lg shadow-lg border-b border-border/50' 
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-poppins gradient-text">
          Manoj<span className="text-foreground">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.exact ? (
              <Link 
                key={item.name} 
                to={item.href} 
                className="nav-link text-sm font-medium hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            )
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMobileMenu} 
            className="ml-4 text-foreground focus:outline-none p-2 rounded-full hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 dark:bg-navy/95 backdrop-blur-md shadow-xl animate-fade-in border-t border-border/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              item.exact ? (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className="block py-2 text-foreground hover:text-secondary transition-colors px-3 rounded-md hover:bg-muted/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="block py-2 text-foreground hover:text-secondary transition-colors px-3 rounded-md hover:bg-muted/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
