
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video or Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage?.imageUrl || ""}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          {/* Replace this URL with your direct Instagram video MP4 link or any hosting link */}
          <source src="https://www.instagram.com/reel/DT26LfngWW3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" type="video/mp4" />
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Hero Background"}
            fill
            className="object-cover opacity-60"
            priority
            data-ai-hint={heroImage?.imageHint}
          />
        </video>
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6 animate-fade-in">
        <h2 className="text-accent font-headline font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-2">
          Professional Dancer & Choreographer
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold text-white tracking-tighter leading-tight">
          NISARG <br />
          <span className="text-primary text-glow-purple">SINDHE</span>
        </h1>
        <p className="text-white/70 max-w-xl mx-auto text-lg md:text-xl font-light">
          Redefining movement through passion, precision, and soul.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-bold neon-glow-purple transition-all hover:scale-105"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Watch My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10 rounded-full px-8 h-14 text-base font-bold transition-all hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-accent w-8 h-8 opacity-50" />
      </div>
    </section>
  );
}
