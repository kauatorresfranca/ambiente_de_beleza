import * as S from './styles'
import Button from '../button/index'
import logo from '../../assets/logo.jpg'
import { useState } from 'react'

const headerNavigationItems = [
  { path: '/', navigationName: 'Início' },
  { path: '/services', navigationName: 'Nossos Serviços' },
  { path: '/testimonials', navigationName: 'Depoimentos' },
  { path: '/professionals', navigationName: 'Profissionais' },
  { path: '/contact', navigationName: 'Contato' },
]

const Header = () => {

  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)

  return (
    <S.Header>
      <div className="container">
        <i className='ri-menu-2-line' onClick={() => setMenuMobileIsOpen(!menuMobileIsOpen)}></i>
        <S.HeaderLogo src={logo} alt="Logo" />
        <S.HeaderNavigation>
          {headerNavigationItems.map((item) => (
            <S.HeaderLink href={item.path} key={item.navigationName}>
              {item.navigationName}
            </S.HeaderLink>
          ))}
        </S.HeaderNavigation>
        
        <S.HeaderNavigationMobile className={menuMobileIsOpen ? 'active' : ''}>
          {headerNavigationItems.map((item) => (
            <S.HeaderLink href={item.path} key={item.navigationName}>
              {item.navigationName}
            </S.HeaderLink>
          ))}
        </S.HeaderNavigationMobile>
        <Button primary>
          <i className="ri-phone-line"></i> Agendar Horário
        </Button>
      </div>
    </S.Header>
  )
}

export default Header
