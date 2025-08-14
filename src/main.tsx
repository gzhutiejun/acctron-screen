import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/styles.scss";
import Blank from "./pages/blank.tsx";
import MainMenu from "./pages/main-menu.tsx";
import Loading from "./pages/Loading.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blank />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/mainmenu" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
