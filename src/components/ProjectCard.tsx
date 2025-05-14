import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  modalContent?: React.ReactNode;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  techStack, 
  demoUrl, 
  githubUrl, 
  modalContent 
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div 
        onClick={openModal}
        className="group cursor-pointer hover-card glass-card overflow-hidden h-full flex flex-col"
      >
        {image && (
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
        )}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-foreground/80 mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="bg-secondary/15 text-secondary px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div 
            ref={modalRef}
            className="bg-background dark:bg-navy-light rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-in"
          >
            <div className="flex justify-between items-center p-6 border-b border-border">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <button 
                onClick={closeModal}
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              {modalContent || (
                <>
                  {image && (
                    <div className="mb-6">
                      <img 
                        src={image} 
                        alt={title} 
                        className="w-full rounded-lg" 
                      />
                    </div>
                  )}
                  <p className="mb-6 text-foreground/80">{description}</p>
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-secondary/15 text-secondary px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {demoUrl && (
                      <a 
                        href={demoUrl} 
                        className="btn-primary flex-1 text-center rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    {githubUrl && (
                      <a 
                        href={githubUrl} 
                        className="btn-outline flex-1 text-center rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Repo
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;