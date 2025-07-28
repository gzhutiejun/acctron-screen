import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/scss/styles.scss"
import Blank from './pages/blank.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Blank />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
