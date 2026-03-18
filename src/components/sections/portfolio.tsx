
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Play, Shirt, School, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Portfolio() {
  const portfolioItems = PlaceHolderImages.filter((img) => img.id.startsWith("portfolio"));

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
            Portfolio <span className="text-primary text-glow-purple">Gallery</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A glimpse into the rhythm, movements, and entrepreneurial spirit that define my professional journey.
          </p>
        </div>

        {/* Video Highlights Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl font-headline font-bold text-white/90 px-2">Performance Reels</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group aspect-video rounded-xl overflow-hidden border border-white/10 bg-card flex items-center justify-center">
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <Play className="w-12 h-12 text-accent group-hover:scale-110 transition-transform z-20" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-white font-headline text-sm font-bold bg-black/50 px-3 py-1 rounded-full">
                  Hip Hop Freestyle
                </span>
              </div>
            </div>

            <div className="relative group aspect-video rounded-xl overflow-hidden border border-white/10 bg-card flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <Play className="w-12 h-12 text-primary group-hover:scale-110 transition-transform z-20" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-white font-headline text-sm font-bold bg-black/50 px-3 py-1 rounded-full">
                  Bollywood Fusion
                </span>
              </div>
            </div>

            <div className="relative group aspect-video rounded-xl overflow-hidden border border-white/10 bg-card flex items-center justify-center">
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <Play className="w-12 h-12 text-accent group-hover:scale-110 transition-transform z-20" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-white font-headline text-sm font-bold bg-black/50 px-3 py-1 rounded-full">
                  Choreography Reel
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Ventures Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-headline font-bold text-white/90 px-2">Beyond the Stage</h3>
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
                      className={`rounded-full px-6 border-white/10 hover:border-${venture.glow === 'neon-glow-cyan' ? 'accent' : 'primary'} text-white/80 hover:text-white transition-all`}
                    >
                      {venture.actionLabel} {venture.actionIcon}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Grid */}
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
