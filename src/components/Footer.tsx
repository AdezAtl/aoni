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
            <div className="footer-meta-pill">
              <span className="status-indicator" />
              <span>STAGE: PRE-LAUNCH / BUILDING</span>
            </div>
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
                <a href="#priorities">Priorities Ledger</a>
              </li>
              <li>
                <a href="#terminal">Waitlist & Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Products & Pipeline */}
          <div className="footer-col">
            <h4 className="footer-col-title">Sectors & Build</h4>
            <ul className="footer-nav-list">
              <li>
                <span>JUT Artisan Platform (In Build)</span>
              </li>
              <li>
                <span>Advanced Services (Pipeline)</span>
              </li>
              <li>
                <span>Hardware Devices (Horizon)</span>
              </li>
              <li>
                <span>Education Systems (Planned)</span>
              </li>
              <li>
                <span>Health & Logistics (Horizon)</span>
              </li>
              <li>
                <span>Legal Frameworks (Horizon)</span>
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
              <span className="footer-gov-val">Lagos, Nigeria</span>
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
            <p>© {new Date().getFullYear()} Aoni Ltd. All rights reserved. Operating under Nigerian corporate law.</p>
          </div>
          <div className="footer-system-badges">
            <span className="mono-tag mono-tag-dark">REF: AONI-WEB-2026.01</span>
            <span className="mono-tag mono-tag-dark">SECURITY CHECK: PASS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
