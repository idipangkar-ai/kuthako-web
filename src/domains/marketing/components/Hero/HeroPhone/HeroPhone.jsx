import './HeroPhone.css'

import HeroPhoneTop from '../HeroPhoneTop/HeroPhoneTop'
import HeroAvatar from '../HeroAvatar/HeroAvatar'
import HeroPhoneName from '../HeroPhoneName/HeroPhoneName'
import HeroQR from '../HeroQR/HeroQR'
import HeroPhoneBottom from '../HeroPhoneBottom/HeroPhoneBottom'

function HeroPhone() {
  return (
    <div className="hero-phone">
      <HeroPhoneTop />

      <div className="hero-phone-content">
        <HeroAvatar />
        <HeroPhoneName />
        <HeroQR />

        <p>Scan to connect</p>
      </div>

      <HeroPhoneBottom />
    </div>
  )
}

export default HeroPhone