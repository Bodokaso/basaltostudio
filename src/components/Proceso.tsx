import Section from './Section'
import { pasosProceso } from '../data/content'

export default function Proceso({ num }: { num: string }) {
  return (
    <Section
      id="proceso"
      num={num}
      label="Cómo funciona"
      tag={<>&lt;section<br /> id="proceso"&gt;</>}
      comment={<>/* tres pasos.<br /> ninguno<br /> es sorpresa. */</>}
    >
      <ol className="bs-inner-grid" style={{ listStyle: 'none' }}>
        {pasosProceso.map((paso) => (
          <li key={paso.numero} style={{ padding: '28px 24px' }}>
            <div className="bs-index-num" style={{ textTransform: 'uppercase', marginBottom: '12px' }}>
              paso {paso.numero} —
            </div>
            <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '10px' }}>
              {paso.titulo}
            </h3>
            <p className="bs-copy-soft">{paso.descripcion}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
