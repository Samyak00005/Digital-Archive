import { Link } from "react-router-dom";

import { projects } from "../../data/projects";
import useRevealOnView from "../../hooks/useRevealOnView";
import "../../styles/components/collections.css";

function CollectionCard({ project, index }) {
  const content = (
    <>
      <div className="archive-collection-card-preview archive-motion-image">
        {project.placeholder ? (
          <div className="archive-collection-card-placeholder-art" aria-hidden="true">
            <span>{project.number}</span>
            <span>IN PROGRESS</span>
          </div>
        ) : (
          <img src={project.image} alt={`${project.title} project preview`} />
        )}

        <span className="archive-collection-card-badge">
          {project.placeholder ? "COMING SOON" : "VIEW ↗"}
        </span>
      </div>

      <div className="archive-collection-card-copy">
        <div className="archive-collection-card-meta">
          <span className="archive-meta">
            {project.number} / {project.type.toUpperCase()}
          </span>
          <span className="archive-meta">{project.year}</span>
        </div>

        <div className="archive-collection-card-heading">
          <h3>{project.title}</h3>
          <span className="archive-collection-card-arrow" aria-hidden="true">
            {project.placeholder ? "—" : "↗"}
          </span>
        </div>

        <p>{project.description}</p>
      </div>
    </>
  );

  const sharedClassName = "archive-collection-card archive-motion-item";
  const style = { "--motion-delay": `${80 + index * 80}ms` };

  if (project.slug && !project.placeholder) {
    return (
      <Link
        to={`/project/${project.slug}`}
        className={sharedClassName}
        data-motion="soft"
        style={style}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      className={`${sharedClassName} archive-collection-card--placeholder`}
      data-motion="soft"
      style={style}
    >
      {content}
    </article>
  );
}

function Collections() {
  const { ref, motionClassName } = useRevealOnView({ threshold: 0.1 });
  const visibleCollections = projects
    .filter((project) => project.collection)
    .slice(0, 3);

  return (
    <section
      ref={ref}
      id="collections"
      className={`archive-collections archive-motion-section ${motionClassName}`}
    >
      <div className="archive-page">
        <div className="archive-collections-layout">
          <header
            className="archive-collections-intro archive-motion-item"
            data-motion="left"
          >
            <span className="archive-meta">06 / COLLECTIONS</span>

            <h2>
              Small things,
              <br />
              carefully made.
            </h2>

            <div className="archive-collections-intro-copy">
              <span className="archive-meta">SMALLER WORK</span>
              <p>
                Mini projects, tools, and experiments that don't need a full
                chapter of their own.
              </p>
            </div>
          </header>

          <div className="archive-collections-list">
            {visibleCollections.map((project, index) => (
              <CollectionCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        <footer
          className="archive-collections-footer archive-motion-item"
          data-motion="soft"
          style={{ "--motion-delay": "320ms" }}
        >
          <span className="archive-meta">
            COLLECTION / {String(visibleCollections.length).padStart(2, "0")}
          </span>
          <span>More small experiments will join the archive.</span>
        </footer>
      </div>
    </section>
  );
}

export default Collections;
