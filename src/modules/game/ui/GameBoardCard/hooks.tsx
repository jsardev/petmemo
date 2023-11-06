import { useCallback, useEffect, useRef } from 'react'

import { GameBoardCardProps } from './GameBoardCard'
import { useGameActions } from '../..'

type UseGameBoardCardProps = Pick<GameBoardCardProps, 'card' | 'onClick'>

const useRegisterGameCardOnMount = () => {
  const ref = useRef(null)
  const { registerCardRef } = useGameActions()

  useEffect(() => {
    if (ref.current) {
      return registerCardRef(ref.current)
    }
  }, [registerCardRef])

  return ref
}

export const useGameBoardCard = ({ card, onClick }: UseGameBoardCardProps) => {
  const ref = useRegisterGameCardOnMount()

  const handleClick = useCallback(() => {
    onClick(card)
  }, [onClick, card])

  return { ref, handleClick }
}
