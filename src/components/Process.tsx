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

export function Process() {
  const [selectedStage, setSelectedStage] = useState<number>(4) // Default to Development

  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-header">
          <span className="mono-tag active">
            <span className="status-indicator" />
            SECTION 04 · PRODUCT-DEVELOPMENT CYCLE
          </span>
          <h2 className="section-title">From problem to product: Our 9-stage development cycle.</h2>
          <p className="section-lead">
            Our current engineering is centred around JUT. This product-development cycle guides how we build
            today — and will apply to future products and sectors as Aoni expands.
          </p>
        </div>

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
      </div>
    </section>
  )
}
