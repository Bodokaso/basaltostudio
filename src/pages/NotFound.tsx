import '../styles/ando.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '180px 3px 1fr',
        flex: 1,
        borderBottom: '4px solid var(--bs-border-h)',
      }}>
        <div className="bs-sidebar" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="bs-index-num">§ 404</div>
            <div className="bs-section-tag" style={{ marginTop: '8px' }}>
              &lt;error<br />not-found&gt;
            </div>
          </div>
          <div className="bs-comment">/* esta página<br />no existe.<br />la otra sí. */</div>
        </div>

        <div className="bs-slit bs-slit-amber" />

        <div className="bs-section-body-mobile" style={{
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '400px',
        }}>
          <div className="bs-divider-label">— Página no encontrada —</div>

          <p style={{
            fontSize: '13px',
            lineHeight: 1.9,
            letterSpacing: '0.04em',
            maxWidth: '480px',
            marginBottom: '8px',
          }}>
            La URL que buscas no existe o fue movida.
          </p>

          <p className="bs-comment" style={{ marginBottom: '40px' }}>
            /* pero el resto del sitio sí */
          </p>

          <a
            href="/"
            className="bs-btn"
            style={{ textDecoration: 'none', display: 'inline-block', alignSelf: 'flex-start' }}
          >
            ← Volver al inicio
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
