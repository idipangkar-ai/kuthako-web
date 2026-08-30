import './HeaderNavItem.css'

function HeaderNavItem({ href, label }) {
  return (
    <a
      href={href}
      className="header-nav-item"
    >
      {label}
    </a>
  )
}

export default HeaderNavItem