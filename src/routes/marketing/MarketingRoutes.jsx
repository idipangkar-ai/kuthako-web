import HomePage from '../../domains/marketing/pages/HomePage'
import ProductPage from '../../domains/marketing/pages/ProductPage'
import ShowcasePage from '../../domains/marketing/pages/ShowcasePage'
import HowItWorksPage from '../../domains/howitwork/pages/HowItWorksPage'
import ArchitecturePage from '../../domains/marketing/pages/ArchitecturePage'
import WhyPage from '../../domains/marketing/pages/WhyPage'

const marketingRoutes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/product',
    Component: ProductPage,
  },
  {
    path: '/showcase',
    Component: ShowcasePage,
  },
  {
    path: '/how-it-works',
    Component: HowItWorksPage,
  },
  {
    path: '/architecture',
    Component: ArchitecturePage,
  },
  {
    path: '/why',
    Component: WhyPage,
  },
]

export default marketingRoutes
