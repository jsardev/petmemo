import { PlayersSettingsChooser } from '@/modules/game-settings/ui/PlayersSettingsChooser'
import { Button } from '@/shared/ui/Button'
import { CardsSettingsChooser } from '@/modules/game-settings/ui/CardsSettingsChooser'

export function MainMenuPage() {
  return (
    <main className="flex w-screen h-screen justify-center items-center flex-col gap-6">
      <div className="flex gap-4">
        <PlayersSettingsChooser />
        <CardsSettingsChooser />
      </div>
      <Button navigateTo="/play">Play</Button>
    </main>
  )
}
