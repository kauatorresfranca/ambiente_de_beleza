import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  primary?: boolean
  secundary?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> // Add this line
}

const Button = ({ children, primary, secundary, className, onClick }: ButtonProps) => {
  return (
    <S.Button
      primary={primary}
      secundary={secundary}
      className={className}
      onClick={onClick} // Pass the prop down to the S.Button styled component
    >
      {children}
    </S.Button>
  )
}

export default Button