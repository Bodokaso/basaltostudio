import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  num: string
  /** Pseudo-markup shown in the sidebar, e.g. <section id="hero"> */
  tag: ReactNode
  /** Marginal note shown at the bottom of the sidebar */
  comment?: ReactNode
  /** Divider label above the body; rendered as the section heading unless `labelledBy` is set */
  label: string
  /** Id of a heading inside `children` that names this section (used by the hero's h1) */
  labelledBy?: string
  amber?: boolean
  fill?: boolean
  as?: 'section' | 'article'
  bodyClassName?: string
  children: ReactNode
}

export default function Section({
  id,
  num,
  tag,
  comment,
  label,
  labelledBy,
  amber = false,
  fill = false,
  as: Tag = 'section',
  bodyClassName,
  children,
}: SectionProps) {
  const headingId = labelledBy ?? `${id}-titulo`

  return (
    <Tag
      id={id}
      className={fill ? 'bs-section bs-section-fill' : 'bs-section'}
      aria-labelledby={headingId}
    >
      <div className="bs-sidebar" aria-hidden="true">
        <div>
          <div className="bs-index-num">§ {num}</div>
          <div className="bs-section-tag" style={{ marginTop: '8px' }}>{tag}</div>
        </div>
        {comment && <div className="bs-comment">{comment}</div>}
      </div>

      <div className={amber ? 'bs-slit bs-slit-amber' : 'bs-slit'} aria-hidden="true" />

      <div className={bodyClassName ? `bs-body ${bodyClassName}` : 'bs-body'}>
        {labelledBy ? (
          <div className="bs-divider-label" aria-hidden="true">— {label} —</div>
        ) : (
          <h2 id={headingId} className="bs-divider-label">— {label} —</h2>
        )}
        {children}
      </div>
    </Tag>
  )
}
