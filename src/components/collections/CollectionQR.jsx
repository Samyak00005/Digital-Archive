import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

function CollectionQR() {
  const visibleCollections = projects.filter(
    (project) => project.collection
  ).slice(0, 3);

  return (
    <section
      id="collections"
      className="archive-collection aspect-[16/9] h-auto w-full overflow-hidden bg-[var(--archive-ivory)] py-[clamp(50px,5vw,80px)] text-[var(--archive-black)]"
    >
      <div className="archive-page">
        {/* ----- Collection Header ----- */}

        <header className="mb-[clamp(45px,5vw,70px)] grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_280px] md:gap-20">
          <div className="max-w-[900px]">
            <span className="archive-meta mb-7 block">
              06 / COLLECTIONS
            </span>

            <h2 className="m-0 font-[var(--font-display)] text-[clamp(4rem,7vw,7.5rem)] font-medium leading-[0.8] tracking-[-0.05em]">
              Small things,
              <br />
              carefully made.
            </h2>
          </div>

          <div className="pt-1 md:max-w-[280px]">
            <span className="archive-meta">SMALLER WORK</span>

            <p className="mt-3.5 font-[var(--font-sans)] text-[13px] leading-[1.55] text-[#66635b]">
              Mini projects, tools, and experiments that don't need a full
              chapter of their own.
            </p>
          </div>
        </header>

        {/* ----- Collection Project Grid ----- */}

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {visibleCollections.map((project) => {
            const projectContent = (
              <>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-md)] bg-[#e7e4db]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="block h-full w-full object-cover transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  />

                  {project.placeholder ? (
                    <span className="absolute right-3 top-3 rounded-full bg-[rgba(243,240,231,0.92)] px-2.5 py-1.5 font-[var(--font-sans)] text-[9px] font-semibold tracking-[0.07em]">
                      PLACEHOLDER
                    </span>
                  ) : (
                    <span className="absolute right-3 top-3 rounded-full bg-[rgba(243,240,231,0.92)] px-2.5 py-1.5 font-[var(--font-sans)] text-[9px] font-semibold tracking-[0.07em] opacity-0 -translate-y-1 transition duration-250 group-hover:translate-y-0 group-hover:opacity-100">
                      VIEW ↗
                    </span>
                  )}
                </div>

                <div className="pt-[15px]">
                  <div className="mb-3 flex items-center justify-between gap-[15px]">
                    <span className="archive-meta">
                      {project.number} / {project.type.toUpperCase()}
                    </span>
                    <span className="archive-meta">{project.year}</span>
                  </div>

                  <div className="flex items-baseline justify-between gap-[15px]">
                    <h3 className="m-0 font-[var(--font-display)] text-[clamp(2.4rem,3.4vw,4rem)] font-medium leading-[0.82] tracking-[-0.045em]">
                      {project.title}
                    </h3>

                    <span className="shrink-0 font-[var(--font-sans)] text-base transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-1">
                      {project.placeholder ? "—" : "↗"}
                    </span>
                  </div>

                  <p className="mt-[15px] max-w-[320px] font-[var(--font-sans)] text-xs leading-[1.5] text-[#66635b]">
                    {project.description}
                  </p>
                </div>
              </>
            );

            if (project.slug) {
              return (
                <Link
                  key={project.id}
                  to={`/project/${project.slug}`}
                  className="group block min-w-0 text-inherit no-underline"
                >
                  {projectContent}
                </Link>
              );
            }

            return (
              <article
                key={project.id}
                className="group block min-w-0 cursor-default text-inherit"
              >
                {projectContent}
              </article>
            );
          })}
        </div>

        {/* ----- Collection Footer ----- */}

        <footer className="mt-[70px] flex flex-col items-start gap-3 border-t border-[rgba(11,12,10,0.2)] pt-4 font-[var(--font-sans)] text-[11px] sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <span className="archive-meta">COLLECTION / 03</span>
          <span className="text-[#66635b]">
            More small experiments will join the archive.
          </span>
        </footer>
      </div>
    </section>
  );
}

export default CollectionQR;
