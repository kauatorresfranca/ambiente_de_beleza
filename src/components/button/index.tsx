import * as S from './styles'

type ButtonProps = {
    children: React.ReactNode
    primary?: boolean
    secundary?: boolean
}

const Button = ({ children, primary, secundary }: ButtonProps) => {
    return (
        <S.Button primary={primary} secundary={secundary}>
            {children}
        </S.Button>
    )
}

export default Button