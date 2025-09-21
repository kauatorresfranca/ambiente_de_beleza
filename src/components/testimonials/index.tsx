import { useState, useRef } from 'react';
import * as S from './styles';
import client1 from '/assets/images/clients/client1.svg';
import client2 from '/assets/images/clients/client2.svg';
import client3 from '/assets/images/clients/client3.svg';
import result3 from '/assets/images/clients/result3.jpg';
import {
  RiStarFill,
  RiStarLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLargeFill
} from 'react-icons/ri';

const testimonials = [
  {
    name: 'Maiara Torres',
    avatar: client1,
    text: 'Meu cabelo ficou impecável! Atendimento atencioso e resultado acima do esperado.',
    rating: 5,
    photoUrl: result3,
  },
  {
    name: 'Luciana Fernandes',
    avatar: client2,
    text: 'O trabalho de vocês é incrível! A atenção aos detalhes, o carinho e o cuidado dedicados a cada cliente são verdadeiramente excepcionais. Vocês fazem a diferença em minha vida com seu profissionalismo e dedicação. Obrigada por serem tão valiosos! ❤',
    rating: 5,
    photoUrl: result3,
  },
  {
    name: 'Julia Ferreira',
    avatar: client3,
    text: 'Profissionais cuidadosos, explicaram cada etapa. Amei a coloração nova!',
    rating: 5,
    photoUrl: result3,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const total = testimonials.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }
  };

  return (
    <S.TestimonialsSection id="testimonials">
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
                      <i key={i}>{i < (t.rating ?? 5) ? <RiStarFill /> : <RiStarLine />}</i>
                    ))}
                  </S.Rating>
                </div>
              </S.CardHeader>
              <S.Text>{t.text}</S.Text>
              {t.photoUrl && (
                <S.ResultThumb>
                  <img
                    src={t.photoUrl}
                    alt={`Resultado do atendimento de ${t.name}`}
                    onClick={() => setFullscreenImage(t.photoUrl!)}
                  />
                </S.ResultThumb>
              )}
            </S.Card>
          ))}
        </S.DesktopList>

        {/* Slider apenas no mobile */}
        <S.MobileWrapper>
          <S.ArrowLeft onClick={prevSlide}>
            <RiArrowLeftSLine />
          </S.ArrowLeft>

          <S.Slider
            style={{ transform: `translateX(-${current * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((t) => (
              <S.Slide key={t.name}>
                <S.Card>
                  <S.CardHeader>
                    <img src={t.avatar} alt={`Foto de ${t.name}`} />
                    <div>
                      <h4>{t.name}</h4>
                      <S.Rating aria-label={`${t.rating ?? 5} de 5`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i key={i}>{i < (t.rating ?? 5) ? <RiStarFill /> : <RiStarLine />}</i>
                        ))}
                      </S.Rating>
                    </div>
                  </S.CardHeader>
                  <S.Text>{t.text}</S.Text>
                  {t.photoUrl && (
                    <S.ResultThumb>
                      <img
                        src={t.photoUrl}
                        alt={`Resultado do atendimento de ${t.name}`}
                        onClick={() => setFullscreenImage(t.photoUrl!)}
                      />
                    </S.ResultThumb>
                  )}
                </S.Card>
              </S.Slide>
            ))}
          </S.Slider>

          <S.ArrowRight onClick={nextSlide}>
            <RiArrowRightSLine />
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

      {/* Fullscreen modal */}
      {fullscreenImage && (
        <S.FullscreenOverlay onClick={() => setFullscreenImage(null)}>
          <button
            className="close-btn"
            onClick={() => setFullscreenImage(null)}
            aria-label="Fechar imagem"
          >
            <RiCloseLargeFill />
          </button>
          <img src={fullscreenImage} alt="Imagem em tela cheia" />
        </S.FullscreenOverlay>
      )}
    </S.TestimonialsSection>
  );
};

export default Testimonials;
