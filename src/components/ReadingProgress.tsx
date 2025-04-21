
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  
  // Show reading progress only on blog posts or content-heavy pages
  const shouldShowProgress = location.pathname.includes('/blog/') || location.pathname === '/';

  useEffect(() => {
    if (!shouldShowProgress) return;
    
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    // Initial progress calculation
    updateProgress();
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, [shouldShowProgress]);

  if (!shouldShowProgress) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50">
      <div 
        className="h-full bg-secondary shadow-lg transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
