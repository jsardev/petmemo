import { useShallow } from 'zustand/shallow'

import { useGameSettingsState } from './state'

export const useGameSettings = () =>
  useGameSettingsState(
    useShallow(({ playerCount, cardMatrixSize }) => ({
      playerCount,
      cardMatrixSize,
    })),
  )
