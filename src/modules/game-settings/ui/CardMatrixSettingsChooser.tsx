import { useShallow } from 'zustand/shallow'

import { Chooser } from '@/shared/ui/Chooser'

import { useGameSettingsState } from '../model/state'

const OPTIONS = [
  { option: '2x2', value: 2 },
  { option: '4x4', value: 4 },
  { option: '6x6', value: 6 },
]

export const CardsSettingsChooser = () => {
  const [cardMatrixSize, setCardMatrixSize] = useGameSettingsState(
    useShallow((state) => [state.cardMatrixSize, state.setCardMatrixSize]),
  )

  return (
    <Chooser
      icon="i-lucide-layout-grid"
      options={OPTIONS}
      value={cardMatrixSize}
      onChange={setCardMatrixSize}
    />
  )
}
