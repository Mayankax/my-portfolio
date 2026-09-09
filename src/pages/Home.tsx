import type { ComponentType, ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiGit,
  SiGithub,
  SiVercel,
  SiSupabase,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";

import {
  FaServer,
  FaDatabase,
  FaCode,
  FaNetworkWired,
  FaLock,
  FaWindows,
} from "react-icons/fa";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

type SkillItem = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};

type SkillGroupData = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  items: SkillItem[];
};

const skills: SkillGroupData[] = [
  {
    title: "Languages",
    description: "Core programming languages",
    icon: Code2,
    items: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Core CS",
    description: "Computer science fundamentals",
    icon: FaCode,
    items: [
      { name: "DSA", icon: FaCode },
      { name: "OOP", icon: FaCode },
      { name: "OS", icon: FaWindows },
      { name: "DBMS", icon: FaDatabase },
      { name: "Networks", icon: FaNetworkWired },
    ],
  },
  {
    title: "Backend",
    description: "APIs and server-side development",
    icon: FaServer,
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: FaServer },
      { name: "JWT", icon: FaLock },
      { name: "API Integration", icon: FaServer },
    ],
  },
  {
    title: "Frontend",
    description: "Modern web interfaces",
    icon: SiReact,
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML/CSS", icon: SiHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Database",
    description: "Data storage and ORM",
    icon: FaDatabase,
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Tools",
    description: "Development and deployment",
    icon: SiGit,
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: FaCode },
      { name: "Vercel", icon: SiVercel },
      { name: "Supabase", icon: SiSupabase },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

