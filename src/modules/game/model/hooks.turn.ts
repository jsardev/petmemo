import { useShallow } from 'zustand/shallow'

import { useGameStore } from './state'
import { GameCard } from './types'
import { isCardRevealed } from '../utils'

export const useTurn = () => useGameStore(useShallow((state) => state.turn))

export const useSelectedCards = () =>
  useGameStore((state) => state.turn.selectedCards)

export const useIsCardRevealed = () => {
  const selectedCards = useSelectedCards()
  return (card: GameCard) => isCardRevealed(selectedCards, card)
}
