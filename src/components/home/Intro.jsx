import useRevealOnView from "../../hooks/useRevealOnView";
import "../../styles/components/intro.css";

function Intro() {
  const { ref, motionClassName } = useRevealOnView();

  return (
    <section
      ref={ref}
      className={`archive-intro archive-motion-section ${motionClassName}`}
      id="about"
    >
      <div className="archive-page">
        <div className="archive-intro-grid">
          <div
            className="archive-intro-label archive-motion-item"
            data-motion="soft"
            style={{ "--motion-delay": "0ms" }}
          >
            <span className="archive-meta">02 / THE ARCHIVE</span>
          </div>

          <div
            className="archive-intro-statement archive-motion-item"
            style={{ "--motion-delay": "80ms" }}
          >
            <h2>
              A collection of things
              <br />
              made on screens.
            </h2>
          </div>

          <div
            className="archive-intro-copy archive-motion-item"
            data-motion="soft"
            style={{ "--motion-delay": "150ms" }}
          >
            <p>
              Websites, digital products, experiments & ideas — gathered in one
              place.
            </p>
          </div>

          <div
            className="archive-intro-year archive-motion-item"
            data-motion="soft"
            style={{ "--motion-delay": "220ms" }}
          >
            <span className="archive-meta">2026 / ONGOING</span>
            <span className="archive-intro-arrow">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
