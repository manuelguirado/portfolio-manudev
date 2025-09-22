
import './App.css'
import Header from '../components/header'  
import Main from '../components/aboutMe'
import Experience from '../components/experience'
import Proyects from '../components/proyects'
import Skils from '../components/skils'
import Contact from '../components/contact'

function App() {


  return (
    <>
      <Header />
      <div id="inicio" className="min-h-screen pt-20">
        <Main />
      </div>
      <div className="section-separator"></div>
      <div id="experiencia" className="min-h-screen">
        <Experience />
      </div>
      <div className="section-separator"></div>
      <div id="proyectos" className="min-h-screen">
        <Proyects />
      </div>
      <div className="section-separator"></div>
      <div id="habilidades" className="min-h-screen">
        <Skils />
      </div>
      <div className="section-separator"></div>
      <div id="contacto" className="min-h-screen">
        <Contact />
      </div>
    </>
  )
}

export default App
