import { Link } from 'react-router-dom'
import Section from './Section'
import { WHATSAPP_URL } from '../data/content'

export default function Hero({ num }: { num: string }) {
  return (
    <Section
      id="hero"
      num={num}
      label="Propuesta"
      labelledBy="hero-titulo"
      amber
      tag={<>&lt;section<br /> id="hero"&gt;</>}
      comment={<>/* first load.<br /> make it count. */</>}
      bodyClassName="bs-body-hero"
    >
      <div>
        <h1 id="hero-titulo" className="bs-lead">
          Tu negocio merece software que{' '}
          <strong style={{ fontWeight: 700, letterSpacing: '0.06em' }}>genera confianza</strong>{' '}
          antes de que alguien levante el teléfono.
        </h1>
        <p className="bs-copy-soft" style={{ marginTop: '16px', maxWidth: '600px' }}>
          Diseño y desarrollo sitios web y aplicaciones a medida para negocios en República
          Dominicana. Del primer pixel al servidor — una sola persona, sin intermediarios.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px 24px', marginTop: '40px', flexWrap: 'wrap' }}>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bs-btn">
          Hablemos →
        </a>
        <Link to="/#proyectos" className="bs-btn bs-btn-secondary">
          Ver proyectos
        </Link>
      </div>
    </Section>
  )
}
