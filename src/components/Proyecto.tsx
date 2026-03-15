import { proyectos } from '../data/content'

export default function Proyecto() {
  const proyecto = proyectos[0]

  return (
    <div
      id="proyectos"
      style={{
        display: 'grid',
        gridTemplateColumns: '180px 3px 1fr',
        borderBottom: '2px solid var(--bs-border-h)',
      }}
    >
      <div className="bs-sidebar" style={{ justifyContent: 'space-between' }}>
        <div>
          <div className="bs-index-num">§ 04</div>
          <div className="bs-section-tag" style={{ marginTop: '8px' }}>
            &lt;article<br />class="case-study"&gt;
          </div>
        </div>
        <div className="bs-comment">
          /* uno real.<br />vale más que<br />diez inventados. */
        </div>
      </div>

      <div className="bs-slit bs-slit-amber" />

      <div className="bs-section-body-mobile" style={{ padding: '24px 40px 40px' }}>
        <div className="bs-divider-label">— Proyecto —</div>
        <div className="bs-inner-grid-2" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          border: '1px solid var(--bs-border-v)',
        }}>
          <div style={{
            borderRight: '1px solid var(--bs-border-v)',
            background: 'var(--bs-charcoal)',
            minHeight: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px',
            position: 'relative',
          }}>
            <div className="bs-comment" style={{ color: '#9e9a92' }}>
              /* load-bearing */
            </div>
            <div>
              <div style={{
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: 'var(--bs-amber)',
                textTransform: 'uppercase',
              }}>
                {proyecto.url.replace('https://', '')}
              </div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--bs-base)',
                marginTop: '4px',
              }}>
                {proyecto.cliente}
              </div>
            </div>
          </div>

          <div style={{ padding: '24px' }}>
            <p style={{
              fontSize: '11px',
              lineHeight: 1.9,
              letterSpacing: '0.04em',
              marginBottom: '20px',
            }}>
              {proyecto.descripcion}
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '20px',
            }}>
              {proyecto.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: '9px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--bs-mid)',
                  border: '1px solid var(--bs-border-v)',
                  padding: '3px 8px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={proyecto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bs-btn"
              style={{ fontSize: '9px', textDecoration: 'none', display: 'inline-block' }}
            >
              Ver sitio →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
