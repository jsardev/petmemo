import { useShallow } from 'zustand/shallow'

import { useGameSettingsState } from '@/modules/game-settings/model/state'
import { Chooser } from '@/shared/ui/Chooser'

const OPTIONS = [4, 8, 16, 32, 64]

export const CardsSettingsChooser = () => {
  const [cards, setCards] = useGameSettingsState(
    useShallow((state) => [state.cards, state.setCards]),
  )

  return (
    <Chooser
      icon="i-lucide-layout-grid"
      options={OPTIONS}
      value={cards}
      onChange={setCards}
    />
  )
}
