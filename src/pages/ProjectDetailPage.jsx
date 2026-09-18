import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import useRevealOnView from "../hooks/useRevealOnView";
import "../styles/components/project-detail.css";

function ProjectDetailPage() {
  const { slug } = useParams();
  const introMotion = useRevealOnView({ threshold: 0.06 });
  const overviewMotion = useRevealOnView({ threshold: 0.1 });
  const galleryMotion = useRevealOnView({ threshold: 0.08 });

  const publishedProjects = projects.filter((item) => !item.placeholder);
  const project = publishedProjects.find(
    (item) => item.id === slug || item.slug === slug,
  );

  if (!project) {
    return (
      <main className="project-detail project-detail--not-found">
        <section className="project-detail-not-found">
          <div className="archive-page project-detail-not-found-inner">
            <span className="archive-meta">404 / PROJECT NOT FOUND</span>
            <h1>Nothing here.</h1>
            <Link to="/projects" className="project-detail-back-link">
              <span aria-hidden="true">←</span>
              <span>BACK TO ALL PROJECTS</span>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;
  const hasProjectUrl = project.url && project.url !== "#";

  return (
    <main className="project-detail">
      <section
        ref={introMotion.ref}
        className={`project-detail-intro archive-motion-section ${introMotion.motionClassName}`}
      >
        <div className="archive-page project-detail-intro-inner">
          <div
            className="project-detail-topline archive-motion-item"
            data-motion="soft"
          >
            <Link to="/projects" className="project-detail-back-link">
              <span aria-hidden="true">←</span>
              <span>BACK TO ALL PROJECTS</span>
            </Link>

            <span className="archive-meta">
              {project.number} / {project.type.toUpperCase()}
            </span>
          </div>

          <div className="project-detail-intro-grid">
            <div
              className="project-detail-intro-copy archive-motion-item"
              data-motion="left"
              style={{ "--motion-delay": "80ms" }}
            >
              <span className="archive-meta project-detail-category">
                {project.category}
              </span>

              <h1>{project.title}</h1>

              <p>{project.description}</p>
            </div>

            <figure
              className="project-detail-preview archive-motion-item archive-motion-image"
              data-motion="right"
              style={{ "--motion-delay": "140ms" }}
            >
              <img src={project.image} alt={`${project.title} project preview`} />
            </figure>
          </div>
        </div>
      </section>

      <section
        ref={overviewMotion.ref}
        className={`project-detail-overview archive-motion-section ${overviewMotion.motionClassName}`}
      >
        <div className="archive-page project-detail-overview-inner">
          <div className="project-detail-overview-grid">
            <div
              className="project-detail-overview-copy archive-motion-item"
              data-motion="left"
            >
              <span className="archive-meta">PROJECT OVERVIEW</span>

              <p className="project-detail-overview-statement">
                {project.description}
              </p>
            </div>

            <dl
              className="project-detail-meta-grid archive-motion-item"
              data-motion="right"
              style={{ "--motion-delay": "100ms" }}
            >
              <div>
                <dt className="archive-meta">TYPE</dt>
                <dd>{project.type}</dd>
              </div>

              <div>
                <dt className="archive-meta">YEAR</dt>
                <dd>{project.year}</dd>
              </div>

              <div>
                <dt className="archive-meta">ROLE</dt>
                <dd>{project.role}</dd>
              </div>

              <div>
                <dt className="archive-meta">STACK</dt>
                <dd>{project.stack}</dd>
              </div>
            </dl>

            {hasProjectUrl && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="project-detail-overview-visit archive-motion-item"
                data-motion="soft"
                style={{ "--motion-delay": "180ms" }}
              >
                <span>View project</span>
                <span className="project-detail-overview-visit-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            )}
          </div>
        </div>
      </section>

      {hasGallery && (
        <section
          ref={galleryMotion.ref}
          className={`project-detail-gallery archive-motion-section ${galleryMotion.motionClassName}`}
        >
          <div className="archive-page project-detail-gallery-inner">
            <header
              className="project-detail-gallery-header archive-motion-item"
              data-motion="soft"
            >
              <span className="archive-meta">SELECTED VIEWS</span>
              <span className="archive-meta">
                {String(project.gallery.length).padStart(2, "0")} IMAGES
              </span>
            </header>

            <div className="project-detail-gallery-grid">
              {project.gallery.map((image, index) => (
                <figure
                  key={`${project.id}-gallery-${index}`}
                  className="archive-motion-item archive-motion-image"
                  data-motion="soft"
                  style={{ "--motion-delay": `${70 + index * 80}ms` }}
                >
                  <img src={image} alt={`${project.title} view ${index + 1}`} />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default ProjectDetailPage;
