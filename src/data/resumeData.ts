
export const education = [
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

export const skills = [
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

export const certifications = [
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

export const workExperience = [
  {
    title: "Software Engineer",
    company: "Morgan Stanley",
    period: "2023 - Present",
    details: [
      "Migrated E*TRADE services to Spring Boot microservices architecture, improving system scalability and resilience.",
      "Implemented containerization using Docker, Helm charts, and Kubernetes for improved deployment and service orchestration.",
      "Wrote extensive unit tests using JUnit 5 and integrated with Spring Cloud Config for centralized configuration management.",
      "Collaborated with cross-functional teams to ensure smooth integration between front-end and back-end systems."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Flipkart",
    period: "2018 - 2020",
    details: [
      "Built responsive e-commerce interfaces using React/Redux, improving user engagement and conversion rates.",
      "Developed Express.js and Spring Boot backend services with Redis caching, enhancing API response times by 30%.",
      "Integrated payment gateways including Razorpay and Paytm, reducing payment failures by 15% through improved error handling.",
      "Implemented real-time order tracking system that improved customer satisfaction and reduced support inquiries."
    ]
  }
];

export const tabs = [
  { id: 'all', label: 'All' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' }
];
