import { useEffect } from 'react'

import {
  GameTurnPhase,
  listenToTurnTimer,
  useTurn,
  useTurnActions,
} from '../../model'

export const useGameTurnManager = () => {
  const { phase } = useTurn()
  const {
    startTurnTimer,
    stopTurnTimer,
    setTurnPhase,
    nextTurn,
    endTurn,
    resetTurnTimer,
  } = useTurnActions()

  useEffect(() => {
    startTurnTimer()

    const unsubscribeFromTurnTimer = listenToTurnTimer((timer) => {
      if (timer === 0) {
        stopTurnTimer()

        switch (phase) {
          case GameTurnPhase.ACTION: {
            endTurn()
            break
          }
          case GameTurnPhase.COOLDOWN: {
            nextTurn()
            break
          }
        }
      }
    })

    return () => {
      stopTurnTimer()
      unsubscribeFromTurnTimer()
    }
  }, [
    endTurn,
    nextTurn,
    phase,
    resetTurnTimer,
    setTurnPhase,
    startTurnTimer,
    stopTurnTimer,
  ])
}
