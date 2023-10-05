import { GameCard } from '..'

export const isCardCollected = (collectedCards: GameCard[], card: GameCard) =>
  collectedCards.some(({ id }) => id === card.id)

export const isCardRevealed = (selectedCards: GameCard[], card: GameCard) =>
  selectedCards.some(({ index }) => index === card.index)
