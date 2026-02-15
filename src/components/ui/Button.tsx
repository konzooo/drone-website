interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-8 py-3 text-sm font-sans font-medium uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent-hover",
    outline:
      "border border-foreground-secondary/30 text-foreground hover:border-accent hover:text-accent",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
}
