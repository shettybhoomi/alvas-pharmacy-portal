
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-pharmacy-600">
              Alvas <span className="text-secondary-600">Pharmacy</span>
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-pharmacy-600 transition-colors">
            Home
          </Link>
          <Link to="/program" className="text-sm font-medium hover:text-pharmacy-600 transition-colors">
            Program
          </Link>
          <Link to="/curriculum" className="text-sm font-medium hover:text-pharmacy-600 transition-colors">
            Curriculum
          </Link>
          <Link to="/careers" className="text-sm font-medium hover:text-pharmacy-600 transition-colors">
            Careers
          </Link>
          <Button className="bg-pharmacy-600 hover:bg-pharmacy-700">Apply Now</Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/program" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Program
            </Link>
            <Link 
              to="/curriculum" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Curriculum
            </Link>
            <Link 
              to="/careers" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Button className="bg-pharmacy-600 hover:bg-pharmacy-700">Apply Now</Button>
          </div>
        </div>
      )}
    </header>
  );
}
