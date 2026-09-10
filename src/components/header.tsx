"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const HEADER_OFFSET = 100;
const ACTIVE_HYSTERESIS = 30;

export function Header() {
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeIdRef = useRef(activeId);

  // Mantiene el ref sincronizado con el estado más reciente,
  // sin que el efecto principal tenga que depender de activeId.
  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);

    const updateActiveSection = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;

      if (scrolledToBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const threshold =
          id === activeIdRef.current
            ? HEADER_OFFSET + ACTIVE_HYSTERESIS
            : HEADER_OFFSET;
        if (top <= threshold) {
          current = id;
        }
      }
      setActiveId(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []); // vacío a propósito: el ref evita el stale closure sin re-montar el efecto

  const linkClass = (id: string) =>
    `text-sm transition-colors ${
      activeId === id
        ? "text-primary underline underline-offset-4"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <a href="#home" className="font-mono font-bold text-sm">
          Jaime González
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={linkClass(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="gap-2 hidden sm:flex"
          >
            <a href="/cv-jaime-gonzalez.pdf" download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
          <ThemeToggle />

          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-border"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4 border-t border-border bg-background">
          {NAV_ITEMS.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setMobileOpen(false)}
              className={`py-3 border-b border-border last:border-0 ${linkClass(item.id)}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
