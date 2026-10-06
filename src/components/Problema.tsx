import Section from './Section'
import { puntosDolorosos } from '../data/content'

export default function Problema({ num }: { num: string }) {
  return (
    <Section
      id="problema"
      num={num}
      label="El problema"
      amber
      tag={<>&lt;section<br /> id="problema"&gt;</>}
      comment={<>/* el cliente<br /> siempre lo sabe.<br /> pero no lo dice. */</>}
    >
      <ul className="bs-inner-grid" style={{ listStyle: 'none' }}>
        {puntosDolorosos.map((punto) => (
          <li key={punto.numero} style={{ padding: '28px 24px' }}>
            <span className="bs-index-num" style={{ display: 'block', marginBottom: '16px' }} aria-hidden="true">
              {punto.numero} —
            </span>
            <p className="bs-copy">{punto.texto}</p>
            <p className="bs-comment" style={{ marginTop: '12px' }}>
              {punto.comentario}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
