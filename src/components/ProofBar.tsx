import { proofItems } from '../data/content'

export default function ProofBar() {
  return (
    <div className="bs-proofbar">
      <div className="bs-cell">
        <span className="bs-comment" aria-hidden="true">/* index */</span>
      </div>
      <ul className="bs-proof-list" aria-label="En resumen">
        {proofItems.map((item) => (
          <li key={item.label} className="bs-meta">
            <span style={{ color: 'var(--bs-charcoal)', fontWeight: 700 }}>{item.label}</span>{' '}
            {item.detail}
          </li>
        ))}
      </ul>
    </div>
  )
}
