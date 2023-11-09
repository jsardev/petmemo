import {
  GameBoard,
  GameOverlay,
  GameNextTurnButton,
  useAreCardsLoading,
  GameManager,
  GameTurnManager,
  GameTurnTimer,
} from '@/modules/game'
import { Loader } from '@/shared/ui/Loader'

export function GamePage() {
  const areCardsLoading = useAreCardsLoading()

  return (
    <main className="relative h-[100dvh] w-auto flex items-center justify-center px-4 pb-16 pt-24 lg:px-12 sm:px-8 lg:pb-12 sm:pb-16 sm:pt-32">
      {areCardsLoading ? (
        <Loader>
          We're preparing <br />
          some cute pics here 😻
        </Loader>
      ) : (
        <>
          <GameManager />
          <GameTurnManager />
          <GameOverlay />

          <div className="grid grid-cols-1 grid-rows-1 max-h-full w-full place-items-center gap-8 lg:justify-start">
            <GameBoard className="z-10" />
            <GameTurnTimer />
            <GameNextTurnButton className="z-10" />
          </div>
        </>
      )}
    </main>
  )
}
