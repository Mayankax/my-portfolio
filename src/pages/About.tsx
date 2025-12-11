import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="space-y-16 pb-20">

      {/* HEADER */}
      <section className="text-center mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          About Me
        </motion.h1>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          I'm a final-year B.Tech CSE student with strong skills in full-stack development, 
          backend engineering, and AI-powered applications. I’ve solved 600+ DSA problems 
          and built production-quality projects including a Loan Dashboard, AI Chatbot, 
          social platform, and an NLP topic-clustering pipeline.
        </p>
      </section>

      {/* SKILLS GRID */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Skill badge="C++ (600+ problems)" />
          <Skill badge="JavaScript / TypeScript" />
          <Skill badge="React.js" />
          <Skill badge="Node.js" />
          <Skill badge="Express.js" />
          <Skill badge="MongoDB" />
          <Skill badge="MySQL / Prisma" />
          <Skill badge="Python" />
          <Skill badge="REST APIs" />
          <Skill badge="Tailwind CSS" />
          <Skill badge="AI / Gemini API" />
          <Skill badge="NLP / BERTopic / Llama 2" />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Achievements</h2>

        <ul className="space-y-3 text-gray-700">
          <li>• LeetCode Rating: 1587</li>
          <li>• Codeforces Rating: 1161</li>
          <li>• Participated in Smart India Hackathon (SIH)</li>
          <li>• Participated in Microsoft Innovate Hackathon</li>
          <li>• Completed DeepLearning.AI: Improving Deep Neural Networks</li>
          <li>• Completed UIUC: Object-Oriented Data Structures in C++</li>
        </ul>
      </section>

      {/* TIMELINE */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Education Timeline</h2>

        <div className="space-y-10">
          <TimelineItem
            year="2022 – 2026"
            title="B.Tech CSE, Bennett University"
            description="CGPA 9.22 — focused on DSA, Backend, and AI development."
          />
          <TimelineItem
            year="2021 – 2022"
            title="Senior Secondary (12th), CBSE"
            description="Scored 75%"
          />
          <TimelineItem
            year="2019 – 2020"
            title="Secondary (10th), CBSE"
            description="Scored 90%"
          />
        </div>
      </section>
    </div>
  );
}

/* --- Small components --- */

function Skill({ badge }: { badge: string }) {
  return (
    <Badge
      variant="secondary"
      className="px-4 py-2 text-sm flex justify-center shadow-sm"
    >
      {badge}
    </Badge>
  );
}

function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative pl-10 border-l-2 border-gray-300"
    >
      <div className="absolute -left-3 top-1 w-4 h-4 rounded-full bg-blue-600" />
      <h3 className="text-xl font-semibold">{year}</h3>
      <p className="text-lg font-medium">{title}</p>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
