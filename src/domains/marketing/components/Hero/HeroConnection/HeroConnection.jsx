import './HeroConnection.css'

function HeroConnection({
  className = '',
  image,
  name,
  message,
}) {
  return (
    <div className={`hero-connection ${className}`}>
      <div className="hero-connection-avatar">
        <img src={image} alt="" />
      </div>

      <div className="hero-connection-message">
        <span>{name}</span>
        <strong>{message}</strong>
      </div>
    </div>
  )
}

export default HeroConnection