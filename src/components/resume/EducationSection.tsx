
import { ReactNode } from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
  details: string[];
}

interface EducationSectionProps {
  education: EducationItem[];
}

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
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
  );
};

export default EducationSection;
