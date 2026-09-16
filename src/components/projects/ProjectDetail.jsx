import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";

function ProjectDetail() {
  const { slug } = useParams();

  const projectIndex = projects.findIndex(
    (item) => item.id === slug || item.slug === slug
  );

  const project = projectIndex >= 0 ? projects[projectIndex] : null;

  if (!project) {
    return (
      <main className="min-h-screen bg-[var(--archive-black)] text-[var(--archive-ivory)]">
        <div className="archive-page flex min-h-screen flex-col justify-center">
          <span className="archive-meta">404 / PROJECT NOT FOUND</span>

          <h1 className="mt-6 max-w-[700px] font-[var(--font-display)] text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.05em]">
            Nothing here.
          </h1>

          <Link
            to="/projects"
            className="mt-10 inline-flex w-fit items-center gap-3 font-[var(--font-sans)] text-[12px] font-semibold tracking-[0.08em] transition-opacity hover:opacity-60"
          >
            <span>←</span>
            <span>BACK TO ARCHIVE</span>
          </Link>
        </div>
      </main>
    );
  }

  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : null;

  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const detailPath = (item) => `/project/${item.slug ?? item.id}`;

  const themeClasses = {
    dark: "bg-[var(--archive-black)] text-[var(--archive-ivory)]",
    green: "bg-[var(--archive-deep-green)] text-[var(--archive-ivory)]",
    light: "bg-[var(--archive-ivory)] text-[var(--archive-black)]",
  };

  const mutedTextClasses = {
    dark: "text-[rgba(243,240,231,0.65)]",
    green: "text-[rgba(243,240,231,0.7)]",
    light: "text-[#66635b]",
  };

  const borderClasses = {
    dark: "border-[rgba(243,240,231,0.18)]",
    green: "border-[rgba(243,240,231,0.2)]",
    light: "border-[rgba(11,12,10,0.18)]",
  };

  const theme = project.theme ?? "light";
  const themeClass = themeClasses[theme] ?? themeClasses.light;
  const mutedClass = mutedTextClasses[theme] ?? mutedTextClasses.light;
  const borderClass = borderClasses[theme] ?? borderClasses.light;
  const hasGallery =
    Array.isArray(project.gallery) && project.gallery.length > 0;

  return (
    <main className={`min-h-screen ${themeClass}`}>
      {/* ----- Project Detail Header ----- */}

      <section className="pt-6 md:pt-8">
        <div className="archive-page">
          <div
            className={`flex items-center justify-between border-b pb-4 ${borderClass}`}
          >
            <Link
              to="/projects"
              className="font-[var(--font-sans)] text-[11px] font-semibold tracking-[0.08em] transition-opacity hover:opacity-60"
            >
              ← BACK TO ARCHIVE
            </Link>

            <span className="archive-meta">
              {project.number} / {project.type.toUpperCase()}
            </span>
          </div>
        </div>
      </section>

      {/* ----- Project Detail Hero ----- */}

      <section className="py-[clamp(70px,9vw,130px)]">
        <div className="archive-page">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-[clamp(50px,7vw,110px)]">
            <div className="max-w-[650px]">
              <span className="archive-meta">
                {project.category.toUpperCase()}
              </span>

              <h1 className="mt-5 font-[var(--font-display)] text-[clamp(4rem,9vw,10rem)] font-medium leading-[0.78] tracking-[-0.055em]">
                {project.title}
              </h1>

              <p
                className={`mt-8 max-w-[500px] font-[var(--font-sans)] text-[15px] leading-[1.65] md:text-[17px] ${mutedClass}`}
              >
                {project.description}
              </p>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-lg)]">
              <div className="relative aspect-[16/9] w-full">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="block h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- Project Overview ----- */}

      <section className={`border-t ${borderClass}`}>
        <div className="archive-page py-[clamp(70px,8vw,110px)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[180px_minmax(0,1fr)_minmax(260px,0.55fr)] lg:gap-16">
            <span className="archive-meta">PROJECT OVERVIEW</span>

            <div>
              <p
                className={`max-w-[700px] font-[var(--font-sans)] text-[18px] leading-[1.6] md:text-[21px] ${mutedClass}`}
              >
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-2">
              <div>
                <span className="archive-meta">TYPE</span>
                <p className="mt-2 font-[var(--font-sans)] text-sm">
                  {project.type}
                </p>
              </div>

              <div>
                <span className="archive-meta">YEAR</span>
                <p className="mt-2 font-[var(--font-sans)] text-sm">
                  {project.year}
                </p>
              </div>

              <div>
                <span className="archive-meta">ROLE</span>
                <p className="mt-2 font-[var(--font-sans)] text-sm leading-[1.5]">
                  {project.role}
                </p>
              </div>

              <div>
                <span className="archive-meta">STACK</span>
                <p className="mt-2 font-[var(--font-sans)] text-sm leading-[1.5]">
                  {project.stack}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- Project Gallery ----- */}

      {hasGallery && (
        <section className={`border-t ${borderClass}`}>
          <div className="archive-page py-[clamp(70px,8vw,110px)]">
            <div className="mb-10 flex items-center justify-between">
              <span className="archive-meta">SELECTED VIEWS</span>
              <span className="archive-meta">
                {String(project.gallery.length).padStart(2, "0")} IMAGES
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <figure
                  key={`${project.id}-gallery-${index}`}
                  className="overflow-hidden rounded-[var(--radius-md)]"
                >
                  <img
                    src={image}
                    alt={`${project.title} view ${index + 1}`}
                    className="block w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ----- Visit Project ----- */}

      {!project.placeholder && project.url && project.url !== "#" && (
        <section className={`border-t ${borderClass}`}>
          <div className="archive-page py-5">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between py-[clamp(45px,6vw,80px)]"
            >
              <span className="font-[var(--font-display)] text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.85] tracking-[-0.05em]">
                Visit project
              </span>

              <span className="font-[var(--font-sans)] text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </section>
      )}

      {/* ----- Project Navigation ----- */}

      <section className={`border-t ${borderClass}`}>
        <div className="archive-page py-5">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
            {previousProject ? (
              <Link
                to={detailPath(previousProject)}
                className={`group border-b pb-10 pt-8 sm:border-b-0 sm:border-r sm:pr-10 ${borderClass}`}
              >
                <span className="archive-meta">PREVIOUS PROJECT</span>

                <div className="mt-5 flex items-end justify-between gap-6">
                  <span className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.82] tracking-[-0.05em]">
                    {previousProject.title}
                  </span>

                  <span className="mb-1 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                    ↖
                  </span>
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextProject ? (
              <Link
                to={detailPath(nextProject)}
                className="group pb-8 pt-8 sm:pl-10"
              >
                <span className="archive-meta">NEXT PROJECT</span>

                <div className="mt-5 flex items-end justify-between gap-6">
                  <span className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.82] tracking-[-0.05em]">
                    {nextProject.title}
                  </span>

                  <span className="mb-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </Link>
            ) : (
              <Link to="/projects" className="group pb-8 pt-8 sm:pl-10">
                <span className="archive-meta">BACK TO ARCHIVE</span>

                <div className="mt-5 flex items-end justify-between gap-6">
                  <span className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.82] tracking-[-0.05em]">
                    All projects
                  </span>

                  <span className="mb-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
