import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground space-y-20 md:space-y-10">
      <div className="flex justify-end p-4 mb-0">
        <ThemeToggle />
      </div>
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
