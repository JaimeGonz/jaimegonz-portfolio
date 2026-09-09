import { ChevronDown } from "lucide-react";
import { HeroCTAs } from "./hero-ctas";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 max-w-7xl mx-auto"
    >
      <div>
        <p className="text-xs font-mono text-muted-foreground mt-5 mb-0">
          Full-Stack Developer with 5+ years of experience.
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
          Building software that ships, works, and doesn&apos;t fall apart in
          production.
        </h1>

        <HeroCTAs />
      </div>

      <div className="rounded-lg border bg-card font-mono text-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-muted-foreground">about.ts</span>
        </div>
        <pre className="px-5 py-10 leading-relaxed text-foreground/90 whitespace-pre-wrap">
          {`const developer = {
  name: "Jaime González",
  location: "Colima, Mexico",
  stack: ["React", "Next.js", "NestJS"],
  focus: "shipping real products",
};`}
        </pre>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs font-mono text-muted-foreground animate-bounce motion-reduce:animate-none"
      >
        SCROLL
        <ChevronDown className="h-4 w-4" />
      </a>
    </section>
  );
}
