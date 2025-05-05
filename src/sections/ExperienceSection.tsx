
import WorkTimelineItem from '../components/WorkTimelineItem';
import { Briefcase, Radio } from 'lucide-react';
import { workExperience } from '../data/resumeData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section bg-background dark:bg-background py-24 relative overflow-hidden wabi-sabi">
      {/* Retro grid background with low opacity */}
      <div className="absolute inset-0 retro-grid opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="w-12 h-1 bg-accent/70 rounded-full mr-4 transform -rotate-3"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-space-mono">
            <span className="gradient-text glitch" data-text="Work Experience">Work Experience</span>
          </h2>
          <div className="w-12 h-1 bg-accent/70 rounded-full ml-4 transform rotate-3"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <WorkTimelineItem
              key={index}
              title={job.title}
              company={job.company}
              period={job.period}
              details={job.details}
              icon={index === 0 ? <Briefcase className="h-3 w-3 text-white animate-pulse" /> : <Radio className="h-3 w-3 text-white" />}
              className="vhs-loading"
            />
          ))}
        </div>
      </div>
      
      {/* Decorative elements with wabi-sabi influence - intentionally imperfect */}
      <div className="absolute bottom-10 right-10 h-24 w-24 border-4 border-dashed border-primary/30 rounded-full animate-spin-slow opacity-50 transform rotate-3"></div>
      <div className="absolute top-10 left-10 h-16 w-16 border-4 border-dashed border-secondary/30 rounded-full animate-spin-slow opacity-50 transform -rotate-2"></div>
      
      {/* Abstract wabi-sabi blobs */}
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-32 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-xl transform rotate-12"></div>
    </section>
  );
};

export default ExperienceSection;
