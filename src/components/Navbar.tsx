
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

  // Handle scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSectionClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // Always navigate to the home page with the section ID in the hash
    navigate(`/#${sectionId}`);
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    
    // If already on home page, scroll to top
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home and it will automatically scroll to top
      navigate('/');
    }
  };

  const navItems = [
    { name: 'Home', href: '/', exact: true },
    { name: 'About', sectionId: 'about' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Research', sectionId: 'research' },
    { name: 'Resume', sectionId: 'resume' },
    { name: 'Blog', href: '/blog', exact: true },
    { name: 'Contact', sectionId: 'contact' },
    { name: 'AI', href: '/ai-assistant', exact: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 glass shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <button 
          onClick={handleHomeClick} 
          className="text-2xl font-bold font-space-mono gradient-text cursor-pointer border-none bg-transparent"
        >
          Manoj<span className="text-foreground">.dev</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            if (item.exact) {
              if (item.name === 'Home') {
                return (
                  <button 
                    key={item.name} 
                    onClick={handleHomeClick}
                    className="nav-link text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                );
              }
              return (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className="nav-link text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              );
            } else if (item.sectionId) {
              return (
                <button
                  key={item.name}
                  onClick={() => handleSectionClick(item.sectionId!)}
                  className="nav-link text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              );
            }
            return null;
          })}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMobileMenu} 
            className="ml-4 text-foreground focus:outline-none p-2 rounded-full hover:bg-primary/20 transition-colors"
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
        <div className="md:hidden absolute top-full left-0 right-0 glass shadow-xl animate-fade-in border-t-2 border-primary/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => {
              if (item.exact) {
                if (item.name === 'Home') {
                  return (
                    <button 
                      key={item.name} 
                      onClick={handleHomeClick}
                      className="text-left block py-2 text-foreground hover:text-primary transition-colors px-3 rounded-md hover:bg-primary/10"
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className="block py-2 text-foreground hover:text-primary transition-colors px-3 rounded-md hover:bg-primary/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              } else if (item.sectionId) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleSectionClick(item.sectionId!)}
                    className="text-left block py-2 text-foreground hover:text-primary transition-colors px-3 rounded-md hover:bg-primary/10"
                  >
                    {item.name}
                  </button>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
