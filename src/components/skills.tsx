import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

const skillCategories = [
  { label: "Languages", skills: ["TypeScript", "JavaScript"] },
  { label: "Frameworks", skills: ["Vue", "React", "Next.js", "NestJS"] },
  { label: "State & Data", skills: ["Zustand", "TanStack Query", "REST APIs"] },
  { label: "Backend", skills: ["Node.js", "Express"] },
  { label: "Databases", skills: ["MySQL", "PostgreSQL", "Prisma", "Firebase"] },
  { label: "UI & Styling", skills: ["Tailwind", "shadcn/ui"] },
  {
    label: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Railway", "Vercel", "Supabase"],
  },
  { label: "Tools", skills: ["Git"] },
];

export function Skills() {
  return (
    <section className="px-6 max-w-7xl mx-auto">
      <Card className="p-6 md:p-8 bg-card border-border">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted">
            <Code2 className="h-4 w-4" />
          </div>
          <h3 className="font-mono font-bold tracking-wide">SKILLS</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Tools and technologies I reach for, day to day.
        </p>

        <div className="space-y-5">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="rounded-full px-3 py-1 text-sm font-normal bg-secondary/40"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
