import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/scss/styles.scss"
import Blank from './pages/blank.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Blank></Blank>
  </StrictMode>,
)
