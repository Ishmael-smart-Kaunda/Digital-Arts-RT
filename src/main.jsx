import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Courses from './Courses.jsx'
import Team from './Team.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <h1>Dont worry we'll fix this</h1>
    <Courses />
    <h1> This too or two?</h1>
    <Team />
  </StrictMode>,
)
