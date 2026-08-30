import './HeroBackground.css'

function HeroBackground() {
  return (
    <div
      className="hero-background"
      aria-hidden="true"
    >
      <div className="hero-background-grid"></div>

      <div className="hero-background-glow hero-background-glow-one"></div>

      <div className="hero-background-glow hero-background-glow-two"></div>

      <div className="hero-background-orbit hero-background-orbit-one"></div>

      <div className="hero-background-orbit hero-background-orbit-two"></div>
    </div>
  )
}

export default HeroBackground