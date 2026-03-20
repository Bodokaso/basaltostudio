import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { WHATSAPP_URL } from '../data/content'

const schema = z.object({
  nombre: z.string().min(2, 'Nombre requerido'),
  negocio: z.string().min(2, 'Nombre del negocio requerido'),
  mensaje: z.string().min(10, 'Cuéntame un poco más'),
})

type FormData = z.infer<typeof schema>

export default function Contacto() {
  const [waCooldown, setWaCooldown] = useState(false)
  const [waSeconds, setWaSeconds] = useState(0)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: FormData) => {
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
              <div style={{ fontSize: '12px', letterSpacing: '0.06em' }}>+1 809-848-0395</div>
            </div>
            <div style={{ marginBottom: '32px' }}>
              <div style={labelStyle}>Disponibilidad</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.06em' }}>Proyectos nuevos — abierto</div>
            </div>
            <button
              className="bs-btn"
              style={{ textDecoration: 'none', display: 'inline-block', cursor: waCooldown ? 'not-allowed' : 'pointer', opacity: waCooldown ? 0.5 : 1 }}
              disabled={waCooldown}
              onClick={() => {
                if (waCooldown) return
                window.open(WHATSAPP_URL, '_blank')
                setWaCooldown(true)
                setWaSeconds(30)
                const interval = setInterval(() => {
                  setWaSeconds(prev => {
                    if (prev <= 1) {
                      clearInterval(interval)
                      setWaCooldown(false)
                      return 0
                    }
                    return prev - 1
                  })
                }, 1000)
              }}
            >
              {waCooldown ? `Espera ${waSeconds}s...` : 'Escribir por WhatsApp →'}
            </button>
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
                    maxLength={500}
                    onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault() }}
                    onPaste={(e) => {
                      e.preventDefault()
                      const text = e.clipboardData.getData('text/plain')
                        .replace(/[\r\n]+/g, ' ')
                        .slice(0, 500)
                      const target = e.currentTarget
                      const start = target.selectionStart ?? 0
                      const end = target.selectionEnd ?? 0
                      const current = target.value
                      const newVal = (current.slice(0, start) + text + current.slice(end)).slice(0, 500)
                      target.value = newVal
                      target.dispatchEvent(new Event('input', { bubbles: true }))
                    }}
                  />
                  {errors.mensaje && <p style={errorStyle}>{errors.mensaje.message}</p>}
                  <p style={{
                    fontSize: '10px',
                    letterSpacing: '0.06em',
                    color: 'var(--bs-mid)',
                    textAlign: 'right',
                    marginTop: '4px',
                  }}>
                    {watch('mensaje')?.length ?? 0} / 500
                  </p>
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
