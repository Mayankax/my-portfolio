import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center gap-6 mt-20">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold leading-tight"
      >
        Hi, I'm <span className="text-blue-600">Mayank</span> 👋
        <br />
        I build fast, modern & intelligent apps.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-600 max-w-2xl"
      >
        Full-stack developer specializing in MERN, AI-powered applications,
        and scalable backend systems. Solved 600+ DSA problems and built
        production-ready projects like GenieAI & Loan Picks Dashboard.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 mt-4 justify-center"
      >
        <Button asChild>
          <a href="/projects">View Projects</a>
        </Button>

        <Button variant="outline" asChild>
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </Button>
      </motion.div>

    </section>
  );
}
