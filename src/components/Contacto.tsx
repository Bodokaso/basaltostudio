import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { WHATSAPP_URL, FORM_ACCESS_KEY } from '../data/content'

const schema = z.object({
  nombre: z.string().min(2, 'Nombre requerido'),
  negocio: z.string().min(2, 'Nombre del negocio requerido'),
  mensaje: z.string().min(10, 'Cuéntame un poco más'),
})

type FormData = z.infer<typeof schema>

export default function Contacto() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: FORM_ACCESS_KEY, ...data }),
    })
    reset()
  }

  const inputStyle = {
    fontFamily: 'Courier Prime, Courier New, monospace',
    fontSize: '11px',
    letterSpacing: '0.06em',
    color: 'var(--bs-charcoal)',
    background: 'var(--bs-base)',
    border: '1px solid var(--bs-border-v)',
    borderRadius: 0,
    padding: '10px 12px',
    width: '100%',
    outline: 'none',
  }

  const labelStyle = {
    fontSize: '10px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: 'var(--bs-mid)',
    display: 'block',
    marginBottom: '6px',
  }

  const errorStyle = {
    fontSize: '10px',
    color: '#c0392b',
    letterSpacing: '0.06em',
    marginTop: '4px',
    fontStyle: 'italic',
  }

  return (
    <div
      id="contacto"
      style={{
        display: 'grid',
        gridTemplateColumns: '180px 3px 1fr',
        borderBottom: '2px solid var(--bs-border-h)',
      }}
    >
      <div className="bs-sidebar" style={{ justifyContent: 'space-between' }}>
        <div>
          <div className="bs-index-num">§ 07</div>
          <div className="bs-section-tag" style={{ marginTop: '8px' }}>
            &lt;section<br />id="contacto"&gt;
          </div>
        </div>
        <div className="bs-comment">
          /* el botón de<br />WhatsApp<br />cierra más<br />que cualquier<br />formulario */
        </div>
      </div>

      <div className="bs-slit" />

      <div className="bs-section-body-mobile" style={{ padding: '24px 40px 40px' }}>
        <div className="bs-divider-label">— ¿Listo para crecer? —</div>

        <div className="bs-inner-grid-2" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          border: '1px solid var(--bs-border-v)',
        }}>
          <div style={{
            padding: '32px',
            borderRight: '1px solid var(--bs-border-v)',
          }}>
            <div style={{ marginBottom: '24px' }}>
              <div style={labelStyle}>Ubicación</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.06em' }}>Santo Domingo, República Dominicana</div>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <div style={labelStyle}>WhatsApp</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.06em' }}>+1 809-335-0395</div>
            </div>
            <div style={{ marginBottom: '32px' }}>
              <div style={labelStyle}>Disponibilidad</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.06em' }}>Proyectos nuevos — abierto</div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bs-btn"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Escribir por WhatsApp →
            </a>
          </div>

          <div style={{ padding: '32px' }}>
            {isSubmitSuccessful ? (
              <div style={{ padding: '20px 0' }}>
                <p style={{ fontSize: '12px', lineHeight: 1.9, letterSpacing: '0.04em' }}>
                  Mensaje recibido. Te escribo pronto.
                </p>
                <p className="bs-comment" style={{ marginTop: '8px' }}>/* enviado correctamente */</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Nombre</label>
                  <input {...register('nombre')} style={inputStyle} placeholder="Tu nombre" />
                  {errors.nombre && <p style={errorStyle}>{errors.nombre.message}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Negocio</label>
                  <input {...register('negocio')} style={inputStyle} placeholder="Nombre de tu empresa" />
                  {errors.negocio && <p style={errorStyle}>{errors.negocio.message}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Mensaje</label>
                  <textarea
                    {...register('mensaje')}
                    style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                    placeholder="Cuéntame de tu proyecto..."
                  />
                  {errors.mensaje && <p style={errorStyle}>{errors.mensaje.message}</p>}
                </div>
                <button
                  type="submit"
                  className="bs-btn"
                  disabled={isSubmitting}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
