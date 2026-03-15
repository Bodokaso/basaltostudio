export default function ProofBar() {
  const items = [
    { label: '01', detail: '— Proyecto completado' },
    { label: 'RD', detail: '— Con base en Santo Domingo' },
    { label: 'React', detail: '— Stack moderno' },
    { label: '2–3 sem.', detail: '— Tiempo de entrega' },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      borderBottom: '2px solid var(--bs-border-h)',
    }}>
      <div style={{
        padding: '16px 20px',
        borderRight: '1px solid var(--bs-border-v)',
        display: 'flex',
        alignItems: 'center',
      }}>
        <span className="bs-comment">/* index */</span>
      </div>
      <div style={{
        padding: '16px 40px',
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        flexWrap: 'wrap',
      }}>
        {items.map((item) => (
          <div key={item.label} style={{
            fontSize: '10px',
            letterSpacing: '0.12em',
            color: 'var(--bs-mid)',
            textTransform: 'uppercase',
          }}>
            <span style={{ color: 'var(--bs-charcoal)', fontWeight: 700 }}>{item.label}</span>
            {item.detail}
          </div>
        ))}
      </div>
    </div>
  )
}
