import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "genie-ai",
    title: "GenieAI",
    description:
      "An AI-powered full-stack chatbot built with MERN, Gemini API, and Clerk authentication with real-time streaming responses and persistent chat history.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini API",
      "Clerk",
    ],
    link: "https://genieaichat.vercel.app/",
    github: "https://github.com/Mayankax/GenieAI",
  },

  {
    id: "loan-dashboard",
    title: "Loan Picks Dashboard",
    description:
      "An AI-integrated loan discovery platform built with Next.js, Prisma, PostgreSQL, and Gemini AI featuring secure JWT authentication, advanced filtering, and AI-powered product-grounded recommendations.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Gemini AI",
      "Supabase",
    ],
    link: "https://loanadvisor.vercel.app/",
    github: "https://github.com/Mayankax/loan-picks-dashboard",
  },

  {
    id: "cinephiles",
    title: "Cinephiles",
    description:
      "A content-based movie recommendation system using Python, Pandas, and cosine similarity to recommend relevant movies based on genres, keywords, cast, and user preferences.",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "TMDb API",
      "MySQL",
    ],
    github: "https://github.com/Mayankax/Cinephiles",
  },

  {
    id: "topic-clustering",
    title: "Topic Clustering using Llama 2",
    description:
      "An NLP-based document analysis pipeline using BERTopic, UMAP, HDBSCAN, and Llama 2 to identify semantic clusters and generate human-readable topic labels from large-scale Reddit datasets.",
    tags: [
      "Python",
      "Llama 2",
      "BERTopic",
      "UMAP",
      "HDBSCAN",
      "NLP",
    ],
    github: "https://github.com/Mayankax/Topic-Modelling-Using-Llama2",
  },
];