import './MissionVision.css'

export function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="container mission-vision-grid">
        <article className="mv-card">
          <span className="section-label">Mission</span>
          <blockquote>
            &ldquo;Build Technology that works where it&apos;s needed most.&rdquo;
          </blockquote>
          <p>
            Aoni designs software — and in time, devices that hold up under
            Nigerian conditions: power gaps, patchy networks, real budgets,
            without compromising on quality.
          </p>
        </article>

        <article className="mv-card">
          <span className="section-label">Vision</span>
          <blockquote>
            &ldquo;A Nigerian company trusted globally for both code and
            hardware.&rdquo;
          </blockquote>
          <p>
            We want &ldquo;Engineered by Aoni&rdquo; to represent a consistent
            standard of quality — whether on an app&apos;s splash screen or a
            device nameplate. It works, and it was made with care.
          </p>
        </article>
      </div>
    </section>
  )
}
