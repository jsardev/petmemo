import { useShallow } from 'zustand/shallow'

import { useGameSettingsState } from './state'
import { GameSettings } from './types'
import { PetImageApiClientFactory } from '../infrastructure'

export const useGameSettings = (): GameSettings =>
  useGameSettingsState(
    useShallow(({ playerCount, cardMatrixSize, petType }) => {
      const petImageApiClientFactory = new PetImageApiClientFactory(petType)

      return {
        playerCount,
        cardMatrixSize,
        apiClient: petImageApiClientFactory.create(),
      }
    }),
  )
