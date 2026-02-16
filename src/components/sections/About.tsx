"use client";

import FadeIn from "@/components/ui/FadeIn";
import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            {/* Portrait */}
            <div className="w-40 h-40 rounded-full bg-background-accent mx-auto mb-8 overflow-hidden">
              <img
                src="/images/Profile Image.PNG"
                alt="Profile"
                className="w-full h-full object-cover scale-125"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xs uppercase tracking-[0.15em] text-accent font-sans mb-6">
              {ABOUT.heading}
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-foreground leading-relaxed">
              {ABOUT.bio}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
