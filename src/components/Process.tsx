import './Process.css'

const steps = [
  'Problem',
  'Idea / Solution',
  'Planning',
  'Design',
  'Development',
  'Testing',
  'Launch',
  'User Feedback',
  'Improvement',
]

export function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="process-header">
          <span className="section-label">How Aoni Builds</span>
          <h2 className="section-title">From problem to product</h2>
          <p className="section-subtitle">
            Our current work is centred around JUT. This product-development
            cycle guides how we build — and will apply to future products and
            sectors as Aoni expands.
          </p>
        </div>

        <div className="process-flow">
          {steps.map((step, index) => (
            <div key={step} className="process-step">
              <div className="process-step-inner">
                <span className="process-number">{index + 1}</span>
                <span className="process-label">{step}</span>
              </div>
              {index < steps.length - 1 && (
                <span className="process-arrow" aria-hidden="true">
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
