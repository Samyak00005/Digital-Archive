function Footer() {
  return (
    <footer className="archive-site-footer">
      <div className="archive-page">
        {/* ----- Footer Header ----- */}
        <div className="archive-site-footer-top">
          <span className="archive-meta">08 / THE END — FOR NOW</span>
          <span className="archive-meta">2026 / ONGOING</span>
        </div>

        {/* ----- Footer Statement ----- */}
        <div className="archive-site-footer-main">
          <h2>
            More things
            <br />
            are coming.
          </h2>
          <p>
            The archive is still growing — new websites, tools, experiments, and
            ideas will find their place here.
          </p>
        </div>

        {/* ----- Footer Links ----- */}
        <div className="archive-site-footer-bottom">
          <a href="/#work">WORK</a>
          <a href="/#collections">COLLECTIONS</a>
          <a href="/projects">ALL PROJECTS</a>
          <span>© 2026 THE DIGITAL ARCHIVE</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
