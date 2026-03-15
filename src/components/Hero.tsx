import { WHATSAPP_URL } from '../data/content'

export default function Hero() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px 3px 1fr',
      minHeight: 'auto',
      borderBottom: '2px solid var(--bs-border-h)',
    }}>
      <div className="bs-sidebar" style={{ justifyContent: 'space-between' }}>
        <div>
          <div className="bs-index-num">§ 01</div>
          <div className="bs-section-tag" style={{ marginTop: '8px' }}>
            &lt;section<br />id="hero"&gt;
          </div>
        </div>
        <div className="bs-comment">
          /* first load.<br />make it count. */
        </div>
      </div>

      <div className="bs-slit bs-slit-amber" />

      <div className="bs-section-body-mobile" style={{
        padding: '32px 40px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <div className="bs-divider-label">— Propuesta —</div>
          <p style={{
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: 1.9,
            letterSpacing: '0.04em',
            maxWidth: '560px',
          }}>
            Tu negocio merece una presencia digital que{' '}
            <strong style={{ fontWeight: 700, letterSpacing: '0.08em' }}>
              genera confianza
            </strong>{' '}
            antes de que alguien levante el teléfono.
          </p>
          <p style={{
            fontSize: '11px',
            lineHeight: 1.9,
            color: 'var(--bs-mid)',
            letterSpacing: '0.04em',
            marginTop: '16px',
            maxWidth: '560px',
          }}>
            Diseñamos y desarrollamos sitios web para negocios en República Dominicana.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '40px' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bs-btn"
          >
            Hablemos →
          </a>
          <a
            href="#proyectos"
            className="bs-btn bs-btn-secondary"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </div>
  )
}
