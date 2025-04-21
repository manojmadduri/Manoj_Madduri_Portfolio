
import React from 'react';
import { Clock } from 'lucide-react';

interface ReadingTimeProps {
  text: string;
  wpm?: number;
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ text, wpm = 225 }) => {
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  
  return (
    <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground rounded-full bg-muted/50 px-3 py-1">
      <Clock className="h-3.5 w-3.5" />
      <span>{time} min read</span>
    </div>
  );
};

export default ReadingTime;
