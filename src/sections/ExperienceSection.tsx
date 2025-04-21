
import TimelineItem from '../components/TimelineItem';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section bg-background dark:bg-navy-light py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">Work Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <TimelineItem 
            title="Software Engineer"
            subtitle="Morgan Stanley"
            date="2023 - Present"
            icon={<Briefcase className="h-3 w-3 text-white" />}
          >
            <ul className="list-disc list-inside space-y-2">
              <li>Migrated E*TRADE services to Spring Boot microservices architecture, improving system scalability and resilience.</li>
              <li>Implemented containerization using Docker, Helm charts, and Kubernetes for improved deployment and service orchestration.</li>
              <li>Wrote extensive unit tests using JUnit 5 and integrated with Spring Cloud Config for centralized configuration management.</li>
              <li>Collaborated with cross-functional teams to ensure smooth integration between front-end and back-end systems.</li>
            </ul>
          </TimelineItem>

          <TimelineItem 
            title="Full Stack Developer"
            subtitle="Flipkart"
            date="2018 - 2020"
            icon={<Briefcase className="h-3 w-3 text-white" />}
          >
            <ul className="list-disc list-inside space-y-2">
              <li>Built responsive e-commerce interfaces using React/Redux, improving user engagement and conversion rates.</li>
              <li>Developed Express.js and Spring Boot backend services with Redis caching, enhancing API response times by 30%.</li>
              <li>Integrated payment gateways including Razorpay and Paytm, reducing payment failures by 15% through improved error handling.</li>
              <li>Implemented real-time order tracking system that improved customer satisfaction and reduced support inquiries.</li>
            </ul>
          </TimelineItem>

          <TimelineItem 
            title="Software Development Intern"
            subtitle="Tech Startup"
            date="2017 - 2018"
            icon={<Briefcase className="h-3 w-3 text-white" />}
          >
            <ul className="list-disc list-inside space-y-2">
              <li>Designed and implemented responsive web interfaces using HTML5, CSS3, and JavaScript.</li>
              <li>Assisted in developing RESTful APIs using Node.js and Express.</li>
              <li>Collaborated with the UX/UI team to implement design improvements based on user feedback.</li>
              <li>Participated in daily stand-ups and sprint planning meetings in an Agile development environment.</li>
            </ul>
          </TimelineItem>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
