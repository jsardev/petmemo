import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGameActions, listenForAllCardsCollected } from '..'

export const GameManager = () => {
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

  return null
}
