import { GithubOriginal, LinkedinOriginal } from "devicons-react";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[75dvh] flex flex-col items-center justify-center px-6 max-w-7xl mx-auto py-20 text-center"
    >
      <p className="text-xs font-mono font-semibold tracking-widest text-muted-foreground uppercase mb-4">
        Get in touch
      </p>
      <h2 className="text-3xl md:text-5xl font-black mb-4">
        Got an idea? Let&apos;s talk.
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Open to remote full-stack roles. I usually reply within a day.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="mailto:valdoc7@gmail.com"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/jaimegonz01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
        >
          <LinkedinOriginal size={20} />
        </a>
        <a
          href="https://github.com/JaimeGonz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
        >
          <GithubOriginal size={20} className="dark:invert" />
        </a>
      </div>
    </section>
  );
}
