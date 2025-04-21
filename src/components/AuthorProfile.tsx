
import React from 'react';
import { Twitter, Github, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AuthorProfileProps {
  author: {
    name: string;
    avatar?: string;
    bio?: string;
    social?: {
      twitter?: string;
      github?: string;
      linkedin?: string;
      website?: string;
    };
  };
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ author }) => {
  const { name, avatar, bio, social } = author;
  
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center md:items-start p-6 rounded-lg border bg-card shadow-sm">
      <div className="w-20 h-20 rounded-full overflow-hidden bg-muted flex-shrink-0">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl font-medium">
            {name.charAt(0)}
          </div>
        )}
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        
        {bio && (
          <p className="text-muted-foreground mb-4 text-sm">{bio}</p>
        )}
        
        {social && Object.values(social).some(Boolean) && (
          <div className="flex gap-2 justify-center md:justify-start">
            {social.twitter && (
              <Button variant="ghost" size="icon" asChild>
                <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
            )}
            {social.github && (
              <Button variant="ghost" size="icon" asChild>
                <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {social.linkedin && (
              <Button variant="ghost" size="icon" asChild>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            )}
            {social.website && (
              <Button variant="ghost" size="icon" asChild>
                <a href={social.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                  <Globe className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorProfile;
