
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Send, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Using FormSubmit AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/ashishmahar.in@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "I'll get back to you as soon as possible via email.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not send your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
              Let's <span className="text-accent text-glow-cyan">Collaborate</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md leading-relaxed">
              Have a project in mind or want to book a workshop? Reach out and let's make something amazing together.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/80 group">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-primary transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Email Me</p>
                <p className="text-lg font-medium">contact@nisargsindhe.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/80 group">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-accent transition-colors">
                <Instagram className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Follow Me</p>
                <a href="https://www.instagram.com/nisarg___22/" target="_blank" className="text-lg font-medium hover:text-accent transition-colors">@nisarg___22</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/80 group">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-primary transition-colors">
                <div className="w-6 h-6 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Location</p>
                <p className="text-lg font-medium">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[100px]" />
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Inquiry from Portfolio!" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Full Name</label>
                <Input
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-white/5 border-white/10 focus:border-primary focus:ring-0 focus-visible:ring-0 text-white h-12 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Phone Number</label>
                <Input
                  name="phone"
                  required
                  type="tel"
                  placeholder="9876543210"
                  className="bg-white/5 border-white/10 focus:border-accent focus:ring-0 focus-visible:ring-0 text-white h-12 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Subject</label>
              <Input
                name="subject"
                required
                placeholder="Collaboration Inquiry"
                className="bg-white/5 border-white/10 focus:border-primary focus:ring-0 focus-visible:ring-0 text-white h-12 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Your Message</label>
              <Textarea
                name="message"
                required
                placeholder="Tell me about your project..."
                className="bg-white/5 border-white/10 focus:border-accent focus:ring-0 focus-visible:ring-0 text-white min-h-[150px] resize-none transition-all"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-accent hover:bg-accent/90 text-background font-headline font-bold text-lg neon-glow-cyan transition-all"
            >
              {loading ? "Sending..." : (
                <>
                  Send Message <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/5 text-center text-white/30 text-sm">
        <p>&copy; {new Date().getFullYear()} Nisarg Sindhe. All rights reserved.</p>
      </footer>
    </section>
  );
}
