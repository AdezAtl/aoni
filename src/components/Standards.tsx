import './Standards.css'

const principles = [
  {
    num: '01',
    tag: 'SYSTEM RESILIENCE',
    title: 'Engineered for intermittent conditions',
    desc: 'Software must function when cellular networks drop and grid power fluctuates. We design for offline-first task execution, robust local data caching, minimal battery consumption, and disciplined asset weights.',
    metric: 'Offline sync & low bandwidth target',
  },
  {
    num: '02',
    tag: 'OPERATIONAL UTILITY',
    title: 'Solving verifiable, everyday friction',
    desc: 'Vanity features consume bandwidth and user patience. We prioritize structured commercial interactions — connecting clients with verified artisans, standardizing work orders, and establishing clear pricing transparency.',
    metric: 'Zero unnecessary dependencies',
  },
  {
    num: '03',
    tag: 'HARDWARE & CODE DURABILITY',
    title: 'Built for longevity and real maintenance',
    desc: 'From clean, maintainable software architectures to future physical devices built to survive thermal stress and dust, our systems are engineered for long service lifecycles in demanding environments.',
    metric: 'Modular architecture & endurance testing',
  },
]

export function Standards() {
  return (
    <section id="standards" className="section standards-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Engineered by Aoni.</h2>
          <p className="section-lead">
            Aoni was founded on a simple operating reality: technology must work reliably where
            infrastructure is demanding. We design systems to perform under real Nigerian conditions
            without sacrificing craftsmanship or security.
          </p>
        </div>

        {/* Institutional Invariant Callout */}
        <div className="standards-callout">
          <div className="standards-callout-border" />
          <div className="standards-callout-content">
            <span className="mono-tag mono-tag-dark">THE AONI INVARIANT</span>
            <blockquote className="standards-quote">
              &ldquo;Whether on an app&apos;s splash screen or a device nameplate, it communicates
              one standard: It works, and it was made with care.&rdquo;
            </blockquote>
            <div className="standards-attribution">
              <span>Aoni Ltd Operating Constitution</span>
              <span className="standards-divider-dot">·</span>
              <span className="mono-tag mono-tag-dark">BENIN CITY, EDO STATE, NIGERIA</span>
            </div>
          </div>
        </div>

        {/* 3 Foundational Resilience Pillars */}
        <div className="standards-grid">
          {principles.map((item) => (
            <div key={item.num} className="standards-card">
              <div className="standards-card-header">
                <span className="standards-num">{item.num}</span>
                <span className="mono-tag">{item.tag}</span>
              </div>
              <h3 className="standards-card-title">{item.title}</h3>
              <p className="standards-card-desc">{item.desc}</p>
              <div className="standards-card-footer">
                <span className="standards-metric-label">Engineering Invariant:</span>
                <span className="standards-metric-value">{item.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
