import { useState, useEffect } from 'react'
import logoLight from '../assets/logo-light.png'
import './Navbar.css'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Standards', href: '#standards' },
  { label: 'JUT Product', href: '#jut' },
  { label: 'Growth Matrix', href: '#roadmap' },
  { label: 'Governance', href: '#governance' },
  { label: 'Priorities', href: '#priorities' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-brand" aria-label="Aoni Ltd Home">
          <img src={logoLight} alt="Aoni Ltd" className="navbar-logo" />
          <div className="navbar-badge">
            <span className="status-indicator" />
            <span className="navbar-badge-text">PRE-LAUNCH · BUILD</span>
          </div>
        </a>

        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`} aria-label="Main Navigation">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-actions">
            <a
              href="#terminal"
              className="btn btn-primary btn-sm"
              onClick={() => setMenuOpen(false)}
            >
              Partner / Inquire
            </a>
          </div>
        </nav>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="toggle-line" />
          <span className="toggle-line" />
          <span className="toggle-line" />
        </button>
      </div>
    </header>
  )
}
