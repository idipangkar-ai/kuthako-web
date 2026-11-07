import './Connected.css'

function Connected() {
  return (
    <section className="connected">

      <div className="connected-background" aria-hidden="true">
        <div className="connected-glow"></div>
        <div className="connected-grid"></div>

        <div className="connected-orbit connected-orbit-one"></div>
        <div className="connected-orbit connected-orbit-two"></div>
        <div className="connected-orbit connected-orbit-three"></div>
      </div>

      <div className="connected-content">

        <span className="connected-label">
          Connected
        </span>

        <h2>
          Stay connected.
          <br />
          <span>Beyond the moment.</span>
        </h2>

        <p>
          A connection shouldn't disappear when the
          moment is over. KuthaKo keeps the people
          you meet within reach.
        </p>

        <div className="connected-actions">

          <a
            href="/how-it-works#download"
            className="connected-primary"
          >
            Download KuthaKo
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="/how-it-works"
            className="connected-secondary"
          >
            See how it works
          </a>

        </div>

      </div>

      <div className="connected-network" aria-hidden="true">

        <div className="connected-line connected-line-one"></div>
        <div className="connected-line connected-line-two"></div>
        <div className="connected-line connected-line-three"></div>
        <div className="connected-line connected-line-four"></div>

        <div className="connected-node connected-node-center">
          <div className="connected-node-core">
            K
          </div>
        </div>

        <div className="connected-node connected-node-top">
          <div className="connected-avatar">
            A
          </div>
        </div>

        <div className="connected-node connected-node-right">
          <div className="connected-avatar">
            R
          </div>
        </div>

        <div className="connected-node connected-node-bottom">
          <div className="connected-avatar">
            M
          </div>
        </div>

        <div className="connected-node connected-node-left">
          <div className="connected-avatar">
            S
          </div>
        </div>

        <div className="connected-pulse connected-pulse-one"></div>
        <div className="connected-pulse connected-pulse-two"></div>

      </div>

    </section>
  )
}

export default Connected
