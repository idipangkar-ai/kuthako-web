import './Scan.css'

function Scan() {
  return (
    <section className="scan">
      <div className="scan-background" aria-hidden="true">
        <div className="scan-glow"></div>
        <div className="scan-grid"></div>
        <div className="scan-orbit scan-orbit-one"></div>
        <div className="scan-orbit scan-orbit-two"></div>
      </div>

      <div className="scan-content">
        <span className="scan-label">
          Scan
        </span>

        <h2>
          One scan.
          <br />
          <span>One connection.</span>
        </h2>

        <p>
          No searching. No awkward exchange of details.
          Just scan, connect, and keep moving.
        </p>
      </div>

      <div className="scan-visual" aria-hidden="true">

        <div className="scan-device-glow"></div>

        <div className="scan-frame">

          <div className="scan-corner scan-corner-top-left"></div>
          <div className="scan-corner scan-corner-top-right"></div>
          <div className="scan-corner scan-corner-bottom-left"></div>
          <div className="scan-corner scan-corner-bottom-right"></div>

          <div className="scan-code">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="scan-line"></div>

          <div className="scan-target">
            <span></span>
          </div>

        </div>

        <div className="scan-floating scan-floating-top">
          <span className="scan-floating-icon">⌁</span>
          <span>Ready to connect</span>
        </div>

        <div className="scan-floating scan-floating-bottom">
          <span className="scan-floating-icon">✓</span>
          <span>Connection found</span>
        </div>

      </div>
    </section>
  )
}

export default Scan