import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

type CommonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string
  className?: string
  variant?: 'primary' | 'secondary'
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
      variant = 'primary',
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
          'rounded font-medium px-6 py-3 text-lg  focus:outline-none focus:ring-3 focus:ring-primary-500 flex justify-center items-center gap-2',
          {
            'text-white hover:to-primary-600 bg-gradient-to-r from-primary-400 to-primary-500 disabled:from-primary-200 disabled:to-primary-300':
              variant === 'primary',
            'border-2 border-primary text-primary hover:border-primary-600 hover:text-primary-600':
              variant === 'secondary',
          },
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
