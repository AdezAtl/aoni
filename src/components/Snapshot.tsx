import './Snapshot.css'

const snapshot = [
  { label: 'Company', value: 'Aoni Ltd' },
  { label: 'Current Product', value: 'JUT' },
  { label: 'Current Sector', value: 'Technology' },
  { label: 'Current Stage', value: 'Building / Pre-launch' },
]

const priorities = [
  'Building the JUT product',
  'Coordinating the team effectively',
  'Completing technical and creative work',
  'Establishing legal and operational foundations',
  'Preparing for launch',
  'Building awareness around JUT',
  'Gathering user feedback after launch',
  'Improving based on real-world use',
]

export function Snapshot() {
  return (
    <section className="snapshot">
      <div className="container">
        <div className="snapshot-stats">
          {snapshot.map((item) => (
            <div key={item.label} className="snapshot-stat">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="snapshot-priorities">
          <h3>Current priorities</h3>
          <ul>
            {priorities.map((priority) => (
              <li key={priority}>{priority}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
