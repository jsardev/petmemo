import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGameSettings } from '@/modules/game-settings'

import { listenToAllCardsCollected, useGameActions } from '../..'

export const useGameManager = () => {
  const navigate = useNavigate()
  const gameSettings = useGameSettings()
  const { startGame, endGame } = useGameActions()

  useEffect(() => {
    const unsubscribeFromGameEvents = startGame()

    // TODO: refactor to use an observable that emits when game ends
    const unsubscribeFromAllCardsCollected = listenToAllCardsCollected(
      (areAllCardsCollected) => {
        if (areAllCardsCollected) {
          endGame()
          navigate('/scoreboard')
        }
      },
    )

    return () => {
      unsubscribeFromGameEvents()
      unsubscribeFromAllCardsCollected()
    }
  }, [navigate, endGame, startGame, gameSettings])
}
