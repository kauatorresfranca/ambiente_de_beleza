import * as S from './styles'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

const headerNavigationItems = [
  { path: '', navigationName: 'Início' },
  { path: 'services', navigationName: 'Nossos Serviços' },
  { path: 'testimonials', navigationName: 'Depoimentos' },
  { path: 'professionals', navigationName: 'Profissionais' },
  { path: 'contact', navigationName: 'Contato' },
]

const Header = () => {

  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)

  return (
    <S.Header>
      <div className="container">
        {menuMobileIsOpen ? (<i className='ri-close-large-fill menu-hamgurguer' onClick={() => setMenuMobileIsOpen(!menuMobileIsOpen)}></i>) : (<i className='ri-menu-2-line menu-hamgurguer' onClick={() => setMenuMobileIsOpen(!menuMobileIsOpen)}></i>)}
        <S.HeaderLogo src={logo} alt="Logo" />
        <S.HeaderNavigation>
          {headerNavigationItems.map((item) => (
            <S.HeaderLink href={`#${item.path}`} key={item.navigationName}>
              {item.navigationName}
            </S.HeaderLink>
          ))}
        </S.HeaderNavigation>
        
        <S.HeaderNavigationMobile className={menuMobileIsOpen ? 'active' : ''}>
          {headerNavigationItems.map((item) => (
            <S.HeaderLink href={`#${item.path}`} key={item.navigationName}>
              {item.navigationName}
            </S.HeaderLink>
          ))}
        </S.HeaderNavigationMobile>
        <S.HeaderButton primary>
          <i className="ri-phone-line"></i> Agendar Horário
        </S.HeaderButton>
      </div>
    </S.Header>
  )
}

export default Header
