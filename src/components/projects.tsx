import { ExternalLink, Folder } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { GithubOriginal } from "devicons-react";

type ProjectDemo = { type: "api-only" } | { type: "screenshot"; src: string };

interface Project {
  name: string;
  problem: string;
  decision: string;
  stack: string[];
  demo: ProjectDemo;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    name: "Carga+",
    problem:
      "Gym tracking apps rarely model how real training actually works — cycling between multiple programs, tracking planned vs. actual sets, and preserving history when a routine changes.",
    decision:
      "Designed a 3-state Program lifecycle (ACTIVE / AVAILABLE / ARCHIVED) with transactional state transitions, and enforced cross-entity ownership checks (a WorkoutSet can only belong to a WorkoutSession the authenticated user actually owns) at the service layer.",
    stack: ["NestJS", "PostgreSQL", "Prisma", "Docker", "Railway"],
    demo: { type: "api-only" },
    githubUrl: "https://github.com/JaimeGonz/CargaPlus",
    liveUrl: "https://cargaplus-production.up.railway.app/api",
  },
  {
    name: "Notifications API",
    problem:
      "Multi-channel notification systems (email, SMS, push) tend to grow into if/else chains that get harder to extend safely every time a new channel is added.",
    decision:
      "Implemented the Strategy pattern: each channel is an independent class behind a common interface, selected by a factory — adding a new channel means writing one new class, zero changes to existing code (Open/Closed Principle). Backed by a full Jest test suite covering service logic and channel-selection edge cases.",
    stack: ["NestJS", "PostgreSQL", "Prisma", "Jest", "Docker"],
    demo: { type: "api-only" },
    githubUrl: "https://github.com/JaimeGonz/notifications-api",
    liveUrl: "https://notifications-api-production-7bbf.up.railway.app/api",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-1">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted">
          <Folder className="h-4 w-4" />
        </div>
        <h3 className="font-mono font-bold tracking-wide">PROJECTS</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Backend systems I designed and shipped end to end.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="p-4 bg-card border-border flex flex-col"
          >
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-lg font-bold">{project.name}</h4>
              {project.demo.type === "api-only" && (
                <Badge variant="outline" className="text-xs font-normal">
                  API Only
                </Badge>
              )}
            </div>

            <p className="text-sm text-muted-foreground ">{project.problem}</p>

            <p className="text-sm">{project.decision}</p>

            <div className="flex flex-wrap gap-2 mb-1">
              {project.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="rounded-full px-3 py-1 text-xs font-normal bg-secondary/40"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-end mt-auto">
              <Button asChild size="sm" variant="outline" className="gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOriginal size={16} />
                  Code
                </a>
              </Button>

              {project.liveUrl && (
                <Button asChild size="sm" className="gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live API (Swagger)
                  </a>
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
