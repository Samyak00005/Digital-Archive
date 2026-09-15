import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ProjectDetail from "./components/projects/ProjectDetail";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
