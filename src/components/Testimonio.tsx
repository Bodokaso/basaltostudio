import Section from './Section'
import { testimonio } from '../data/content'

export default function Testimonio({ num }: { num: string }) {
  const firma = [testimonio.nombre, testimonio.cargo, testimonio.empresa]
    .filter(Boolean)
    .join(', ')

  return (
    <Section
      id="testimonio"
      num={num}
      label="Testimonio"
      amber
      tag={<>&lt;blockquote<br /> cite="client"&gt;</>}
    >
      <figure style={{ padding: '48px 40px', borderLeft: '2px solid var(--bs-amber)' }}>
        <blockquote>
          <p className="bs-lead" style={{ lineHeight: 2, marginBottom: '20px' }}>
            «{testimonio.cita}»
          </p>
        </blockquote>
        <figcaption className="bs-meta">
          — {firma} · {testimonio.ciudad}
        </figcaption>
      </figure>
    </Section>
  )
}
