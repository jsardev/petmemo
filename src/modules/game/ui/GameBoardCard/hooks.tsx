import { useCallback, useEffect, useRef } from 'react'

import { useGameService } from '@/modules/game/ui/Game/hooks'

import type { GameBoardCardProps } from './GameBoardCard'

type UseGameBoardCardProps = Pick<GameBoardCardProps, 'card' | 'onClick'>

const useRegisterGameCardOnMount = () => {
  const ref = useRef(null)
  const gameService = useGameService()

  useEffect(() => {
    if (ref.current) {
      return gameService.registerCardRef(ref.current)
    }
  }, [gameService])

  return ref
}

export const useGameBoardCard = ({ card, onClick }: UseGameBoardCardProps) => {
  const ref = useRegisterGameCardOnMount()

  const handleClick = useCallback(() => {
    onClick(card)
  }, [onClick, card])

  return { ref, handleClick }
}
