import './HowItWorksIntro.css'

function HowItWorksIntro() {
  return (
    <section className="how-intro">
      <p className="how-eyebrow">A SIMPLE WAY TO CONNECT</p>
      <h1>How do I connect<br />with someone?</h1>
      <p className="how-intro-copy">
        Meet in person or from anywhere. Start with a code, accept the request,
        and keep in touch in KuthaKo.
      </p>
      <div className="how-intro-tags" aria-label="Ways to connect">
        <span>In person · Scan a code</span>
        <span>From anywhere · Share an invite</span>
      </div>
    </section>
  )
}

export default HowItWorksIntro
