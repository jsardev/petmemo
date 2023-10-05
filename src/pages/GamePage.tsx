import {
  GameBoard,
  GameManager,
  GameOverlay,
  useAreCardsLoading,
} from '@/modules/game'
import { Loader } from '@/shared/ui/Loader'

export function GamePage() {
  const areCardsLoading = useAreCardsLoading()

  return (
    <main className="relative h-screen w-screen flex items-center justify-center gap-4 p-48">
      {areCardsLoading ? (
        <Loader>Loading cards...</Loader>
      ) : (
        <>
          <GameManager />
          <GameOverlay />
          <GameBoard className="z-10" />
        </>
      )}
    </main>
  )
}
