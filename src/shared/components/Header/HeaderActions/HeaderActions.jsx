import './HeaderActions.css'

function HeaderActions() {
  return (
    <div className="header-actions">
      <a
        href="/login"
        className="header-login"
      >
        Sign in
      </a>

      <a
        href="/get-started"
        className="header-start"
      >
        Get started
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}

export default HeaderActions