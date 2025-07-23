import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home/Home.jsx'
import Abillities from './home/abillities/Abillities.jsx'
import Redes from './home/redesSociais/redes.jsx'
import Projects from './home/cursos/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  

  

    <Home />

  <div className="section2">
      <Projects/>

    <Abillities/>
    
  </div>

  <Redes/>

  


  </StrictMode>,

)
