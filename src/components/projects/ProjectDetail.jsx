import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.id === "qr-studio");

  if (!project) {
    return (
      <main className="archive-project-not-found">
        <div className="archive-page">
          <span className="archive-meta">404 / PROJECT NOT FOUND</span>

          <h1>Nothing here.</h1>

          <Link to="/">← BACK TO ARCHIVE</Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`archive-project-detail archive-project-detail--${project.theme}`}
    >
      {/* ----- PROJECT HERO ----- */}

      <section className="archive-project-detail-hero">
        <div className="archive-page">
          {/* Top navigation */}

          <div className="archive-project-detail-top">
            <Link to="/" className="archive-project-detail-back">
              ← BACK TO ARCHIVE
            </Link>

            <span className="archive-meta">
              {project.number} / {project.type.toUpperCase()}
            </span>
          </div>

          {/* Two-column project introduction */}

          <div className="archive-project-detail-intro">
            {/* LEFT */}

            <div className="archive-project-detail-copy">
              <span className="archive-meta">
                {project.category.toUpperCase()}
              </span>

              <h1>{project.title}</h1>

              <p>{project.description}</p>
            </div>

            {/* RIGHT */}

            <div className="archive-project-detail-visual">
              <img
                src={project.image}
                alt={`${project.title} website preview`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----- PROJECT OVERVIEW ----- */}

      <section className="archive-project-detail-overview">
        <div className="archive-page">
          <div className="archive-project-detail-overview-grid">
            <span className="archive-meta">PROJECT OVERVIEW</span>

            <div className="archive-project-detail-overview-copy">
              <p>{project.description}</p>
            </div>

            <div className="archive-project-detail-meta">
              <div>
                <span className="archive-meta">TYPE</span>
                <p>{project.type}</p>
              </div>

              <div>
                <span className="archive-meta">YEAR</span>
                <p>{project.year}</p>
              </div>

              <div>
                <span className="archive-meta">ROLE</span>
                <p>{project.role}</p>
              </div>

              <div>
                <span className="archive-meta">STACK</span>
                <p>{project.stack}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- LIVE PROJECT ----- */}

      <section className="archive-project-detail-actions">
        <div className="archive-page">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="archive-project-detail-live"
          >
            <span>VISIT PROJECT</span>
            <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
