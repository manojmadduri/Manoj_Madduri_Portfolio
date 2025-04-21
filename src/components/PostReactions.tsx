
import React, { useState } from 'react';
import { Heart, ThumbsUp, Lightbulb, Bookmark, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface ReactionType {
  id: string;
  icon: React.ReactNode;
  label: string;
  count: number;
}

const PostReactions: React.FC<{ postId: string }> = ({ postId }) => {
  const { toast } = useToast();
  const [reactions, setReactions] = useState<ReactionType[]>([
    { id: 'like', icon: <ThumbsUp className="h-4 w-4" />, label: 'Like', count: 12 },
    { id: 'love', icon: <Heart className="h-4 w-4" />, label: 'Love', count: 8 },
    { id: 'insightful', icon: <Lightbulb className="h-4 w-4" />, label: 'Insightful', count: 5 }
  ]);
  const [userReactions, setUserReactions] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  
  const handleReaction = (reactionId: string) => {
    if (userReactions.includes(reactionId)) {
      // Remove the reaction
      setReactions(reactions.map(r => 
        r.id === reactionId ? { ...r, count: r.count - 1 } : r
      ));
      setUserReactions(userReactions.filter(r => r !== reactionId));
    } else {
      // Add the reaction
      setReactions(reactions.map(r => 
        r.id === reactionId ? { ...r, count: r.count + 1 } : r
      ));
      setUserReactions([...userReactions, reactionId]);
    }
  };
  
  const handleBookmark = () => {
    setSaved(!saved);
    toast({
      title: saved ? "Removed from bookmarks" : "Added to bookmarks",
      description: saved ? "This post has been removed from your bookmarks." : "This post has been saved to your bookmarks.",
    });
  };
  
  return (
    <div className="flex flex-wrap items-center gap-2 py-2">
      {reactions.map(reaction => (
        <Button
          key={reaction.id}
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center gap-1 text-xs",
            userReactions.includes(reaction.id) && "bg-muted text-secondary"
          )}
          onClick={() => handleReaction(reaction.id)}
        >
          {reaction.icon}
          <span>{reaction.label}</span>
          {reaction.count > 0 && (
            <span className="ml-1 text-muted-foreground">{reaction.count}</span>
          )}
        </Button>
      ))}
      
      <div className="grow"></div>
      
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "flex items-center gap-1 text-xs",
          saved && "bg-muted text-secondary"
        )}
        onClick={handleBookmark}
      >
        <Bookmark className="h-4 w-4" />
        <span>{saved ? "Saved" : "Save"}</span>
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-1 text-xs"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          toast({
            title: "Link copied",
            description: "The post link has been copied to clipboard.",
          });
        }}
      >
        <Share2 className="h-4 w-4" />
        <span>Share</span>
      </Button>
    </div>
  );
};

export default PostReactions;
