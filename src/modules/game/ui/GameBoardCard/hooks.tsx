import { RefObject, useCallback, useEffect, useRef } from 'react'

import { GameBoardCardProps } from './GameBoardCard'
import { useGameActions } from '../..'

type UseGameBoardCardProps = Pick<GameBoardCardProps, 'card' | 'onClick'>

const useRegisterGameCardOnMount = (ref: RefObject<HTMLElement>) => {
  const { registerCardRef } = useGameActions()

  useEffect(() => {
    if (ref.current) {
      return registerCardRef(ref.current)
    }
  }, [ref, registerCardRef])
}

export const useGameBoardCard = ({ card, onClick }: UseGameBoardCardProps) => {
  const ref = useRef<HTMLButtonElement>(null)

  useRegisterGameCardOnMount(ref)

  const handleClick = useCallback(() => {
    onClick(card)
  }, [onClick, card])

  return { ref, handleClick }
}
