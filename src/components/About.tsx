import './About.css'
import BuildingJut from '../assets/building_jut.png'

export function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-images">
          <div className="placeholder-image about-image-main">
            <span>Aoni Team</span>
          </div>
          <img className="about-image-secondary" src={BuildingJut} alt="Building JUT" />
        </div>

        <div className="about-content">
          <span className="section-label">About Aoni</span>
          <h2 className="section-title">
            Solutions across sectors, starting with technology
          </h2>
          <p className="section-subtitle">
            Aoni is being built to create and develop solutions across multiple
            sectors, beginning with technology. We identify meaningful problems
            within different areas of society and develop practical solutions
            around them.
          </p>

          <ul className="about-values">
            <li>
              <strong>Identify real problems</strong>
              <span>
                We focus on challenges that matter in the environments where
                our products are used.
              </span>
            </li>
            <li>
              <strong>Build practical solutions</strong>
              <span>
                Technology is our starting point — mobile and software products
                designed to be reliable and suited to real-world conditions.
              </span>
            </li>
            <li>
              <strong>Create with care</strong>
              <span>
                Every product should communicate the same standard: it works,
                and it was made with care.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
