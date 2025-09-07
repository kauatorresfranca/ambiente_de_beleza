import * as S from './styles';
import logo from '../../assets/logo.svg';
import { useState, useEffect } from 'react';

const headerNavigationItems = [
  { path: '', navigationName: 'Início' },
  { path: 'services', navigationName: 'Nossos Serviços' },
  { path: 'professionals', navigationName: 'Profissionais' },
  { path: 'testimonials', navigationName: 'Depoimentos' },
  { path: 'scheduling', navigationName: 'Agendamento' },
  { path: 'location', navigationName: 'Localização' },
];

const Header = () => {
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setMenuMobileIsOpen((prev) => !prev);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-112px 0px 0px 0px', // Offset to account for header height
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || ''; // Use empty string for home
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe sections with IDs matching headerNavigationItems
    headerNavigationItems.forEach((item) => {
      const sectionId = item.path || 'home'; // Map empty path to 'home'
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    // Handle "Início" (top of page) separately
    const handleScroll = () => {
      if (window.scrollY < 112) { // Near the top (within header height)
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup observer and scroll listener on component unmount
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <S.HeaderLogo src={logo} alt="Logo Ambiente de Beleza, salão de beleza em Maceió, AL" />

        {/* Navegação desktop */}
        <S.HeaderNavigation>
          {headerNavigationItems.map((item) => (
            <S.HeaderLink
              href={`#${item.path}`}
              key={item.navigationName}
              className={activeSection === (item.path || '') ? 'active' : ''}
            >
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
              className={activeSection === (item.path || '') ? 'active' : ''}
              onClick={() => setMenuMobileIsOpen(false)}
            >
              {item.navigationName}
            </S.HeaderLink>
          ))}
        </S.HeaderNavigationMobile>

        {/* Botão Agendar */}
        <a href="#scheduling" rel="noopener noreferrer">
          <S.HeaderButton primary>
            <i className="ri-phone-line"></i> Agendar Horário
          </S.HeaderButton>
        </a>
      </div>
    </S.Header>
  );
};

export default Header;