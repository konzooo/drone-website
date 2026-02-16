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
          <div className="mt-16 space-y-3">
            <div>
              <p className="text-foreground font-light text-lg">{CONTACT.name}</p>
            </div>
            <div className="space-y-2 text-foreground-secondary text-xs">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>{CONTACT.email}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img src="/images/whatsapp logo.png" alt="WhatsApp" className="w-4 h-4" />
                <span>{CONTACT.whatsapp}</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <p className="mt-12 text-foreground-secondary/50 text-xs uppercase tracking-[0.15em]">
            {SITE.location}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
