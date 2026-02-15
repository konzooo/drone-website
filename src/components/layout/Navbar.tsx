"use client";

import { useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const scrolled = useScrollPosition(50);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-foreground-secondary/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo / Text Mark */}
          <a
            href="#"
            className="font-serif text-lg md:text-xl text-foreground tracking-[0.1em] font-light"
          >
            {SITE.name}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[0.15em] text-foreground-secondary hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-foreground" />
            <span className="block w-6 h-px bg-foreground" />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
