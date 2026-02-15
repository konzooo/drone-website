"use client";

import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { CONTACT, SITE } from "@/lib/constants";

export default function Contact() {
  const mailtoLink = `mailto:${SITE.email}?subject=${encodeURIComponent(CONTACT.mailtoSubject)}`;

  return (
    <section id="contact" className="py-24 md:py-32 px-6 border-t border-foreground-secondary/10">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-foreground leading-tight">
            {CONTACT.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-foreground-secondary text-base max-w-lg mx-auto">
            {CONTACT.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10">
            <Button href={mailtoLink}>{CONTACT.ctaText}</Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mt-16 text-foreground-secondary/50 text-xs uppercase tracking-[0.15em]">
            {SITE.location}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
