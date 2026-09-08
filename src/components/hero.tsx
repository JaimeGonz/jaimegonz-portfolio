import { HeroCTAs } from "./hero-ctas";

export function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-20 max-w-7xl mx-auto">
      <div>
        <p className="text-sm font-mono text-muted-foreground mb-4">
          Full-Stack Developer with 5+ years of experience - React, Next.js,
          NestJs.
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
    </section>
  );
}
