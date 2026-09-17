import {
    ArrowDownRightIcon,
    ArrowUpRightIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { projects } from "../../data/projects";
import "../../styles/components/hero.css";

function Hero() {
  const publishedProjects = projects.filter((project) => !project.placeholder);
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const projectCount = String(publishedProjects.length).padStart(2, "0");

  return (
    <section className="archive-hero" id="home">
      <div className="archive-hero-noise" />

      <div className="archive-page archive-hero-inner">
        {/* ----- Top supporting copy ----- */}
        <div className="archive-hero-intro">
          <span className="archive-meta">A COLLECTION OF</span>

          <p>
            Websites, digital products,
            <br />
            experiments & ideas.
          </p>
        </div>

        {/* ----- Main Title ----- */}
        <div className="archive-hero-title-wrap">
          <h1 className="archive-hero-title">
            The Digital
            <br />
            Archive
          </h1>
        </div>

        {/* ----- Project Count ----- */}
        <div className="archive-hero-index">
          <span className="archive-hero-number">{projectCount}</span>

          <span className="archive-meta">PROJECTS</span>
        </div>

        {/* ----- Featured Preview ----- */}
        <a
          href={featuredProject.url}
          target="_blank"
          rel="noreferrer"
          className="archive-hero-project"
        >
          <div className="archive-hero-project-image">
            <img
              src={featuredProject.image}
              alt={`${featuredProject.title} website preview`}
              className="archive-image"
            />

            <div className="archive-hero-project-overlay" />
          </div>

          <div className="archive-hero-project-info">
            <div>
              <span className="archive-meta">01 / FEATURED</span>

              <h2>{featuredProject.title}</h2>
            </div>

            <HugeiconsIcon
              icon={ArrowUpRightIcon}
              size={20}
              strokeWidth={1.5}
            />
          </div>
        </a>

        {/* ----- Scroll Indicator ----- */}
        <a
          href="#work"
          className="archive-hero-scroll"
          aria-label="Scroll to work"
        >
          <span className="archive-meta">EXPLORE WORK</span>

          <HugeiconsIcon
            icon={ArrowDownRightIcon}
            size={18}
            strokeWidth={1.5}
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
