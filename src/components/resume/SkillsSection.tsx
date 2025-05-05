
interface SkillGroup {
  category: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: SkillGroup[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
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
  );
};

export default SkillsSection;
