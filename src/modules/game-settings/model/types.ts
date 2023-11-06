import { ImageApiClient } from '@/shared/infrastructure'

import { GameSettingsState } from './state'

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
