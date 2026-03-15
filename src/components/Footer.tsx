export default function Footer() {
  return (
    <footer style={{
      display: 'grid',
      gridTemplateColumns: '180px 1fr 1fr',
      borderTop: '1px solid var(--bs-border)',
    }}>
      <div style={{
        padding: '16px 20px',
        borderRight: '1px solid var(--bs-border)',
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
        borderRight: '1px solid var(--bs-border)',
        display: 'flex',
        alignItems: 'center',
      }}>
        Santo Domingo, República Dominicana — Diseño y desarrollo web
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
