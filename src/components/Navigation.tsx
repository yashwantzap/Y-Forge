import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const sidebarCategories = [
  {
    id: "video-surveillance",
    label: "Video Surveillance",
    items: [
      { label: "Panoramic Surveillance Solution", to: "/panoramic-surveillance" },
      { label: "Smart Crowd Management Solution", to: "/smart-crowd-management" },
      { label: "Smart Remote Management Solution", to: "/smart-remote-management" },
    ],
  },
  {
    id: "Solar-Surveillance",
    label: "Solar Surveillance",
    items: [
      { label: "Solar Surveillance Solution", to: "/Solar-power-camera" },
      { label: "Solar Traffic Solution", to: "/Solar-Traffic" },
    ],
  },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cctvOpen, setCctvOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(sidebarCategories[0].id);

  const dropdownRefDesktop = useRef<HTMLDivElement>(null);
  const dropdownRefMobile = useRef<HTMLDivElement>(null);

  const category = sidebarCategories.find((cat) => cat.id === selectedCategory);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cctvOpen) {
        const desktopContains = dropdownRefDesktop.current?.contains(event.target as Node);
        const mobileContains = dropdownRefMobile.current?.contains(event.target as Node);
        const buttonClicked = (event.target as HTMLElement).closest('[aria-haspopup="true"]');

        if (!desktopContains && !mobileContains && !buttonClicked) {
          setCctvOpen(false);
        }
      }
    }

    if (cctvOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cctvOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Y - Pioneering Technology Solutions" className="h-8 w-auto" />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/it-services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <div
            className="relative text-muted-foreground cursor-pointer select-none"
            onClick={() => setCctvOpen((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={cctvOpen}
          >
            CCTV - Solutions
            <div
              ref={dropdownRefDesktop}
              className={`absolute top-full right-0 bg-background border border-border rounded-md shadow-lg mt-2 w-[600px] p-4 flex z-50
                transform transition-opacity transition-transform duration-300 ease-in-out ${
                  cctvOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="w-40 border-r border-border pr-4 flex flex-col space-y-2">
                {sidebarCategories.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedCategory(id)}
                    className={`text-left px-2 py-1 rounded ${
                      id === selectedCategory
                        ? "bg-primary text-background font-semibold text-black"
                        : "hover:bg-background-200"
                    }`}
                    type="button"
                  >
                    {label}
                  </button>
                ))}
              </nav>
              <section className="flex-1 pl-6 overflow-auto max-h-[400px]">
                <h4 className="mb-4 font-semibold text-lg text-black">{category?.label}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {category?.items.map(({ label, to }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        onClick={() => setCctvOpen(false)}
                        className="hover:text-primary transition-colors cursor-pointer"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/cameras"
                  onClick={() => setCctvOpen(false)}
                  className="mt-4 inline-block text-primary font-semibold hover:underline cursor-pointer"
                >
                  Know More
                </Link>
              </section>
            </div>
          </div>
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
          <span
            className={`block h-0.5 w-6 bg-muted-foreground transition-transform ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-muted-foreground transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-muted-foreground transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 max-h-[80vh] bg-background/95 backdrop-blur-md border-t border-border p-6 space-y-6 overflow-auto transition-opacity transition-transform duration-300 ease-in-out z-50 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
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
        <div
          className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer select-none"
          onClick={() => setCctvOpen((prev) => !prev)}
          aria-expanded={cctvOpen}
        >
          CCTV - Solutions
        </div>
        <div
          ref={dropdownRefMobile}
          className={`pl-6 space-y-3 border-l border-border mt-2 transition-opacity transition-transform duration-300 ease-in-out w-full max-h-[60vh] overflow-auto ${
            cctvOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav>
            <div className="font-semibold mb-2">Categories</div>
            <div className="flex space-x-2 mb-2">
              {sidebarCategories.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedCategory(id)}
                  className={`px-3 py-2 rounded text-sm font-semibold ${
                    selectedCategory === id
                      ? "bg-primary text-background"
                      : "bg-background-200 hover:bg-background-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>
          <nav>
            <ul className="list-disc list-inside text-sm">
              {category?.items.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="hover:text-primary transition-colors select-none"
                    onClick={() => {
    setMenuOpen(false);
    setCctvOpen(false);
  }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
  to="/cameras"
  className="mt-4 inline-block text-primary font-semibold hover:underline cursor-pointer select-none"
  onClick={() => {
    setMenuOpen(false);
    setCctvOpen(false);
  }}
>
  Know More
</Link>
          </nav>
        </div>
        <Link
          to="/get-started"
          onClick={() => setMenuOpen(false)}
          className="block text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
