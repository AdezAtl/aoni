import './Standards.css'


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
      </div>
    </section>
  )
}
