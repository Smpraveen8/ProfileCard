import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProfileCard } from './ProfileCard.jsx'
import './ProfileCard.css'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileCard />
  </StrictMode>,
)
