import { useState } from 'react'
import logo from '../assets/logo-light.png'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'JUT', href: '#jut' },
  { label: 'Focus', href: '#focus' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="Aoni" />
        </a>

        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary navbar-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
        </nav>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
