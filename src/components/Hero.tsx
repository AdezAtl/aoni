import jutTeaserSquare from '../assets/jut_teaser_square.png'
import './Hero.css'

const metrics = [
  { label: 'Current Stage', value: 'Building / Pre-launch' },
  { label: 'Debut Product', value: 'JUT (Artisan Discovery)' },
  { label: 'Primary Sector', value: 'Software & Mobile' },
  { label: 'Future Scope', value: 'Multi-Sector & Hardware' },
]

export function Hero() {
  return (
    <section id="overview" className="hero-section">
      <div className="container">
        <div className="hero-meta-bar">
          <div className="mono-tag active">
            <span className="status-indicator" />
            <span>AONI LTD · DOCUMENT DISPATCH 01</span>
          </div>
          <span className="mono-tag">LAGOS, NIGERIA · 2026</span>
        </div>

        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-headline">
              Build technology that works where it&apos;s needed most.
            </h1>
            <p className="hero-subtext">
              Aoni designs software — and in time, devices — that hold up under Nigerian conditions:
              power gaps, patchy networks, and real budgets, without compromising on quality.
            </p>

            <div className="hero-ctas">
              <a href="#terminal" className="btn btn-primary">
                Join Product Waitlist
                <span aria-hidden="true">→</span>
              </a>
              <a href="#standards" className="btn btn-outline">
                Engineering Doctrine
              </a>
            </div>

            <div className="hero-invariants-grid">
              {metrics.map((m) => (
                <div key={m.label} className="hero-invariant-item">
                  <span className="hero-invariant-label">{m.label}</span>
                  <strong className="hero-invariant-value">{m.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-tech-card">
              <div className="hero-tech-card-header">
                <span className="mono-tag">SPEC ID: JUT-ENG-01</span>
                <span className="hero-tech-status">ACTIVE BUILD</span>
              </div>
              <div className="hero-image-wrap">
                <img
                  src={jutTeaserSquare}
                  alt="JUT Mobile Application Interface preview"
                  className="hero-preview-img"
                />
              </div>
              <div className="hero-tech-card-footer">
                <div className="hero-tech-spec-row">
                  <span>Architecture</span>
                  <strong>Client / Artisan Dual Interface</strong>
                </div>
                <div className="hero-tech-spec-row">
                  <span>Operating Standard</span>
                  <strong>Engineered by Aoni</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
