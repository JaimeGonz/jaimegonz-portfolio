import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Blocks, Webhook, Code2 } from "lucide-react";
import {
  TypescriptOriginal,
  JavascriptOriginal,
  VuejsOriginal,
  ReactOriginal,
  NextjsOriginal,
  NestjsOriginal,
  NodejsOriginal,
  ExpressOriginal,
  MysqlOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
  FirebaseOriginal,
  TailwindcssOriginal,
  AmazonwebservicesOriginalWordmark,
  DockerOriginal,
  RailwayOriginal,
  SupabaseOriginal,
  GitOriginal,
} from "devicons-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "TypeScript", icon: <TypescriptOriginal size={16} /> },
      { name: "JavaScript", icon: <JavascriptOriginal size={16} /> },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "React", icon: <ReactOriginal size={16} /> },
      { name: "Next.js", icon: <NextjsOriginal size={16} /> },
      { name: "NestJS", icon: <NestjsOriginal size={16} /> },
      { name: "Vue", icon: <VuejsOriginal size={16} /> },
    ],
  },
  {
    label: "State & Data",
    skills: [
      { name: "Zustand", icon: <Code2 size={16} /> }, // confirmar si Devicon lo tiene, si no, este fallback aplica
      { name: "TanStack Query", icon: <RefreshCw size={16} /> },
      { name: "REST APIs", icon: <Webhook size={16} /> },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <NodejsOriginal size={16} /> },
      { name: "Express", icon: <ExpressOriginal size={16} /> },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MySQL", icon: <MysqlOriginal size={16} /> },
      { name: "PostgreSQL", icon: <PostgresqlOriginal size={16} /> },
      { name: "Prisma", icon: <PrismaOriginal size={16} /> },
      { name: "Firebase", icon: <FirebaseOriginal size={16} /> },
    ],
  },
  {
    label: "UI & Styling",
    skills: [
      { name: "Tailwind", icon: <TailwindcssOriginal size={16} /> },
      { name: "shadcn/ui", icon: <Blocks size={16} /> },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <AmazonwebservicesOriginalWordmark size={16} /> },
      { name: "Docker", icon: <DockerOriginal size={16} /> },
      { name: "Railway", icon: <RailwayOriginal size={16} /> },
      { name: "Vercel", icon: <Code2 size={16} /> }, // confirmar si Devicon lo tiene
      { name: "Supabase", icon: <SupabaseOriginal size={16} /> },
    ],
  },
  {
    label: "Tools",
    skills: [{ name: "Git", icon: <GitOriginal size={16} /> }],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-1">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted">
          <Code2 className="h-4 w-4" />
        </div>
        <h3 className="font-mono font-bold tracking-wide">SKILLS</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Tools and technologies I reach for, day to day.
      </p>
      <Card className="p-6 bg-card border-border">
        <div className="columns-1 md:columns-2 gap-x-12">
          {skillCategories.map((category) => (
            <div key={category.label} className="break-inside-avoid mb-5">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="rounded-full px-3 py-1 text-sm font-normal bg-secondary/40 gap-1.5"
                  >
                    {skill.icon}
                    {skill.name}
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
