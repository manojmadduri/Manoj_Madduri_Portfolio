
import { Github, Linkedin, Mail, Twitter, Radio, ExternalLink, Music, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-16 border-t-2 border-primary/20 mt-auto relative overflow-hidden wabi-sabi">
      {/* Retro grid background with low opacity */}
      <div className="absolute inset-0 retro-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#home" className="text-2xl font-bold font-space-mono gradient-text flex items-center transform hover:rotate-1 transition-transform">
              <Radio className="h-6 w-6 mr-2 text-primary animate-pulse" />
              Manoj<span className="text-foreground">.dev</span>
            </a>
            <p className="mt-3 text-sm text-foreground/70 max-w-xs font-mono">
            Software Engineer & Aspiring PhD Candidate specializing in modern web technologies and AI research.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="mailto:mmanoj.fall2021@gmail.com" 
                className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 border-2 border-primary/20 hover:border-primary/40 transform hover:rotate-3 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/manojmadduri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 border-2 border-primary/20 hover:border-primary/40 transform hover:rotate-3 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/manoj-madduri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 border-2 border-primary/20 hover:border-primary/40 transform hover:rotate-3 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/manoj-madduri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 border-2 border-primary/20 hover:border-primary/40 transform hover:rotate-3 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-space-mono flex items-center">
              <span className="h-2 w-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-sm text-foreground/70 hover:text-primary transition-colors font-mono emoji-bullet transform hover:translate-x-1 inline-block">About</a></li>
              <li><a href="/#projects" className="text-sm text-foreground/70 hover:text-primary transition-colors font-mono emoji-bullet transform hover:translate-x-1 inline-block">Projects</a></li>
              <li><a href="/#research" className="text-sm text-foreground/70 hover:text-primary transition-colors font-mono emoji-bullet transform hover:translate-x-1 inline-block">Research</a></li>
              <li><a href="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors font-mono emoji-bullet transform hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="/#contact" className="text-sm text-foreground/70 hover:text-primary transition-colors font-mono emoji-bullet transform hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-space-mono flex items-center">
              <span className="h-2 w-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Get in Touch
            </h3>
            <p className="text-sm text-foreground/70 mb-4 font-mono">
              Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors font-space-mono border-b border-dashed border-primary/50 pb-1 group"
            >
              Contact Me
              <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="mt-4 p-3 glass asymmetric-card">
              <div className="flex items-center">
                <Music className="h-4 w-4 text-accent mr-2 animate-pulse" />
                <span className="text-xs font-mono text-foreground/70">Currently vibing to retro synthwave</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="text-sm text-foreground/60 font-mono">© {currentYear} Manoj Madduri. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-3">
            <span className="inline-block h-1 w-1 bg-primary rounded-full animate-pulse"></span>
            <span className="inline-block h-2 w-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
            <span className="inline-block h-1 w-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            <span className="inline-block h-2 w-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></span>
            <Sparkles className="h-3 w-3 text-accent animate-pulse inline-block" style={{ animationDelay: '0.8s' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
