import './ConnectedFeatures.css'

const FEATURES = [
  {
    icon: '◌',
    title: 'Chat',
    description: 'Send messages, photos, files, and voice notes.',
  },
  {
    icon: '⌕',
    title: 'Call',
    description: 'Start a voice or video call with a connection.',
  },
  {
    icon: '◉',
    title: 'Share',
    description: 'Post updates and collect photos in albums.',
  },
]

function ConnectedFeatures() {
  return (
    <section className="how-connected" aria-labelledby="how-connected-title">
      <p className="how-eyebrow">STEP 3</p>
      <h2 id="how-connected-title">Now, stay connected.</h2>
      <p className="how-connected-copy">Once connected, you can keep in touch in the app.</p>
      <div className="how-connected-grid">
        {FEATURES.map(({ icon, title, description }) => (
          <article className="how-connected-item" key={title}>
            <span className="how-connected-symbol" aria-hidden="true">{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ConnectedFeatures
