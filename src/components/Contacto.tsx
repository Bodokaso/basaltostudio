import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Section from './Section'
import {
  EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  tiposProyecto,
  whatsappUrl,
} from '../data/content'

const MAX_MENSAJE = 500

const schema = z.object({
  nombre: z.string().trim().min(2, 'Nombre requerido'),
  negocio: z.string().trim().min(2, 'Nombre del negocio requerido'),
  tipo: z.enum(tiposProyecto, { message: 'Elige una opción' }),
  mensaje: z
    .string()
    .trim()
    .min(10, 'Cuéntame un poco más')
    .max(MAX_MENSAJE, `Máximo ${MAX_MENSAJE} caracteres`),
})

type FormData = z.infer<typeof schema>

function componerMensaje(data: FormData): string {
  return [
    `Hola, soy ${data.nombre} de ${data.negocio}.`,
    `Me interesa: ${data.tipo}.`,
    '',
    data.mensaje,
  ].join('\n')
}

export default function Contacto({ num }: { num: string }) {
  const [enviado, setEnviado] = useState<FormData | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { tipo: 'Sitio web nuevo' },
  })

  const onSubmit = (data: FormData) => {
    // The form has no backend on purpose: it composes a WhatsApp message
    // the visitor sends from their own app. A direct link is also shown in
    // case the browser blocks the new window.
    window.open(whatsappUrl(componerMensaje(data)), '_blank', 'noopener,noreferrer')
    setEnviado(data)
  }

  const mensajeActual = watch('mensaje') ?? ''

  return (
    <Section
      id="contacto"
      num={num}
      label="¿Listo para crecer?"
      tag={<>&lt;section<br /> id="contacto"&gt;</>}
      comment={<>/* el botón de<br /> WhatsApp<br /> cierra más<br /> que cualquier<br /> formulario */</>}
    >
      <div className="bs-inner-grid-2">
        <div style={{ padding: '32px' }}>
          <dl>
            <dt className="bs-label">Ubicación</dt>
            <dd className="bs-copy" style={{ marginBottom: '24px' }}>
              Santo Domingo, República Dominicana
            </dd>

            <dt className="bs-label">WhatsApp</dt>
            <dd className="bs-copy" style={{ marginBottom: '24px' }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                {WHATSAPP_DISPLAY}
              </a>
            </dd>

            <dt className="bs-label">Correo</dt>
            <dd className="bs-copy" style={{ marginBottom: '24px' }}>
              <a href={`mailto:${EMAIL}`} style={{ textDecoration: 'none' }}>
                {EMAIL}
              </a>
            </dd>

            <dt className="bs-label">Disponibilidad</dt>
            <dd className="bs-copy" style={{ marginBottom: '32px' }}>
              Proyectos nuevos — abierto
            </dd>
          </dl>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bs-btn">
            Escribir por WhatsApp →
          </a>
        </div>

        <div style={{ padding: '32px' }}>
          {enviado ? (
            <div style={{ padding: '20px 0' }} role="status">
              <p className="bs-copy" style={{ marginBottom: '8px' }}>
                Tu mensaje está listo en WhatsApp.
              </p>
              <p className="bs-copy-soft" style={{ marginBottom: '24px' }}>
                Si no se abrió una ventana nueva, usa uno de estos enlaces.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 16px', alignItems: 'center' }}>
                <a
                  href={whatsappUrl(componerMensaje(enviado))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bs-btn"
                >
                  Abrir en WhatsApp →
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Proyecto: ${enviado.tipo} — ${enviado.negocio}`)}&body=${encodeURIComponent(componerMensaje(enviado))}`}
                  className="bs-btn bs-btn-secondary"
                >
                  Enviar por correo
                </a>
                <button type="button" className="bs-link" onClick={() => setEnviado(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Editar mensaje
                </button>
              </div>
              <p className="bs-comment" style={{ marginTop: '16px' }}>/* nada se guarda en este sitio */</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div>
                <label htmlFor="contacto-nombre" className="bs-label">Nombre</label>
                <input
                  id="contacto-nombre"
                  className="bs-input"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  aria-invalid={errors.nombre ? 'true' : undefined}
                  aria-describedby={errors.nombre ? 'contacto-nombre-error' : undefined}
                  {...register('nombre')}
                />
                {errors.nombre && (
                  <p id="contacto-nombre-error" className="bs-error">{errors.nombre.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contacto-negocio" className="bs-label">Negocio</label>
                <input
                  id="contacto-negocio"
                  className="bs-input"
                  placeholder="Nombre de tu empresa"
                  autoComplete="organization"
                  aria-invalid={errors.negocio ? 'true' : undefined}
                  aria-describedby={errors.negocio ? 'contacto-negocio-error' : undefined}
                  {...register('negocio')}
                />
                {errors.negocio && (
                  <p id="contacto-negocio-error" className="bs-error">{errors.negocio.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contacto-tipo" className="bs-label">¿Qué necesitas?</label>
                <select
                  id="contacto-tipo"
                  className="bs-input"
                  aria-invalid={errors.tipo ? 'true' : undefined}
                  aria-describedby={errors.tipo ? 'contacto-tipo-error' : undefined}
                  {...register('tipo')}
                >
                  {tiposProyecto.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
                {errors.tipo && (
                  <p id="contacto-tipo-error" className="bs-error">{errors.tipo.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contacto-mensaje" className="bs-label">Mensaje</label>
                <textarea
                  id="contacto-mensaje"
                  className="bs-input"
                  style={{ minHeight: '120px', resize: 'vertical' }}
                  placeholder="Cuéntame de tu proyecto..."
                  maxLength={MAX_MENSAJE}
                  aria-invalid={errors.mensaje ? 'true' : undefined}
                  aria-describedby={errors.mensaje ? 'contacto-mensaje-error contacto-mensaje-count' : 'contacto-mensaje-count'}
                  {...register('mensaje')}
                />
                {errors.mensaje && (
                  <p id="contacto-mensaje-error" className="bs-error">{errors.mensaje.message}</p>
                )}
                <p id="contacto-mensaje-count" className="bs-meta" style={{ textAlign: 'right', marginTop: '4px', textTransform: 'none' }}>
                  {mensajeActual.length} / {MAX_MENSAJE}
                </p>
              </div>

              <button type="submit" className="bs-btn" style={{ alignSelf: 'flex-start' }}>
                Enviar por WhatsApp →
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
