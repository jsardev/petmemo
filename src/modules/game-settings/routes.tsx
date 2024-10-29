import { RouteObject } from 'react-router-dom'

import { GameSettingsPage } from '@/modules/game-settings/ui'

export const gameSettingsRoutes: RouteObject[] = [
  {
    path: '/',
    element: <GameSettingsPage />,
  },
]
