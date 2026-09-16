import { Link } from "react-router-dom";

import { projects } from "../../data/projects";

function ProjectArchive() {
  const projectCount = String(projects.length).padStart(2, "0");
  const archiveYear = projects[0]?.year ?? "";

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

        {/* ----- Column Labels ----- */}
        <div className="archive-project-index-labels">
          <span className="archive-meta">PROJECT</span>

          <span className="archive-meta">TYPE</span>

          <span className="archive-meta">YEAR</span>

          <span className="archive-meta">OPEN</span>
        </div>

        {/* ----- Project Rows ----- */}
        <div className="archive-project-index-list">
          {projects.map((project) => {
            const detailSlug = project.slug ?? project.id;

            const projectContent = (
              <>
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
                  <span>{project.placeholder ? "—" : "↗"}</span>
                </div>

                {/* ----- Hover Preview ----- */}
                <div className="archive-project-index-preview">
                  <img src={project.image} alt="" />
                </div>
              </>
            );

            if (project.placeholder) {
              return (
                <article
                  key={project.id}
                  className="archive-project-index-row archive-project-index-row--placeholder"
                >
                  {projectContent}
                </article>
              );
            }

            return (
              <Link
                key={project.id}
                to={`/project/${detailSlug}`}
                className="archive-project-index-row"
              >
                {projectContent}
              </Link>
            );
          })}
        </div>

        {/* ----- Footer ----- */}
        <div className="archive-project-index-footer">
          <span className="archive-meta">
            {projectCount} PROJECTS / {archiveYear}
          </span>

          <span className="archive-meta">MORE TO COME</span>
        </div>
      </div>
    </section>
  );
}

export default ProjectArchive;
