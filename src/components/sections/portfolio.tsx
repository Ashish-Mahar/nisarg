
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Play } from "lucide-react";

export function Portfolio() {
  const portfolioItems = PlaceHolderImages.filter((img) => img.id.startsWith("portfolio"));

  return (
    <section id="portfolio" className="py-24 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
            Portfolio <span className="text-primary text-glow-purple">Gallery</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A glimpse into the rhythm and movements of my professional work.
          </p>
        </div>

        {/* Video Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mock Instagram Video Embeds */}
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

        {/* Image Grid */}
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
    </section>
  );
}
