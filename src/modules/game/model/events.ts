import { useGameState } from '@/modules/game/model/state'
import { distinctUntilChanged, map } from 'rxjs'
import { toStream } from 'zustand-rx'

const gameState$ = toStream(useGameState)

export const gameTimer$ = gameState$.pipe(
  map((state) => state.turn.timer),
  distinctUntilChanged(),
)
