function FeaturedProjectFull() {
  return (
    <section className="archive-featured-full">
      <div className="archive-page archive-featured-page">
        {/* ----- Section Header ----- */}
        <div className="archive-featured-header">
          <span className="archive-meta">05 / FEATURED PROJECT</span>
          <span className="archive-meta archive-featured-header-right">
            SELECTED WORK
          </span>
        </div>

        {/* ----- Featured Project Layout ----- */}
        <div className="archive-featured-layout">
          <div className="archive-featured-visual">
            <img src="/archive/localsewa/desktop.webp" alt="LocalSewa website" />
          </div>

          <div className="archive-featured-info-panel">
            <div className="archive-featured-info-top">
              <span className="archive-featured-number">03</span>
              <span className="archive-meta">WEB APP</span>
            </div>

            <div className="archive-featured-info-main">
              <h2>LocalSewa</h2>
              <p>Local services, without the hassle.</p>
              <span className="archive-featured-description">
                A platform for discovering and requesting services from local
                providers.
              </span>
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
              href="https://localsewa.com/"
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

export default FeaturedProjectFull;
