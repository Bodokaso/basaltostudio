import { servicios } from '../data/content'

export default function Servicios() {
  return (
    <div
      id="servicios"
      style={{
        display: 'grid',
        gridTemplateColumns: '180px 3px 1fr',
        borderBottom: '1px solid var(--bs-border)',
      }}
    >
      <div className="bs-sidebar">
        <div className="bs-index-num">§ 03</div>
        <div className="bs-section-tag" style={{ marginTop: '8px' }}>
          &lt;section<br />id="servicios"&gt;
        </div>
      </div>

      <div className="bs-slit" />

      <div className="bs-section-body-mobile" style={{ padding: '40px' }}>
        <div className="bs-divider-label">— Servicios —</div>
        <div className="bs-inner-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          border: '1px solid var(--bs-border)',
        }}>
          {servicios.map((servicio, i) => (
            <div key={servicio.id} style={{
              padding: '28px 24px',
              borderRight: i < servicios.length - 1 ? '1px solid var(--bs-border)' : 'none',
              borderTop: '2px solid var(--bs-amber)',
            }}>
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>
                {servicio.titulo}
              </div>
              <p style={{
                fontSize: '11px',
                lineHeight: 1.9,
                color: 'var(--bs-mid)',
                letterSpacing: '0.04em',
              }}>
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
