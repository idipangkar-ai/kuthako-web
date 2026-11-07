import './RequestAcceptance.css'

function RequestAcceptance() {
  return (
    <section className="how-accept" aria-labelledby="how-accept-title">
      <div className="how-accept-copy">
        <p className="how-eyebrow">STEP 2</p>
        <h2 id="how-accept-title">They accept the request.</h2>
        <p>
          Scanning or opening an invite starts a connection request. The person
          who receives it can review it in <strong>Menu → Requests</strong> and accept.
        </p>
        <p className="how-note">Chat starts after the request is accepted.</p>
      </div>
      <div className="how-request-card" aria-label="Example connection request">
        <div className="how-request-icon" aria-hidden="true">K</div>
        <div className="how-request-details">
          <span className="how-request-kicker">CONNECTION REQUEST</span>
          <strong>Someone wants to connect</strong>
          <span>Review the request before accepting.</span>
        </div>
        <span className="how-request-check" aria-hidden="true">✓</span>
      </div>
    </section>
  )
}

export default RequestAcceptance
