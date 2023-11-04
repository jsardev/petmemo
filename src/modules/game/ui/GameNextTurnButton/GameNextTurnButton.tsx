import clsx from 'clsx'
import { useRef } from 'react'

import { useGameActions, useTurn } from '@/modules/game'
import { Button } from '@/shared/ui/Button'

import { useFocusButtonOnTurnEnd } from './hooks'

type GameNextTurnButtonProps = {
  className?: string
}

export const GameNextTurnButton = ({ className }: GameNextTurnButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { isFinished } = useTurn()
  const { endTurn } = useGameActions()

  const icon = isFinished ? 'i-lucide-play' : 'i-lucide-hourglass'

  useFocusButtonOnTurnEnd(ref)

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
