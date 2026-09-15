import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="archive-navbar archive-navbar--dark">
      <div className="archive-page">
        <nav className="archive-navbar-inner">
          <Link
            to="/"
            className="archive-navbar-brand"
            aria-label="The Digital Archive — Home"
          >
            THE DIGITAL ARCHIVE
          </Link>

          <div className="archive-navbar-links">
            <Link to="/#work" className="archive-navbar-link">
              WORK
            </Link>

            <Link to="/#collections" className="archive-navbar-link">
              COLLECTIONS
            </Link>

            <Link to="/projects" className="archive-navbar-link">
              ARCHIVE
            </Link>
          </div>

          <div className="archive-navbar-meta">
            <span className="archive-navbar-year">2026</span>

            <button
              type="button"
              className="archive-navbar-menu"
              aria-label="Open menu"
            >
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
