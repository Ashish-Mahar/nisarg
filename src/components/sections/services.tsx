
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Music, Mic2, Heart, Users } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Wedding Choreography",
      description: "Crafting unforgettable moments for your special day with personalized routines for the couple and family.",
      icon: <Heart className="w-8 h-8 text-primary" />,
      color: "border-primary/20 hover:border-primary",
    },
    {
      title: "Dance Classes",
      description: "Beginner to advanced level workshops focusing on technique, rhythm, and style across various genres.",
      icon: <Users className="w-8 h-8 text-accent" />,
      color: "border-accent/20 hover:border-accent",
    },
    {
      title: "Stage Performances",
      description: "High-energy solo or group performances for corporate events, festivals, and concerts.",
      icon: <Mic2 className="w-8 h-8 text-primary" />,
      color: "border-primary/20 hover:border-primary",
    },
    {
      title: "Music Video Choreography",
      description: "Creative direction and choreography for artists and music producers looking for viral movement.",
      icon: <Music className="w-8 h-8 text-accent" />,
      color: "border-accent/20 hover:border-accent",
    }
  ];

  return (
    <section id="services" className="py-24 px-6 glass relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-xl">
            <h3 className="text-accent font-headline text-lg font-bold tracking-widest uppercase">My Services</h3>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
              Elevate Your <span className="text-glow-purple text-primary">Experience</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm mb-2 text-sm leading-relaxed">
            From intimate ceremonies to massive global stages, I bring professionalism and artistic vision to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`bg-white/5 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 group ${service.color}`}
            >
              <CardHeader className="space-y-4">
                <div className="p-3 bg-white/5 w-fit rounded-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-white font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
