
import { useState } from 'react';
import { Download } from 'lucide-react';

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' }
  ];

  const education = [
    {
      degree: "M.S. in Computer Information Systems",
      institution: "California Baptist University",
      year: "2021 - 2023",
      gpa: "3.54/4.0",
      details: [
        "Focus on Advanced Algorithms and Distributed Systems",
        "Research on Semantic Memory Networks and Vector Embeddings",
        "Graduate Teaching Assistant for Database Systems"
      ]
    },
    {
      degree: "B.Tech in Electrical and Electronics Engineering",
      institution: "NRI Institute of Technology",
      year: "2014 - 2018",
      gpa: "8.7/10.0",
      details: [
        "Minor in Computer Science",
        "Senior project on IoT-based Smart Energy Management",
        "Participation in ACM Programming Competitions"
      ]
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML/CSS"]
    },
    {
      category: "Frontend Technologies",
      items: ["React", "Redux", "Angular", "Vue.js", "SCSS/SASS", "Tailwind CSS"]
    },
    {
      category: "Backend Technologies",
      items: ["Node.js", "Express", "Spring Boot", "Django", "GraphQL", "REST APIs"]
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Terraform"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"]
    },
    {
      category: "Tools & Methodologies",
      items: ["Git", "Agile/Scrum", "TDD", "Microservices", "System Design"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      link: "#"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2021",
      link: "#"
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2020",
      link: "#"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera (Stanford University)",
      date: "2019",
      link: "#"
    }
  ];

  return (
    <section id="resume" className="section bg-background dark:bg-navy py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">Resume</span>
          </h2>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
            download
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        {/* Resume Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-secondary text-white' 
                    : 'bg-muted hover:bg-muted/80 text-foreground/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Resume Content */}
          <div className="glass-card p-8 animate-fade-in">
            {/* Education Section */}
            {(activeTab === 'all' || activeTab === 'education') && (
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-secondary pl-4 animate-fade-in">
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <p className="text-secondary">{edu.institution}</p>
                      <p className="text-foreground/70 mb-2">{edu.year} • GPA: {edu.gpa}</p>
                      <ul className="list-disc list-inside text-foreground/80">
                        {edu.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {(activeTab === 'all' || activeTab === 'skills') && (
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="animate-fade-in">
                      <h4 className="text-lg font-semibold mb-3">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, i) => (
                          <span key={i} className="skill-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Section */}
            {(activeTab === 'all' || activeTab === 'experience') && (
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Work Experience</h3>
                <div className="space-y-8">
                  <div className="border-l-4 border-secondary pl-4 animate-fade-in">
                    <h4 className="text-xl font-semibold">Software Engineer</h4>
                    <p className="text-secondary">Morgan Stanley</p>
                    <p className="text-foreground/70 mb-2">2023 - Present</p>
                    <ul className="list-disc list-inside text-foreground/80">
                      <li>Migrated E*TRADE services to Spring Boot microservices</li>
                      <li>Used Docker, Helm, Kubernetes for containerization</li>
                      <li>Wrote JUnit 5 tests, handled Spring Cloud Config</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4 animate-fade-in">
                    <h4 className="text-xl font-semibold">Full Stack Developer</h4>
                    <p className="text-secondary">Flipkart</p>
                    <p className="text-foreground/70 mb-2">2018 - 2020</p>
                    <ul className="list-disc list-inside text-foreground/80">
                      <li>React/Redux frontend for order tracking</li>
                      <li>Express.js + Spring Boot backend with Redis</li>
                      <li>Integrated Razorpay/Paytm, reduced failures by 15%</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Certifications Section */}
            {(activeTab === 'all' || activeTab === 'certifications') && (
              <div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="border border-border rounded-lg p-4 hover:border-secondary transition-colors animate-fade-in"
                    >
                      <h4 className="text-lg font-semibold">{cert.name}</h4>
                      <p className="text-foreground/70">{cert.issuer} • {cert.date}</p>
                      <a href={cert.link} className="text-secondary hover:underline text-sm mt-2 inline-block">
                        View Certificate
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
