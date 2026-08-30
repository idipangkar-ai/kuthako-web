import { Outlet } from 'react-router-dom'

import SmoothScroll from '../../shared/effects/SmoothScroll/SmoothScroll'

function AppLayout() {
  return (
    <>
      <SmoothScroll />
      <Outlet />
    </>
  )
}

export default AppLayout