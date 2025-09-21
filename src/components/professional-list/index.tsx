import ProfessionalItem from '../professional-item';
import professional1 from '/assets/images/profissionals/profissional1.jpg';
import professional2 from '/assets/images/profissionals/profissional2.jpg';
import professional3 from '/assets/images/profissionals/profissional3.jpg';
import professional4 from '/assets/images/profissionals/profissional4.jpg';
import * as S from './styles';
import { useState, useRef } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const professionals = [
  {
    image: `${professional1}`,
    name: 'Rosivangela Maria',
    description:
      'especialista em sobrancelhas, estética e cuidados completos de beleza.',
    experienceTime: '15',
    isCertified: true,
    specialties: [
      'Micropigmentação',
      'Manicure e Pedicure',
      'Cabelo',
    ],
  },
  {
    image: `${professional2}`,
    name: 'Ary Silva',
    description:
      'Especialista em cortes femininos, penteados, química capilar.',
    experienceTime: '14',
    isCertified: true,
    specialties: ['Realinhamento Capilar'],
  },
  {
    image: `${professional3}`,
    name: 'Alexa Christie ',
    description:
      'Especializada em massagens relaxantes e terapêuticas.',
    experienceTime: '2',
    isCertified: true,
    specialties: ['Massagem Relaxante', 'Massagem Terapêutica'],
  },
  {
    image: `${professional4}`,
    name: 'Márcio Sá',
    description:
      'Responsável por tratamentos faciais e de pele.',
    experienceTime: '10',
    isCertified: true,
    specialties: ['Harmonização Facial', 'Harmonização Corporal'],
  },
];

const ProfessionalList = () => {
  const [current, setCurrent] = useState(0);
  const total = professionals.length;
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
    const threshold = 50; // distância mínima em px para swipe

    if (diff > threshold) {
      nextSlide(); // swipe para esquerda → próximo
    } else if (diff < -threshold) {
      prevSlide(); // swipe para direita → anterior
    }
  };

  return (
    <S.Professionals id="professionals">
      <S.ProfessionalsTitle>
        Nossa <span>Equipe</span>
      </S.ProfessionalsTitle>
      <S.ProfessionalsDescription>
        Profissionais qualificados e experientes, dedicados a realçar sua beleza com carinho
      </S.ProfessionalsDescription>
      <div className="container">
        {/* Grid normal no desktop */}
        <S.ProfessionalList>
          {professionals.map((professional) => (
            <ProfessionalItem
              key={professional.name}
              image={professional.image}
              name={professional.name}
              description={professional.description}
              experienceTime={professional.experienceTime}
              isCertified={professional.isCertified}
              specialties={professional.specialties}
            />
          ))}
        </S.ProfessionalList>

        {/* Slider apenas no mobile */}
        <S.MobileWrapper
          role="region"
          aria-roledescription="carrossel"
          aria-label="Profissionais"
        >
          <S.ArrowLeft
            onClick={prevSlide}
            aria-label="Slide anterior"
          >
            <RiArrowLeftSLine aria-hidden="true" />
          </S.ArrowLeft>

          <S.Slider
            style={{ transform: `translateX(-${current * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {professionals.map((professional) => (
              <S.Slide key={professional.name}>
                <ProfessionalItem
                  image={professional.image}
                  name={professional.name}
                  description={professional.description}
                  experienceTime={professional.experienceTime}
                  isCertified={professional.isCertified}
                  specialties={professional.specialties}
                />
              </S.Slide>
            ))}
          </S.Slider>

          <S.ArrowRight
            onClick={nextSlide}
            aria-label="Próximo slide"
          >
            <RiArrowRightSLine aria-hidden="true" />
          </S.ArrowRight>

          <S.Indicators>
            {professionals.map((_, index) => (
              <button
                key={index}
                className={current === index ? 'active' : ''}
                onClick={() => setCurrent(index)}
                aria-label={`Ir para o slide ${index + 1}`}
                aria-current={current === index ? 'true' : undefined}
              />
            ))}
          </S.Indicators>
        </S.MobileWrapper>
      </div>
    </S.Professionals>
  );
};

export default ProfessionalList;
