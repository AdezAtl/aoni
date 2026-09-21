import { useState } from 'react'
import type { FormEvent } from 'react'
import jutTeaserPortrait from '../assets/jut_teaser_portrait.png'
import './JUT.css'

const capabilities = [
  {
    title: 'Rapid Artisan Discovery',
    detail:
      'Locate certified plumbers, electricians, mechanics, and technicians nearby without reliance on unverified word-of-mouth chains.',
  },
  {
    title: 'Structured Work Orders',
    detail:
      'Clear job scope, upfront price agreement, and confirmed arrival windows eliminate mutual disputes between clients and tradespeople.',
  },
  {
    title: 'Low-Data Architecture',
    detail:
      'Optimized asset weights and offline task queues ensure the app performs reliably even when cellular connectivity drops.',
  },
]

const specs = [
  { label: 'Application Name', value: 'JUT' },
  { label: 'Platform Target', value: 'iOS & Android (Dual Client / Provider)' },
  { label: 'Current State', value: 'Internal QA / Pre-Launch Testing' },
  { label: 'Initial Territory', value: 'Lagos Metropolitan Area' },
  { label: 'Core Mechanism', value: 'Direct Artisan Matching & Job Verification' },
]

export function JUT() {
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)
  const [userRole, setUserRole] = useState<'client' | 'artisan'>('client')
  const [emailOrPhone, setEmailOrPhone] = useState('')

  function handleWaitlist(e: FormEvent) {
    e.preventDefault()
    if (emailOrPhone.trim()) {
      setWaitlistSubmitted(true)
    }
  }

  return (
    <section id="jut" className="section jut-section">
      <div className="container">
        <div className="section-header">
          <span className="mono-tag active">
            <span className="status-indicator" />
            SECTION 03 · DEBUT COMMERCIAL PRODUCT
          </span>
          <h2 className="section-title">JUT: Connecting clients and artisans.</h2>
          <p className="section-lead">
            JUT is Aoni&apos;s first major product — a focused mobile application engineered to
            make finding and booking skilled Nigerian artisans faster, more reliable, and transparent.
          </p>
        </div>

        <div className="jut-layout-grid">
          <div className="jut-details-col">
            <div className="jut-problem-solution-card">
              <div className="jut-badge-row">
                <span className="jut-stage-tag">ACTIVE BUILD PHASE</span>
                <span className="mono-tag">REF: JUT-REL-01</span>
              </div>
              <h3 className="jut-block-title">The Problem We Are Solving</h3>
              <p className="jut-block-text">
                Every day across Nigerian cities, clients struggle to find reliable artisans on short notice,
                while highly skilled tradespeople lack structured channels to connect with clients who value
                quality work. Fragmented calls, unverified track records, and unpredictable pricing waste time
                on both sides.
              </p>
              <div className="jut-divider" />
              <h3 className="jut-block-title">The Engineering Response</h3>
              <p className="jut-block-text">
                JUT provides a direct, low-friction platform that handles discovery, booking, and job tracking
                with minimal data consumption. It represents Aoni&apos;s commitment to building technology
                that works where it is needed most.
              </p>
            </div>

            <div className="jut-capabilities-list">
              {capabilities.map((cap) => (
                <div key={cap.title} className="jut-capability-item">
                  <div className="jut-capability-marker">✓</div>
                  <div>
                    <h4 className="jut-capability-title">{cap.title}</h4>
                    <p className="jut-capability-desc">{cap.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Specifications Table */}
            <div className="jut-specs-card">
              <h4 className="jut-specs-heading">System Specifications</h4>
              <dl className="jut-specs-list">
                {specs.map((s) => (
                  <div key={s.label} className="jut-spec-row">
                    <dt className="jut-spec-dt">{s.label}</dt>
                    <dd className="jut-spec-dd">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="jut-interactive-col">
            <div className="jut-visual-frame">
              <div className="jut-frame-header">
                <span className="mono-tag">MOBILE INTERFACE PREVIEW</span>
                <span className="jut-pulse-badge">PRE-RELEASE</span>
              </div>
              <div className="jut-image-container">
                <img
                  src={jutTeaserPortrait}
                  alt="JUT Mobile Application Screen showing artisan booking interface"
                  className="jut-portrait-img"
                />
              </div>
            </div>

            {/* Direct Early Access / Waitlist Block */}
            <div className="jut-waitlist-box">
              <div className="jut-waitlist-header">
                <h4>Join the JUT Early Access Pilot</h4>
                <p>Register as an early client or artisan ahead of our Lagos deployment.</p>
              </div>

              {waitlistSubmitted ? (
                <div className="jut-waitlist-success" role="alert">
                  <span className="jut-success-icon">✓</span>
                  <div>
                    <strong>Registration Confirmed</strong>
                    <p>
                      You have been registered for early access as a {userRole}. Our operations
                      team will reach out via {emailOrPhone} prior to the pilot rollout.
                    </p>
                  </div>
                </div>
              ) : (
                <form className="jut-waitlist-form" onSubmit={handleWaitlist}>
                  <div className="jut-role-toggle" role="radiogroup" aria-label="User Type">
                    <button
                      type="button"
                      className={`jut-role-btn ${userRole === 'client' ? 'active' : ''}`}
                      onClick={() => setUserRole('client')}
                    >
                      I need Artisans (Client)
                    </button>
                    <button
                      type="button"
                      className={`jut-role-btn ${userRole === 'artisan' ? 'active' : ''}`}
                      onClick={() => setUserRole('artisan')}
                    >
                      I am a Skilled Artisan
                    </button>
                  </div>

                  <div className="jut-input-group">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Email address or WhatsApp number"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn btn-accent">
                      Request Access
                    </button>
                  </div>
                  <span className="mono-tag" style={{ fontSize: '0.6875rem' }}>
                    Zero spam. Used solely for pilot notification and test onboarding.
                  </span>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}