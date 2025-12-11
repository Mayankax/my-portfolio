import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// --------------------------------------------------------
// 📌 CASE STUDY CONTENT FOR ALL PROJECTS
// (Same as previous file — included here completely)
// --------------------------------------------------------
const caseStudyContent: Record<
  string,
  {
    problem: string;
    approach: string;
    system: string;
    features: string;
    impact: string;
  }
> = {
  // 1. Loan Dashboard
  "loan-dashboard": {
    problem:
      "Users exploring financial products often struggle to compare loans across banks due to scattered data, inconsistent formats, and lack of personalized filtering. The challenge was to build a centralized dashboard that delivers real-time loan listings, intelligent product matching, and an intuitive UI with secure authentication.",
    approach:
      "I designed the platform as a modular, scalable full-stack system. I started with a clean data model using Prisma + Supabase and built a structured Next.js app with server actions, protected API routes, and React Query caching. I implemented a deterministic loan-matching engine and integrated Gemini AI for grounded product Q&A.",
    system:
      "The architecture follows a service-based design: Next.js App Router + shadcn UI for the frontend, Prisma ORM for type-safe database access, Supabase PostgreSQL for persistent storage, JWT tokens for session management, and React Query for client-side caching. The system includes: Authentication → API Layer → Matching Engine → Dashboard UI → AI Chat Drawer.",
    features:
      "• Secure JWT Authentication\n• Loan matching engine with explainable scoring\n• Smart filters (loan amount, interest rate, tenure, category, provider)\n• AI-powered Q&A drawer using Gemini API\n• Responsive dashboard UI with sorting, pagination, and empty states\n• Optimized Prisma queries + React Query caching",
    impact:
      "• Delivered a production-level FinTech dashboard\n• Achieved fast API response times with caching and indexing\n• Improved user experience with clean UI and intuitive filtering\n• Added AI-enhanced exploration for better decision-making\n• Demonstrated full-stack engineering: DB, API, auth, UI, and AI",
  },

  // ------------------------------------------------------
  // 2️⃣ GENIEAI CHATBOT
  // ------------------------------------------------------
  "genie-ai": {
    problem:
      "Most chatbots fail to provide personalized, persistent, and context-aware conversations. Users expect AI assistants to remember previous messages, deliver intelligent responses, and offer a smooth chat experience. The goal was to build a real-world AI chatbot with authentication, chat history, and context-driven AI replies.",
    approach:
      "I built GenieAI using the MERN stack with a modular backend handling authentication, AI prompt generation, and persistent chat management. The frontend delivers a clean chat interface with auto-scroll, message animations, and fast interactions. Gemini API powers intelligent real-time responses.",
    system:
      "Frontend (React): Message bubbles, typing indicators, smooth animations.\nBackend (Node + Express): Auth routes, /chat/send AI handler, JWT verification middleware.\nDatabase (MongoDB): Stores user-specific chat history.\nAI Layer (Gemini API): Builds contextual prompts and generates grounded responses.",
    features:
      "• JWT-based authentication system\n• Gemini API-driven, context-aware chat responses\n• Persistent chat history per user\n• Modern UI with auto-scroll & typing animations\n• Modular controllers for clean MERN architecture",
    impact:
      "• Built a production-ready AI chat system with persistence\n• Greatly improved conversation experience through memory and context\n• Showcases practical AI integration + full-stack engineering skills\n• Scalable foundation for future multi-model AI features",
  },

  // ------------------------------------------------------
  // 3️⃣ SOCIAL MEDIA APP (MERN)
  // ------------------------------------------------------
  "social-media": {
    problem:
      "Building a social platform requires handling user-generated content, secure authentication, real-time interactions, and efficient data fetching. The challenge was to create a full social media experience from scratch with profiles, posts, likes, comments, and a responsive UI.",
    approach:
      "I designed the platform using the MERN stack with a RESTful API architecture. The backend manages authentication, post CRUD operations, likes, and comment workflows. The frontend provides a clean responsive UI, infinite scrolling, and smooth user interactions.",
    system:
      "Frontend (React): Modern UI for feeds, post creation, comments, likes, and user profiles.\nBackend (Node + Express): Authentication with JWT, protected post routes, like/comment controllers.\nDatabase (MongoDB): Stores users, posts, comments, and interactions.\nSecurity Layer: Hashing passwords, validating tokens, role-based access.",
    features:
      "• Full authentication with JWT\n• Create/read/delete posts\n• Like & comment system with instant UI updates\n• User profiles with avatars and bios\n• Responsive UI inspired by modern social platforms\n• RESTful backend with modular routes",
    impact:
      "• Delivered a complete MERN social platform\n• Learned how to build scalable CRUD + interaction-heavy systems\n• Strengthened React UI skills with real-time updates\n• Demonstrated understanding of relational data flows (posts ↔ users ↔ comments)",
  },

  // ------------------------------------------------------
  // 4️⃣ TOPIC CLUSTERING — Llama 2 + BERTopic
  // ------------------------------------------------------
  "topic-clustering": {
    problem:
      "Large text datasets contain valuable insights, but manually categorizing topics is inefficient and inaccurate. The challenge was to automatically cluster thousands of global news articles into meaningful themes using modern NLP techniques.",
    approach:
      "I built an NLP pipeline that uses Llama 2 embeddings combined with BERTopic to perform unsupervised topic modeling. The system extracts embeddings, reduces dimensionality, clusters documents, and generates interpretable topic labels.",
    system:
      "Pipeline: Data preprocessing → Llama 2 embeddings → UMAP dimensionality reduction → HDBSCAN clustering → BERTopic topic labeling.\nVisualization: Topic distributions, top keywords, cluster graphs.\nEnvironment: Python, BERTopic, Transformers, Pandas, Matplotlib.",
    features:
      "• Fully automated topic modeling pipeline\n• Llama 2 embeddings for semantic-rich vectorization\n• BERTopic for clustering + topic label generation\n• Interactive analysis of cluster keywords\n• Ability to detect trends in global news datasets",
    impact:
      "• Produced high-quality, interpretable topic clusters\n• Demonstrated strong applied NLP + ML experience\n• Showcased ability to work with embeddings, clustering, and visualization\n• Built a scalable foundation for research or production-level analysis",
  },
};

