
import { ArrowDown, Radio, Book, Sparkles } from 'lucide-react';
import TypingAnimation from '../components/TypingAnimation';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-16 wabi-sabi">
      <div className="container mx-auto px-4 z-10 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full glass border-2 border-secondary/50 transform -rotate-1">
            <Radio className="h-4 w-4 mr-2 text-secondary animate-pulse" />
            <p className="text-foreground/90 font-space-mono text-sm">
              Welcome to My Retro Portfolio
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono neon-text retro-text transform rotate-[0.5deg]" data-text="Manoj Madduri">
            Manoj Madduri
          </h1>
          
          <div className="mb-6 flex items-center">
            <div className="h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground/80 font-space-mono">
              <TypingAnimation 
                phrases={[
                  'AI Enthusiast',
                  'Aspiring PhD Candidate',
                  'Software Developer',
                  'Problem Solver'
                ]} 
              />
            </h2>
          </div>

          <div className="glass p-5 mb-10 border-2 border-secondary/30 rounded-lg asymmetric-card">
            <p className="text-foreground/80 text-lg font-mono">
              Building scalable systems and AI-driven assistants using cutting-edge web technologies.
              <span className="brush-text"> Passionate about research in semantic memory retrieval</span> and large-scale distributed systems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#resume" 
              className="bg-gradient-primary text-white font-mono rounded-lg px-6 py-2.5 
                transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2
                border-2 border-primary/30 hover:border-accent/50 hover:-translate-y-1 hand-drawn"
            >
              View Resume
              <Book className="h-4 w-4" />
            </a>
            <a 
              href="#projects" 
              className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-mono rounded-lg 
                px-6 py-2.5 transition-all duration-300 flex items-center justify-center gap-2
                hover:-translate-y-1 hover:rotate-1"
            >
              Explore Projects
              <Sparkles className="h-4 w-4 animate-pulse" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Retro decorative elements */}
      <div className="absolute top-1/4 right-10 hidden lg:block">
        <div className="w-20 h-20 border-4 border-primary/50 rounded-full animate-spin-slow"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-10 hidden lg:block">
        <div className="w-16 h-16 border-4 border-accent/50 rounded-full animate-pulse"></div>
      </div>
      
      {/* Retro grid overlay - more saturated colors */}
      <div className="absolute inset-0 retro-grid opacity-5 pointer-events-none"></div>
      
      {/* Abstract geometric shapes - more wabi-sabi asymmetry */}
      <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-tl from-accent/20 to-primary/20 rounded-full blur-xl"></div>
      
      {/* Scroll indicator with retro styling */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary hover:text-accent flex flex-col items-center">
          <span className="text-sm mb-2 font-mono">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
