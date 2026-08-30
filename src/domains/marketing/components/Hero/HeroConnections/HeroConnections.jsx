import './HeroConnections.css'

import HeroConnection from '../HeroConnection/HeroConnection'

function HeroConnections() {
  return (
    <div className="hero-connections">

      <HeroConnection
        className="hero-connection-top-left"
        image="https://i.pravatar.cc/100?img=12"
        name="Someone nearby"
        message="Let's connect"
      />

      <HeroConnection
        className="hero-connection-top-right"
        image="https://i.pravatar.cc/100?img=32"
        name="New connection"
        message="Nice to meet you"
      />

      <HeroConnection
        className="hero-connection-bottom-left"
        image="https://i.pravatar.cc/100?img=47"
        name="Connected"
        message="Identity verified"
      />

      <HeroConnection
        className="hero-connection-bottom-right"
        image="https://i.pravatar.cc/100?img=56"
        name="Nearby"
        message="Scan to connect"
      />

    </div>
  )
}

export default HeroConnections