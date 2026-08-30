import './FooterBrand.css'

import FooterSocials from '../FooterSocials/FooterSocials'

function FooterBrand() {
  return (
    <div className="footer-brand">
      <a
        href="/"
        className="footer-brand-logo"
        aria-label="KuthaKo home"
      >
        <span className="footer-brand-mark">
          K
        </span>

        <span className="footer-brand-name">
          KuthaKo
        </span>
      </a>

      <p className="footer-brand-description">
        Meet. Trust. Scan. Connected.
      </p>

      <FooterSocials />
    </div>
  )
}

export default FooterBrand