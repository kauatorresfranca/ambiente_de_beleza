import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  $primary?: boolean
  $secondary?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, $primary, $secondary, className, onClick }: ButtonProps) => {
  return (
    <S.Button
      $primary={$primary}
      $secondary={$secondary}
      className={className}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}

export default Button
