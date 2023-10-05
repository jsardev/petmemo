import { create } from 'zustand'

type GameSettingsState = {
  playerCount: number
  cardMatrixSize: number
  setPlayerCount: (players: number) => void
  setCardMatrixSize: (cards: number) => void
}

export const useGameSettingsState = create<GameSettingsState>((set) => ({
  playerCount: 1,
  cardMatrixSize: 4,
  setPlayerCount: (playerCount: number) => set({ playerCount }),
  setCardMatrixSize: (cardMatrixSize: number) => set({ cardMatrixSize }),
}))
