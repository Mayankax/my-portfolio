import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-white"
        >
          Mayank<span className="text-white/30">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs text-white/50 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button
          asChild
          className="rounded-full bg-white px-5 text-sm text-black hover:bg-white/90"
        >
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </Button>
      </div>
    </nav>
  );
}