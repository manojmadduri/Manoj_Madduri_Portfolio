
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background dark:bg-navy-light py-16 border-t border-border mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-poppins gradient-text">
              Manoj<span className="text-foreground">.dev</span>
            </a>
            <p className="mt-2 text-sm text-foreground/70">
              Full Stack Developer & Aspiring PhD Candidate
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:contact@manojmadduri.com" 
              className="text-foreground/70 hover:text-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>© {currentYear} Manoj Madduri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
