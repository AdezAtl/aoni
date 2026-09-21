import { useState } from 'react'
import './Snapshot.css'

interface PriorityItem {
  id: number
  title: string
  category: 'product' | 'operations' | 'scaling'
  status: 'In Progress' | 'Active' | 'Underway' | 'Pipeline'
  metric: string
  owner: string
}

// Section 16 of Internal Overview: Exact 9 Current Priorities
const priorities: PriorityItem[] = [
  {
    id: 1,
    title: 'Building the JUT product',
    category: 'product',
    status: 'In Progress',
    metric: 'Core mobile client features & backend microservices in active build',
    owner: 'Developers & PM',
  },
  {
    id: 2,
    title: 'Coordinating the team effectively',
    category: 'operations',
    status: 'Active',
    metric: 'Synchronized cross-functional delivery between PM, developers, and ops',
    owner: 'Project Manager',
  },
  {
    id: 3,
    title: 'Completing technical and creative work',
    category: 'product',
    status: 'In Progress',
    metric: 'Application visual assets, UI elements, and marketing collateral',
    owner: 'Brand Designer & Tech',
  },
  {
    id: 4,
    title: 'Establishing the necessary legal and operational foundations',
    category: 'operations',
    status: 'Active',
    metric: 'Statutory compliance, artisan agreements, and operational policies',
    owner: 'Legal Representative',
  },
  {
    id: 5,
    title: 'Preparing for launch',
    category: 'operations',
    status: 'In Progress',
    metric: 'Testing and bug fixing, launch readiness, and rollout checklist',
    owner: 'PM & Operations',
  },
  {
    id: 6,
    title: 'Building awareness around JUT',
    category: 'scaling',
    status: 'Underway',
    metric: 'Visibility, audience growth, and targeted artisan outreach',
    owner: 'Marketing & Founder',
  },
  {
    id: 7,
    title: 'Gathering user feedback',
    category: 'scaling',
    status: 'Pipeline',
    metric: 'Structured telemetry and direct interviews with early pilot users',
    owner: 'Core Members & Ops',
  },
  {
    id: 8,
    title: 'Improving the product based on real-world use',
    category: 'product',
    status: 'Pipeline',
    metric: 'Continuous iteration cycles driven by real operating conditions',
    owner: 'Developers & PM',
  },
  {
    id: 9,
    title: 'Establishing systems that can support Aoni\'s future growth',
    category: 'scaling',
    status: 'Underway',
    metric: 'Modular architecture and operational frameworks for sector expansion',
    owner: 'Founder & Leadership',
  },
]

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
  const [filter, setFilter] = useState<'all' | 'product' | 'operations' | 'scaling'>('all')

  const filtered =
    filter === 'all' ? priorities : priorities.filter((p) => p.category === filter)

  return (
    <section id="priorities" className="section snapshot-section">
      <div className="container">
        <div className="section-header">
          <span className="mono-tag active">
            <span className="status-indicator" />
            SECTION 06 · OPERATIONAL PRIORITIES & COMPANY SNAPSHOT
          </span>
          <h2 className="section-title">Current priorities: Direct focus on execution.</h2>
          <p className="section-lead">
            Aoni maintains transparent accountability. Here is our active operational ledger detailing
            the nine priorities that command our team&apos;s daily attention, drawn directly from our
            living company reference.
          </p>
        </div>

        {/* Company Snapshot Grid (Page 17 of Internal Reference) */}
        <div className="snapshot-overview-card">
          <div className="snapshot-card-header">
            <span className="mono-tag">CURRENT SNAPSHOT · INTERNAL REFERENCE</span>
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

        {/* Priorities Filter Toolbar */}
        <div className="priorities-filter-bar">
          <div className="priorities-filters" role="group" aria-label="Filter priorities">
            <button
              type="button"
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Priorities (9)
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'product' ? 'active' : ''}`}
              onClick={() => setFilter('product')}
            >
              Product & Tech (3)
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'operations' ? 'active' : ''}`}
              onClick={() => setFilter('operations')}
            >
              Operations & Legal (3)
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'scaling' ? 'active' : ''}`}
              onClick={() => setFilter('scaling')}
            >
              Awareness & Scaling (3)
            </button>
          </div>
          <div className="priorities-summary-tag">
            <span className="mono-tag">ACTIVE CYCLE: PRE-LAUNCH 2026</span>
          </div>
        </div>

        {/* Ledger Table */}
        <div className="priorities-ledger">
          <div className="ledger-header">
            <span className="col-idx">#</span>
            <span className="col-priority">Priority Focus</span>
            <span className="col-category">Discipline</span>
            <span className="col-status">Status</span>
            <span className="col-owner">Lead Unit</span>
          </div>

          <div className="ledger-body">
            {filtered.map((item) => (
              <div key={item.id} className="ledger-row">
                <span className="col-idx mono-tag">
                  {item.id.toString().padStart(2, '0')}
                </span>
                <div className="col-priority">
                  <strong className="priority-title">{item.title}</strong>
                  <span className="priority-metric">{item.metric}</span>
                </div>
                <div className="col-category">
                  <span className="category-pill">{item.category}</span>
                </div>
                <div className="col-status">
                  <span
                    className={`status-badge status-${item.status
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                  >
                    <span className="status-dot" />
                    {item.status}
                  </span>
                </div>
                <div className="col-owner">
                  <span className="owner-text">{item.owner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
