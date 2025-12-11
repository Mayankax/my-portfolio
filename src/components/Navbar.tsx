import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

        <Link to="/" className="text-xl font-semibold">
          Mayank Bansal
        </Link>

        <div className="flex items-center gap-6 text-gray-700">
          <NavLink to="/" className="hover:text-black">Home</NavLink>
          <NavLink to="/projects" className="hover:text-black">Projects</NavLink>
          <NavLink to="/about" className="hover:text-black">About</NavLink>
          <NavLink to="/contact" className="hover:text-black">Contact</NavLink>

          <a 
            href="/resume.pdf"
            target="_blank"
          >
            <Button>Resume</Button>
          </a>
        </div>

      </div>
    </nav>
  );
}
