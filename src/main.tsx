import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/styles.scss";
import "./assets/scss/button.scss";
import Blank from "./pages/blank.tsx";
import MainMenu from "./pages/main-menu.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blank />} />
        <Route path="/mainmenu" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
