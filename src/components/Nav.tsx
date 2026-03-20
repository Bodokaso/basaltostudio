import '../styles/ando.css'

export default function Nav() {
  return (
    <nav className="bs-nav-mobile" style={{
      display: 'grid',
      gridTemplateColumns: '180px 1fr 1fr',
      borderBottom: '2px solid var(--bs-border-h)',
    }}>
      <div style={{
        padding: '0 20px',
        borderRight: '1px solid var(--bs-border-v)',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--bs-charcoal)',
        }}>
          <img
            src="/basalto-logo.png"
            alt="Basalto Studio"
            style={{ height: '100%', width: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </div>
      </div>

      <div className="bs-nav-center-hide" style={{
        padding: '14px 20px',
        borderRight: '1px solid var(--bs-border-v)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <span className="bs-section-tag">&lt;nav role="studio"&gt;</span>
          <span className="bs-comment">/* web design · Santo Domingo */</span>
        </div>
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
