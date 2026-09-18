import { Outlet, useLocation } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

function SiteLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div key={location.pathname} className="archive-route-transition">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default SiteLayout;
