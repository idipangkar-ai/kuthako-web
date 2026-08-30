import './HeroContent.css'

import HeroEyebrow from '../HeroEyebrow/HeroEyebrow'
import HeroTitle from '../HeroTitle/HeroTitle'
import HeroDescription from '../HeroDescription/HeroDescription'
import HeroActions from '../HeroActions/HeroActions'

function HeroContent() {
  return (
    <div className="hero-content">
      <HeroEyebrow />
      <HeroTitle />
      <HeroDescription />
      <HeroActions />
    </div>
  )
}

export default HeroContent