import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthApp from './AuthApp.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthApp/>
  </BrowserRouter>,
)
