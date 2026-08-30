import './HeroOrbit.css'

function HeroOrbit({ variant }) {
  return (
    <div
      className={`hero-orbit hero-orbit-${variant}`}
    />
  )
}

export default HeroOrbit