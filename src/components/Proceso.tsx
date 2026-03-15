import { pasosProceso } from '../data/content'

export default function Proceso() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px 3px 1fr',
      borderBottom: '2px solid var(--bs-border-h)',
    }}>
      <div className="bs-sidebar">
        <div className="bs-index-num">§ 05</div>
        <div className="bs-section-tag" style={{ marginTop: '8px' }}>
          &lt;section<br />id="proceso"&gt;
        </div>
      </div>

      <div className="bs-slit" />

      <div className="bs-section-body-mobile" style={{ padding: '24px 40px 40px' }}>
        <div className="bs-divider-label">— Cómo funciona —</div>
        <div className="bs-inner-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          border: '1px solid var(--bs-border-v)',
        }}>
          {pasosProceso.map((paso, i) => (
            <div key={paso.numero} style={{
              padding: '28px 24px',
              borderRight: i < pasosProceso.length - 1 ? '1px solid var(--bs-border-v)' : 'none',
            }}>
              <div style={{
                fontSize: '10px',
                letterSpacing: '0.14em',
                color: 'var(--bs-border-v)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>
                paso {paso.numero} —
              </div>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                marginBottom: '10px',
              }}>
                {paso.titulo}
              </div>
              <p style={{
                fontSize: '11px',
                lineHeight: 1.9,
                color: 'var(--bs-mid)',
                letterSpacing: '0.04em',
              }}>
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
