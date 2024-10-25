import { Navigate, Outlet } from 'react-router-dom'

import { useGameState } from '@/modules/game/model/state'

export const GameLayout = () => {
  const isGameReady = useGameState((state) => state.isReady)

  if (!isGameReady) {
    return <Navigate to="/" />
  }

  return <Outlet />
}
