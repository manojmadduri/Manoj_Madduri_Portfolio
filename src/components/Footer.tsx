
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background dark:bg-navy-light py-16 border-t border-border mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#home" className="text-2xl font-bold font-poppins gradient-text">
              Manoj<span className="text-foreground">.dev</span>
            </a>
            <p className="mt-3 text-sm text-foreground/70 max-w-xs">
              Full Stack Developer & Aspiring PhD Candidate specializing in modern web technologies and AI research.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="mailto:contact@manojmadduri.com" 
                className="text-foreground/70 hover:text-secondary transition-colors p-2 rounded-full hover:bg-muted/30"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-secondary transition-colors p-2 rounded-full hover:bg-muted/30"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-secondary transition-colors p-2 rounded-full hover:bg-muted/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-secondary transition-colors p-2 rounded-full hover:bg-muted/30"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-sm text-foreground/70 hover:text-secondary transition-colors">About</a></li>
              <li><a href="/#projects" className="text-sm text-foreground/70 hover:text-secondary transition-colors">Projects</a></li>
              <li><a href="/#research" className="text-sm text-foreground/70 hover:text-secondary transition-colors">Research</a></li>
              <li><a href="/blog" className="text-sm text-foreground/70 hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="/#contact" className="text-sm text-foreground/70 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
            >
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>© {currentYear} Manoj Madduri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
