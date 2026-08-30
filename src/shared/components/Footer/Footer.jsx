import './Footer.css'

import FooterBrand from './FooterBrand/FooterBrand'
import FooterNavigation from './FooterNavigation/FooterNavigation'
import FooterBottom from './FooterBottom/FooterBottom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-main">
          <FooterBrand />
          <FooterNavigation />
        </div>

        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer