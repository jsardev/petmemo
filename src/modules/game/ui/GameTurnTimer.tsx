type GameTurnTimerProps = {
  className?: string
}

export const GameTurnTimer = ({ className }: GameTurnTimerProps) => {
  const { turn, turns } = useGame()

  return <div className={className}>asd</div>
}
