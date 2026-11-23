import founderPhoto from '../assets/founder_james.png'
import teamPhoto from '../assets/team_photo.jpg'
import './Team.css'

export function Team() {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <div className="section-header">
          <span className="mono-tag active">
            <span className="status-indicator" />
            LEADERSHIP &amp; TEAM
          </span>
          <h2 className="section-title">The people behind Aoni.</h2>
          <p className="section-lead">
            Aoni is guided and built by an early-stage collaborative team across Nigeria,
            focused on engineering practical solutions that hold up under real Nigerian conditions.
          </p>
        </div>

        <div className="team-grid">
          {/* Founder & CEO Card */}
          <div className="team-founder-card tech-frame">
            <div className="founder-avatar-wrap">
              <img
                src={founderPhoto}
                alt="Edokpayi Omorodion James"
                className="founder-avatar"
              />
            </div>
            <div className="founder-content">
              <div className="founder-header">
                <h3 className="founder-name">Edokpayi Omorodion James</h3>
                <span className="founder-role">Founder &amp; CEO</span>
              </div>
              <p className="founder-bio">
                A registered radiographer and model who brings creative flair to practical problem-solving. James started Aoni to build technology that works for everyday Nigerians.
              </p>
              <div className="founder-meta">
                <span className="mono-tag">LEADERSHIP · BENIN CITY, NIGERIA</span>
              </div>
            </div>
          </div>

          {/* Team Card */}
          <div className="team-aggregate-card tech-frame">
            <div className="team-aggregate-content">
              <div className="team-aggregate-header">
                <span className="mono-tag">ORGANISATION</span>
                <span className="team-count-badge">CORE TEAM</span>
              </div>
              <p className="team-aggregate-text">
                A multidisciplinary team collaborating across Nigeria, combining hands-on field operations with software engineering and design.
              </p>
              <div className="team-photo-wrap">
                <img
                  src={teamPhoto}
                  alt="Aoni cross-functional team collaborating across Nigeria"
                  className="team-photo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="team-aggregate-footer">
                <span className="mono-tag">CROSS-FUNCTIONAL: ENGINEERING · OPERATIONS · DESIGN · LEGAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

