import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGameStore } from '@/modules/game/model/state'
import { GameServiceFactory } from '@/modules/game/services'
import { GameServiceMultiplayer } from '@/modules/game/services/GameServiceMultiplayer'
import { GameServiceSingleplayer } from '@/modules/game/services/GameServiceSingleplayer'
import { useGameSettings } from '@/modules/game-settings'

export const useGameService = () => {
  const navigate = useNavigate()
  const gameSettings = useGameSettings()

  const gameServiceContext = useMemo(() => ({ navigate }), [navigate])

  return useMemo<GameServiceSingleplayer | GameServiceMultiplayer>(
    () =>
      GameServiceFactory.create(useGameStore, gameSettings, gameServiceContext),
    [gameSettings, gameServiceContext],
  )
}
