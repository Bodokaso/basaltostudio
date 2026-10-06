import { Link } from 'react-router-dom'
import { EMAIL } from '../data/content'

const YEAR = new Date().getFullYear()

export default function Footer() {

  return (
    <footer className="bs-footer">
      <div className="bs-cell" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
        <div className="bs-meta" style={{ fontWeight: 700, letterSpacing: '0.16em', color: 'var(--bs-charcoal)' }}>
          Basalto Studio
        </div>
        <div className="bs-meta" style={{ textTransform: 'none' }}>© {YEAR}</div>
      </div>

      <div className="bs-cell" style={{ gap: '12px 20px', flexWrap: 'wrap' }}>
        <span className="bs-meta" style={{ textTransform: 'none' }}>
          Santo Domingo, República Dominicana — Desarrollo web y software
        </span>
        <a href={`mailto:${EMAIL}`} className="bs-link" style={{ textTransform: 'none' }}>
          {EMAIL}
        </a>
        <Link to="/privacidad" className="bs-link">
          Privacidad
        </Link>
      </div>

      <div className="bs-cell" style={{ justifyContent: 'flex-end', borderRight: 'none' }}>
        <span className="bs-comment" aria-hidden="true">/* built with intention */</span>
      </div>
    </footer>
  )
}
