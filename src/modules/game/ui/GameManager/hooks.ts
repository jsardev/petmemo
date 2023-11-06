import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { listenForAllCardsCollected, useGameActions } from '../..'

export const useGameManager = () => {
  const navigate = useNavigate()
  const { endGame } = useGameActions()

  useEffect(() => {
    return listenForAllCardsCollected((areAllCardsCollected) => {
      if (areAllCardsCollected) {
        endGame()
        navigate('/scoreboard')
      }
    })
  }, [navigate, endGame])
}
