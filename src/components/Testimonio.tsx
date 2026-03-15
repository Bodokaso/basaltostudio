export default function Testimonio() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px 3px 1fr',
      borderBottom: '2px solid var(--bs-border-h)',
    }}>
      <div className="bs-sidebar">
        <div className="bs-index-num">§ 06</div>
        <div className="bs-section-tag" style={{ marginTop: '8px' }}>
          &lt;blockquote<br />cite="client"&gt;
        </div>
      </div>

      <div className="bs-slit bs-slit-amber" />

      <div className="bs-section-body-mobile" style={{ padding: '24px 40px 40px' }}>
        <div className="bs-divider-label">— Testimonio —</div>
        <div style={{
          padding: '48px 40px',
          borderLeft: '2px solid var(--bs-amber)',
        }}>
          <p style={{
            fontSize: '13px',
            lineHeight: 2,
            letterSpacing: '0.04em',
            maxWidth: '560px',
            marginBottom: '20px',
          }}>
            "El sitio que Basalto nos entregó superó lo que esperábamos. Profesional, rápido, y nuestros clientes lo notan inmediatamente."
          </p>
          <div style={{
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--bs-mid)',
          }}>
            — Cliente, F MAX RD · Santo Domingo, RD
          </div>
        </div>
      </div>
    </div>
  )
}
