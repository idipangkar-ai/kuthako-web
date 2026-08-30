import './Hero.css'

import HeroBackground from './HeroBackground/HeroBackground'
import HeroEyebrow from './HeroEyebrow/HeroEyebrow'
import HeroTitle from './HeroTitle/HeroTitle'
import HeroDescription from './HeroDescription/HeroDescription'
import HeroActions from './HeroActions/HeroActions'
import HeroProduct from './HeroProduct/HeroProduct'
import HeroConnections from './HeroConnections/HeroConnections'
import HeroScroll from './HeroScroll/HeroScroll'
import DesktopRecommendation from '../../../../shared/components/DesktopRecommendation/DesktopRecommendation'

function Hero() {
  return (
    <section className="hero">
      <HeroBackground />
      <HeroConnections />
      
      <div className="hero-content">
        <HeroEyebrow />
        <HeroTitle />
        <HeroDescription />
        <HeroActions />
      </div>

      <HeroProduct />
      <HeroScroll />
      <DesktopRecommendation />
    </section>
  )
}

export default Hero