import { Link } from "react-router-dom";

import { projects } from "../../data/projects";

function ProjectArchive() {
  return (
    <section className="archive-project-index" id="archive">
      <div className="archive-page">
        {/* ----- Header ----- */}
        <div className="archive-project-index-header">
          <span className="archive-meta">07 / PROJECT ARCHIVE</span>

          <span className="archive-meta archive-project-index-header-right">
            COMPLETE INDEX
          </span>
        </div>

        {/* ----- Intro ----- */}
        <div className="archive-project-index-intro">
          <h2>
            Project
            <br />
            Archive
          </h2>

          <p>
            A growing index of websites, digital products, experiments, and
            things built along the way.
          </p>
        </div>

        {/* ----- Column labels ----- */}
        <div className="archive-project-index-labels">
          <span className="archive-meta">PROJECT</span>

          <span className="archive-meta">TYPE</span>

          <span className="archive-meta">YEAR</span>

          <span className="archive-meta">OPEN</span>
        </div>

        {/* ----- Project rows ----- */}
        <div className="archive-project-index-list">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="archive-project-index-row"
            >
              <div className="archive-project-index-project">
                <span className="archive-project-index-number">
                  {project.number}
                </span>

                <div className="archive-project-index-title">
                  <h3>{project.title}</h3>

                  <span className="archive-project-index-category">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="archive-project-index-type">
                <span>{project.type}</span>
              </div>

              <div className="archive-project-index-year">
                <span>{project.year}</span>
              </div>

              <div className="archive-project-index-open">
                <span>↗</span>
              </div>

              {/* ----- Hover preview ----- */}
              <div className="archive-project-index-preview">
                <img src={project.image} alt="" />
              </div>
            </Link>
          ))}
        </div>

        {/* ----- Footer ----- */}
        <div className="archive-project-index-footer">
          <span className="archive-meta">04 PROJECTS / 2026</span>

          <span className="archive-meta">MORE TO COME</span>
        </div>
      </div>
    </section>
  );
}

export default ProjectArchive;
