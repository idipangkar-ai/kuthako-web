import DocsPage from '../../domains/docs/pages/DocsPage'
import GettingStartedPage from '../../domains/docs/pages/GettingStartedPage'
import ConceptsPage from '../../domains/docs/pages/ConceptsPage'

const docsRoutes = [
  {
    path: '/docs',
    Component: DocsPage,
  },
  {
    path: '/docs/getting-started',
    Component: GettingStartedPage,
  },
  {
    path: '/docs/concepts',
    Component: ConceptsPage,
  },
]

export default docsRoutes