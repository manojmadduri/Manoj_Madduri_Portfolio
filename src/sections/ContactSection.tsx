import { useState } from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xqaqwqzk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-background dark:bg-navy-light py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-foreground/80 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the contact form or through social platforms.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:contact@manojmadduri.com" 
                className="flex items-center gap-3 text-foreground/70 hover:text-secondary transition-colors group"
              >
                <div className="p-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <span>mmanoj.fall2021@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com/manojmadduri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-secondary transition-colors group"
              >
                <div className="p-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Github className="h-5 w-5 text-secondary" />
                </div>
                <span>github.com/manojmadduri</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/manoj-madduri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-secondary transition-colors group"
              >
                <div className="p-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-secondary" />
                </div>
                <span>linkedin.com/in/manojmadduri</span>
                </a>
              
              <a 
                href="https://huggingface.co/manojkakashi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-secondary transition-colors group"
              >
                <div className="p-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Globe className="h-5 w-5 text-secondary" />
                </div>
                <span>huggingface.co/manojmadduri</span>
                </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-secondary transition-colors peer"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-foreground/60 text-sm transition-all
                      peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/60 peer-placeholder-shown:top-2
                      peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-secondary transition-colors peer"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-foreground/60 text-sm transition-all
                      peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/60 peer-placeholder-shown:top-2
                      peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-secondary transition-colors peer"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="subject"
                  className="absolute left-0 -top-3.5 text-foreground/60 text-sm transition-all
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/60 peer-placeholder-shown:top-2
                    peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                >
                  Subject
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-secondary transition-colors peer"
                  placeholder=" "
                  required
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-foreground/60 text-sm transition-all
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/60 peer-placeholder-shown:top-2
                    peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
