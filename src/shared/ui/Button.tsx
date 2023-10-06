import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

type CommonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string
  className?: string
  children: string
}

type ConditionalButtonProps =
  | {
      navigateTo: string
      onClick?: () => void
    }
  | {
      navigateTo?: never
      onClick: () => void
    }

type ButtonProps = CommonButtonProps & ConditionalButtonProps

export const Button = forwardRef(
  (
    {
      icon,
      className,
      navigateTo,
      children,
      onClick,
      ...attributes
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
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
        ref={ref}
        className={clsx(
          className,
          'rounded font-medium bg-gradient-to-r from-primary-400 to-primary-500 px-6 py-3 text-lg text-white hover:to-primary-600 focus:outline-none focus:ring-3 focus:ring-primary-500 disabled:from-primary-200 disabled:to-primary-300 flex justify-center items-center gap-2 transition-colors',
        )}
        onClick={handleClick}
        {...attributes}
      >
        {icon && <i className={clsx(icon, 'w-5 h-5')} />}
        {children}
      </button>
    )
  },
)
