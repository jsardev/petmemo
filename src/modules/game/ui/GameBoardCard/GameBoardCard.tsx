import clsx from 'clsx'

import { BoardCard } from '@/shared/ui/BoardCard'

import { useGameBoardCard } from './hooks'
import { GameCard } from '../..'

export type GameBoardCardProps = {
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

  const { ref, handleClick } = useGameBoardCard({ card, onClick })

  return (
    <BoardCard
      ref={ref}
      imageUrl={imageUrl}
      width={card.image.width}
      height={card.image.height}
      className={clsx('animate-duration-500', {
        'animate-flip-in-y': isRevealed,
        'opacity-20': isCollected,
      })}
      onClick={handleClick}
      isDisabled={!isInteractive}
    />
  )
}
