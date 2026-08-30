import './Meet.css'

function Meet() {
  return (
    <section className="meet">
      <div className="meet-glow" aria-hidden="true"></div>

      <div className="meet-content">
        <span className="meet-label">
          Meet
        </span>

        <h2>
          Start with
          <br />
          <span>someone new.</span>
        </h2>

        <p>
          KuthaKo makes meeting people simple.
          Discover who is around you, see what
          matters, and connect when it feels right.
        </p>
      </div>

      <div className="meet-visual" aria-hidden="true">

        <div className="meet-card meet-card-left">
          <div className="meet-avatar meet-avatar-one">
            A
          </div>

          <div className="meet-card-info">
            <strong>Alex</strong>
            <span>Designer</span>
          </div>

          <div className="meet-status"></div>
        </div>

        <div className="meet-card meet-card-center">
          <div className="meet-center-ring">
            <div className="meet-center-dot"></div>
          </div>

          <span>People around you</span>
        </div>

        <div className="meet-card meet-card-right">
          <div className="meet-avatar meet-avatar-two">
            R
          </div>

          <div className="meet-card-info">
            <strong>Riya</strong>
            <span>Developer</span>
          </div>

          <div className="meet-status"></div>
        </div>

      </div>
    </section>
  )
}

export default Meet