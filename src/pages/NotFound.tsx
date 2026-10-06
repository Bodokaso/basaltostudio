import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Section from '../components/Section'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Página no encontrada')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Section
          id="not-found"
          num="404"
          label="Página no encontrada"
          amber
          fill
          bodyClassName="bs-body-center"
          tag={<>&lt;error<br /> not-found&gt;</>}
          comment={<>/* esta página<br /> no existe.<br /> la otra sí. */</>}
        >
          <p className="bs-lead" style={{ marginBottom: '8px' }}>
            La URL que buscas no existe o fue movida.
          </p>

          <p className="bs-comment" style={{ marginBottom: '40px' }}>
            /* pero el resto del sitio sí */
          </p>

          <Link to="/" className="bs-btn" style={{ alignSelf: 'flex-start' }}>
            ← Volver al inicio
          </Link>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
