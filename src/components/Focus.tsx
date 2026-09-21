import { useState } from 'react'
import './Focus.css'

interface DimensionItem {
  id: string
  title: string
  status: 'active' | 'pipeline' | 'horizon'
  phase: string
  scope: string
  operatingStandard: string
}

const techDepth: DimensionItem[] = [
  {
    id: 'tech-1',
    title: '1. Software & Mobile Applications',
    status: 'active',
    phase: 'CURRENT BASELINE',
    scope:
      'Consumer-facing and operations software tailored for Nigerian realities: offline caching, minimal bundle sizes, and resilient local data sync. Spearheaded by JUT.',
    operatingStandard: 'Production testing, mobile-first design, direct user-problem solving.',
  },
  {
    id: 'tech-2',
    title: '2. Advanced Technology Solutions',
    status: 'pipeline',
    phase: 'INTERMEDIATE HORIZON',
    scope:
      'Backend infrastructure, verification protocols, and distributed service layers that power multi-party commerce and workflow coordination across high-latency environments.',
    operatingStandard: 'Fault-tolerant distributed logic, secure transactional verification.',
  },
  {
    id: 'tech-3',
    title: '3. Physical Technology & Hardware',
    status: 'horizon',
    phase: 'LONG-TERM HORIZON',
    scope:
      'Dedicated physical devices and embedded systems engineered to operate under continuous power volatility, thermal stress, and dusty environments. "Engineered by Aoni" stamped on durable hardware.',
    operatingStandard: 'Low-power microcontrollers, solar/battery integration, physical endurance.',
  },
]

const sectorBreadth: DimensionItem[] = [
  {
    id: 'sector-1',
    title: 'Technology & Digital Services',
    status: 'active',
    phase: 'ACTIVE SECTOR',
    scope:
      'The foundational proving ground for Aoni’s systems, team coordination, and engineering standards. First execution: JUT artisan marketplace.',
    operatingStandard: 'Established team, ongoing product development and testing.',
  },
  {
    id: 'sector-2',
    title: 'Education & Practical Skills',
    status: 'pipeline',
    phase: 'PLANNED EXPANSION',
    scope:
      'Developing structured tools and systems to address critical bottlenecks in practical vocational training, technical certification, and learning access.',
    operatingStandard: 'Subject to dedicated operational unit establishment when justified.',
  },
  {
    id: 'sector-3',
    title: 'Healthcare & Clinical Access',
    status: 'horizon',
    phase: 'FUTURE HORIZON',
    scope:
      'Exploring workflow infrastructure and logistics solutions that improve diagnostic turnaround, patient records, and supply reliability in local clinics.',
    operatingStandard: 'Rigorous regulatory review, privacy compliance, and health sector alignment.',
  },
  {
    id: 'sector-4',
    title: 'Legal Services & Institutional Compliance',
    status: 'horizon',
    phase: 'FUTURE HORIZON',
    scope:
      'Software and operational systems that streamline commercial agreements, regulatory filings, and dispute mitigation for small enterprises and independent contractors.',
    operatingStandard: 'In-house legal oversight and institutional governance integration.',
  },
]

export function Focus() {
  const [activeVector, setActiveVector] = useState<'depth' | 'breadth'>('depth')

  const items = activeVector === 'depth' ? techDepth : sectorBreadth

  return (
    <section id="roadmap" className="section focus-section">
      <div className="container">
        <div className="section-header">
          <span className="mono-tag active">
            <span className="status-indicator" />
            SECTION 04 · TWO-DIMENSIONAL GROWTH MATRIX
          </span>
          <h2 className="section-title">Growing deeper in technology, wider across sectors.</h2>
          <p className="section-lead">
            Technology is Aoni&apos;s starting point, not its boundary. Our long-term trajectory is
            viewed across two independent vectors: technical depth from software to hardware, and
            sector breadth from technology to essential societal systems.
          </p>
        </div>

        {/* Vector Selection Controls */}
        <div className="vector-switcher-container">
          <div className="vector-switcher" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeVector === 'depth'}
              className={`vector-tab ${activeVector === 'depth' ? 'active' : ''}`}
              onClick={() => setActiveVector('depth')}
            >
              <span className="vector-tab-title">Vector A: Technology Depth</span>
              <span className="vector-tab-sub">Software → Advanced Solutions → Physical Hardware</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeVector === 'breadth'}
              className={`vector-tab ${activeVector === 'breadth' ? 'active' : ''}`}
              onClick={() => setActiveVector('breadth')}
            >
              <span className="vector-tab-title">Vector B: Sector Breadth</span>
              <span className="vector-tab-sub">Technology → Education → Healthcare → Legal</span>
            </button>
          </div>
        </div>

        {/* Vector Items Display */}
        <div className="vector-matrix-grid">
          {items.map((item) => (
            <div key={item.id} className="vector-item-card">
              <div className="vector-item-header">
                <span
                  className={`vector-status-pill status-${item.status}`}
                >
                  {item.phase}
                </span>
                <span className="mono-tag">{item.status === 'active' ? 'IN EXECUTION' : 'PLANNED'}</span>
              </div>
              <h3 className="vector-item-title">{item.title}</h3>
              <p className="vector-item-scope">{item.scope}</p>
              <div className="vector-item-footer">
                <span className="vector-footer-label">Execution Invariant:</span>
                <span className="vector-footer-value">{item.operatingStandard}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Explicit Strategic Notice from Document */}
        <div className="roadmap-notice-box">
          <div className="roadmap-notice-icon">ℹ</div>
          <div>
            <h4 className="roadmap-notice-title">Strategic Governance Note</h4>
            <p className="roadmap-notice-text">
              Future sectors are part of Aoni&apos;s long-term direction and should not currently be
              treated as established Aoni business units. They will be formally constituted as independent
              departments only when project scale, revenue, and operational necessities warrant them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
