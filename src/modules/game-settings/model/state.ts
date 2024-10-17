import { create } from 'zustand'

import { GameSettingsState, PetType } from './types'

export const useGameSettingsState = create<GameSettingsState>((set) => ({
  playerCount: 1,
  cardMatrixSize: 4,
  petType: PetType.CATS,

  setPlayerCount: (playerCount: number) => set({ playerCount }),
  setCardMatrixSize: (cardMatrixSize: number) => set({ cardMatrixSize }),
  setPetType: (petType: PetType) => set({ petType }),
}))
