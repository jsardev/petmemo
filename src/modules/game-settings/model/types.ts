import { ImageApiClient } from '@/shared/infrastructure'

export type GameSettingsState = {
  playerCount: number
  cardMatrixSize: number
  petType: PetType

  setPlayerCount: (players: number) => void
  setCardMatrixSize: (cards: number) => void
  setPetType: (petType: PetType) => void
}

export type GameSettings = Pick<
  GameSettingsState,
  'playerCount' | 'cardMatrixSize'
> & {
  apiClient: ImageApiClient
}

export enum PetType {
  CATS = 'CATS',
  DOGS = 'DOGS',
}
