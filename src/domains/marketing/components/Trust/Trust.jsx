import './Trust.css'

function Trust() {
  return (
    <section className="trust">

      <div className="trust-background" aria-hidden="true">
        <div className="trust-glow"></div>
        <div className="trust-orbit trust-orbit-one"></div>
        <div className="trust-orbit trust-orbit-two"></div>
      </div>

      <div className="trust-content">

        <span className="trust-label">
          Trust
        </span>

        <h2>
          Connect with
          <br />
          <span>confidence.</span>
        </h2>

        <p>
          Your identity belongs to you. KuthaKo gives you
          control over what you share, so every connection
          starts with clarity and trust.
        </p>

      </div>

      <div className="trust-visual" aria-hidden="true">

        <div className="trust-card">

          <div className="trust-card-header">
            <span>Connection</span>

            <div className="trust-indicator"></div>
          </div>

          <div className="trust-profile">

            <div className="trust-avatar">
              K
            </div>

            <div className="trust-profile-info">
              <strong>KuthaKo</strong>
              <span>Identity verified</span>
            </div>

            <div className="trust-check">
              ✓
            </div>

          </div>

          <div className="trust-divider"></div>

          <div className="trust-permissions">

            <div className="trust-permission">
              <span className="trust-permission-dot"></span>
              <span>Identity</span>
              <strong>Shared</strong>
            </div>

            <div className="trust-permission">
              <span className="trust-permission-dot"></span>
              <span>Contact</span>
              <strong>Private</strong>
            </div>

            <div className="trust-permission">
              <span className="trust-permission-dot"></span>
              <span>Profile</span>
              <strong>Controlled</strong>
            </div>

          </div>

          <div className="trust-card-footer">
            <span>Your connection</span>
            <span>Protected</span>
          </div>

        </div>

        <div className="trust-floating trust-floating-top">
          <span className="trust-floating-icon">
            ✓
          </span>

          <span>
            Verified identity
          </span>
        </div>

        <div className="trust-floating trust-floating-bottom">
          <span className="trust-floating-icon">
            ◉
          </span>

          <span>
            You stay in control
          </span>
        </div>

      </div>

    </section>
  )
}

export default Trust