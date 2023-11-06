import { create } from 'zustand'

import { PetType } from './types'

export type GameSettingsState = {
  playerCount: number
  cardMatrixSize: number
  petType: PetType

  setPlayerCount: (players: number) => void
  setCardMatrixSize: (cards: number) => void
  setPetType: (petType: PetType) => void
}

export const useGameSettingsState = create<GameSettingsState>((set) => ({
  playerCount: 1,
  cardMatrixSize: 4,
  petType: PetType.CATS,

  setPlayerCount: (playerCount: number) => set({ playerCount }),
  setCardMatrixSize: (cardMatrixSize: number) => set({ cardMatrixSize }),
  setPetType: (petType: PetType) => set({ petType }),
}))
