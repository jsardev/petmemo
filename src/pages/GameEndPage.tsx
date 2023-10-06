import { GameScoreboard, GameStartButton } from '@/modules/game'
import { Button } from '@/shared/ui/Button'

export function GameEndPage() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <div className="text-6xl font-medium text-slate-400">
          Yay! You finished the game! 😺
        </div>
        <GameScoreboard />
        <div className="flex flex-col gap-4">
          <GameStartButton>Play again</GameStartButton>
          <Button icon="i-lucide-settings" navigateTo="/" variant="secondary">
            Change settings
          </Button>
        </div>
      </div>
    </main>
  )
}
