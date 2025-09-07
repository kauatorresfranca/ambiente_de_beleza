import * as S from './styles'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

const headerNavigationItems = [
  { path: '', navigationName: 'Início' },
  { path: 'services', navigationName: 'Nossos Serviços' },
  { path: 'professionals', navigationName: 'Profissionais' },
  { path: 'testimonials', navigationName: 'Depoimentos' },
  { path: 'scheduling', navigationName: 'Agendamento' }, // corrigido
]

const Header = () => {
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)

  const toggleMenu = () => setMenuMobileIsOpen((prev) => !prev)

  return (
    <S.Header>
      <div className="container">
        {/* Botão hambúrguer */}
        {menuMobileIsOpen ? (
          <i
            className="ri-close-large-fill menu-hamgurguer"
            onClick={toggleMenu}
            role="button"
            aria-label="Fechar menu"
          />
        ) : (
          <i
            className="ri-menu-2-line menu-hamgurguer"
            onClick={toggleMenu}
            role="button"
            aria-label="Abrir menu"
          />
        )}

        {/* Logo */}
        <S.HeaderLogo src={logo} alt="Logo Ambiente de Beleza" />

        {/* Navegação desktop */}
        <S.HeaderNavigation>
          {headerNavigationItems.map((item) => (
            <S.HeaderLink href={`#${item.path}`} key={item.navigationName}>
              {item.navigationName}
            </S.HeaderLink>
          ))}
        </S.HeaderNavigation>

        {/* Navegação mobile */}
        <S.HeaderNavigationMobile className={menuMobileIsOpen ? 'active' : ''}>
          {headerNavigationItems.map((item) => (
            <S.HeaderLink
              href={`#${item.path}`}
              key={item.navigationName}
              onClick={() => setMenuMobileIsOpen(false)} // fecha ao clicar
            >
              {item.navigationName}
            </S.HeaderLink>
          ))}
        </S.HeaderNavigationMobile>

        {/* Botão Agendar */}
        <a href="#scheduling">
          <S.HeaderButton primary>
            <i className="ri-phone-line"></i> Agendar Horário
          </S.HeaderButton>
        </a>
      </div>
    </S.Header>
  )
}

export default Header
