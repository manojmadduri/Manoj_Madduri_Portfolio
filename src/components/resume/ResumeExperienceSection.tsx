
import { workExperience } from "../../data/resumeData";

const ResumeExperienceSection = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-6 gradient-text">Work Experience</h3>
      <div className="space-y-8">
        {workExperience.map((job, index) => (
          <div key={index} className="border-l-4 border-secondary pl-4 animate-fade-in">
            <h4 className="text-xl font-semibold">{job.title}</h4>
            <p className="text-secondary">{job.company}</p>
            <p className="text-foreground/70 mb-2">{job.period}</p>
            <ul className="list-disc list-inside text-foreground/80">
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeExperienceSection;
