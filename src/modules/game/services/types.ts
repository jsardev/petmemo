import { TurnService } from '@/modules/game/services/TurnService'

export interface GameServiceContext<T extends TurnService> {
  navigate: (path: string) => void
  turnService: T
}
