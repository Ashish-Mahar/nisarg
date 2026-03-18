
"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <main className="min-h-screen">
      <Navbar isMuted={isMuted} onToggleMute={toggleMute} />
      <Hero isMuted={isMuted} />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  );
}
