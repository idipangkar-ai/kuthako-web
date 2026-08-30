import './Header.css'

import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderNavigation from './HeaderNavigation/HeaderNavigation'
import HeaderActions from './HeaderActions/HeaderActions'
import HeaderMenuButton from './HeaderMenuButton/HeaderMenuButton'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <HeaderLogo />

        <HeaderNavigation />

        <HeaderActions />

        <HeaderMenuButton />
      </div>
    </header>
  )
}

export default Header