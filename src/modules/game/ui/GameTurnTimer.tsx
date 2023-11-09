import { useTurn } from '..'

export const GameTurnTimer = () => {
  const { timer } = useTurn()

  return <div className="text-5xl font-bold text-primary">{timer}</div>
}
