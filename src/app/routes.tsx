import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { gameRoutes } from '@/modules/game'
import { gameSettingsRoutes } from '@/modules/game-settings'

const router = createBrowserRouter([...gameSettingsRoutes, ...gameRoutes])

export const Routing = () => {
  return <RouterProvider router={router} />
}
