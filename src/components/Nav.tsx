import { Link } from 'react-router-dom'

const links = [
  { label: 'Servicios', to: '/#servicios' },
  { label: 'Proyectos', to: '/#proyectos' },
  { label: 'Contacto', to: '/#contacto' },
]

export default function Nav() {
  return (
    <nav className="bs-nav" aria-label="Principal">
      <div>
        <Link to="/" aria-label="Basalto Studio — inicio">
          <img
            src="/basalto-logo.png"
            alt="Basalto Studio"
            width={519}
            height={224}
            className="bs-logo"
          />
        </Link>
      </div>

      <div className="bs-nav-center" aria-hidden="true">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <span className="bs-section-tag">&lt;nav role="studio"&gt;</span>
          <span className="bs-comment">/* software · Santo Domingo */</span>
        </div>
      </div>

      <div>
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="bs-link">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
