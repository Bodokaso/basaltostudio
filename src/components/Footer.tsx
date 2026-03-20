export default function Footer() {
  return (
    <footer style={{
      display: 'grid',
      gridTemplateColumns: '180px 1fr 1fr',
      borderTop: '1px solid var(--bs-border-h)',
    }}>
      <div style={{
        padding: '16px 20px',
        borderRight: '1px solid var(--bs-border-v)',
      }}>
        <div style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: '4px',
        }}>
          Basalto Studio
        </div>
        <div className="bs-comment">© 2025</div>
      </div>
      <div style={{
        padding: '16px 20px',
        fontSize: '10px',
        letterSpacing: '0.1em',
        color: 'var(--bs-mid)',
        borderRight: '1px solid var(--bs-border-v)',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      }}>
        <span>Santo Domingo, República Dominicana — Diseño y desarrollo web</span>
        <a
          href="/privacidad"
          style={{
            color: 'var(--bs-mid)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
            fontSize: '10px',
            letterSpacing: '0.1em',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--bs-charcoal)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--bs-mid)'}
        >
          Privacidad
        </a>
      </div>
      <div style={{
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
        <span className="bs-comment">/* built with intention */</span>
      </div>
    </footer>
  )
}
