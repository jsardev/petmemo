import { useShallow } from 'zustand/shallow'

import { useGameSettingsState } from '@/modules/game-settings/model/state'
import { Chooser } from '@/shared/ui/Chooser'

const OPTIONS = [1, 2, 3, 4]

export const PlayersSettingsChooser = () => {
  const [players, setPlayers] = useGameSettingsState(
    useShallow((state) => [state.players, state.setPlayers]),
  )

  return (
    <Chooser
      icon="i-lucide-users-2"
      options={OPTIONS}
      value={players}
      onChange={setPlayers}
    />
  )
}
