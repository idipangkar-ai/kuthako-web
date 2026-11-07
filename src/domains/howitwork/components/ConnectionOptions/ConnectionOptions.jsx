import './ConnectionOptions.css'

import QrCodeIllustration from '../QrCodeIllustration/QrCodeIllustration'

function ConnectionOptions() {
  return (
    <section className="how-options" aria-labelledby="how-options-title">
      <div className="how-options-heading">
        <p className="how-eyebrow">STEP 1</p>
        <h2 id="how-options-title">Choose how to meet.</h2>
      </div>

      <div className="how-options-grid">
        <article className="how-option-card how-option-card-scan">
          <div className="how-option-copy">
            <span className="how-step-number" aria-hidden="true">01</span>
            <p className="how-option-label">IN PERSON</p>
            <h3>Scan their code.</h3>
            <p className="how-option-description">
              Open Chats and tap <strong>Scan a code</strong>, or open the menu and tap
              <strong> Scan Code</strong>. Point your camera at their KuthaKo QR.
            </p>
          </div>
          <div className="how-scan-visual" aria-hidden="true">
            <div className="how-scan-frame">
              <span className="how-scan-corner how-scan-corner-tl" />
              <span className="how-scan-corner how-scan-corner-tr" />
              <QrCodeIllustration />
              <span className="how-scan-corner how-scan-corner-bl" />
              <span className="how-scan-corner how-scan-corner-br" />
              <span className="how-scan-line" />
            </div>
            <span className="how-visual-caption">Scan a code</span>
          </div>
        </article>

        <article className="how-option-card how-option-card-share">
          <div className="how-option-copy">
            <span className="how-step-number" aria-hidden="true">02</span>
            <p className="how-option-label">FROM ANYWHERE</p>
            <h3>Share an invite.</h3>
            <p className="how-option-description">
              On Chats, tap <strong>Share a code</strong>, or open the menu and tap
              <strong> My Code</strong>. Tap <strong>Share Code</strong> to send an invite link.
            </p>
          </div>
          <div className="how-share-visual" aria-hidden="true">
            <div className="how-code-card">
              <div className="how-code-card-top">
                <span className="how-code-avatar">K</span>
                <span><strong>Your KuthaKo code</strong><small>Ready to share</small></span>
              </div>
              <QrCodeIllustration />
              <div className="how-share-link"><span>Invite link</span><span className="how-share-arrow">↗</span></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ConnectionOptions
