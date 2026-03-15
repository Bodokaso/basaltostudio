import '../styles/ando.css'

export default function Nav() {
  return (
    <nav className="bs-nav-mobile" style={{
      display: 'grid',
      gridTemplateColumns: '180px 1fr 1fr',
      borderBottom: '1px solid var(--bs-border)',
    }}>
      <div style={{
        padding: '14px 20px',
        borderRight: '1px solid var(--bs-border)',
      }}>
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--bs-charcoal)',
        }}>
          Basalto Studio
        </div>
        <div className="bs-comment" style={{ marginTop: '4px' }}>
          /* web design · Santo Domingo */
        </div>
      </div>

      <div className="bs-nav-center-hide" style={{
        padding: '14px 20px',
        borderRight: '1px solid var(--bs-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span className="bs-section-tag">&lt;nav role="studio"&gt;</span>
      </div>

      <div style={{
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '24px',
      }}>
        {['Proyectos', 'Servicios', 'Contacto'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontSize: '10px',
              letterSpacing: '0.1em',
              color: 'var(--bs-mid)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--bs-charcoal)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--bs-mid)')}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}
