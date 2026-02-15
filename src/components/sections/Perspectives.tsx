"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { PERSPECTIVES } from "@/lib/constants";

function PerspectiveCard({
  item,
  index,
}: {
  item: (typeof PERSPECTIVES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
        !isEven ? "md:[direction:rtl]" : ""
      }`}
    >
      {/* Image */}
      <FadeIn className="md:[direction:ltr]">
        <div className="aspect-[3/2] rounded-lg overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            style={{ y: imageY }}
            className="w-[100%] h-[120%] object-cover"
          />
        </div>
      </FadeIn>

      {/* Text */}
      <FadeIn delay={0.15} className="md:[direction:ltr]">
        <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">
          {item.title}
        </h3>
        <p className="text-foreground-secondary text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
      </FadeIn>
    </motion.div>
  );
}

export default function Perspectives() {
  return (
    <section id="perspective" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.15em] text-accent font-sans mb-4">
            Perspective
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-foreground">
            Where aerial shots add perspective
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-20 md:gap-28">
          {PERSPECTIVES.map((item, i) => (
            <PerspectiveCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
