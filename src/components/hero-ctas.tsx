import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
export function HeroCTAs() {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      <Button asChild size="lg" className="gap-2">
        <a href="#projects">
          View Projects <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
      <Button asChild size="lg" variant="outline" className="gap-2">
        <a href="/cv-jaime-gonzalez.pdf" download>
          <Download className="h-4 w-4" />
          Download CV
        </a>
      </Button>
    </div>
  );
}
