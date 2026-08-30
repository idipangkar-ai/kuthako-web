import Header from '../../../shared/components/Header/Header'
import Footer from '../../../shared/components/Footer/Footer'
import LazySection from '../../../shared/components/LazySection/LazySection'

import Hero from '../components/Hero/Hero'

function HomePage() {
  return (
    <>
      <Header />

      <Hero />

      <LazySection
        loader={() => import('../components/Meet/Meet')}
      />

      <LazySection
        loader={() => import('../components/Trust/Trust')}
      />

      <LazySection
        loader={() => import('../components/Scan/Scan')}
      />

      <LazySection
        loader={() => import('../components/Connected/Connected')}
      />

      <Footer />
    </>
  )
}

export default HomePage