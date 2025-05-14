
import { useState } from 'react';
import { Download } from 'lucide-react';
import ResumeTabs from '../components/resume/ResumeTabs';
import EducationSection from '../components/resume/EducationSection';
import SkillsSection from '../components/resume/SkillsSection';
import ResumeExperienceSection from '../components/resume/ResumeExperienceSection';
import CertificationsSection from '../components/resume/CertificationsSection';
import { education, skills, certifications, tabs } from '../data/resumeData';

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="resume" className="section bg-background dark:bg-navy py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">Resume</span>
          </h2>
          <a 
            href="src\Manoj_Madduri_Resume.docx" 
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
          <ResumeTabs 
            tabs={tabs} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />

          {/* Resume Content */}
          <div className="glass-card p-8 animate-fade-in">
            {/* Education Section */}
            {(activeTab === 'all' || activeTab === 'education') && (
              <EducationSection education={education} />
            )}

            {/* Skills Section */}
            {(activeTab === 'all' || activeTab === 'skills') && (
              <SkillsSection skills={skills} />
            )}

            {/* Experience Section */}
            {(activeTab === 'all' || activeTab === 'experience') && (
              <ResumeExperienceSection />
            )}

            {/* Certifications Section */}
            {(activeTab === 'all' || activeTab === 'certifications') && (
              <CertificationsSection certifications={certifications} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
