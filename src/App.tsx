import { useEffect, type ReactNode } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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
import Privacidad from './pages/Privacidad'
import NotFound from './pages/NotFound'
import { testimonio } from './data/content'

/** Scrolls to the hash target on in-app navigation, or to the top on a route change. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function Home() {
  let count = 0
  const next = () => String(++count).padStart(2, '0')
  const mostrarTestimonio = testimonio.nombre.trim().length > 0

  const bloques: ReactNode[] = [
    <Hero num={next()} />,
    <ProofBar />,
    <Problema num={next()} />,
    <Servicios num={next()} />,
    <Proyecto num={next()} />,
    <Proceso num={next()} />,
    ...(mostrarTestimonio ? [<Testimonio num={next()} />] : []),
    <Contacto num={next()} />,
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      <Nav />
      <main>
        {bloques.map((bloque, i) => (
          <div
            key={i}
            className="bs-section-border"
            style={{ background: i % 2 === 0 ? 'var(--bs-base)' : 'var(--bs-base-alt)' }}
          >
            {bloque}
          </div>
        ))}
      </main>
      <div style={{ background: 'var(--bs-base)' }}>
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
