import './FooterNavigation.css'

import FooterColumn from '../FooterColumn/FooterColumn'

function FooterNavigation() {
  return (
    <nav
      className="footer-navigation"
      aria-label="Footer navigation"
    >
      <FooterColumn
        title="Product"
        links={[
          ['Product', '/product'],
          ['How it works', '/how-it-works'],
          ['Showcase', '/showcase'],
        ]}
      />

      <FooterColumn
        title="Explore"
        links={[
          ['Why KuthaKo', '/why'],
          ['Architecture', '/architecture'],
          ['Docs', '/docs'],
        ]}
      />

      <FooterColumn
        title="Company"
        links={[
          ['About', '/about'],
          ['Contact', '/contact'],
          ['Privacy', '/privacy'],
        ]}
      />
    </nav>
  )
}

export default FooterNavigation