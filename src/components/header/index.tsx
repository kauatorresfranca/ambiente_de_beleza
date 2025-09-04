import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <div className="container">
        <S.HeaderLogo src="/logo.svg" alt="Logo" />
        <S.HeaderNavigation>
          <S.HeaderLink href="/">Inicio</S.HeaderLink>
          <S.HeaderLink href="/services">Nossos Serviços</S.HeaderLink>
          <S.HeaderLink href="/professionals">Profissionais</S.HeaderLink>
          <S.HeaderLink href="/testimonials">Depoimentos</S.HeaderLink>
          <S.HeaderLink href="/contact">Contato</S.HeaderLink>
        </S.HeaderNavigation>
        <S.HeaderButton><i className="ri-phone-line"></i>Agendar Horário</S.HeaderButton>
      </div>
    </S.Header>
  )
}

export default Header
