import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#f9f9fb] text-gray-900">
      <Navbar />
      <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
