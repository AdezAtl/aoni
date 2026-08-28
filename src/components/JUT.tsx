import jutTeaserPortrait from '../assets/jut_teaser_portrait.png'
import './JUT.css'

const features = [
  {
    title: 'Find artisans faster',
    description:
      'Connect with skilled professionals without the usual back-and-forth.',
  },
  {
    title: 'Book with ease',
    description:
      'A more convenient way for clients to find and book artisans for any job.',
  },
  {
    title: 'Built for Nigeria',
    description:
      'Designed with local conditions in mind — practical, reliable, and accessible.',
  },
]

export function JUT() {
  return (
    <section id="jut" className="jut">
      <div className="container jut-grid">
        <div className="jut-content">
          <span className="section-label">Current Product</span>
          <h2 className="section-title">JUT</h2>
          <p className="jut-tagline">
            Making booking artisans faster and easier.
          </p>
          <p className="section-subtitle">
            JUT is a mobile application that connects clients and artisans,
            providing a more convenient way to find and book skilled
            professionals. It is Aoni&apos;s first major product and our current
            practical application of our technology-focused mission.
          </p>
          <span className="jut-status">Currently in development · Pre-launch</span>

          <ul className="jut-features">
            {features.map((feature) => (
              <li key={feature.title}>
                <strong>{feature.title}</strong>
                <span>{feature.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="jut-visual">
          <img
            src={jutTeaserPortrait}
            alt="JUT App Teaser"
            className="jut-img"
          />
        </div>
      </div>
    </section>
  )
}