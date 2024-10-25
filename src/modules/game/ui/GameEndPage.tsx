import { GameScoreboard, GameStartButton } from '@/modules/game'
import { Button } from '@/shared/ui/Button'

export function GameEndPage() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center p-8">
      <div className="w-full flex flex-col items-center gap-16">
        <div className="text-center text-2xl font-medium text-slate-400 sm:text-6xl">
          Yay! 😺
          <br />
          All cats found!
        </div>
        <GameScoreboard className="w-full" />
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
