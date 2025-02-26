import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AuthApp from './AuthApp.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthApp/>
  </BrowserRouter>,
)
