
import React, { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface TableOfContentsProps {
  content: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<Array<{ id: string; title: string; level: number }>>([]);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  const location = useLocation();
  
  // Only show on blog post pages
  const isBlogPost = location.pathname.includes('/blog/') && !location.pathname.endsWith('/blog/');
  
  useEffect(() => {
    if (!isBlogPost || !content) return;
    
    const extractHeadings = (text: string) => {
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const matches = Array.from(text.matchAll(headingRegex));
      
      return matches.map((match, index) => ({
        id: `heading-${index}`,
        title: match[2],
        level: match[1].length
      }));
    };

    setHeadings(extractHeadings(content));

    // Set up intersection observer to detect active headings
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: [0.1, 0.5] }
    );

    // Observe only existing headings in the DOM
    const headingElements = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
    headingElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [content, isBlogPost]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveHeading(id);
    }
  };

  if (!isBlogPost || headings.length === 0) return null;

  return (
    <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)]">
      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5">
        <h4 className="font-semibold mb-4 text-foreground/90">Table of Contents</h4>
        <ScrollArea className="h-[calc(100vh-15rem)] pr-4">
          <ul className="space-y-1">
            {headings.map(({ id, title, level }) => (
              <li 
                key={id} 
                className={`${level > 1 ? 'ml-' + ((level - 1) * 3) : ''} transition-colors`}
              >
                <button
                  onClick={() => scrollToHeading(id)}
                  className={`group flex text-sm py-1 px-2 w-full rounded-md text-left ${
                    activeHeading === id 
                      ? 'bg-secondary/10 text-secondary font-medium' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {level > 1 && <ChevronRight className="h-4 w-4 mr-1 opacity-70 shrink-0" />}
                  <span className="truncate">{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </div>
  );
};

export default TableOfContents;