export default function Home() {
  const { scrollY } = useScroll();

  const glowOneY = useTransform(
    scrollY,
    [0, 3500],
    [0, 650]
  );

  const glowTwoY = useTransform(
    scrollY,
    [0, 3500],
    [0, -450]
  );

  const glowThreeY = useTransform(
    scrollY,
    [0, 3500],
    [0, 350]
  );

  const gridY = useTransform(
    scrollY,
    [0, 3500],
    [0, -180]
  );

  return (
    <>
      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden"
      >
        {/* Scroll based black / gray background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            style={{ y: glowOneY }}
            className="absolute left-[8%] top-[5%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[140px]"
          />

          <motion.div
            style={{ y: glowTwoY }}
            className="absolute right-[8%] top-[25%] h-[450px] w-[450px] rounded-full bg-white/[0.018] blur-[130px]"
          />

          <motion.div
            style={{ y: glowThreeY }}
            className="absolute bottom-[-150px] left-[35%] h-[400px] w-[400px] rounded-full bg-white/[0.015] blur-[130px]"
          />

          <motion.div
            style={{ y: gridY }}
            className="absolute inset-0 opacity-[0.025]"
          >
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />
          </motion.div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.04] px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium text-emerald-300/80">
                Available for opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-white/40"
            >
              Hi, I&apos;m Mayank Bansal
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl"
            >
              Building software
              <br />
              <span className="bg-gradient-to-r from-white via-white/80 to-violet-300/80 bg-clip-text text-transparent">
                that solves problems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
            >
              Recent B.Tech CSE graduate focused on DSA, full-stack
              development, and building scalable software systems that turn
              ideas into useful products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg shadow-white/[0.08] transition hover:scale-[1.02] hover:bg-white/90"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white/70 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                Get in touch
                <Mail className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex items-center gap-5"
            >
              <a
                href="https://github.com/Mayankax"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-white/40 transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/mayankbansal818"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-white/40 transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="https://leetcode.com/u/Mayankax/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-white/35 transition hover:text-yellow-300"
              >
                LeetCode
              </a>

              <a
                href="https://codeforces.com/profile/mayankbansal18"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-white/35 transition hover:text-blue-300"
              >
                Codeforces
              </a>
            </motion.div>
          </div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/25 transition hover:text-white/60"
          >
            Scroll to explore
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative border-t border-white/[0.08]"
      >
        <div className="absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-white/[0.018] blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionLabel>About</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                I enjoy turning complex problems into simple solutions.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-white/45 sm:text-base">
              <p>
                I&apos;m a recent B.Tech Computer Science graduate with strong
                foundations in data structures, algorithms, object-oriented
                programming, and full-stack development.
              </p>

              <p>
                I like building practical web applications with modern
                technologies and focusing on clean architecture, efficient
                APIs, reliable authentication, and good user experiences.
              </p>

              <p>
                Outside of projects, I spend a lot of time solving DSA
                problems and improving my problem-solving skills through
                competitive programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/[0.08] bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/[0.08] sm:grid-cols-4">
          <Stat value="800+" label="DSA Problems" />
          <Stat value="1700+" label="LeetCode" />
          <Stat value="1300+" label="Codeforces" />
          <Stat value="8.8" label="B.Tech CGPA" />
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative overflow-hidden"
      >
        <div className="absolute left-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-white/[0.015] blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionLabel>Skills</SectionLabel>

          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Tools I use to build things.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              A mix of programming fundamentals, modern web technologies,
              databases, and development tools.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => (
              <SkillGroup
                key={group.title}
                title={group.title}
                description={group.description}
                icon={group.icon}
                items={group.items}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative border-t border-white/[0.08]"
      >
        <div className="absolute right-[-200px] top-1/4 h-[500px] w-[500px] rounded-full bg-white/[0.018] blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionLabel>Selected Work</SectionLabel>

          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Projects built with purpose.
            </h2>

            <p className="max-w-sm text-sm leading-6 text-white/35">
              A collection of full-stack, AI, machine learning, and
              recommendation projects.
            </p>
          </div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section
        id="achievements"
        className="border-t border-white/[0.08]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionLabel>Achievements</SectionLabel>

          <div className="grid gap-5 sm:grid-cols-2">
            <AchievementCard
              value="800+"
              title="DSA Problems"
              description="Solved across competitive programming platforms with a strong focus on algorithms and problem solving."
              index={0}
            />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04] sm:p-9"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/[0.025] blur-[70px]" />

              <div className="relative flex items-end gap-8">
                <div>
                  <p className="text-4xl font-semibold tracking-tight">
                    1700+
                  </p>

                  <p className="mt-2 text-xs text-white/30">
                    LeetCode
                  </p>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div>
                  <p className="text-4xl font-semibold tracking-tight">
                    1300+
                  </p>

                  <p className="mt-2 text-xs text-white/30">
                    Codeforces
                  </p>
                </div>
              </div>

              <h3 className="relative mt-7 text-lg font-medium">
                Competitive Programming
              </h3>

              <p className="relative mt-2 text-sm leading-6 text-white/40">
                Consistent problem solving across competitive programming
                platforms.
              </p>
            </motion.div>

            <AchievementCard
              value="2"
              title="National Hackathons"
              description="Participated in Smart India Hackathon and Innovate by Microsoft."
              index={2}
            />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-9"
            >
              <Sparkles className="h-5 w-5 text-cyan-300/60" />

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/25">
                Certifications
              </p>

              <h3 className="mt-5 text-lg font-medium">
                DeepLearning.AI
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Improving Deep Neural Networks
              </p>

              <div className="my-5 h-px bg-white/[0.08]" />

              <h3 className="text-lg font-medium">
                University of Illinois Urbana-Champaign
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Object-Oriented Data Structures in C++
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="border-t border-white/[0.08]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionLabel>Education</SectionLabel>

          <div className="max-w-3xl">
            <EducationItem
              year="2022 — 2026"
              title="B.Tech in Computer Science & Engineering"
              institution="Bennett University, Greater Noida"
              result="CGPA 8.8"
            />

            <EducationItem
              year="2021 — 2022"
              title="Senior Secondary"
              institution="CBSE"
              result="75%"
            />

            <EducationItem
              year="2019 — 2020"
              title="Secondary"
              institution="CBSE"
              result="89%"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative border-t border-white/[0.08]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 shadow-2xl shadow-black/20 sm:p-12 lg:p-16">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/[0.025] blur-[110px]" />

            <div className="relative max-w-3xl">
              <SectionLabel>Contact</SectionLabel>

              <h2 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
                Let&apos;s build something useful.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                Have an opportunity, project idea, or just want to connect?
                Feel free to reach out.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02] hover:bg-white/90"
                >
                  View Resume
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="mailto:mayankbansal857@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white/65 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  Email me
                </a>

                <a
                  href="https://github.com/Mayankax"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white/65 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/mayankbansal818"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white/65 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.025)",
      }}
      className="px-5 py-8 transition-colors sm:px-8 sm:py-10"
    >
      <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {value}
      </p>

      <p className="mt-2 text-xs text-white/30 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}

function SectionLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
        <Code2 className="h-3.5 w-3.5 text-violet-300/60" />
      </span>

      <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
        {children}
      </span>
    </div>
  );
}

function SkillGroup({
  title,
  description,
  icon: GroupIcon,
  items,
  index,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  items: SkillItem[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045] sm:p-7"
    >
      <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-white/[0.025] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300/70 transition-all duration-300 group-hover:border-violet-300/20 group-hover:bg-violet-400/[0.06] group-hover:text-violet-200">
          <GroupIcon className="h-4 w-4" />
        </div>

        <span className="text-xs text-white/15">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-6">
        <h3 className="text-base font-medium text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs text-white/25">
          {description}
        </p>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <span
              key={item.name}
              className="group/skill inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/45 transition-all duration-300 hover:border-violet-300/20 hover:bg-violet-400/[0.05] hover:text-white/85"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-white/35 transition-colors group-hover/skill:text-violet-200/80" />

              {item.name}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}

function AchievementCard({
  value,
  title,
  description,
  index,
}: {
  value: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:p-9"
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/[0.025] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <p className="relative text-4xl font-semibold tracking-tight">
        {value}
      </p>

      <h3 className="relative mt-5 text-lg font-medium">
        {title}
      </h3>

      <p className="relative mt-2 text-sm leading-6 text-white/40">
        {description}
      </p>
    </motion.div>
  );
}

function EducationItem({
  year,
  title,
  institution,
  result,
}: {
  year: string;
  title: string;
  institution: string;
  result: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="grid gap-4 border-b border-white/[0.08] py-8 transition-transform sm:grid-cols-[140px_1fr_auto] sm:items-start"
    >
      <p className="text-xs text-white/30">
        {year}
      </p>

      <div>
        <h3 className="text-base font-medium text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-white/35">
          {institution}
        </p>
      </div>

      <p className="text-sm text-white/45 sm:text-right">
        {result}
      </p>
    </motion.div>
  );
}