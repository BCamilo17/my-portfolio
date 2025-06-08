import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/themeContext.tsx'

// if (window.location.pathname === '/my-portfolio/' && window.location.hostname !== 'localhost') {
//   window.location.replace('https://BCamilo17.github.io/');
// }
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
