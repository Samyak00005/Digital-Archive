function Intro() {
  return (
    <section className="archive-intro" id="about">
      <div className="archive-page">
        <div className="archive-intro-grid">
          {/* ----- Section Label ----- */}
          <div className="archive-intro-label">
            <span className="archive-meta">02 / THE ARCHIVE</span>
          </div>

          {/* ----- Main Statement ----- */}
          <div className="archive-intro-statement">
            <h2>
              A collection of things
              <br />
              made on screens.
            </h2>
          </div>

          {/* ----- Supporting Copy ----- */}
          <div className="archive-intro-copy">
            <p>
              Websites, digital products, experiments & ideas — gathered in one
              place.
            </p>
          </div>

          {/* ----- Year / Continuation ----- */}
          <div className="archive-intro-year">
            <span className="archive-meta">2026 / ONGOING</span>

            <span className="archive-intro-arrow">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
