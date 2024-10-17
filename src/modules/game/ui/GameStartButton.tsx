import { useGameService } from '@/modules/game/ui/Game/hooks'
import { Button } from '@/shared/ui/Button'

type GameStartButtonProps = {
  className?: string
  children: string
}

export const GameStartButton = ({
  className,
  children,
}: GameStartButtonProps) => {
  const gameService = useGameService()

  const handleClick = () => {
    gameService.prepareGame()
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
