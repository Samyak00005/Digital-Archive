import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "./AppRoutes";

import "./styles/global.css";
import "./styles/motion.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
