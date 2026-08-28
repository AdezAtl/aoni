import './Focus.css'

const futureSectors = [
  {
    title: 'Education',
    description:
      'Developing or supporting solutions that address problems within education and learning.',
  },
  {
    title: 'Health',
    description:
      'Exploring solutions that improve access, processes, services, or experiences within the health sector.',
  },
  {
    title: 'Legal',
    description:
      'Exploring solutions and businesses that address challenges within legal services and related processes.',
  },
  {
    title: 'Other Sectors',
    description:
      'Entering additional sectors as opportunities, market needs, and company capabilities develop.',
  },
]

const techRoadmap = [
  'Software & Mobile Applications',
  'Advanced Technology Solutions',
  'Physical Technology / Hardware',
]

export function Focus() {
  return (
    <section id="focus" className="focus">
      <div className="container">
        <div className="focus-header">
          <span className="section-label">Focus & Direction</span>
          <h2 className="section-title">Technology first, sectors beyond</h2>
          <p className="section-subtitle">
            Technology is Aoni&apos;s starting point — not its limit. We are
            focused on mobile and software solutions today while building toward
            a company with operations across multiple sectors.
          </p>
        </div>

        <div className="focus-current">
          <h3>Current focus: Technology</h3>
          <p>
            At this stage, Aoni is developing mobile and software solutions that
            solve specific problems. JUT is our first major product. Technology
            provides our starting point while we develop the experience, team,
            systems, and resources needed for future expansion.
          </p>
        </div>

        <div className="focus-roadmap">
          <h3>Technology roadmap</h3>
          <ol className="roadmap-steps">
            {techRoadmap.map((step, index) => (
              <li key={step}>
                <span className="roadmap-number">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="focus-future">
          <h3>Future sector expansion</h3>
          <p className="focus-future-note">
            These are part of Aoni&apos;s long-term direction — not yet
            established business units.
          </p>
          <div className="sectors-grid">
            {futureSectors.map((sector) => (
              <article key={sector.title} className="sector-card">
                <div className="placeholder-image sector-image">
                  <span>{sector.title}</span>
                </div>
                <h4>{sector.title}</h4>
                <p>{sector.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
