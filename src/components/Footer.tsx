import logo from '../assets/logo-dark.png'
import './Footer.css'

const footerLinks = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'JUT', href: '#jut' },
    { label: 'Focus', href: '#focus' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  Product: [
    { label: 'JUT App', href: '#jut' },
    { label: 'Technology Roadmap', href: '#focus' },
    { label: 'How We Build', href: '#process' },
  ],
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <img src={logo} alt="Aoni" />
          </a>
          <p>
            A Nigerian company building technology that works where it&apos;s
            needed most. Starting with software — growing toward hardware and
            solutions across multiple sectors.
          </p>
          <p className="footer-tagline">
            Identify real problems. Build practical solutions. Create with care.
          </p>
        </div>

        <div className="footer-links">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4>{group}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aoni Ltd. All rights reserved.</p>
        <div className="footer-social">
          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" aria-label="Twitter">
            Twitter
          </a>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
