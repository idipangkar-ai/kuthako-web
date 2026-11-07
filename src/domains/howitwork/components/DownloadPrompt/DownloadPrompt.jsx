import './DownloadPrompt.css'

function DownloadPrompt() {
  return (
    <section className="how-download" id="download" aria-labelledby="how-download-title">
      <div>
        <p className="how-eyebrow">COMING SOON</p>
        <h2 id="how-download-title">Take KuthaKo with you.</h2>
        <p>The Android app is being prepared. The download link will be available here soon.</p>
      </div>
      <button className="how-download-button" type="button" disabled>
        Download KuthaKo <span>Coming soon</span>
      </button>
    </section>
  )
}

export default DownloadPrompt
