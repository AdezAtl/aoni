import { useState } from 'react'
import './Process.css'

interface LifecycleStage {
  step: string
  name: string
  focus: string
  deliverable: string
}

// Section 11 of Internal Overview: Exact 9-step product development cycle
const lifecycleStages: LifecycleStage[] = [
  {
    step: '01',
    name: 'Problem',
    focus: 'Identify meaningful problems within different areas of society that matter in the environments where products are used.',
    deliverable: 'Validated Problem Statement',
  },
  {
    step: '02',
    name: 'Idea / Solution',
    focus: 'Develop practical solutions designed to be reliable and suited to real-world Nigerian conditions: power gaps, patchy networks, and real budgets.',
    deliverable: 'Concept & Technical Scope Blueprint',
  },
  {
    step: '03',
    name: 'Planning',
    focus: 'Define development timeline, break work into tasks, assign functional responsibilities, and schedule milestones.',
    deliverable: 'Project Schedule & Resource Allocation',
  },
  {
    step: '04',
    name: 'Design',
    focus: 'Create application visual assets, brand identity, and intuitive UI elements with strict visual consistency and zero cognitive bloat.',
    deliverable: 'Figma System & Approved Design Assets',
  },
  {
    step: '05',
    name: 'Development',
    focus: 'Build frontend and backend functionality, integrate required APIs, optimize performance, and maintain clean, organized code.',
    deliverable: 'Functional Staging Release (iOS & Android)',
  },
  {
    step: '06',
    name: 'Testing',
    focus: 'Coordinate functionality testing, bug fixing, offline caching validation, and performance under constrained network conditions.',
    deliverable: 'QA Verification & Launch Readiness Sign-Off',
  },
  {
    step: '07',
    name: 'Launch',
    focus: 'Execute pilot deployment, prepare market awareness campaigns, and onboard initial cohort of verified clients and artisans.',
    deliverable: 'Production Rollout in Lagos Trade Hubs',
  },
  {
    step: '08',
    name: 'User Feedback',
    focus: 'Gather real-world user feedback from clients and artisans to understand practical field behavior and friction points.',
    deliverable: 'User Telemetry & Field Feedback Dossier',
  },
  {
    step: '09',
    name: 'Improvement',
    focus: 'Continuously iterate, refine product performance, and harden features based on documented real-world use.',
    deliverable: 'Iterative Product Sprint & Hardening',
  },
]

// Sections 8, 9, 10: Current Functional Team Roles and Reporting Lines
const governanceRoles = [
  {
    role: 'Founder',
    category: 'Leadership & Core',
    reportsTo: 'Executive Direction',
    scope: 'Defines company long-term vision, makes final decisions on major company and product matters, approves major contracts, designs, and campaigns, secures funding and partnerships, and represents Aoni externally.',
    invariants: 'Maintains team alignment, company culture, and the "Engineered by Aoni" standard.',
  },
  {
    role: 'Project Manager',
    category: 'Leadership & Core',
    reportsTo: 'Reports directly to Founder',
    scope: 'Coordinates execution of JUT, maintains development timeline, breaks work into tasks, tracks progress, coordinates contributors, runs review meetings, identifies blockers, and manages launch readiness.',
    invariants: 'Keeps engineering, design, and operations aligned to delivery timelines.',
  },
  {
    role: 'Core Members',
    category: 'Leadership & Core',
    reportsTo: 'Reports to Founder & Project Manager',
    scope: 'Provides strategic and business-side support, researches potential partners, supports user acquisition and referral initiatives, analyzes feedback, and contributes marketing and operational ideas.',
    invariants: 'Drives ground-level partnerships and business traction.',
  },
  {
    role: 'Virtual Assistant',
    category: 'Project & Operations',
    reportsTo: 'Reports to Founder',
    scope: 'Provides administrative and operational support across Aoni, supporting organisation, coordination, documentation, and information management needed to keep projects organised.',
    invariants: 'Maintains operational order across documentation and schedules.',
  },
  {
    role: 'Legal Representative / Consultant',
    category: 'Legal & Compliance',
    reportsTo: 'Reports directly to Founder',
    scope: 'Supports legal foundation, reviews and prepares contracts, supports company incorporation and filings, advises on data privacy, protects intellectual property, and reviews user agreements.',
    invariants: 'Enforces statutory compliance and corporate protection under Nigerian law.',
  },
  {
    role: 'Developers',
    category: 'Technology',
    reportsTo: 'Reports to Project Manager',
    scope: 'Responsible for turning JUT ideas and designs into a functioning mobile application: building frontend and backend, integrating APIs, testing functionality, fixing bugs, and maintaining clean code.',
    invariants: 'Delivers robust code engineered for low data usage and offline resilience.',
  },
  {
    role: 'Social Media & Marketing Manager',
    category: 'Marketing & Creative',
    reportsTo: 'Works closely with Founder & PM',
    scope: 'Responsible for visibility, audience growth, and marketing activities: creating and publishing social media content, supporting referral campaigns, tracking engagement metrics, and analyzing performance.',
    invariants: 'Builds targeted awareness for JUT without marketing hyperbole.',
  },
  {
    role: 'Brand / Graphics Designer',
    category: 'Marketing & Creative',
    reportsTo: 'Reports to Project Manager',
    scope: 'Responsible for Aoni and JUT visual identity: creating application visual assets, supporting UI elements, creating marketing graphics, and maintaining visual consistency across touchpoints.',
    invariants: 'Guarantees disciplined aesthetic and rigorous brand consistency.',
  },
  {
    role: 'Video Editor',
    category: 'Marketing & Creative',
    reportsTo: 'Works under Social Media & Marketing Manager',
    scope: 'Turns raw footage, recordings, and concepts into visual content: editing promotional videos, product demonstrations, explainer videos, tutorials, and testimonials.',
    invariants: 'Communicates product utility and real artisan stories with high fidelity.',
  },
]

