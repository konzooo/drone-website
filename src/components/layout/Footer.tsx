import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-foreground-secondary/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground-secondary">
        <p>&copy; {new Date().getFullYear()} {SITE.name}</p>
        <p>{SITE.location}</p>
      </div>
    </footer>
  );
}
