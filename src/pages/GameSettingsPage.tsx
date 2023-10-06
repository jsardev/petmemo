import { GameStartButton } from '@/modules/game'
import {
  PlayersSettingsChooser,
  CardsSettingsChooser,
} from '@/modules/game-settings'

export function GameSettingsPage() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-6">
      <h1 className="mb-8 from-primary-300 to-primary-600 bg-gradient-to-r bg-clip-text text-6xl font-medium text-transparent">
        petmemo
      </h1>
      <div className="flex gap-4">
        <PlayersSettingsChooser />
        <CardsSettingsChooser />
      </div>
      <GameStartButton>Play</GameStartButton>
    </main>
  )
}
