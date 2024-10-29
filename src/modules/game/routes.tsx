import { RouteObject } from 'react-router-dom'

import { GameLayout, GamePage, GameEndPage } from './ui'

export const gameRoutes: RouteObject[] = [
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
]
