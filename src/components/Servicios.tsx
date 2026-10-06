import Section from './Section'
import { servicios } from '../data/content'

export default function Servicios({ num }: { num: string }) {
  return (
    <Section
      id="servicios"
      num={num}
      label="Servicios"
      tag={<>&lt;section<br /> id="servicios"&gt;</>}
      comment={<>/* frontend,<br /> backend,<br /> y lo que haga falta. */</>}
    >
      <ul className="bs-inner-grid bs-inner-grid-4" style={{ listStyle: 'none' }}>
        {servicios.map((servicio) => (
          <li
            key={servicio.id}
            style={{ padding: '28px 24px', borderTop: '2px solid var(--bs-amber)' }}
          >
            <h3 className="bs-title">{servicio.titulo}</h3>
            <p className="bs-copy-soft">{servicio.descripcion}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
