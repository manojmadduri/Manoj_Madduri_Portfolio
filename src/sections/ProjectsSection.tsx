import ProjectCard from '../components/ProjectCard';
import React, { useState } from 'react';

const ProjectsSection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const projects = [
    {
      title: "AI Memory Clone",
      description: "A personal AI assistant that stores and recalls memories using advanced embedding techniques and face recognition.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format",
      techStack: ["Python", "SQLite", "Ollama LLM", "React", "Face Recognition API"],
      demoUrl: "https://ai-memory-clone-demo.example.com",
      githubUrl: "https://github.com/manojmadduri/ai-memory-clone",
      features: [
        "Voice-activated memory storage and retrieval",
        "Face recognition for personalized interactions",
        "Context-aware conversation capabilities",
        "Custom knowledge database integration"
      ]
    },
    {
      title: "Stock & Crypto Discord Bot",
      description: "Real-time financial data bot for Discord that provides stock and crypto price alerts, news, and trading insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format",
      techStack: ["Node.js", "Discord.js", "MongoDB", "Financial APIs"],
      demoUrl: "https://discord.gg/FM34e3eF",
      githubUrl: "https://github.com/manojmadduri/financial-bot-project",
      features: [
        "Automated price alerts for stocks and cryptocurrencies",
        "Portfolio tracking and performance analysis",
        "Real-time financial news integration",
        "Custom trading strategy notifications"
      ]
    },
    {
      title: "Microservices Dashboard",
      description: "A comprehensive monitoring dashboard for distributed microservices architecture with real-time metrics and alerts.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&auto=format",
      techStack: ["Spring Boot", "React", "Prometheus", "Grafana", "Docker"],
      demoUrl: "https://microservices-monitor.example.com",
      githubUrl: "https://github.com/example/microservices-dashboard",
      features: [
        "Real-time service health monitoring",
        "Intelligent anomaly detection",
        "Automated scaling recommendations",
        "Comprehensive logging and tracing"
      ]
    },
    {
      title: "Smart Data Processor",
      description: "Turn your text files into AI datasets in seconds.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format",
      techStack: ["Python", "Node.js", "React", "NLP Libraries", "RESTful endpoints", "Tailwind CSS"],
      demoUrl: "https://smart-data-processor.vercel.app/",
      githubUrl: "https://github.com/manojmadduri/smart-data-processor-local",
      features: [
        "AI-powered question generation using sentence embeddings",
        "Smart topic classification (Work, Family, Travel, etc.)",
        "Automatic date extraction and normalization",
        "Beautiful drag-and-drop interface with real-time progress",
        "Dual output formats for different AI use cases"
      ]
    }
  ];

  return (
    <section id="projects" className="section bg-background dark:bg-background py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">✨ Featured Projects ✨</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              modalContent={
                <div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full rounded-lg mb-6" 
                  />
                  <p className="mb-6">{project.description}</p>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span 
                          key={tech} 
                          className="bg-primary/15 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {project.demoUrl && project.title === "Smart Data Processor" && (
                      <a
                        href={project.demoUrl}
                        className="btn-primary flex-1 text-center rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.demoUrl && project.title !== "Smart Data Processor" && (
                      <a
                        href={project.demoUrl}
                        className="btn-primary flex-1 text-center rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowComingSoon(true);
                        }}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="btn-outline flex-1 text-center rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
      {showComingSoon && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <p>This demo is not yet available. Please check back later.</p>
            <button
              className="btn-primary mt-4"
              onClick={() => setShowComingSoon(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
