import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-8">
      <ThemeToggle />
      <h1 className="mt-6 text-3xl font-semibold">Portfolio en construcción</h1>
    </main>
  );
}
