import { useState } from 'react'
import type { FormEvent } from 'react'
import './Contact.css'

export function Contact() {
  const [activeTab, setActiveTab] = useState<'institutional' | 'artisan'>('institutional')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Institutional form state
  const [instForm, setInstForm] = useState({
    name: '',
    organization: '',
    email: '',
    sectorInterest: 'Technology Infrastructure',
    message: '',
  })

  // Artisan / Early access form state
  const [accessForm, setAccessForm] = useState({
    name: '',
    contact: '',
    city: 'Lagos',
    role: 'artisan',
    trade: 'Electrical / Wiring',
  })

  function handleInstitutionalSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  function handleAccessSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  function handleReset() {
    setSubmitted(false)
    setInstForm({
      name: '',
      organization: '',
      email: '',
      sectorInterest: 'Technology Infrastructure',
      message: '',
    })
    setAccessForm({
      name: '',
      contact: '',
      city: 'Lagos',
      role: 'artisan',
      trade: 'Electrical / Wiring',
    })
  }

  return (
    <section id="terminal" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Send Us A Message Today.</h2>
        </div>

        <div className="contact-grid-layout">
          {/* Institutional Contact Card */}
          <div className="contact-meta-col">
            <div className="tech-frame contact-meta-card">
              <div className="contact-meta-header">
                <span className="mono-tag">OFFICIAL REGISTRATION DATA</span>
              </div>

              <div className="contact-meta-list">
                <div className="contact-meta-item">
                  <span className="meta-item-label">Legal Entity</span>
                  <strong className="meta-item-value">Aoni Ltd</strong>
                </div>
                <div className="contact-meta-item">
                  <span className="meta-item-label">Jurisdiction</span>
                  <strong className="meta-item-value">Federal Republic of Nigeria</strong>
                </div>
                <div className="contact-meta-item">
                  <span className="meta-item-label">Operating Headquarters</span>
                  <strong className="meta-item-value">Benin City, Edo State, Nigeria</strong>
                </div>
                <div className="contact-meta-item">
                  <span className="meta-item-label">Primary Electronic Mail</span>
                  <a href="mailto:hello@aoni.ng" className="meta-item-value contact-email-link">
                    hello@aoni.ng
                  </a>
                </div>
              </div>

              <div className="contact-meta-footer">
                <p className="contact-notice-text">
                  Direct inquiries receive responses within two business days. We do not sell or
                  distribute contact information to third parties.
                </p>
              </div>
            </div>
          </div>

          {/* Form Terminal Col */}
          <div className="contact-form-col">
            <div className="tech-frame terminal-container">
              <div className="terminal-tab-bar" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'institutional'}
                  className={`terminal-tab ${activeTab === 'institutional' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('institutional')
                    setSubmitted(false)
                  }}
                >
                  Partnership & Institutional Inquiries
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'artisan'}
                  className={`terminal-tab ${activeTab === 'artisan' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('artisan')
                    setSubmitted(false)
                  }}
                >
                  JUT Artisan & Client Waitlist
                </button>
              </div>

              <div className="terminal-form-body">
                {submitted ? (
                  <div className="terminal-success-card" role="alert">
                    <div className="success-badge">CONFIRMED</div>
                    <h3 className="success-title">Transmission Received</h3>
                    <p className="success-message">
                      Your dispatch has been logged in our queue. Our leadership or operations
                      coordinator will review your parameters and follow up accordingly.
                    </p>
                    <button type="button" className="btn btn-outline btn-sm" onClick={handleReset}>
                      Submit another inquiry
                    </button>
                  </div>
                ) : activeTab === 'institutional' ? (
                  <form className="terminal-form" onSubmit={handleInstitutionalSubmit}>
                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="inst-name">
                          Full Name *
                        </label>
                        <input
                          id="inst-name"
                          type="text"
                          required
                          className="form-input"
                          placeholder="Dr. / Engr. / Mr. / Ms."
                          value={instForm.name}
                          onChange={(e) => setInstForm({ ...instForm, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="inst-org">
                          Organization / Company *
                        </label>
                        <input
                          id="inst-org"
                          type="text"
                          required
                          className="form-input"
                          placeholder="Institution or firm name"
                          value={instForm.organization}
                          onChange={(e) => setInstForm({ ...instForm, organization: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="inst-email">
                          Professional Email *
                        </label>
                        <input
                          id="inst-email"
                          type="email"
                          required
                          className="form-input"
                          placeholder="name@organization.ng"
                          value={instForm.email}
                          onChange={(e) => setInstForm({ ...instForm, email: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="inst-sector">
                          Sector of Interest
                        </label>
                        <select
                          id="inst-sector"
                          className="form-select"
                          value={instForm.sectorInterest}
                          onChange={(e) => setInstForm({ ...instForm, sectorInterest: e.target.value })}
                        >
                          <option value="Technology Infrastructure">Technology & Software Infrastructure</option>
                          <option value="JUT Artisan Network">JUT Commercial Artisan Network</option>
                          <option value="Education Solutions">Education & Vocational Solutions</option>
                          <option value="Healthcare Systems">Healthcare Logistics & Systems</option>
                          <option value="Legal & Compliance">Legal Systems & Compliance</option>
                          <option value="General Institutional Inquiry">General Institutional Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="inst-msg">
                        Inquiry Scope / Message *
                      </label>
                      <textarea
                        id="inst-msg"
                        required
                        className="form-textarea"
                        placeholder="Detail the technical or operational nature of your inquiry..."
                        value={instForm.message}
                        onChange={(e) => setInstForm({ ...instForm, message: e.target.value })}
                      />
                    </div>

                    <div className="form-actions">
                      <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Transmitting...' : 'Transmit Inquiry →'}
                      </button>
                      <span className="mono-tag">Direct route to Aoni leadership queue</span>
                    </div>
                  </form>
                ) : (
                  <form className="terminal-form" onSubmit={handleAccessSubmit}>
                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="acc-name">
                          Full Name *
                        </label>
                        <input
                          id="acc-name"
                          type="text"
                          required
                          className="form-input"
                          placeholder="Your full legal name"
                          value={accessForm.name}
                          onChange={(e) => setAccessForm({ ...accessForm, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="acc-contact">
                          WhatsApp / Phone / Email *
                        </label>
                        <input
                          id="acc-contact"
                          type="text"
                          required
                          className="form-input"
                          placeholder="Phone number or email address"
                          value={accessForm.contact}
                          onChange={(e) => setAccessForm({ ...accessForm, contact: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="acc-role">
                          Registration Pathway
                        </label>
                        <select
                          id="acc-role"
                          className="form-select"
                          value={accessForm.role}
                          onChange={(e) => setAccessForm({ ...accessForm, role: e.target.value })}
                        >
                          <option value="artisan">I am a Trade Artisan / Technician</option>
                          <option value="client">I am a Client needing reliable artisans</option>
                          <option value="contractor">I am a Contractor / Facility Manager</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="acc-trade">
                          Trade Specialization / Primary Requirement
                        </label>
                        <select
                          id="acc-trade"
                          className="form-select"
                          value={accessForm.trade}
                          onChange={(e) => setAccessForm({ ...accessForm, trade: e.target.value })}
                        >
                          <option value="Electrical / Wiring">Electrical & Inverter Wiring</option>
                          <option value="Plumbing & Pipefitting">Plumbing & Water Systems</option>
                          <option value="Carpentry & Woodwork">Carpentry & Cabinetry</option>
                          <option value="Generator & AC Repair">Generator & AC Maintenance</option>
                          <option value="Masonry & Tile">Masonry & Tiling</option>
                          <option value="Automobile Mechanics">Automotive Diagnostics & Repair</option>
                          <option value="Other Trade Specialization">Other Trade Specialization</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="acc-city">
                        City / Primary Operating Location
                      </label>
                      <input
                        id="acc-city"
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Lagos (Ikeja, Lekki, Yaba, etc.)"
                        value={accessForm.city}
                        onChange={(e) => setAccessForm({ ...accessForm, city: e.target.value })}
                      />
                    </div>

                    <div className="form-actions">
                      <button type="submit" className="btn btn-accent" disabled={loading}>
                        {loading ? 'Registering...' : 'Register for Early Access →'}
                      </button>
                      <span className="mono-tag">Lagos pilot deployment cohort</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
