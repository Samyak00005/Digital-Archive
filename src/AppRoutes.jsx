import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToHash from "./components/layout/ScrollToHash";
import SiteLayout from "./components/layout/SiteLayout";
import AllProjectsPage from "./pages/AllProjectsPage";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
