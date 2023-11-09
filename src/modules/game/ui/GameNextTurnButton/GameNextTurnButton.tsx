import clsx from 'clsx'

import { useTurnActions, useTurn, GameTurnPhase } from '@/modules/game'
import { Button } from '@/shared/ui/Button'

import { useFocusElementOnTurnEnd } from './hooks'

type GameNextTurnButtonProps = {
  className?: string
}

export const GameNextTurnButton = ({ className }: GameNextTurnButtonProps) => {
  const { isFinished, phase } = useTurn()
  const { nextTurn } = useTurnActions()
  const ref = useFocusElementOnTurnEnd<HTMLButtonElement>()

  const isTurnCooldown = phase === GameTurnPhase.COOLDOWN
  const icon = isFinished ? 'i-lucide-play' : 'i-lucide-hourglass'
  const text = isFinished
    ? 'Next turn'
    : isTurnCooldown
    ? 'Cooldown'
    : 'Select cards'

  return (
    <Button
      ref={ref}
      icon={icon}
      className={clsx(className, {
        'animate-head-shake': isFinished,
      })}
      onClick={nextTurn}
      disabled={!isFinished}
    >
      {text}
    </Button>
  )
}
