import { useGameSettings } from '@/modules/game-settings'
import { Button } from '@/shared/ui/Button'

import { useGameActions } from '..'

type GameStartButtonProps = {
  className?: string
  children: string
}

export const GameStartButton = ({
  className,
  children,
}: GameStartButtonProps) => {
  const gameSettings = useGameSettings()
  const { prepareGame } = useGameActions()

  const handleClick = () => {
    prepareGame(gameSettings)
  }

  return (
    <Button
      className={className}
      icon="i-lucide-play"
      navigateTo="/play"
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}
