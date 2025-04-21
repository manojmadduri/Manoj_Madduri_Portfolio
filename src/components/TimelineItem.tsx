
import { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  children: ReactNode;
  icon?: ReactNode;
}

const TimelineItem = ({ title, subtitle, date, children, icon }: TimelineItemProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot">
        {icon || <div className="h-2 w-2 bg-white rounded-full"></div>}
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
        <h4 className="text-lg font-medium text-secondary mb-1">{subtitle}</h4>
        <p className="text-sm text-muted-foreground mb-4">{date}</p>
        <div className="text-foreground/80">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
