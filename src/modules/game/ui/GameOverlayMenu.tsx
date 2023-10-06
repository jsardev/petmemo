import { useNavigate } from 'react-router-dom'

export const GameOverlayMenu = () => {
  const navigate = useNavigate()

  const onExitClick = () => {
    navigate('/')
  }

  return (
    <div className="z-20 flex self-start justify-self-center gap-4">
      <button
        className="group flex items-center gap-2 rounded-b from-slate-100 to-slate-200 bg-gradient-to-r p-2 text-slate-400 hover:from-slate-100 hover:to-slate-300 sm:p-4 hover:text-slate-500"
        onClick={onExitClick}
      >
        <i className="i-lucide-door-closed group-hover:i-lucide-door-open block text-2xl" />
        <span className="hidden sm:block">Exit</span>
      </button>
    </div>
  )
}
