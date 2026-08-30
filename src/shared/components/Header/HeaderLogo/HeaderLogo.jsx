import './HeaderLogo.css'

function HeaderLogo() {
  return (
    <a
      href="/"
      className="header-logo"
      aria-label="KuthaKo home"
    >
      <span className="header-logo-mark">
        K
      </span>

      <span className="header-logo-name">
        KuthaKo
      </span>
    </a>
  )
}

export default HeaderLogo