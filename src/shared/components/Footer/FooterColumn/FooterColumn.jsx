import './FooterColumn.css'

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>

      <ul>
        {links.map(([label, href]) => (
          <li key={href}>
            <a href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn
