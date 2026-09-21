import './Snapshot.css'

// Section 18 / Page 17 of Internal Overview: Exact Current Snapshot
const snapshotData = [
  { label: 'Company', value: 'Aoni Ltd' },
  { label: 'Current Product', value: 'JUT (Artisan Booking)' },
  { label: 'Current Sector', value: 'Technology' },
  { label: 'Current Stage', value: 'Building / Pre-launch' },
  { label: 'Immediate Focus', value: 'Build & Prepare JUT for Launch' },
  { label: 'Future Scope', value: 'Multiple Sectors (Education, Health, Legal)' },
  { label: 'Technology Roadmap', value: 'Software/Mobile → Hardware Devices' },
  { label: 'Operating Model', value: 'Collaborative Early-Stage Team' },
]

export function Snapshot() {
  return (
    <section id="snapshot" className="section snapshot-section">
      <div className="container">
        <div className="section-header">
          <span className="mono-tag active">
            <span className="status-indicator" />
            SECTION 05 · COMPANY SNAPSHOT & SCOPE
          </span>
          <h2 className="section-title">Institutional snapshot: Structured for long-range scale.</h2>
          <p className="section-lead">
            A clear summary of our operational stage, multi-sector horizon, and engineering progression
            from software services to physical hardware systems.
          </p>
        </div>

        {/* Company Snapshot Grid */}
        <div className="snapshot-overview-card">
          <div className="snapshot-card-header">
            <span className="mono-tag">CURRENT SNAPSHOT · INSTITUTIONAL BASELINE</span>
            <span className="snapshot-stage-tag">BUILDING / PRE-LAUNCH</span>
          </div>
          <div className="snapshot-metrics-grid">
            {snapshotData.map((item) => (
              <div key={item.label} className="snapshot-item">
                <span className="snapshot-item-label">{item.label}</span>
                <strong className="snapshot-item-value">{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="snapshot-card-footer">
            <span className="mono-tag">LONG-TERM AMBITION</span>
            <p className="snapshot-ambition-text">
              &ldquo;Build a trusted Nigerian company capable of creating valuable solutions across multiple sectors.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
