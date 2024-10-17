import { useMemo, useEffect, createContext } from 'react'

import { GameServiceMultiplayer } from '@/modules/game/services/GameServiceMultiplayer'
import { GameServiceSingleplayer } from '@/modules/game/services/GameServiceSingleplayer'
import { useGameService } from '@/modules/game/ui/Game/hooks'

type GameContextValue = {
  gameService: GameServiceSingleplayer | GameServiceMultiplayer
}

const GameContext = createContext<GameContextValue>({} as GameContextValue)

type GameProps = {
  children: React.ReactNode
}

export const Game = ({ children }: GameProps) => {
  const gameService = useGameService()

  const contextValue = useMemo(() => ({ gameService }), [gameService])

  useEffect(() => {
    return gameService.startGame()
  }, [gameService])

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  )
}
