import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "loan-dashboard",
    title: "Loan Picks Dashboard",
    description:
      "A full-stack dashboard built using Next.js, Prisma, Supabase, and AI-powered recommendations. Includes JWT auth, filtering, matching engine, and polished UI.",
    image: "/loan.png",
    tags: ["Next.js", "TypeScript", "Prisma", "AI", "Supabase"],
    link: "https://loanadvisor.vercel.app",
    github: "https://github.com/Mayankax",
  },
  {
    id: "genie-ai",
    title: "GenieAI – Chatbot",
    description:
      "An AI-powered chatbot built using MERN stack and Gemini API for intelligent real-time responses with chat history & authentication.",
    image: "/aichat.png",
    tags: ["MERN", "Gemini API", "AI", "MongoDB"],
    link: "https://genieaichat.vercel.app",
    github: "https://github.com/Mayankax",
  },
  {
    id: "social-media",
    title: "Social Media App",
    description:
      "A full-featured MERN social media platform with profiles, posts, comments, likes, and responsive UI.",
    image: "/lama.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Mayankax",
  },
  {
    id: "topic-clustering",
    title: "Topic Clustering using Llama 2 & BERTopic",
    description:
      "An NLP pipeline that performs unsupervised topic modeling on large-scale text datasets using BERTopic and Llama 2 embeddings. Designed to cluster global news articles and extract meaningful insights.",
    image: "/cluster.png",
    tags: ["Python", "Llama-2", "BERTopic", "NLP", "Machine Learning"],
    github: "https://github.com/Mayankax",
  }
];
