import jutTeaserSquare from '../assets/jut_teaser_square.png'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-eyebrow">Aoni Ltd · Technology</p>
          <span className="hero-badge">Building / Pre-launch</span>
          <h1 className="hero-title">
            Build technology that works where it&apos;s needed most
          </h1>
          <p className="hero-description">
            Aoni is a Nigerian company creating practical software — and in time,
            devices — built for real conditions: power gaps, patchy networks, and
            real budgets, without compromising on quality.
          </p>
          <div className="hero-actions">
            <a href="#jut" className="btn btn-primary">
              Meet JUT
            </a>
            <a href="#about" className="btn btn-outline">
              About Aoni
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={jutTeaserSquare}
            alt="JUT Product Preview"
            className="hero-image"
          />
          <div className="hero-card">
            <div className="hero-card-stat">
              <strong>JUT</strong>
              <span>Current product</span>
            </div>
            <div className="hero-card-stat">
              <strong>Tech</strong>
              <span>First sector</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
