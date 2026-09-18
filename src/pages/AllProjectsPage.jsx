import { Link } from "react-router-dom";

import { projects } from "../data/projects";
import useRevealOnView from "../hooks/useRevealOnView";
import "../styles/components/all-projects.css";

function AllProjectsPage() {
  const { ref, motionClassName } = useRevealOnView({ threshold: 0.06 });
  const projectCount = String(projects.length).padStart(2, "0");
  const latestYear = projects[0]?.year ?? "";

  return (
    <main>
      <section
        ref={ref}
        className={`archive-all-projects archive-motion-section ${motionClassName}`}
        id="all-projects"
      >
        <div className="archive-page">
          <div
            className="archive-all-projects-header archive-motion-item"
            data-motion="soft"
          >
            <span className="archive-meta">07 / ALL PROJECTS</span>

            <span className="archive-meta archive-all-projects-header-right">
              COMPLETE INDEX
            </span>
          </div>

          <div
            className="archive-all-projects-intro archive-motion-item"
            style={{ "--motion-delay": "70ms" }}
          >
            <h1>
              All
              <br />
              Projects
            </h1>

            <p>
              A growing index of websites, digital products, experiments, and
              things built along the way.
            </p>
          </div>

          <div
            className="archive-all-projects-labels archive-motion-item"
            data-motion="soft"
            style={{ "--motion-delay": "130ms" }}
          >
            <span className="archive-meta">PROJECT</span>
            <span className="archive-meta">TYPE</span>
            <span className="archive-meta">YEAR</span>
            <span className="archive-meta">OPEN</span>
          </div>

          <div className="archive-all-projects-list">
            {projects.map((project, index) => {
              const detailSlug = project.slug ?? project.id;
              const rowStyle = {
                "--motion-delay": `${170 + Math.min(index, 8) * 55}ms`,
              };

              const projectContent = (
                <>
                  <div className="archive-all-projects-project">
                    <span className="archive-all-projects-number">
                      {project.number}
                    </span>

                    <div className="archive-all-projects-title">
                      <h2>{project.title}</h2>
                      <span className="archive-all-projects-category">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="archive-all-projects-type">
                    <span>{project.type}</span>
                  </div>

                  <div className="archive-all-projects-year">
                    <span>{project.year}</span>
                  </div>

                  <div className="archive-all-projects-open">
                    <span>{project.placeholder ? "—" : "↗"}</span>
                  </div>

                  {project.image && (
                    <div className="archive-all-projects-preview">
                      <img src={project.image} alt="" />
                    </div>
                  )}
                </>
              );

              if (project.placeholder) {
                return (
                  <article
                    key={project.id}
                    className="archive-all-projects-row archive-all-projects-row--placeholder archive-motion-item"
                    data-motion="soft"
                    style={rowStyle}
                  >
                    {projectContent}
                  </article>
                );
              }

              return (
                <Link
                  key={project.id}
                  to={`/project/${detailSlug}`}
                  className="archive-all-projects-row archive-motion-item"
                  data-motion="soft"
                  style={rowStyle}
                >
                  {projectContent}
                </Link>
              );
            })}
          </div>

          <div
            className="archive-all-projects-footer archive-motion-item"
            data-motion="soft"
            style={{ "--motion-delay": "520ms" }}
          >
            <span className="archive-meta">
              {projectCount} PROJECTS / {latestYear}
            </span>
            <span className="archive-meta">MORE TO COME</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AllProjectsPage;
