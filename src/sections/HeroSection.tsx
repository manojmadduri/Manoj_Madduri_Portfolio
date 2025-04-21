
import { ArrowDown } from 'lucide-react';
import TypingAnimation from '../components/TypingAnimation';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 z-10 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <p className="text-secondary font-mono mb-5 text-lg">
            Hi there, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Manoj Madduri
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground/70 mb-6">
            <TypingAnimation 
              phrases={[
                'Full Stack Developer',
                'Aspiring PhD Candidate',
                'AI Enthusiast',
                'Problem Solver'
              ]} 
            />
          </h2>
          <p className="text-foreground/70 text-lg mb-10 max-w-2xl">
            Building scalable systems and AI-driven assistants using cutting-edge web technologies.
            Passionate about research in semantic memory retrieval and large-scale distributed systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#resume" 
              className="btn-primary flex items-center justify-center gap-2"
            >
              View Resume
              <span className="inline-block">📄</span>
            </a>
            <a 
              href="#projects" 
              className="btn-outline flex items-center justify-center gap-2"
            >
              Explore Projects
              <span className="inline-block">🚀</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/70 hover:text-foreground flex flex-col items-center">
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
