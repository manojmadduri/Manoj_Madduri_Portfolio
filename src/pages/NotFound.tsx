
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-navy">
      <div className="text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">You discovered a lost memory 🧠</h2>
        <p className="text-foreground/70 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved to another dimension.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
