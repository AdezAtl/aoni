import { useState } from 'react'
import type { FormEvent } from 'react'
import './Contact.css'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Work with Aoni</h2>
          <p className="section-subtitle">
            Interested in partnerships, early access to JUT, or learning more
            about what we&apos;re building? Reach out — we&apos;d love to hear
            from you.
          </p>

          <ul className="contact-details">
            <li>
              <strong>Email</strong>
              <a href="mailto:hello@aoni.ng">hello@aoni.ng</a>
            </li>
            <li>
              <strong>Location</strong>
              <span>Nigeria</span>
            </li>
            <li>
              <strong>Current focus</strong>
              <span>Building JUT for launch</span>
            </li>
          </ul>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="contact-success">
              <h3>Thank you!</h3>
              <p>We&apos;ve received your message and will be in touch soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input type="text" name="name" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                  />
                </label>
              </div>
              <label>
                Subject
                <select name="subject" defaultValue="general">
                  <option value="general">General enquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="jut">JUT early access</option>
                  <option value="careers">Careers</option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how you'd like to connect..."
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
