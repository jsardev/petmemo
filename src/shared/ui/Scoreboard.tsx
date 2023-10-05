import { ImageStack } from './ImageStack'

type ScoreboardProps = {
  items: Array<{
    name: string
    score: number
    items: Array<{ imageUrl: string }>
  }>
  itemScoreText: string
}

export const Scoreboard = ({ items, itemScoreText }: ScoreboardProps) => {
  const sortedItems = [...items].sort((a, b) => b.score - a.score)

  return (
    <div className="flex flex-col gap-8">
      {sortedItems.map((item, index) => (
        <div className="relative flex items-center gap-6 text-2xl text-slate-700">
          <div className="absolute left-[-4rem] text-5xl font-bold text-slate-200">
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
