import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../styles/components/navbar.css";

const navigationItems = [
  { label: "WORK", to: "/#work" },
  { label: "COLLECTIONS", to: "/#collections" },
  { label: "ALL PROJECTS", to: "/projects" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

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
              <Link key={item.label} to={item.to} className="archive-navbar-link">
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
              <Link key={item.label} to={item.to} className="archive-navbar-mobile-link">
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
