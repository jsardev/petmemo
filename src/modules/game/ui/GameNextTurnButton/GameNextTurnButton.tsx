import clsx from 'clsx'

import { useTurn, GameTurnPhase } from '@/modules/game'
import { useGameService } from '@/modules/game/ui/Game/hooks'
import { Button } from '@/shared/ui/Button'

import { useFocusElementOnTurnEnd } from './hooks'

type GameNextTurnButtonProps = {
  className?: string
}

export const GameNextTurnButton = ({ className }: GameNextTurnButtonProps) => {
  const { isFinished, phase } = useTurn()
  const gameService = useGameService()
  const ref = useFocusElementOnTurnEnd<HTMLButtonElement>()

  const isTurnCooldown = phase === GameTurnPhase.COOLDOWN
  const icon = isFinished ? 'i-lucide-play' : 'i-lucide-hourglass'
  const text = isFinished || isTurnCooldown ? 'Next turn' : 'Select cards'

  return (
    <Button
      ref={ref}
      icon={icon}
      className={clsx(className, {
        'animate-head-shake': isFinished,
      })}
      onClick={gameService.nextTurn}
      disabled={!isFinished && !isTurnCooldown}
    >
      {text}
    </Button>
  )
}
