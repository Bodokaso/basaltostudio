import './styles/ando.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProofBar from './components/ProofBar'
import Problema from './components/Problema'
import Servicios from './components/Servicios'
import Proyecto from './components/Proyecto'
import Proceso from './components/Proceso'
import Testimonio from './components/Testimonio'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <ProofBar />
      <Problema />
      <Servicios />
      <Proyecto />
      <Proceso />
      <Testimonio />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
