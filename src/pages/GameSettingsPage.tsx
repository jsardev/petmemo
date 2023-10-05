import { GameStartButton } from '@/modules/game'
import {
  PlayersSettingsChooser,
  CardsSettingsChooser,
} from '@/modules/game-settings'

export function GameSettingsPage() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-6">
      <div className="flex gap-4">
        <PlayersSettingsChooser />
        <CardsSettingsChooser />
      </div>
      <GameStartButton>Play</GameStartButton>
    </main>
  )
}
