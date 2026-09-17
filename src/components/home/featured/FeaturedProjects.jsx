import { projects } from "../../../data/projects";
import "../../../styles/components/featured.css";

const featuredLayout = [
  {
    id: "retrotoonz",
    sectionNumber: "03",
    orientation: "image-left",
    variant: "retrotoonz",
  },
  {
    id: "heywalls",
    sectionNumber: "04",
    orientation: "image-right",
    variant: "heywalls",
  },
  {
    id: "localsewa",
    sectionNumber: "05",
    orientation: "image-left",
    variant: "localsewa",
    tagline: "Local services, without the hassle.",
  },
];

function FeaturedProjectSection({ config, index }) {
  const project = projects.find((item) => item.id === config.id);

  if (!project) {
    return null;
  }

  const image = (
    <div className="archive-featured-project-image">
      <img src={project.image} alt={`${project.title} website`} />
    </div>
  );

  const information = (
    <div className="archive-featured-project-info">
      <div className="archive-featured-project-number" aria-hidden="true">
        {project.number}
      </div>

      <div className="archive-featured-project-copy">
        <span className="archive-meta archive-featured-project-kicker">
          {project.type}
        </span>

        <h2>{project.title}</h2>

        {config.tagline && (
          <p className="archive-featured-project-tagline">{config.tagline}</p>
        )}

        <p className="archive-featured-project-description">
          {project.description}
        </p>

        <div className="archive-featured-project-details">
          <div>
            <span className="archive-meta">TYPE</span>
            <p>{project.type}</p>
          </div>

          <div>
            <span className="archive-meta">YEAR</span>
            <p>{project.year}</p>
          </div>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="archive-featured-project-link"
        >
          <span>VIEW PROJECT</span>
          <span className="archive-featured-project-link-arrow">↗</span>
        </a>
      </div>
    </div>
  );

  return (
    <section
      id={index === 0 ? "work" : undefined}
      className={`archive-featured-project archive-featured-project--${config.orientation} archive-featured-project--${config.variant}`}
    >
      <div className="archive-page">
        <div className="archive-featured-project-header">
          <span className="archive-meta">
            {config.sectionNumber} / FEATURED PROJECT
          </span>

          <span className="archive-meta archive-featured-project-header-right">
            SELECTED WORK
          </span>
        </div>

        <div className="archive-featured-project-grid">
          {config.orientation === "image-left" ? (
            <>
              {image}
              {information}
            </>
          ) : (
            <>
              {information}
              {image}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return featuredLayout.map((config, index) => (
    <FeaturedProjectSection key={config.id} config={config} index={index} />
  ));
}

export default FeaturedProjects;
