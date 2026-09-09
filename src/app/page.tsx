import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground space-y-20 md:space-y-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
