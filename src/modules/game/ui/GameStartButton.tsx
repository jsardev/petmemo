import { useGameSettings } from '@/modules/game-settings'
import { Button } from '@/shared/ui/Button'

import { useGameActions } from '..'

export const GameStartButton = () => {
  const { playerCount, cardMatrixSize } = useGameSettings()
  const { startGame } = useGameActions()

  const handleClick = () => {
    startGame(playerCount, cardMatrixSize)
  }

  return (
    <Button icon="i-lucide-play" navigateTo="/play" onClick={handleClick}>
      Play
    </Button>
  )
}
