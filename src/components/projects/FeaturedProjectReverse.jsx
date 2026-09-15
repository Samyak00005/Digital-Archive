function FeaturedProjectReverse() {
  return (
    <section className="archive-featured archive-featured--reverse">
      <div className="archive-page">
        <div className="archive-featured-header">
          <span className="archive-meta">04 / FEATURED PROJECT</span>

          <span className="archive-meta archive-featured-header-right">
            SELECTED WORK
          </span>
        </div>

        <div className="archive-featured-reverse-grid">
          {/* Project Information */}
          <div className="archive-featured-reverse-info">
            <div className="archive-featured-number">
              <span>02</span>
            </div>

            <div className="archive-featured-reverse-title">
              <span className="archive-meta">WEBSITE</span>

              <h2>Heywalls</h2>

              <p>
                A wallpaper platform created to discover, explore, and live with
                better digital imagery.
              </p>
            </div>

            <div className="archive-featured-reverse-details">
              <div>
                <span className="archive-meta">TYPE</span>

                <p>Website</p>
              </div>

              <div>
                <span className="archive-meta">YEAR</span>

                <p>2026</p>
              </div>
            </div>

            <a href="#" className="archive-featured-link">
              <span>VIEW PROJECT</span>

              <span className="archive-featured-link-arrow">↗</span>
            </a>
          </div>

          {/* Project Image */}
          <div className="archive-featured-reverse-image">
            <img src="/archive/heywalls/desktop.webp" alt="Heywalls website" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectReverse;
