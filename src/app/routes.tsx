import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GameEndPage, GameLayout, GamePage } from '@/modules/game'
import { GameSettingsPage } from '@/modules/game-settings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <GameSettingsPage />,
  },
  {
    element: <GameLayout />,
    children: [
      {
        path: '/play',
        element: <GamePage />,
      },
      {
        path: '/scoreboard',
        element: <GameEndPage />,
      },
    ],
  },
])

export const Routing = () => {
  return <RouterProvider router={router} />
}
