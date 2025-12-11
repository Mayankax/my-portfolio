import type { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 border flex gap-6"
    >
      {/* LEFT: IMAGE */}
      <div className="w-1/3">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full h-48 object-cover"
        />
      </div>

      {/* RIGHT: TEXT */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="text-gray-600 mt-2">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 rounded-full border text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-4">
          <Button asChild>
            <Link to={`/projects/${project.id}`}>View Case Study</Link>
          </Button>

          {project.github && (
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank">
                GitHub
              </a>
            </Button>
          )}

          {project.link && (
            <Button variant="outline" asChild>
              <a href={project.link} target="_blank">
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
