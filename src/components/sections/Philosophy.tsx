"use client";

import FadeIn from "@/components/ui/FadeIn";
import { PHILOSOPHY } from "@/lib/constants";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-24 md:py-32 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={PHILOSOPHY.image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.15em] text-accent font-sans mb-6">
            {PHILOSOPHY.heading}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed">
            {PHILOSOPHY.text}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
