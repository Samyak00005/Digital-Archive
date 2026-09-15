import { Link } from "react-router-dom";

function CollectionQR() {
  return (
    <section className="archive-collection" id="collections">
      <div className="archive-page">
        <div className="archive-collection-header">
          <span className="archive-meta">06 / COLLECTIONS</span>

          <span className="archive-meta archive-collection-header-right">
            SMALLER WORK
          </span>
        </div>

        <div className="archive-collection-intro">
          <div className="archive-collection-intro-label">
            <span className="archive-meta">MINI PROJECT / 01</span>
          </div>

          <h2>
            Small things,
            <br />
            carefully made.
          </h2>
        </div>

        <div className="archive-collection-project">
          <Link
            to="/project/qr-studio"
            className="archive-collection-image"
            aria-label="View QR Studio project"
          >
            <img
              src="/archive/qr-studio/desktop.webp"
              alt="QR Studio website preview"
            />

            <div className="archive-collection-image-overlay" />

            <span className="archive-collection-image-label">
              VIEW PROJECT ↗
            </span>
          </Link>

          <div className="archive-collection-info">
            <div className="archive-collection-title">
              <span className="archive-meta">04 / UTILITY</span>

              <h3>QR Studio</h3>

              <p>
                A simple QR utility built to create, customize, and download QR
                codes.
              </p>
            </div>

            <div className="archive-collection-details">
              <div>
                <span className="archive-meta">TYPE</span>
                <p>Mini Project</p>
              </div>

              <div>
                <span className="archive-meta">YEAR</span>
                <p>2026</p>
              </div>
            </div>

            <Link
              to="/project/qr-studio"
              className="archive-collection-link"
            >
              <span>VIEW PROJECT</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="archive-collection-footer">
          <span className="archive-meta">COLLECTION / 01</span>

          <p>
            Small experiments
            <br />
            become part of the archive.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CollectionQR;
