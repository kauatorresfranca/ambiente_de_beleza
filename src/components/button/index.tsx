import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  primary?: boolean
  secundary?: boolean
  className?: string 
}

const Button = ({ children, primary, secundary, className }: ButtonProps) => {
  return (
    <S.Button 
      primary={primary} 
      secundary={secundary} 
      className={className} 
    >
      {children}
    </S.Button>
  )
}

export default Button
