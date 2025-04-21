
import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
  className?: string;
}

const TypingAnimation = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
  className = '',
}: TypingAnimationProps) => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!phrases.length) return;

    const currentFullPhrase = phrases[phraseIndex];

    const typeText = () => {
      if (isDeleting) {
        // Deleting text
        setCurrentPhrase(currentFullPhrase.substring(0, currentPhrase.length - 1));
        
        if (currentPhrase === '') {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        // Typing text
        setCurrentPhrase(currentFullPhrase.substring(0, currentPhrase.length + 1));
        
        if (currentPhrase === currentFullPhrase) {
          setIsDone(true);
          setTimeout(() => {
            setIsDone(false);
            setIsDeleting(true);
          }, delayBetweenPhrases);
        }
      }
    };

    const timeout = setTimeout(
      typeText, 
      isDeleting 
        ? deletingSpeed 
        : isDone 
          ? delayBetweenPhrases 
          : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentPhrase, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases, isDone]);

  return (
    <span className={`typing-container ${className}`}>
      <span className="typing-text">{currentPhrase}</span>
    </span>
  );
};

export default TypingAnimation;
