import { puntosDolorosos } from '../data/content'

export default function Problema() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px 3px 1fr',
      borderBottom: '1px solid var(--bs-border)',
    }}>
      <div className="bs-sidebar" style={{ justifyContent: 'space-between' }}>
        <div>
          <div className="bs-index-num">§ 02</div>
          <div className="bs-section-tag" style={{ marginTop: '8px' }}>
            &lt;section<br />id="problema"&gt;
          </div>
        </div>
        <div className="bs-comment">
          /* el cliente<br />siempre lo sabe.<br />pero no lo dice. */
        </div>
      </div>

      <div className="bs-slit bs-slit-amber" />

      <div className="bs-section-body-mobile" style={{ padding: '40px' }}>
        <div className="bs-divider-label">— El problema —</div>
        <div className="bs-inner-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          border: '1px solid var(--bs-border)',
        }}>
          {puntosDolorosos.map((punto, i) => (
            <div key={punto.numero} style={{
              padding: '28px 24px',
              borderRight: i < puntosDolorosos.length - 1 ? '1px solid var(--bs-border)' : 'none',
            }}>
              <span style={{
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: 'var(--bs-border)',
                display: 'block',
                marginBottom: '16px',
              }}>
                {punto.numero} —
              </span>
              <p style={{
                fontSize: '12px',
                lineHeight: 1.9,
                letterSpacing: '0.04em',
              }}>
                {punto.texto}
              </p>
              <p className="bs-comment" style={{ marginTop: '12px' }}>
                {punto.comentario}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
