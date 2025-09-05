import Button from '../button'
import * as S from './styles'

const Hero = () => {
    return (
        <S.Hero>
            <div className="container">
                <S.HeroContent>
                    <S.HeroTitle>Sua beleza em um <span>ambiente</span> de cuidado e <span>sofisticação</span></S.HeroTitle>
                    <S.HeroSubtitle>Descubra o melhor de você em nosso salão de beleza. Profissionais especializados e ambiente acolhedor para sua transformação.</S.HeroSubtitle>
                    <Button primary><i className="ri-calendar-line"></i>Agende seu horário</Button>
                </S.HeroContent>
            </div>
        </S.Hero>
    )
}

export default Hero
