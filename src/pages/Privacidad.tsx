import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Section from '../components/Section'
import { EMAIL } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

const secciones = [
  {
    num: '01',
    title: 'Quién somos',
    body: `Basalto Studio es un estudio de desarrollo de software con base en Santo Domingo, República Dominicana. Sitio web: basaltostudio.com. Contacto: ${EMAIL}.`,
  },
  {
    num: '02',
    title: 'Qué información recopilamos',
    body: 'Este sitio no tiene base de datos ni servidor propio que reciba tus datos. El formulario de contacto compone un mensaje con tu nombre, el nombre de tu negocio y tu consulta, y lo abre en tu aplicación de WhatsApp o de correo. Nada se envía hasta que tú decides enviarlo desde tu propia aplicación. No recopilamos información de pago, datos sensibles ni información de menores de edad.',
  },
  {
    num: '03',
    title: 'Cómo usamos tu información',
    body: 'Lo que nos escribes por WhatsApp o correo se utiliza exclusivamente para responder tu consulta y, si avanzamos, para trabajar en tu proyecto. No lo usamos para marketing, no lo vendemos y no lo compartimos con terceros.',
  },
  {
    num: '04',
    title: 'WhatsApp',
    body: 'Los enlaces de WhatsApp abren una conversación directa con Basalto Studio usando tu aplicación de WhatsApp. Al usarlos, aplican las políticas de privacidad de WhatsApp / Meta. No almacenamos información de estas conversaciones en sistemas propios.',
  },
  {
    num: '05',
    title: 'Servicios de terceros',
    body: 'No usamos Google Analytics ni ninguna herramienta de seguimiento de usuarios. La tipografía del sitio se carga desde Google Fonts, por lo que tu navegador hace una solicitud a los servidores de Google al abrir la página; aplica la política de privacidad de Google. El sitio se sirve a través de Cloudflare.',
  },
  {
    num: '06',
    title: 'Cookies',
    body: 'Este sitio no usa cookies propias de seguimiento ni publicidad. Cloudflare puede establecer cookies técnicas necesarias para la seguridad y el rendimiento del sitio. Estas cookies no identifican al usuario de forma personal.',
  },
  {
    num: '07',
    title: 'Tus derechos',
    body: `Tienes derecho a solicitar acceso, corrección o eliminación de cualquier dato personal que nos hayas enviado. Para ejercer estos derechos, escríbenos a ${EMAIL}.`,
  },
  {
    num: '08',
    title: 'Cambios a esta política',
    body: 'Podemos actualizar esta política ocasionalmente. La fecha de última actualización siempre estará visible al inicio de esta página.',
  },
]

export default function Privacidad() {
  usePageTitle('Política de privacidad')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Section
          id="privacidad"
          num="—"
          label="Política de privacidad"
          amber
          fill
          tag={<>&lt;section<br /> id="privacidad"&gt;</>}
          comment={<>/* lo que hacemos<br /> con tus datos.<br /> que es casi nada. */</>}
        >
          <p className="bs-meta" style={{ textTransform: 'none', marginBottom: '32px' }}>
            Última actualización: octubre 2026
          </p>

          {secciones.map((seccion, i) => (
            <section
              key={seccion.num}
              aria-labelledby={`privacidad-${seccion.num}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr',
                borderBottom: i < secciones.length - 1 ? '1px solid var(--bs-border-v)' : 'none',
                paddingBottom: '24px',
                marginBottom: '24px',
                gap: '20px',
              }}
            >
              <div className="bs-index-num" style={{ paddingTop: '2px' }} aria-hidden="true">
                {seccion.num} —
              </div>
              <div>
                <h3 id={`privacidad-${seccion.num}`} className="bs-title" style={{ marginBottom: '10px' }}>
                  {seccion.title}
                </h3>
                <p className="bs-copy-soft">{seccion.body}</p>
              </div>
            </section>
          ))}

          <div className="bs-comment" style={{ marginTop: '8px' }} aria-hidden="true">
            /* entregado por Basalto Studio — basaltostudio.com */
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
