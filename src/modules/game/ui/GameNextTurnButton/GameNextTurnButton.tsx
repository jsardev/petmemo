import clsx from 'clsx'

import { useGameActions, useTurn } from '@/modules/game'
import { Button } from '@/shared/ui/Button'

import { useFocusElementOnTurnEnd } from './hooks'

type GameNextTurnButtonProps = {
  className?: string
}

export const GameNextTurnButton = ({ className }: GameNextTurnButtonProps) => {
  const { isFinished } = useTurn()
  const { endTurn } = useGameActions()
  const ref = useFocusElementOnTurnEnd<HTMLButtonElement>()

  const icon = isFinished ? 'i-lucide-play' : 'i-lucide-hourglass'

  return (
    <Button
      ref={ref}
      icon={icon}
      className={clsx(className, {
        'animate-head-shake': isFinished,
      })}
      onClick={endTurn}
      disabled={!isFinished}
    >
      {isFinished ? 'Next turn' : 'Select cards'}
    </Button>
  )
}
