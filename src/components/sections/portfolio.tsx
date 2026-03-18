
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Play, Shirt, School, Instagram, ExternalLink, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Portfolio() {
  const portfolioItems = PlaceHolderImages.filter((img) => img.id.startsWith("portfolio"));

  const performanceReels = [
    {
      title: "Hip Hop Freestyle",
      videoUrl: "/reel1.mp4", // Put your video file in public/reel1.mp4
      thumbnail: "https://picsum.photos/seed/reel1/600/400",
      tag: "Street Style",
      color: "text-accent",
      glow: "neon-glow-cyan"
    },
    {
      title: "Bollywood Fusion",
      videoUrl: "/reel2.mp4", // Put your video file in public/reel2.mp4
      thumbnail: "https://picsum.photos/seed/reel2/600/400",
      tag: "Commercial",
      color: "text-primary",
      glow: "neon-glow-purple"
    },
    {
      title: "Choreography Reel",
      videoUrl: "/reel3.mp4", // Put your video file in public/reel3.mp4
      thumbnail: "https://picsum.photos/seed/reel3/600/400",
      tag: "Masterclass",
      color: "text-accent",
      glow: "neon-glow-cyan"
    }
  ];

  const otherVentures = [
    {
      title: "Fashion Label",
      description: "Founder & Creative Director of a premier fashion brand, blending urban style with high-end aesthetics.",
      icon: <Shirt className="w-10 h-10 text-accent" />,
      actionLabel: "Follow on Instagram",
      actionIcon: <Instagram className="w-4 h-4 ml-2" />,
      glow: "neon-glow-cyan",
      borderColor: "border-accent/20"
    },
    {
      title: "Private Educational Institute",
      description: "Founder of a distinguished private school dedicated to excellence in academics and performing arts.",
      icon: <School className="w-10 h-10 text-primary" />,
      actionLabel: "Visit School Website",
      actionIcon: <ExternalLink className="w-4 h-4 ml-2" />,
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

        {/* Video Highlights Grid */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 px-2">
            <Film className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-headline font-bold text-white/90">Performance Reels</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceReels.map((reel, idx) => (
              <div 
                key={idx} 
                className="relative group aspect-video rounded-xl overflow-hidden border border-white/10 bg-card hover:border-white/20 transition-all duration-500 shadow-2xl"
              >
                {/* Background Video (Muted/Loop) */}
                <video
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  poster={reel.thumbnail}
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                >
                  <source src={reel.videoUrl} type="video/mp4" />
                </video>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-white/10 border border-white/10 ${reel.color}`}>
                      {reel.tag}
                    </span>
                    <h4 className="text-xl font-headline font-bold text-white group-hover:text-accent transition-colors">
                      {reel.title}
                    </h4>
                  </div>
                  
                  {/* Play Button Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 ${reel.glow}`}>
                      <Play className={`w-8 h-8 fill-current ${reel.color}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs italic pt-4">
            Hover over a reel to preview the action
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
                      variant="outline" 
                      className={`rounded-full px-6 border-white/10 hover:border-current text-white/80 hover:text-white transition-all`}
                    >
                      {venture.actionLabel} {venture.actionIcon}
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
