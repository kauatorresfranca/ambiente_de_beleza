import * as S from './styles'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <S.FooterSection>
          <img src={logo} alt="" />
          <p>Transformando sua beleza com carinho e profissionalismo.</p>
          <S.FooterSocial>
              <a href=""><i className="ri-instagram-line"></i></a>
              <a href=""><i className="ri-facebook-line"></i></a>
              <a href=""><i className="ri-whatsapp-line"></i></a>
          </S.FooterSocial>
        </S.FooterSection>
        <S.FooterSection>
          <h4>Navegação</h4>
        </S.FooterSection>
        <S.FooterSection> 
          <h4>Contato</h4>
          <ul>
            <li>Início</li>
            <li>Serviços</li>
            <li>Profissionais</li>
            <li>Depoimentos</li>
            <li>Contato</li>
          </ul>
        </S.FooterSection>
      </div>
    </S.Footer>
  )
}

export default Footer