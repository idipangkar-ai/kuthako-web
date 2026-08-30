import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './AppLayout/AppLayout'

import marketingRoutes from './marketing/MarketingRoutes'
import docsRoutes from './docs/DocsRoutes'

import NotFound from '../shared/error/NotFound'

const router = createBrowserRouter([
  {
    Component: AppLayout,

    children: [
      ...marketingRoutes,
      ...docsRoutes,

      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
])

export default router