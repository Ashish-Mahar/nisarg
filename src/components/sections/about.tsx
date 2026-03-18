
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-img");
  const styles = ["Hip-hop", "Bollywood", "Contemporary", "Street Dance", "Jazz Funk"];

  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl transition-all group-hover:bg-primary/30" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={aboutImage?.imageUrl || "https://picsum.photos/seed/dance-about-signature/800/1000"}
              alt={aboutImage?.description || "About Nisarg"}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              data-ai-hint={aboutImage?.imageHint}
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-primary font-headline text-xl font-semibold tracking-wide">THE JOURNEY</h3>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
              Passion for <span className="text-accent text-glow-cyan">Movement</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Nisarg Sindhe is a visionary dancer and choreographer known for his dynamic energy and versatile style. With over 8 years of experience in the industry, he has carved a niche for himself by blending technical precision with raw emotion.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether it's the high-octane rhythms of Bollywood or the fluid expressions of Contemporary dance, Nisarg's performances are a masterclass in artistry. He believes that dance is a language that transcends words, and he strives to tell a unique story with every beat.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-headline text-lg font-semibold uppercase tracking-widest">Expertise</h4>
            <div className="flex flex-wrap gap-3">
              {styles.map((style) => (
                <Badge
                  key={style}
                  variant="outline"
                  className="bg-white/5 border-primary/30 text-white hover:border-accent text-sm py-2 px-4 rounded-full transition-colors"
                >
                  {style}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
