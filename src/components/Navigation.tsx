import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Y - Pioneering Technology Solutions" className="h-8 w-auto" />
          </Link>
      </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/it-services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link to="/cameras" className="text-muted-foreground hover:text-foreground transition-colors">
            Cameras
          </Link>
          <Link to="/get-started" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-muted-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-muted-foreground transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block h-0.5 w-6 bg-muted-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4 space-y-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/it-services"
            onClick={() => setMenuOpen(false)}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            to="/cameras"
            onClick={() => setMenuOpen(false)}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            Cameras
          </Link>
          <Link
            to="/get-started"
            onClick={() => setMenuOpen(false)}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            Cameras
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
