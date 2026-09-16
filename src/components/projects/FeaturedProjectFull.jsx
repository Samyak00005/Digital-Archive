function FeaturedProjectFull() {
  return (
    <section className="archive-featured-full">
      <div className="archive-page">
        {/* ----- Header ----- */}
        <div className="archive-featured-full-header">
          <span className="archive-meta">05 / FEATURED PROJECT</span>

          <span className="archive-meta archive-featured-full-header-right">
            SELECTED WORK
          </span>
        </div>

        {/* ----- Intro ----- */}
        <div className="archive-featured-full-intro">
          <div className="archive-featured-full-number">
            <span>03</span>
          </div>

          <div className="archive-featured-full-heading">
            <span className="archive-meta">WEB APP</span>

            <h2>LocalSewa</h2>

            <p>Local services, without the hassle.</p>
          </div>
        </div>

        {/* ----- Large Image ----- */}
        <div className="archive-featured-full-image">
          <img src="/archive/localsewa/desktop.webp" alt="LocalSewa website" />
        </div>

        {/* ----- Footer Information ----- */}
        <div className="archive-featured-full-footer">
          <div className="archive-featured-full-description">
            <p>
              A platform for discovering and requesting services from local
              providers.
            </p>
          </div>

          <div className="archive-featured-full-meta">
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
            className="archive-featured-full-link"
          >
            <span>VIEW PROJECT</span>

            <span className="archive-featured-link-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectFull;
