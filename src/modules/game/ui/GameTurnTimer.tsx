import { useTurn } from '../model'

export const GameTurnTimer = () => {
  const { timer } = useTurn()

  const content = timer === 0 ? `Time's up!` : timer

  return <div className="text-5xl font-bold text-primary">{content}</div>
}
