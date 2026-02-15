import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <FadeIn className={`mb-16 ${className}`}>
      {label && (
        <p className="text-xs uppercase tracking-[0.15em] text-accent mb-4 font-sans">
          {label}
        </p>
      )}
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-foreground">
        {title}
      </h2>
    </FadeIn>
  );
}
