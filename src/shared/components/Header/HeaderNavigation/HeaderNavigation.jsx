import './HeaderNavigation.css'

import HeaderNavItem from '../HeaderNavItem/HeaderNavItem'

function HeaderNavigation() {
  return (
    <nav
      className="header-navigation"
      aria-label="Main navigation"
    >
      <HeaderNavItem href="/" label="Home" />
      <HeaderNavItem
        href="/product"
        label="Product"
      />
      <HeaderNavItem
        href="/how-it-works"
        label="How it works"
      />
      <HeaderNavItem
        href="/showcase"
        label="Showcase"
      />
      <HeaderNavItem href="/docs" label="Docs" />
    </nav>
  )
}

export default HeaderNavigation