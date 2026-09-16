function FeaturedProject() {
  return (
    <section className="archive-featured" id="work">
      <div className="archive-page">
        {/* ----- Section Header ----- */}
        <div className="archive-featured-header">
          <span className="archive-meta">03 / FEATURED PROJECT</span>

          <span className="archive-meta archive-featured-header-right">
            SELECTED WORK
          </span>
        </div>

        {/* ----- Large Project Image ----- */}
        <div className="archive-featured-image">
          <img
            src="/archive/retrotoonz/desktop.webp"
            alt="RetroToonz website"
          />

          <div className="archive-featured-image-overlay" />
        </div>

        {/* ----- Project Information ----- */}
        <div className="archive-featured-info">
          {/* ----- Number ----- */}
          <div className="archive-featured-number">
            <span>01</span>
          </div>

          {/* ----- Title ----- */}
          <div className="archive-featured-title">
            <h2>RetroToonz</h2>

            <span className="archive-meta">Streaming Platform</span>
          </div>

          {/* ----- Description ----- */}
          <div className="archive-featured-description">
            <p>
              A cartoon streaming platform built around a nostalgic viewing
              experience.
            </p>
          </div>

          {/* ----- Metadata ----- */}
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

          {/* ----- CTA ----- */}
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
    </section>
  );
}

export default FeaturedProject;
