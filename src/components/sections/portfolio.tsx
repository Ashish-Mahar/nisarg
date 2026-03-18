
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Shirt, School, Instagram, ExternalLink, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Portfolio() {
  const portfolioItems = PlaceHolderImages.filter((img) => img.id.startsWith("portfolio"));

  const performanceReels = [
    {
      title: "Hip Hop Freestyle",
      reelId: "DT26LfngWW3",
      tag: "Street Style",
      color: "text-accent",
      glow: "neon-glow-cyan"
    },
    {
      title: "Bollywood Fusion",
      reelId: "DB9_L_PskV8",
      tag: "Commercial",
      color: "text-primary",
      glow: "neon-glow-purple"
    },
    {
      title: "Choreography Reel",
      reelId: "DB7M-7pv-7V",
      tag: "Masterclass",
      color: "text-accent",
      glow: "neon-glow-cyan"
    }
  ];

  const otherVentures = [
    {
      title: "Kari Kraft",
      description: "Founder & Creative Director of a premier fashion brand, blending urban style with high-end aesthetics.",
      icon: <Shirt className="w-10 h-10 text-accent" />,
      actionLabel: "Follow on Instagram",
      actionIcon: <Instagram className="w-4 h-4 ml-2" />,
      href: "https://www.instagram.com/kari_kraft_official?igsh=MWt2c3NsZ2Z2eGc0cw==",
      glow: "neon-glow-cyan",
      borderColor: "border-accent/20"
    },
    {
      title: "Nair International School",
      description: "Founder of a distinguished private school dedicated to excellence in academics and performing arts.",
      icon: <School className="w-10 h-10 text-primary" />,
      actionLabel: "Visit Instagram Page",
      actionIcon: <ExternalLink className="w-4 h-4 ml-2" />,
      href: "https://www.instagram.com/ajithanaireducationaltrust?igsh=MTAwaGV2ZDlsdTFwNw==",
      glow: "neon-glow-purple",
      borderColor: "border-primary/20"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
            Work <span className="text-primary text-glow-purple">Showcase</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            From explosive stage performances to creative entrepreneurship, here is a glimpse of my journey.
          </p>
        </div>

        {/* Instagram Reels Grid */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 px-2">
            <Film className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-headline font-bold text-white/90">Performance Reels</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceReels.map((reel, idx) => (
              <div 
                key={idx} 
                className="relative group rounded-xl overflow-hidden border border-white/10 bg-card hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col"
              >
                {/* Instagram Embed Wrapper */}
                <div className="aspect-[9/16] w-full bg-black/40 relative">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.reelId}/embed`}
                    className="absolute inset-0 w-full h-full border-none"
                    title={reel.title}
                  ></iframe>
                </div>

                {/* Info Overlay (Visible on Hover/Bottom) */}
                <div className="p-4 bg-card/80 backdrop-blur-sm border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-white/5 border border-white/10 ${reel.color}`}>
                      {reel.tag}
                    </span>
                    <h4 className="text-sm font-headline font-bold text-white">
                      {reel.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs italic pt-4">
            Directly synced from Instagram
          </p>
        </div>

        {/* Other Ventures Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-headline font-bold text-white/90 px-2 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-primary" /> Beyond the Stage
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherVentures.map((venture, idx) => (
              <div
                key={idx}
                className={`glass p-8 rounded-2xl border ${venture.borderColor} group transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className={`p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${venture.glow}`}>
                    {venture.icon}
                  </div>
                  <div className="space-y-4 flex-1">
                    <h4 className="text-2xl font-headline font-bold text-white">{venture.title}</h4>
                    <p className="text-white/60 leading-relaxed">{venture.description}</p>
                    <Button 
                      asChild
                      variant="outline" 
                      className={`rounded-full px-6 border-white/10 hover:border-current text-white/80 hover:text-white transition-all`}
                    >
                      <a href={venture.href} target="_blank" rel="noopener noreferrer">
                        {venture.actionLabel} {venture.actionIcon}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Gallery */}
        <div className="space-y-8">
          <h3 className="text-2xl font-headline font-bold text-white/90 px-2">Action Gallery</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, idx) => (
              <div
                key={item.id}
                className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.description}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={item.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
