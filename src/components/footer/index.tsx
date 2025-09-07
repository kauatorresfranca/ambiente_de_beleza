import * as S from './styles'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <S.FooterSection>
          <img src={logo} alt="Logotipo Ambiente de Beleza" />
          <S.FooterDescription>
            Transformando sua beleza com carinho e profissionalismo.
          </S.FooterDescription>
          <S.FooterSocial>
            <a
              href="https://instagram.com/ambientedebeleza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite nosso Instagram"
            >
              <i className="ri-instagram-line" />
            </a>
            <a
              href="https://facebook.com/ambientedebeleza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite nosso Facebook"
            >
              <i className="ri-facebook-line" />
            </a>
            <a
              href="https://wa.me/+558281218676"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entre em contato pelo WhatsApp"
            >
              <i className="ri-whatsapp-line" />
            </a>
          </S.FooterSocial>
        </S.FooterSection>

        <S.FooterSection>
          <h4>Navegação</h4>
          <ul>
            <li><a href="#" aria-label="Página Inicial">Início</a></li>
            <li><a href="#services" aria-label="Serviços">Serviços</a></li>
            <li><a href="#professionals" aria-label="Profissionais">Profissionais</a></li>
            <li><a href="#testimonials" aria-label="Depoimentos">Depoimentos</a></li>
            <li><a href="#scheduling" aria-label="Contato">Contato</a></li>
          </ul>
        </S.FooterSection>

        <S.FooterSection>
          <h4>Contato</h4>
          <h5>
            <i className="ri-phone-line" />
            <a href="tel:+558281218676" aria-label="Ligar para (82) 98121-8676">
              (82) 98121-8676
            </a>
          </h5>
          <h5>
            <i className="ri-mail-line" />
            <a href="mailto:contato@ambientedebeleza.com" aria-label="Enviar e-mail">
              contato@ambientedebeleza.com
            </a>
          </h5>
        </S.FooterSection>
      </div>
      <S.FooterBottom>
        <p>&copy; {new Date().getFullYear()} Ambiente de Beleza. Todos os direitos reservados.</p>
        <p>Desenvolvido por Kauã Torres.</p>
      </S.FooterBottom>
    </S.Footer>
  )
}

export default Footer