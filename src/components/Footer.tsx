import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-white">
            Mayank Bansal<span className="text-white/30">.</span>
          </p>

          <p className="mt-1 text-xs text-white/30">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Mayankax"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-white/35 transition hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/mayankbansal818"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-white/35 transition hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="mailto:mayankbansal857@gmail.com"
            aria-label="Email"
            className="text-white/35 transition hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}