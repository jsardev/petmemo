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
        <Loader>
          We're preparing <br />
          some cute pics here 😻
        </Loader>
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
