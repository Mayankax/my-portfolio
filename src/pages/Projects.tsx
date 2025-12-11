import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <div className="flex flex-col gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
