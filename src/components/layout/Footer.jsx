import { Link } from "react-router-dom";

import "../../styles/components/footer.css";

const footerLinks = [
  { label: "HOME", to: "/#home" },
  { label: "WORK", to: "/#work" },
  { label: "COLLECTIONS", to: "/#collections" },
  { label: "ALL PROJECTS", to: "/projects" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="archive-footer">
      <div className="archive-page archive-footer-inner">
        <div className="archive-footer-topline">
          <span className="archive-meta">THE DIGITAL ARCHIVE</span>
          <span className="archive-meta">2026 / ONGOING</span>
        </div>

        <div className="archive-footer-main">
          <div className="archive-footer-title-wrap">
            <p className="archive-footer-eyebrow">A COLLECTION OF DIGITAL WORK</p>
            <h2 className="archive-footer-title">
              The Digital
              <br />
              Archive
            </h2>
          </div>

          <div className="archive-footer-side">
            <p className="archive-footer-copy">
              Websites, digital products, experiments & ideas — gathered in one
              evolving archive.
            </p>

            <nav className="archive-footer-nav" aria-label="Footer navigation">
              {footerLinks.map((item) => (
                <Link key={item.label} to={item.to} className="archive-footer-link">
                  <span>{item.label}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="archive-footer-bottom">
          <span>THE DIGITAL ARCHIVE / 2026</span>

          <button type="button" onClick={scrollToTop} className="archive-footer-top">
            <span>BACK TO TOP</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
