
const AboutSection = () => {
  const skills = [
    // Languages
    'JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 
    // Frontend
    'React', 'Redux', 'Angular', 'HTML/CSS', 'SCSS',
    // Backend
    'Node.js', 'Express', 'Spring Boot', 'Django',
    // Database
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis',
    // DevOps & Tools
    'Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD',
    // AI & ML
    'TensorFlow', 'PyTorch', 'NLP', 'Embeddings'
  ];

  return (
    <section id="about" className="section bg-background dark:bg-navy py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Moved to the left side */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary">
              <div className="absolute inset-0 bg-gradient-cyan opacity-20"></div>
              <img
                src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
                alt="Manoj Madduri"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* About Content - Moved to the right side */}
          <div className="flex flex-col space-y-6 order-1 md:order-2">
            <p className="text-lg">
              I'm a <span className="text-secondary font-semibold">Software Developer</span> with over 5 years of experience building scalable web applications and distributed systems.
              Currently, I'm also pursuing my passion for research as an aspiring PhD candidate in Computer Science.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>M.S. in Computer Information Systems</li>
                <li>Magna Cum Laude CBU - GPA: 3.54</li>
                <li>B.Tech in EEE – NRI Institute of Technology</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Research Interests</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Semantic memory retrieval & embeddings</li>
                <li>Distributed systems for large-scale pipelines</li>
                <li>HCI in AI personal assistants</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
              <div className="flex flex-wrap">
                {skills.map(skill => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
