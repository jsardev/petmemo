import { create } from 'zustand'

type GameSettingsState = {
  players: number
  cards: number
  setPlayers: (players: number) => void
  setCards: (cards: number) => void
}

export const useGameSettingsState = create<GameSettingsState>((set) => ({
  players: 1,
  cards: 4,
  setPlayers: (players: number) => set({ players }),
  setCards: (cards: number) => set({ cards }),
}))
