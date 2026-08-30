import './HeroActions.css'

import HeroPrimaryButton from '../HeroPrimaryButton/HeroPrimaryButton'
import HeroSecondaryButton from '../HeroSecondaryButton/HeroSecondaryButton'

function HeroActions() {
  return (
    <div className="hero-actions">
      <HeroPrimaryButton />
      <HeroSecondaryButton />
    </div>
  )
}

export default HeroActions