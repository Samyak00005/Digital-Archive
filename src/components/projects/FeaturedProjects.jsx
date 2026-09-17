function FeaturedProject() {
  return (
    <section className="archive-featured archive-featured--image-left" id="work">
      <div className="archive-page archive-featured-page">
        {/* ----- Section Header ----- */}
        <div className="archive-featured-header">
          <span className="archive-meta">03 / FEATURED PROJECT</span>
          <span className="archive-meta archive-featured-header-right">
            SELECTED WORK
          </span>
        </div>

        {/* ----- Featured Project Layout ----- */}
        <div className="archive-featured-layout">
          <div className="archive-featured-visual">
            <img src="/archive/retrotoonz/desktop.webp" alt="RetroToonz website" />
            <div className="archive-featured-image-overlay" />
          </div>

          <div className="archive-featured-info-panel">
            <div className="archive-featured-info-top">
              <span className="archive-featured-number">01</span>
              <span className="archive-meta">STREAMING PLATFORM</span>
            </div>

            <div className="archive-featured-info-main">
              <h2>RetroToonz</h2>
              <p>
                A cartoon streaming platform built around a nostalgic viewing
                experience.
              </p>
            </div>

            <div className="archive-featured-meta">
              <div>
                <span className="archive-meta">TYPE</span>
                <p>Web App</p>
              </div>
              <div>
                <span className="archive-meta">YEAR</span>
                <p>2026</p>
              </div>
            </div>

            <a
              href="https://www.retrotoonz.in"
              target="_blank"
              rel="noreferrer"
              className="archive-featured-link"
            >
              <span>VIEW PROJECT</span>
              <span className="archive-featured-link-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
