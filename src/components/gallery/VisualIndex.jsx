import { Link } from "react-router-dom";

import { projects } from "../../data/projects";

function VisualIndex() {
  return (
    <section className="archive-visual-index" id="experiments">
      <div className="archive-page">
        {/* Header */}
        <div className="archive-visual-index-header">
          <span className="archive-meta">08 / VISUAL INDEX</span>

          <span className="archive-meta archive-visual-index-header-right">
            A VISUAL RECORD
          </span>
        </div>

        {/* Intro */}
        <div className="archive-visual-index-intro">
          <div className="archive-visual-index-label">
            <span className="archive-meta">THE WORK, IN FRAGMENTS</span>
          </div>

          <h2>
            Seen from
            <br />
            another angle.
          </h2>
        </div>

        {/* Visual gallery */}
        <div className="archive-visual-index-grid">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={`archive-visual-item archive-visual-item--${index + 1}`}
            >
              <div className="archive-visual-image">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                />

                <div className="archive-visual-overlay" />
              </div>

              <div className="archive-visual-caption">
                <span className="archive-meta">{project.number}</span>

                <div>
                  <h3>{project.title}</h3>
                  <span>{project.category}</span>
                </div>

                <span className="archive-visual-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Closing statement */}
        <div className="archive-visual-index-footer">
          <span className="archive-meta">END OF INDEX</span>

          <p>
            Four projects.
            <br />
            One growing archive.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisualIndex;
