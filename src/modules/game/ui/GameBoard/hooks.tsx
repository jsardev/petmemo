import { useEffect } from 'react'

import {
  useIsCardRevealed,
  useIsCardCollected,
  useTurn,
  useCards,
  useSelectedCards,
  useAllCardsRegistered,
  useCardRefs,
} from '@/modules/game'
import { useGameService } from '@/modules/game/ui/Game/hooks'
import { focusNextElement } from '@/shared/utils/dom'

const useFocusFirstCardOnMount = () => {
  const cardRefs = useCardRefs()
  const allCardsRegistered = useAllCardsRegistered()

  useEffect(() => {
    if (allCardsRegistered) {
      cardRefs[0].focus()
    }
  }, [allCardsRegistered, cardRefs])
}

const useFocusNextCardOnCardSelect = (isDisabled: boolean) => {
  const cardRefs = useCardRefs()
  const selectedCards = useSelectedCards()
  const allCardsRegistered = useAllCardsRegistered()

  useEffect(() => {
    if (allCardsRegistered && !isDisabled) {
      if (selectedCards.length === 0) {
        return focusNextElement(cardRefs, 1, 0)
      }
      if (selectedCards.length === 1) {
        return focusNextElement(cardRefs, 1, selectedCards[0].index)
      }
    }
  }, [allCardsRegistered, selectedCards, cardRefs, isDisabled])
}

export const useGameBoard = () => {
  const cards = useCards()
  const { isFinished } = useTurn()
  const isCardCollected = useIsCardCollected()
  const isCardRevealed = useIsCardRevealed()
  const gameService = useGameService()

  useFocusFirstCardOnMount()
  useFocusNextCardOnCardSelect(isFinished)

  return {
    cards,
    isDisabled: isFinished,
    isCardCollected,
    isCardRevealed,
    selectCard: gameService.selectCard,
  }
}
