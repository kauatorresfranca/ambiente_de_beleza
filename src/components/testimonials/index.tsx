import { useState } from 'react'
import * as S from './styles'

import client1 from '../../assets/images/clients/client1.svg'
import client2 from '../../assets/images/clients/client2.svg'
import client3 from '../../assets/images/clients/client3.svg'
import result1 from '../../assets/images/clients/result/result1.jpg'
import result2 from '../../assets/images/clients/result/result2.jpg'


const testimonials = [
  {
    name: `Maiara Torres`,
    avatar: `${client1}`,
    text: 'Meu cabelo ficou impecável! Atendimento atencioso e resultado acima do esperado.',
    rating: 5,
    photoUrl: `${result2}`
  },
  {
    name: `Carlos André`,
    avatar: `${client2}`,
    text: 'Corte e barba alinhados do jeito que eu gosto. Voltarei com certeza!',
    rating: 5
  },
  {
    name: `Julia Ferreira`,
    avatar: `${client3}`,
    text: 'Profissionais cuidadosos, explicaram cada etapa. Amei a coloração nova!',
    rating: 5,
    photoUrl: `${result1}`
  }
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total)

  return (
    <S.TestimonialsSection id='testimonials'>
      <S.TestimonialsTitle>
        O que nossos <span>clientes dizem</span>
      </S.TestimonialsTitle>
      <S.TestimonialsDescription>
        Depoimentos de clientes que transformaram sua beleza e bem-estar conosco.
      </S.TestimonialsDescription>

      <div className="container">
        {/* Grid normal no desktop */}
        <S.DesktopList>
          {testimonials.map((t) => (
            <S.Card key={t.name}>
              <S.CardHeader>
                <img src={t.avatar} alt={`Foto de ${t.name}`} />
                <div>
                  <h4>{t.name}</h4>
                  <S.Rating aria-label={`${t.rating ?? 5} de 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className={i < (t.rating ?? 5) ? 'ri-star-fill' : 'ri-star-line'}
                      />
                    ))}
                  </S.Rating>
                </div>
              </S.CardHeader>
              <S.Text>{t.text}</S.Text>
              {t.photoUrl && (
                <S.ResultThumb>
                  <img src={t.photoUrl} alt={`Resultado do atendimento de ${t.name}`} />
                </S.ResultThumb>
              )}
            </S.Card>
          ))}
        </S.DesktopList>

        {/* Slider apenas no mobile */}
        <S.MobileWrapper>
          <S.ArrowLeft onClick={prevSlide}>
            <i className="ri-arrow-left-s-line" />
          </S.ArrowLeft>

          <S.Slider style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((t) => (
              <S.Slide key={t.name}>
                <S.Card>
                  <S.CardHeader>
                    <img src={t.avatar} alt={`Foto de ${t.name}`} />
                    <div>
                      <h4>{t.name}</h4>
                      <S.Rating aria-label={`${t.rating ?? 5} de 5`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={i}
                            className={i < (t.rating ?? 5) ? 'ri-star-fill' : 'ri-star-line'}
                          />
                        ))}
                      </S.Rating>
                    </div>
                  </S.CardHeader>
                  <S.Text>{t.text}</S.Text>
                  {t.photoUrl && (
                    <S.ResultThumb>
                      <img src={t.photoUrl} alt={`Resultado do atendimento de ${t.name}`} />
                    </S.ResultThumb>
                  )}
                </S.Card>
              </S.Slide>
            ))}
          </S.Slider>

          <S.ArrowRight onClick={nextSlide}>
            <i className="ri-arrow-right-s-line" />
          </S.ArrowRight>

          <S.Indicators>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={current === index ? 'active' : ''}
                onClick={() => setCurrent(index)}
              />
            ))}
          </S.Indicators>
        </S.MobileWrapper>
      </div>
    </S.TestimonialsSection>
  )
}

export default Testimonials