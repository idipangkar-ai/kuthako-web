import './HeroProduct.css'

import HeroProductGlow from '../HeroProductGlow/HeroProductGlow'
import HeroPhone from '../HeroPhone/HeroPhone'

function HeroProduct() {
  return (
    <div
      className="hero-product"
      aria-hidden="true"
    >
      <HeroProductGlow />
      <HeroPhone />
    </div>
  )
}

export default HeroProduct