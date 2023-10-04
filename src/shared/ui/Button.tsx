import { useNavigate } from 'react-router-dom'

type CommonButtonProps = {
  children: string
}

type ConditionalButtonProps =
  | {
      navigateTo: string
      onClick?: () => void
    }
  | {
      navigateTo: never
      onClick: () => void
    }

type ButtonProps = CommonButtonProps & ConditionalButtonProps

export const Button = ({ navigateTo, children, onClick }: ButtonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo)
    }
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className="rounded bg-primary px-4 py-3 text-lg text-white hover:bg-primary-500 focus:outline-none focus:ring-3 focus:ring-primary-500"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
