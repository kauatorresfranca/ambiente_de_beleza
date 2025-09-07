import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from '../styles.ts'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
