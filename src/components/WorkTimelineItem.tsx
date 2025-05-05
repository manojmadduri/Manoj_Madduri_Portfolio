
import { ReactNode } from 'react';

interface WorkTimelineItemProps {
  title: string;
  company: string;
  period: string;
  details: string[];
  icon?: ReactNode;
  className?: string;
}

const WorkTimelineItem = ({ 
  title, 
  company, 
  period, 
  details, 
  icon, 
  className = '' 
}: WorkTimelineItemProps) => {
  return (
    <div className={`timeline-item ${className}`}>
      <div className="timeline-dot">
        {icon || <div className="h-2 w-2 bg-white rounded-full"></div>}
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
        <h4 className="text-lg font-medium text-secondary mb-1">{company}</h4>
        <p className="text-sm text-muted-foreground mb-4">{period}</p>
        <ul className="list-disc list-inside space-y-2 font-mono text-sm">
          {details.map((detail, index) => (
            <li 
              key={index} 
              className="transform hover:rotate-[0.3deg] hover:translate-x-1 transition-transform"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkTimelineItem;
