import logoLight from '../assets/logo-light.png'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand & Mission Col */}
          <div className="footer-brand-col">
            <a href="#overview" className="footer-logo-link" aria-label="Aoni Ltd Home">
              <img src={logoLight} alt="Aoni Ltd" className="footer-logo" />
            </a>
            <p className="footer-brand-mission">
              &ldquo;Build technology that works where it&apos;s needed most.&rdquo;
            </p>
            <p className="footer-brand-desc">
              Practical software and physical devices engineered to hold up under real Nigerian operating
              conditions: power cuts, patchy bandwidth, and real budgets.
            </p>
          </div>

          {/* Core Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Architecture</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#overview">Overview & Metrics</a>
              </li>
              <li>
                <a href="#standards">Engineering Standards</a>
              </li>
              <li>
                <a href="#roadmap">Two-Dimensional Matrix</a>
              </li>
              <li>
                <a href="#process">Development Cycle</a>
              </li>
              <li>
                <a href="#terminal">Waitlist & Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Institutional Compliance */}
          <div className="footer-col">
            <h4 className="footer-col-title">Institutional Data</h4>
            <div className="footer-governance-item">
              <span className="footer-gov-label">Corporate Entity</span>
              <span className="footer-gov-val">Aoni Ltd</span>
            </div>
            <div className="footer-governance-item">
              <span className="footer-gov-label">Jurisdiction</span>
              <span className="footer-gov-val">Federal Republic of Nigeria</span>
            </div>
            <div className="footer-governance-item">
              <span className="footer-gov-label">Headquarters</span>
              <span className="footer-gov-val">Benin City, Edo State, Nigeria</span>
            </div>
            <div className="footer-governance-item">
              <span className="footer-gov-label">Inquiries</span>
              <a href="mailto:hello@aoni.ng" className="footer-gov-val footer-gov-link">
                hello@aoni.ng
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Aoni Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
