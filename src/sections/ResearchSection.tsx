
const ResearchSection = () => {
  const researchTopics = [
    {
      title: "Embedding-based Memory Search",
      description: "Research on efficient semantic search methods using vector embeddings for personal memory assistants.",
      details: [
        "Exploring transformer-based embedding models for sentence similarity",
        "Optimizing vector databases for quick nearest-neighbor searches",
        "Developing context-aware retrieval mechanisms with relevance scoring"
      ],
      gradient: "from-pink-300/30 to-purple-300/30"
    },
    {
      title: "Cloud-scale Distributed Microservices",
      description: "Investigation of architecture patterns for highly scalable and resilient microservice ecosystems.",
      details: [
        "Service mesh implementation for inter-service communication",
        "Circuit breaking patterns to prevent cascading failures",
        "Auto-scaling algorithms based on predictive workload analysis"
      ],
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "HCI in Smart Agents",
      description: "Human-Computer Interaction research focused on creating more natural and intuitive AI assistants.",
      details: [
        "Memory-augmented neural networks for contextual conversation",
        "Multimodal interaction design combining text, voice and visual cues",
        "Personality consistency in long-term AI companions"
      ],
      gradient: "from-secondary/20 to-accent/20"
    }
  ];

  return (
    <section id="research" className="section bg-background dark:bg-background py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="gradient-text">✨ Research Areas ✨</span>
        </h2>
        
        <p className="text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
          Exploring the intersection of artificial intelligence, distributed systems, and human-computer interaction
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchTopics.map((topic, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br ${topic.gradient} glass shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50`}
            >
              <div className="h-full flex flex-col p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 font-space-mono">{topic.title}</h3>
                  <p className="text-foreground/80">{topic.description}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-primary/20">
                  <h4 className="font-medium mb-3 text-sm">Current Focus:</h4>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    {topic.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1 bg-primary/30 rounded-full h-1.5 w-1.5 shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
