import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../styles/components/navbar.css";

const navigationItems = [
  { label: "WORK", to: "/#work", key: "work" },
  { label: "COLLECTIONS", to: "/#collections", key: "collections" },
  { label: "ALL PROJECTS", to: "/projects", key: "projects" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (location.pathname === "/projects" || location.pathname.startsWith("/project/")) {
      setActiveSection("projects");
      return undefined;
    }

    if (location.pathname !== "/") {
      setActiveSection(null);
      return undefined;
    }

    const updateActiveSection = () => {
      const featuredSections = Array.from(
        document.querySelectorAll(".archive-featured-project"),
      );
      const collections = document.getElementById("collections");

      const navbarHeight =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--navbar-height",
          ),
        ) || 68;
      const marker = window.scrollY + navbarHeight + window.innerHeight * 0.24;

      if (collections) {
        const top = collections.offsetTop;
        const bottom = top + collections.offsetHeight;
        if (marker >= top && marker < bottom) {
          setActiveSection("collections");
          return;
        }
      }

      if (featuredSections.length) {
        const first = featuredSections[0];
        const last = featuredSections[featuredSections.length - 1];
        const top = first.offsetTop;
        const bottom = last.offsetTop + last.offsetHeight;
        if (marker >= top && marker < bottom) {
          setActiveSection("work");
          return;
        }
      }

      setActiveSection(null);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  const isActive = (item) => activeSection === item.key;

  return (
    <header className="archive-navbar archive-navbar--dark">
      <div className="archive-page">
        <nav className="archive-navbar-inner" aria-label="Primary navigation">
          <Link
            to="/"
            className="archive-navbar-brand"
            aria-label="The Digital Archive — Home"
          >
            THE DIGITAL ARCHIVE
          </Link>

          <div className="archive-navbar-links">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`archive-navbar-link${isActive(item) ? " is-active" : ""}`}
                aria-current={isActive(item) ? (item.key === "projects" ? "page" : "location") : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="archive-navbar-meta">
            <span className="archive-navbar-year">2026</span>

            <button
              type="button"
              className={`archive-navbar-menu${menuOpen ? " is-open" : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="archive-mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>

          <div
            id="archive-mobile-navigation"
            className={`archive-navbar-mobile${menuOpen ? " is-open" : ""}`}
            aria-hidden={!menuOpen}
          >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`archive-navbar-mobile-link${isActive(item) ? " is-active" : ""}`}
                aria-current={isActive(item) ? (item.key === "projects" ? "page" : "location") : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
