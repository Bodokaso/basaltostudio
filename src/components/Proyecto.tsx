import Section from './Section'
import { proyectos } from '../data/content'

export default function Proyecto({ num }: { num: string }) {
  const proyecto = proyectos[0]

  return (
    <Section
      id="proyectos"
      num={num}
      label="Proyecto"
      as="article"
      amber
      tag={<>&lt;article<br /> class="case-study"&gt;</>}
      comment={<>/* uno real.<br /> vale más que<br /> diez inventados. */</>}
    >
      <div className="bs-inner-grid-2">
        <div className="bs-project-media">
          <img
            src={proyecto.imagen}
            alt={proyecto.imagenAlt}
            width={1200}
            height={692}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div style={{ padding: '24px' }}>
          <h3 className="bs-title">{proyecto.cliente}</h3>
          <p className="bs-copy" style={{ marginBottom: '20px' }}>
            {proyecto.descripcion}
          </p>
          <ul
            aria-label="Tecnologías y contexto"
            style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}
          >
            {proyecto.tags.map((tag) => (
              <li key={tag} className="bs-tag">
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bs-btn"
            aria-label={`Ver el sitio de ${proyecto.cliente} (se abre en una pestaña nueva)`}
          >
            Ver sitio →
          </a>
        </div>
      </div>
    </Section>
  )
}
