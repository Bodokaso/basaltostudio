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
      <div className="bs-section-border" style={{ background: 'var(--bs-base)' }}><Hero /></div>
      <div className="bs-section-border" style={{ background: 'var(--bs-base-alt)' }}><ProofBar /></div>
      <div className="bs-section-border" style={{ background: 'var(--bs-base)' }}><Problema /></div>
      <div className="bs-section-border" style={{ background: 'var(--bs-base-alt)' }}><Servicios /></div>
      <div className="bs-section-border" style={{ background: 'var(--bs-base)' }}><Proyecto /></div>
      <div className="bs-section-border" style={{ background: 'var(--bs-base-alt)' }}><Proceso /></div>
      <div className="bs-section-border" style={{ background: 'var(--bs-base)' }}><Testimonio /></div>
      <div className="bs-section-border" style={{ background: 'var(--bs-base-alt)' }}><Contacto /></div>
      <div style={{ background: 'var(--bs-base)' }}><Footer /></div>
    </div>
  )
}

export default App
