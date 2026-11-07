import './HeaderActions.css'

function HeaderActions() {
  return (
    <div className="header-actions">
      <a
        href="/how-it-works#download"
        className="header-start"
      >
        Download app
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}

export default HeaderActions
