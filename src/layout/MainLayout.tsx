import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
      <div className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black">      <Navbar />

      <main className="pt-24">
        {children}
      </main>

      <Footer />
    </div>
  );
}