// --------------------------------------------------------
// ⭐ SCROLL UTIL: Smooth scroll to section
// --------------------------------------------------------
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// --------------------------------------------------------
// ⭐ MAIN COMPONENT
// --------------------------------------------------------
export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [showTopBtn, setShowTopBtn] = useState(false);

  if (!project) return <h1 className="text-2xl">Project not found.</h1>;

  const content = caseStudyContent[project.id];

  // Show back-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --------------------------------------------------------
  // ⭐ TABLE OF CONTENTS SECTIONS
  // --------------------------------------------------------
  const sections = [
    { id: "problem", label: "The Problem" },
    { id: "approach", label: "Your Approach" },
    { id: "system", label: "System Architecture" },
    { id: "features", label: "Key Features" },
    { id: "impact", label: "Impact & Results" },
  ];

  return (
    <div className="relative flex gap-10 pb-24">

      {/* 📌 LEFT: Sticky Table of Contents */}
      <aside className="hidden md:block w-64 sticky top-28 h-fit">
        <div className="border rounded-xl p-5 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-3">On this page</h3>
          <ul className="space-y-2">
            {sections.map((sec) => (
              <li
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="cursor-pointer text-gray-600 hover:text-black transition"
              >
                {sec.label}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* 📌 RIGHT: MAIN CONTENT */}
      <div className="flex-1 space-y-12">

        {/* HEADER */}
        <section className="text-center mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold"
          >
            {project.title}
          </motion.h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            {project.description}
          </p>

          <div className="flex justify-center gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            {project.github && (
              <Button asChild>
                <a href={project.github} target="_blank">GitHub</a>
              </Button>
            )}

            {project.link && (
              <Button variant="outline" asChild>
                <a href={project.link} target="_blank">Live Demo</a>
              </Button>
            )}
          </div>
        </section>

        {/* IMAGE */}
        <section>
          <img
            src={project.image}
            className="rounded-xl shadow-md w-full max-h-[420px] object-cover border"
          />
        </section>

        {/* TIMELINE CONTENT */}
        <section className="space-y-16">

          <TimelineBlock id="problem" title="The Problem" text={content.problem} />
          <TimelineBlock id="approach" title="Your Approach" text={content.approach} />
          <TimelineBlock id="system" title="System Design & Architecture" text={content.system} />
          <TimelineBlock id="features" title="Key Features" text={content.features} />
          <TimelineBlock id="impact" title="Impact & Results" text={content.impact} />

        </section>
      </div>

      {/* ⭐ BACK TO TOP BUTTON */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          ↑
        </button>
      )}
    </div>
  );
}

// --------------------------------------------------------
// ⭐ TIMELINE COMPONENT
// --------------------------------------------------------
interface TBProps {
  id: string;
  title: string;
  text: string;
}

function TimelineBlock({ id, title, text }: TBProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative pl-10 border-l-2 border-gray-300"
    >
      <div className="absolute -left-2.5 top-1 w-4 h-4 rounded-full bg-blue-600"></div>

      <h3 className="text-2xl font-semibold whitespace-pre-line">{title}</h3>
      <p className="text-gray-600 mt-2 whitespace-pre-line">{text}</p>
    </motion.div>
  );
}
