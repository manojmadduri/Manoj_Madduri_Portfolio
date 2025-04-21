
const ResearchSection = () => {
  const researchTopics = [
    {
      title: "Embedding-based Memory Search",
      description: "Research on efficient semantic search methods using vector embeddings for personal memory assistants.",
      details: [
        "Exploring transformer-based embedding models for sentence similarity",
        "Optimizing vector databases for quick nearest-neighbor searches",
        "Developing context-aware retrieval mechanisms with relevance scoring"
      ]
    },
    {
      title: "Cloud-scale Distributed Microservices",
      description: "Investigation of architecture patterns for highly scalable and resilient microservice ecosystems.",
      details: [
        "Service mesh implementation for inter-service communication",
        "Circuit breaking patterns to prevent cascading failures",
        "Auto-scaling algorithms based on predictive workload analysis"
      ]
    },
    {
      title: "HCI in Smart Agents",
      description: "Human-Computer Interaction research focused on creating more natural and intuitive AI assistants.",
      details: [
        "Memory-augmented neural networks for contextual conversation",
        "Multimodal interaction design combining text, voice and visual cues",
        "Personality consistency in long-term AI companions"
      ]
    }
  ];

  return (
    <section id="research" className="section bg-background dark:bg-navy-light py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">Research Areas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchTopics.map((topic, index) => (
            <div 
              key={index} 
              className="glass-card p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">{topic.title}</h3>
                <p className="text-foreground/80 mb-6">{topic.description}</p>
                <div className="mt-auto">
                  <h4 className="font-medium mb-2">Current Focus:</h4>
                  <ul className="list-disc list-inside space-y-2 text-foreground/70">
                    {topic.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
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