export function Process() {
  const [activeTab, setActiveTab] = useState<'lifecycle' | 'governance'>('lifecycle')
  const [selectedStage, setSelectedStage] = useState<number>(4) // Default to Development

  return (
    <section id="governance" className="section process-section">
      <div className="container">
        <div className="section-header">
          <span className="mono-tag active">
            <span className="status-indicator" />
            SECTION 05 · HOW AONI BUILDS & OPERATES
          </span>
          <h2 className="section-title">From problem to product: Our 9-stage cycle & operating topology.</h2>
          <p className="section-lead">
            Our current work is centred around JUT. This product-development cycle guides how we build
            today — and will apply to future products and sectors as Aoni expands.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="process-view-controls" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'lifecycle'}
            className={`process-tab-btn ${activeTab === 'lifecycle' ? 'active' : ''}`}
            onClick={() => setActiveTab('lifecycle')}
          >
            <span className="process-tab-label">9-Step Product-Development Cycle</span>
            <span className="mono-tag">SECTION 11 · APPLIED TO JUT</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'governance'}
            className={`process-tab-btn ${activeTab === 'governance' ? 'active' : ''}`}
            onClick={() => setActiveTab('governance')}
          >
            <span className="process-tab-label">Current Functional Roles & Structure</span>
            <span className="mono-tag">SECTIONS 8, 9 & 10 · 9 FUNCTIONAL ROLES</span>
          </button>
        </div>

        {activeTab === 'lifecycle' ? (
          <div className="lifecycle-container">
            {/* 9-Node Stepper */}
            <div className="lifecycle-stepper" role="list">
              {lifecycleStages.map((s, idx) => (
                <button
                  key={s.step}
                  type="button"
                  className={`stepper-node ${selectedStage === idx ? 'active' : ''}`}
                  onClick={() => setSelectedStage(idx)}
                >
                  <span className="stepper-step-num">{s.step}</span>
                  <span className="stepper-step-name">{s.name}</span>
                </button>
              ))}
            </div>

            {/* Stage Detail Card */}
            <div className="lifecycle-detail-panel">
              <div className="lifecycle-panel-header">
                <div className="panel-stage-badge">
                  <span className="panel-badge-step">CYCLE STAGE {lifecycleStages[selectedStage].step}</span>
                  <h3 className="panel-stage-name">{lifecycleStages[selectedStage].name}</h3>
                </div>
                <div className="panel-status-pill">
                  {selectedStage <= 4 ? (
                    <>
                      <span className="status-indicator" style={{ backgroundColor: 'var(--color-status-active)' }} />
                      <span>ACTIVE STAGE (JUT)</span>
                    </>
                  ) : (
                    <>
                      <span className="status-indicator" style={{ backgroundColor: 'var(--color-accent)' }} />
                      <span>PRE-LAUNCH PIPELINE</span>
                    </>
                  )}
                </div>
              </div>

              <div className="lifecycle-panel-body">
                <div className="panel-field">
                  <span className="panel-field-label">Focus & Approach</span>
                  <p className="panel-field-text">{lifecycleStages[selectedStage].focus}</p>
                </div>
                <div className="panel-field">
                  <span className="panel-field-label">Deliverable / Milestone</span>
                  <p className="panel-field-deliverable">{lifecycleStages[selectedStage].deliverable}</p>
                </div>
              </div>

              <div className="lifecycle-panel-nav">
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  disabled={selectedStage === 0}
                  onClick={() => setSelectedStage((s) => Math.max(0, s - 1))}
                >
                  ← Previous Step
                </button>
                <span className="mono-tag">
                  STEP {selectedStage + 1} OF {lifecycleStages.length}
                </span>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  disabled={selectedStage === lifecycleStages.length - 1}
                  onClick={() => setSelectedStage((s) => Math.min(lifecycleStages.length - 1, s + 1))}
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="governance-wrapper">
            <div className="governance-notice-box">
              <div className="governance-notice-header">
                <span className="mono-tag">COLLABORATIVE EARLY-STAGE MODEL</span>
              </div>
              <p className="governance-notice-text">
                This is Aoni&apos;s current functional structure, not its final organisational structure.
                Although reporting lines exist, Aoni currently operates collaboratively around the shared goal of
                building JUT. As Aoni expands into additional sectors, the organisation will evolve to accommodate
                new businesses, teams, and areas of responsibility.
              </p>
            </div>

            <div className="governance-grid">
              {governanceRoles.map((g) => (
                <div key={g.role} className="governance-card">
                  <div className="governance-card-header">
                    <div>
                      <span className="governance-category-tag">{g.category}</span>
                      <h3 className="governance-role-title">{g.role}</h3>
                    </div>
                    <span className="governance-reports-tag">{g.reportsTo}</span>
                  </div>
                  <p className="governance-role-scope">{g.scope}</p>
                  <div className="governance-card-footer">
                    <span className="governance-footer-label">Operational Invariant:</span>
                    <span className="governance-footer-value">{g.invariants}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
