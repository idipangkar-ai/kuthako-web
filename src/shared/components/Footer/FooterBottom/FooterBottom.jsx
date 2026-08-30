import './FooterBottom.css'

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <span>
        © {new Date().getFullYear()} KuthaKo
      </span>

      <div className="footer-legal">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </div>
    </div>
  )
}

export default FooterBottom