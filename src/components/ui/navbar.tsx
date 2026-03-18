
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Volume2, VolumeX, Menu, X } from "lucide-react";

interface NavbarProps {
  isMuted?: boolean;
  onToggleMute?: () => void;
}

export function Navbar({ isMuted = true, onToggleMute }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="font-headline text-2xl font-bold tracking-tighter text-white">
          NISARG <span className="text-accent text-glow-cyan">SINDHE</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onToggleMute}
            className="p-2 rounded-full border border-white/10 hover:border-accent/50 transition-all group"
            title={isMuted ? "Unmute Video" : "Mute Video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white/70 group-hover:text-accent" />
            ) : (
              <Volume2 className="w-5 h-5 text-accent animate-pulse" />
            )}
          </button>
        </div>

        {/* Mobile Toggle & Sound Button */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={onToggleMute}
            className="p-2 rounded-full border border-white/10 bg-white/5 transition-all"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white/70" />
            ) : (
              <Volume2 className="w-5 h-5 text-accent animate-pulse" />
            )}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 border-t border-white/10 animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-headline font-medium text-white/90 hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
