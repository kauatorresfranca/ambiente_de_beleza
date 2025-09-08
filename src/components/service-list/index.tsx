import ServiceItem from '../service-item';
import * as S from './styles';
import {
  RiSparkling2Line,
  RiScissors2Line,
  RiPaletteLine,
  RiEyeLine,
  RiHeart3Line,
  RiGiftLine,
} from 'react-icons/ri';

const Services = [
  {
    id: 1,
    icon: RiSparkling2Line, // Ícone para unhas
    title: 'Unhas',
    description: 'Beleza até a ponta dos dedos! Do cuidado básico ao luxo das técnicas modernas.',
    price: 'A partir de R$ 49,90',
    subServices: [
      'Manicure',
      'Pedicure',
      'Alongamento de unha',
      'Banho de gel',
      'Esmaltação em gel',
      'Unha postiça',
      'Spa dos pés',
    ],
    serviceValue: 'nails',
  },
  {
    id: 2,
    icon: RiScissors2Line, // Ícone para cabelo
    title: 'Cabelo',
    description: 'Transforme seus fios com cortes modernos, escovas incríveis e tratamentos revitalizantes.',
    price: 'A partir de R$ 79,90',
    subServices: [
      'Corte',
      'Escova',
      'Penteado',
      'Hidratação',
      'Nutrição',
      'Reconstrução',
      'Cauterização',
      'Banho de verniz',
      'Banho de petróleo',
      'Botox orgânico',
      'Selagem orgânica',
      'Progressiva orgânica',
      'Terapia capilar',
    ],
    serviceValue: 'hair',
  },
  {
    id: 3,
    icon: RiPaletteLine, // Ícone para química capilar
    title: 'Química Capilar',
    description: 'Cores vibrantes, mechas iluminadas e técnicas modernas para renovar o visual.',
    price: 'A partir de R$ 120,00',
    subServices: ['Luzes', 'Mechas', 'Moreno iluminado', 'Coloração', 'Permanente afro'],
    serviceValue: 'hair_chemistry',
  },
  {
    id: 4,
    icon: RiEyeLine, // Ícone para sobrancelhas e micropigmentação
    title: 'Sobrancelhas & Micropigmentação',
    description: 'Destaque seu olhar com design perfeito e técnicas avançadas de micropigmentação.',
    price: 'A partir de R$ 59,90',
    subServices: [
      'Design de sobrancelhas',
      'Micropigmentação de sobrancelhas',
      'Micropigmentação de olhos',
      'Micropigmentação de lábios',
    ],
    serviceValue: 'eyebrows_micropigmentation',
  },
  {
    id: 5,
    icon: RiHeart3Line, // Ícone para estética e bem-estar
    title: 'Estética & Bem-estar',
    description: 'Tratamentos de pele e cuidados estéticos para renovar sua beleza natural.',
    price: 'Sob consulta',
    subServices: [
      'Limpeza de pele',
      'Depilação',
      'Jato de plasma: linhas de expressão',
      'Jato de plasma: manchas e acne',
      'Jato de plasma: flacidez e estrias',
    ],
    serviceValue: 'aesthetics_wellness',
  },
  {
    id: 6,
    icon: RiGiftLine, // Ícone para pacotes especiais
    title: 'Pacotes Especiais',
    description: 'Combine serviços exclusivos e viva uma experiência de beleza completa.',
    price: 'A partir de R$ 199,90',
    subServices: ['Dia da Noiva', 'Dia da Princesa', 'Pacote Relax', 'Pacote Premium'],
    serviceValue: 'special_packages',
  },
];

const ServiceList = () => {
  return (
    <S.Services id="services">
      <S.ServicesTitle>
        Nossos <span>Serviços</span>
      </S.ServicesTitle>
      <div className="container">
        <S.ServicesDescription>
          Do cuidado diário a momentos especiais, temos serviços personalizados para valorizar ainda mais sua beleza.
        </S.ServicesDescription>
        <S.ServicesList>
          {Services.map((service) => (
            <ServiceItem
              key={service.id}
              icon={service.icon} // Passa o componente de ícone
              title={service.title}
              description={service.description}
              price={service.price}
              subServices={service.subServices}
              serviceValue={service.serviceValue}
            />
          ))}
        </S.ServicesList>
      </div>
    </S.Services>
  );
};

export default ServiceList;