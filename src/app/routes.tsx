import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GameEndPage } from '@/pages/GameEndPage'
import { GamePage } from '@/pages/GamePage'
import { GameSettingsPage } from '@/pages/GameSettingsPage'

const router = createBrowserRouter([
  { path: '/', element: <GameSettingsPage /> },
  { path: '/play', element: <GamePage /> },
  { path: '/scoreboard', element: <GameEndPage /> },
])

export const Routing = () => {
  return <RouterProvider router={router} />
}
