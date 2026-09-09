import type { Project } from "@/types/project";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
      }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="p-7 sm:p-9 lg:p-10">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium tracking-[0.2em] text-white/20">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-8 bg-white/10" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Project
            </span>
          </div>

          <ArrowUpRight className="h-5 w-5 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
        </div>

        <div className="mt-12">
          <h3 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/40 sm:text-base">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-white/45 transition-colors group-hover:border-white/15 group-hover:text-white/55"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-7">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/50 transition hover:border-white/25 hover:text-white"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          )}

          {!project.link && !project.github && (
            <span className="text-xs text-white/25">
              Project details coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}