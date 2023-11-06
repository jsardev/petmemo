import { useShallow } from 'zustand/shallow'

import { Chooser } from '@/shared/ui/Chooser'

import { useGameSettingsState } from '../model/state'
import { PetType } from '../model/types'

const OPTIONS = [
  { option: 'Cats', value: PetType.CATS },
  { option: 'Dogs', value: PetType.DOGS },
]

const PET_TYPE_TO_ICON_MAP = {
  [PetType.CATS]: 'i-lucide-cat',
  [PetType.DOGS]: 'i-lucide-dog',
}

export const PetTypeSettingsChooser = () => {
  const [petType, setPetType] = useGameSettingsState(
    useShallow((state) => [state.petType, state.setPetType]),
  )

  return (
    <Chooser
      icon={PET_TYPE_TO_ICON_MAP[petType]}
      options={OPTIONS}
      value={petType}
      onChange={setPetType}
    />
  )
}
