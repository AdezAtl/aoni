import heroImage from '../assets/hero_image.png'
import heroImage2 from '../assets/hero_image_landscape.jpg'
import './Hero.css'

export function Hero() {
  return (
    <section id="overview" className="hero-section">
      <picture>
        <source media="(min-width: 768px)" srcSet={heroImage2} />
        <img
          src={heroImage}
          alt="Aoni team collaborating on software development"
          className="hero-background-image"
        />
      </picture>
      <div className="hero-overlay" />

      <div className="hero-content-wrapper">
        <div className="container">

          <div className="hero-text-block">
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
              <a href="#standards" className="btn btn-outline-light">
                Engineering Doctrine
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
