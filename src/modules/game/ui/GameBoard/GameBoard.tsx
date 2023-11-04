import { Board } from '@/shared/ui/Board/Board'

import { useGameBoard } from './hooks'
import { GameBoardCard } from '../GameBoardCard/GameBoardCard'

// TODO: add settings to choose the front image from a set of chosen images
const FRONT_IMAGE_URL =
  'https://www.toptal.com/designers/subtlepatterns/uploads/pixel-heart.png'

type GameBoardProps = {
  className?: string
}

export const GameBoard = ({ className }: GameBoardProps) => {
  const { cards, isTurnFinished, isCardCollected, isCardRevealed, selectCard } =
    useGameBoard()

  return (
    <Board className={className}>
      {cards.map((card, index) => (
        <GameBoardCard
          key={`game-card-${card.id}-${index}`}
          card={card}
          frontImageUrl={FRONT_IMAGE_URL}
          isCollected={isCardCollected(card)}
          isRevealed={isCardRevealed(card)}
          isDisabled={isTurnFinished}
          onClick={selectCard}
        />
      ))}
    </Board>
  )
}
