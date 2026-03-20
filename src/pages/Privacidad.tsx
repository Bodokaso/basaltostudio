import '../styles/ando.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Privacidad() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '180px 3px 1fr',
        flex: 1,
        borderBottom: '4px solid var(--bs-border-h)',
      }}>
        <div className="bs-sidebar" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="bs-index-num">§ —</div>
            <div className="bs-section-tag" style={{ marginTop: '8px' }}>
              &lt;section<br />id="privacidad"&gt;
            </div>
          </div>
          <div className="bs-comment">/* lo que hacemos<br />con tus datos.<br />que es casi nada. */</div>
        </div>

        <div className="bs-slit bs-slit-amber" />

        <div className="bs-section-body-mobile" style={{ padding: '40px' }}>
          <div className="bs-divider-label">— Política de Privacidad —</div>

          <p style={{ fontSize: '10px', letterSpacing: '0.06em', color: 'var(--bs-mid)', marginBottom: '32px' }}>
            Última actualización: marzo 2026
          </p>

          {[
            {
              num: '01',
              title: 'Quién somos',
              body: 'Basalto Studio es un estudio de diseño y desarrollo web con base en Santo Domingo, República Dominicana. Sitio web: basaltostudio.com. Contacto: contacto@basaltostudio.com',
            },
            {
              num: '02',
              title: 'Qué información recopilamos',
              body: 'Cuando usas el formulario de contacto, recopilamos tu nombre, el nombre de tu negocio y tu mensaje. Esta información se usa únicamente para responder tu consulta. No recopilamos información de pago, datos sensibles ni información de menores de edad.',
            },
            {
              num: '03',
              title: 'Cómo usamos tu información',
              body: 'Los datos del formulario se utilizan exclusivamente para contactarte en respuesta a tu mensaje. No los usamos para marketing, no los vendemos, no los compartimos con terceros salvo los necesarios para operar el sitio (ver sección 05).',
            },
            {
              num: '04',
              title: 'WhatsApp',
              body: 'El botón de WhatsApp abre una conversación directa con Basalto Studio usando tu aplicación de WhatsApp. Al usarlo, aplican las políticas de privacidad de WhatsApp / Meta. No almacenamos información de estas conversaciones en nuestros sistemas.',
            },
            {
              num: '05',
              title: 'Servicios de terceros',
              body: 'Este sitio usa Vercel para hosting y Cloudflare para seguridad y distribución de contenido. Ambos pueden procesar datos técnicos de tu visita (dirección IP, tipo de navegador) según sus propias políticas de privacidad. No usamos Google Analytics ni ninguna herramienta de seguimiento de usuarios.',
            },
            {
              num: '06',
              title: 'Cookies',
              body: 'Este sitio no usa cookies propias de seguimiento ni publicidad. Cloudflare puede establecer cookies técnicas necesarias para la seguridad y el rendimiento del sitio. Estas cookies no identifican al usuario de forma personal.',
            },
            {
              num: '07',
              title: 'Tus derechos',
              body: 'Tienes derecho a solicitar acceso, corrección o eliminación de cualquier dato personal que hayas enviado a través del formulario de contacto. Para ejercer estos derechos, escríbenos a contacto@basaltostudio.com.',
            },
            {
              num: '08',
              title: 'Cambios a esta política',
              body: 'Podemos actualizar esta política ocasionalmente. La fecha de última actualización siempre estará visible al inicio de esta página.',
            },
          ].map((section, i, arr) => (
            <div key={section.num} style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              borderBottom: i < arr.length - 1 ? '1px solid var(--bs-border-v)' : 'none',
              paddingBottom: '24px',
              marginBottom: '24px',
              gap: '20px',
            }}>
              <div className="bs-index-num" style={{ paddingTop: '2px' }}>{section.num} —</div>
              <div>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  color: 'var(--bs-charcoal)',
                }}>
                  {section.title}
                </p>
                <p style={{
                  fontSize: '11px',
                  lineHeight: 1.9,
                  color: 'var(--bs-mid)',
                  letterSpacing: '0.04em',
                }}>
                  {section.body}
                </p>
              </div>
            </div>
          ))}

          <div className="bs-comment" style={{ marginTop: '8px' }}>
            /* entregado por Basalto Studio — basaltostudio.com */
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
