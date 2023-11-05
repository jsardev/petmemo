import { useEffect } from 'react'

import {
  useIsCardRevealed,
  useIsCardCollected,
  useTurn,
  useCards,
  useGameActions,
  useSelectedCards,
  useAllCardsRegistered,
  useCardRefs,
} from '@/modules/game'
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

const useFocusNextCardOnSelectCard = () => {
  const cardRefs = useCardRefs()
  const selectedCards = useSelectedCards()
  const allCardsRegistered = useAllCardsRegistered()

  useEffect(() => {
    if (allCardsRegistered) {
      if (selectedCards.length === 0) {
        return focusNextElement(cardRefs, 1, 0)
      }
      if (selectedCards.length === 1) {
        return focusNextElement(cardRefs, 1, selectedCards[0].index)
      }
    }
  }, [allCardsRegistered, selectedCards, cardRefs])
}

export const useGameBoard = () => {
  const cards = useCards()
  const { isFinished: isTurnFinished } = useTurn()
  const isCardCollected = useIsCardCollected()
  const isCardRevealed = useIsCardRevealed()
  const { selectCard } = useGameActions()

  useFocusFirstCardOnMount()
  useFocusNextCardOnSelectCard()

  return {
    cards,
    isTurnFinished,
    isCardCollected,
    isCardRevealed,
    selectCard,
  }
}
