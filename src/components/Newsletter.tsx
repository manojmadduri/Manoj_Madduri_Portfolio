
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      toast({
        title: "Subscribed!",
        description: "You've been successfully subscribed to our newsletter.",
        variant: "default"
      });
    }, 1500);
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-lg bg-gradient-to-br from-card to-card/70">
      <h3 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h3>
      <p className="text-muted-foreground mb-4">
        Get the latest articles and updates delivered to your inbox.
      </p>
      
      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow shadow-sm"
            disabled={isSubmitting}
          />
          <Button type="submit" disabled={isSubmitting || !email} className="shadow-sm">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
      ) : (
        <div className="flex items-center justify-center p-3 bg-muted/30 rounded-lg border border-green-200 dark:border-green-900">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span className="text-sm font-medium">Thank you for subscribing!</span>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
