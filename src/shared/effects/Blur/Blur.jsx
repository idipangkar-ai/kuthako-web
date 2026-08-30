import './Blur.css'

function Blur({ className = '' }) {
  return (
    <div
      className={`blur ${className}`}
      aria-hidden="true"
    />
  )
}

export default Blur