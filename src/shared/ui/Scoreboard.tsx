import clsx from 'clsx'

import { ImageStack } from './ImageStack'

type ScoreboardProps = {
  className?: string
  items: Array<{
    name: string
    score: number
    items: Array<{ imageUrl: string }>
  }>
  itemScoreText: string
}

export const Scoreboard = ({
  className,
  items,
  itemScoreText,
}: ScoreboardProps) => {
  const sortedItems = [...items].sort((a, b) => b.score - a.score)

  return (
    <div
      className={clsx(
        className,
        'grid gap-4 sm:gap-8 justify-center items-center',
      )}
    >
      {sortedItems.map((item, index) => (
        <div className="text-md relative flex items-center gap-6 text-slate-700 sm:text-2xl">
          <div className="absolute left-[-2rem] text-2xl font-bold text-slate-200 sm:left-[-4rem] sm:text-5xl">
            {index + 1}.
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">{item.name}</span>
            <span className="text-slate-400">collected</span>
            <span className="font-bold">{item.score}</span>
            <ImageStack
              images={item.items.map((item) => item.imageUrl)}
              isReverse
            />
            <span className="text-slate-400">{itemScoreText}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
