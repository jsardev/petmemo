import logoSrc from '@/assets/logo.svg'

type LogoProps = {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return <img src={logoSrc} className={className} />
}
