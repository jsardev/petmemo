import { useShallow } from 'zustand/shallow'

import { Chooser } from '@/shared/ui/Chooser'

import { useGameSettingsState } from '../model/state'

const OPTIONS = [
  { option: '1', value: 1 },
  { option: '2', value: 2 },
  { option: '3', value: 3 },
  { option: '4', value: 4 },
]

export const PlayersSettingsChooser = () => {
  const [players, setPlayers] = useGameSettingsState(
    useShallow((state) => [state.playerCount, state.setPlayerCount]),
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
