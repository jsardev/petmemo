import clsx from 'clsx'

import { BoardCard } from '@/shared/ui/BoardCard'

import { GameCard } from '..'

type GameBoardCardProps = {
  card: GameCard
  frontImageUrl: string
  isCollected: boolean
  isRevealed: boolean
  isDisabled: boolean
  onClick: (card: GameCard) => void
}

export const GameBoardCard = ({
  card,
  frontImageUrl,
  isCollected,
  isRevealed,
  isDisabled,
  onClick,
}: GameBoardCardProps) => {
  const imageUrl = isRevealed && !isCollected ? card.image.url : frontImageUrl
  const isInteractive = !isDisabled && !isRevealed && !isCollected

  const handleClick = () => {
    onClick(card)
  }

  return (
    <BoardCard
      imageUrl={imageUrl}
      width={card.image.width}
      height={card.image.height}
      className={clsx({
        'opacity-20': isCollected,
      })}
      onClick={handleClick}
      isDisabled={!isInteractive}
    />
  )
}
