import heroImage from '../assets/hero_image.png'
import './Hero.css'

export function Hero() {
  return (
    <section id="overview" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left-col">
            <h1 className="hero-headline">
              Build technology that works where it&apos;s needed most.
            </h1>
            <p className="hero-subtext">
              Aoni designs software — and in time, devices — that hold up under Nigerian conditions:
              power gaps, patchy networks, and real budgets, without compromising on quality.
            </p>

            <div className="hero-ctas">
              <a href="https://juthire.com/join/" className="btn btn-primary">
                Join Product Waitlist
                <span aria-hidden="true">→</span>
              </a>
              <a href="#standards" className="btn btn-outline-light">
                Engineering Doctrine
              </a>
            </div>
          </div>

          <div className="hero-right-col">
            <div className="hero-image-frame">
              <img
                src={heroImage}
                alt="Aoni engineers in hardware testing and software development laboratory"
                className="hero-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

