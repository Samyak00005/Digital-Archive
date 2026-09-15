function CollectionQR() {
  return (
    <section className="archive-collection" id="collections">
      <div className="archive-page">
        <div className="archive-collection-header">
          <span className="archive-meta">06 / COLLECTIONS</span>

          <span className="archive-meta archive-collection-header-right">
            SMALLER WORKS
          </span>
        </div>

        <div className="archive-collection-intro">
          <div className="archive-collection-intro-label">
            <span className="archive-meta">01 / MINI PROJECT</span>
          </div>

          <div className="archive-collection-heading">
            <h2>
              Small things,
              <br />
              carefully made.
            </h2>
          </div>
        </div>

        <article className="archive-collection-card">
          <div className="archive-collection-image">
            <img
              src="/archive/qr-studio/desktop.webp"
              alt="QR Studio website"
            />
          </div>

          <div className="archive-collection-info">
            <div className="archive-collection-number">
              <span>01</span>
            </div>

            <div className="archive-collection-title">
              <span className="archive-meta">UTILITY / WEB APP</span>

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

            <a href="#" className="archive-collection-link">
              <span>VIEW PROJECT</span>
              <span className="archive-collection-link-arrow">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CollectionQR;
